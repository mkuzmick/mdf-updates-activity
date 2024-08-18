import { ReactNode } from 'react';

interface ComponentProps {
    children: ReactNode;
}
const Component = ({children}: ComponentProps) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default function Page({ params }) {
    return (
        <main>
            <h1>MDF</h1>
            <Component>
                Component content
                {params.name}
            </Component>
        </main>
    )
}