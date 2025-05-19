import { Home } from '@/pages/home'
import { NextPage } from 'next'
import { Layout as AppLayout } from '@/app'
import styles from './page.module.css'

const Page: NextPage = () => (
    <AppLayout as="div" className={styles.background}>
        <Home />
    </AppLayout>
)

export default Page
