import Sidebar from '@/components/navigation/sidebar/Sidebar'
import type { ReactNode } from 'react'
import Link from "next/link";
import Image from "next/image";

type StudentLayoutProps = {
  children: ReactNode
}

export default function StudentLayout({ children }: StudentLayoutProps) {
  return (
    <div className="layout">
        <div className="card logo-card logo">
            <Link href=""><Image src="/images/logo.png" alt="Shiko Logotype" width={143} height={35} loading="eager" /></Link>
        </div>
        <header className="card">header</header>

        <Sidebar />

        <main>
            {children}
        </main>
    </div>
  )
}