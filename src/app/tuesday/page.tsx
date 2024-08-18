import { ReactNode } from 'react';

interface UpdateProps {
    children: ReactNode;
}
const Update = ({children}: UpdateProps) => {
    return (
        <div>
            test
            {children}
        </div>
    );
}

export default function Page() {
    return (
        <main>
            <Update>
                Update content
            </Update>
        </main>
    )
}