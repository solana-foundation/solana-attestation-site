import { NotFound } from '@/pages/not-found'
import { Layout as AppLayout } from '@/app'
import { NextPage } from 'next'

const Page: NextPage = () => (
    <AppLayout>
        <NotFound />
    </AppLayout>
)

export default Page
