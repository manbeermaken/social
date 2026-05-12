import { useEffect, useRef, useState } from "react";

const spacing = 50; // distance between grid intersections
const mouseRadius = 150; // how far the mouse pushing effect reaches
const repulseForce = 5; // how strongly the points are pushed away
const spring = 0.1; // how fast points snap back (higher = tighter)
const friction = 0.8; // how much points wiggle (lower = less wiggle)

class Point {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x; // original grid X
        this.baseY = y; // original grid Y
        this.vx = 0;
        this.vy = 0;
    }

    update(mouseX: number, mouseY: number) {
        let dx = mouseX - this.x;
        let dy = mouseY - this.y;
        let distance = Math.hypot(dx, dy);

        // repel from mouse
        if (distance < mouseRadius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            // force gets stronger closer to the center of the mouse
            let force = (mouseRadius - distance) / mouseRadius;

            this.vx -= forceDirectionX * force * repulseForce;
            this.vy -= forceDirectionY * force * repulseForce;
        }

        // spring back to original position
        this.vx += (this.baseX - this.x) * spring;
        this.vy += (this.baseY - this.y) * spring;

        // apply friction and update position
        this.vx *= friction;
        this.vy *= friction;
        this.x += this.vx;
        this.y += this.vy;
    }
}

const CanvasGrid = () => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const mouseRef = useRef({ x: -1000, y: -1000 }); // Default off-screen
    const pointsRef = useRef<Point[][]>([]);
    const animationFrameId = useRef<number>(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        });

        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D;
        if (!canvas || !ctx || dimensions.width === 0) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const handleMouseLeave = () => {
            // throw mouse off screen when it leaves the canvas so points settle
            mouseRef.current = { x: -1000, y: -1000 };
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        const cols = Math.floor(dimensions.width / spacing) + 4;
        const rows = Math.floor(dimensions.height / spacing) + 4;
        const newPoints: Point[][] = []

        for (let i = 0; i < rows; i++) {
            let row = [];
            for (let j = 0; j < cols; j++) {
                let x = j * spacing - spacing / 2;
                let y = i * spacing - spacing / 2;
                row.push(new Point(x, y));
            }
            newPoints.push(row);
        }

        pointsRef.current = newPoints


        function animate() {
            // clear previous frame
            ctx.clearRect(0, 0, dimensions.width, dimensions.height);

            // updating all points first
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    pointsRef.current[i][j].update(mouseRef.current.x, mouseRef.current.y);
                }
            }

            // draw the cage 
            ctx.strokeStyle = "hsl(0,0%,19%)";
            ctx.lineWidth = 1;
            ctx.beginPath();

            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    let p = pointsRef.current[i][j];

                    // connect to the point on the right
                    if (j < cols - 1) {
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(pointsRef.current[i][j + 1].x, pointsRef.current[i][j + 1].y);
                    }
                    // connect to the point below
                    if (i < rows - 1) {
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(pointsRef.current[i + 1][j].x, pointsRef.current[i + 1][j].y);
                    }
                }
            }
            ctx.stroke();

            // draw little dots at the intersections
            // ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
            // for (let i = 0; i < rows; i++) {
            //     for (let j = 0; j < cols; j++) {
            //         let p = pointsRef.current[i][j];
            //         ctx.beginPath();
            //         ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            //         ctx.fill();
            //     }
            // }
            animationFrameId.current = requestAnimationFrame(animate);
        }
        animate()

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, [dimensions])


    return (
        <div ref={containerRef} className="w-full h-full absolute inset-0">
            <canvas
                ref={canvasRef}
                width={dimensions.width}
                height={dimensions.height}
                className="block"
            />
        </div>
    );
};

export default CanvasGrid;