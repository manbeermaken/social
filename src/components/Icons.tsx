import SpringIcon from "@devicon/react/spring/original"
import JavaIcon from "@devicon/react/java/original"
import RedisIcon from "@devicon/react/redis/original"
import PostgresqlIcon from "@devicon/react/postgresql/original"
import MongodbIcon from "@devicon/react/mongodb/original"
import AmazonwebservicesWordmarkIcon from "@devicon/react/amazonwebservices/original-wordmark"
import NextjsIcon from "@devicon/react/nextjs/original"
import PythonIcon from "@devicon/react/python/original"
// import LuaIcon from "@devicon/react/lua/original"

import ReactIcon from "@devicon/react/react/original"
import TypescriptIcon from "@devicon/react/typescript/original"
import JavascriptIcon from "@devicon/react/javascript/original"
import TailwindcssIcon from "@devicon/react/tailwindcss/original"
import VitejsIcon from "@devicon/react/vitejs/original"
import VitestIcon from "@devicon/react/vitest/original"
import CSSIcon from "@devicon/react/css3/original"
import HTMLIcon from "@devicon/react/html5/original"


interface Props extends React.SVGProps<SVGElement> {
    size?: string | number;
    color?: string;
}

type Icon = {
    id: string;
    name: string;
    Component: React.FC<Props>;
}

export const backendIcons: Icon[] = [
    { id: 'spring', name: 'Spring', Component: SpringIcon },
    { id: 'java', name: 'Java', Component: JavaIcon },
    { id: 'redis', name: 'Redis', Component: RedisIcon },
    { id: 'postgresql', name: 'PostgreSQL', Component: PostgresqlIcon },
    { id: 'mongodb', name: 'MongoDB', Component: MongodbIcon },
    { id: 'aws', name: 'AWS', Component: AmazonwebservicesWordmarkIcon },
    { id: 'nextjs', name: 'NextJS', Component: NextjsIcon },
    { id: 'python', name: 'Python', Component: PythonIcon },
    // { id: 'lua', name: 'Lua', Component: LuaIcon }
]

export const frontendIcons: Icon[] = [
    { id: 'react', name: 'React', Component: ReactIcon },
    { id: 'typescript', name: 'TypeScript', Component: TypescriptIcon },
    { id: 'javascript', name: 'JavaScript', Component: JavascriptIcon },
    { id: 'tailwind', name: 'Tailwind', Component: TailwindcssIcon },
    { id: 'vitejs', name: 'Vitejs', Component: VitejsIcon },
    { id: 'vitest', name: 'Vitest', Component: VitestIcon },
    { id: 'css', name: 'CSS', Component: CSSIcon },
    { id: 'html', name: 'HTML', Component: HTMLIcon },
]

