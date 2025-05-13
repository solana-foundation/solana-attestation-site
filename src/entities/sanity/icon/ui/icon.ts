import { Icon } from '@/shared/ui/icon'

export const resolveIcon = (icon: 'copy' | 'documentation' | 'github' | null | undefined) => {
    switch (icon) {
        case 'copy':
            return Icon.Copy
        case 'documentation':
            return Icon.Documentation
        case 'github':
            return Icon.Github
    }
}
