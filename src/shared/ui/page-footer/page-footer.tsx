import { ComponentProps, FC } from 'react'
import { NavigationGroup } from './navigation-group'
import { Container } from '@/shared/ui/container'
import clsx from 'clsx'

type PageFooterProps = {
    navigation?: ComponentProps<typeof NavigationGroup>[]
}

export const PageFooter: FC<PageFooterProps> = ({ navigation }) => (
    <div className="bg-[url(/footer-bg.png)] bg-size-[2440px_auto] bg-[center_top_-55px] bg-no-repeat">
        <Container
            as="footer"
            layout="wide"
            className={clsx(
                'pt-30 sm:pt-40 pb-48 sm:pb-175',
                'grid',
                'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6',
                'gap-x-4 gap-y-8 xl:gap-x-20'
            )}
        >
            {navigation?.map((item, index) => <NavigationGroup key={index} {...item} />)}
        </Container>
    </div>
)
