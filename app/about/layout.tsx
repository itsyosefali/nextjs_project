import { Metadata } from 'next'
import styles from './style.module.css'
export const metadata: Metadata = {
    title: 'About Page',
    description: 'Yousef Ali Fix It',
  }
export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <nav>About Navbar</nav>

        <main className={styles.main}>{children}</main>
        </>
    )
}