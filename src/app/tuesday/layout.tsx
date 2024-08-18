import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  