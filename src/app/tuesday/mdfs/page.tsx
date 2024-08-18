import { ReactNode } from 'react';

interface MDFListProps {
    children: ReactNode;
}
const MDFList = ({children}: MDFListProps) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default function Page() {
    return (
        <main>
            <MDFList>
                MDFList content
            </MDFList>
        </main>
    )
}