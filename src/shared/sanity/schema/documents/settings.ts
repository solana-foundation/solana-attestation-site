import { defineField, defineType } from 'sanity'

export const settings = defineType({
    name: 'settings',
    type: 'document',
    groups: [
        {
            name: 'top-navigation',
            title: 'Top Navigation',
        },
        {
            name: 'bottom-navigation',
            title: 'Bottom Navigation',
        },
        {
            name: 'use-cases',
            title: 'Use Cases',
        },
        {
            name: 'guides',
            title: 'Guides',
        },
    ],
    fields: [
        defineField({
            name: 'topNavigation',
            type: 'top-navigation',
            group: 'top-navigation',
        }),
        defineField({
            name: 'bottomNavigation',
            type: 'bottom-navigation',
            group: 'bottom-navigation',
        }),
        defineField({
            name: 'useCasesPageTitle',
            type: 'string',
            group: 'use-cases',
            title: 'Use Cases Page Title',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'useCasesPageDescription',
            type: 'string',
            group: 'use-cases',
            title: 'Use Cases Page Description',
        }),
        defineField({
            name: 'guidesPageTitle',
            type: 'string',
            group: 'guides',
            title: 'Guides Page Title',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'guidesPageDescription',
            type: 'string',
            group: 'guides',
            title: 'Guides Page Description',
        }),
    ],
    preview: {
        prepare: () => ({ title: 'Settings' }),
    },
    initialValue: {
        useCasesPageTitle: 'Use Cases',
        useCasesPageDescription: 'Role‑based guides to issue, verify, and integrate SAS credentials — copy‑paste ready.',

        guidesPageTitle: 'Guides',
        guidesPageDescription: 'Role‑based guides to issue, verify, and integrate SAS credentials — copy‑paste ready.',

        bottomNavigation: {
            _type: 'bottom-navigation',
            groups: [
                {
                    _key: 'c2d02dae476c',
                    _type: 'bottom-navigation-group',
                    items: [
                        {
                            _key: '3bb0c803c418',
                            _type: 'text-link',
                            link: {
                                _type: 'link',
                                mode: 'external',
                                url: 'https://github.com',
                            },
                            newWindow: false,
                            title: 'Github',
                        },
                        {
                            _key: '847742d0c91c',
                            _type: 'text-link',
                            link: {
                                _type: 'link',
                                mode: 'guide-list',
                            },
                            newWindow: false,
                            title: 'Docs',
                        },
                        {
                            _key: '2cdae33bc683',
                            _type: 'text-link',
                            link: {
                                _type: 'link',
                                mode: 'external',
                                url: 'https://discord.com',
                            },
                            newWindow: false,
                            title: 'Discord',
                        },
                    ],
                    title: 'Links',
                },
                {
                    _key: '363ddf965e70',
                    _type: 'bottom-navigation-group',
                    items: [
                        {
                            _key: 'a6f1e5292aa4',
                            _type: 'text-link',
                            link: {
                                mode: 'guide-list',
                                _type: 'link',
                            },
                            newWindow: false,
                            title: 'Verifier Cookbook',
                        },
                        {
                            _type: 'text-link',
                            _key: 'b0033f0243b2',
                            title: 'Security Deep-Dive',
                            newWindow: false,
                            link: {
                                mode: 'guide-list',
                                _type: 'link',
                            },
                        },
                        {
                            _type: 'text-link',
                            _key: '39a80db6562e',
                            title: 'Mainnet Deployment',
                            newWindow: false,
                            link: {
                                mode: 'guide-list',
                                _type: 'link',
                            },
                        },
                    ],
                    title: 'Guides',
                },
                {
                    _key: '8e99f4330004',
                    _type: 'bottom-navigation-group',
                    title: 'Solana',
                    items: [
                        {
                            _type: 'text-link',
                            _key: '96afe027f450',
                            title: 'Discord',
                            newWindow: false,
                            link: {
                                mode: 'external',
                                _type: 'link',
                                url: 'https://discord.com',
                            },
                        },
                        {
                            _type: 'text-link',
                            _key: '88a00c2046d9',
                            title: 'X (Twitter)',
                            newWindow: false,
                            link: {
                                mode: 'external',
                                _type: 'link',
                                url: 'https://x.com',
                            },
                        },
                        {
                            _type: 'text-link',
                            _key: 'd649374eae9d',
                            title: 'Official website',
                            newWindow: false,
                            link: {
                                mode: 'external',
                                _type: 'link',
                                url: 'https://solana.com',
                            },
                        },
                    ],
                },
                {
                    _key: '5533de40861d',
                    _type: 'bottom-navigation-group',
                    title: 'Documentation',
                    items: [
                        {
                            _type: 'text-link',
                            _key: '76f929c44069',
                            title: 'Verifier Cookbook',
                            newWindow: false,
                            link: {
                                mode: 'guide-list',
                                _type: 'link',
                            },
                        },
                        {
                            _type: 'text-link',
                            _key: '9b2fe8699530',
                            title: 'Start in 5 Minutes',
                            newWindow: false,
                            link: {
                                mode: 'guide-list',
                                _type: 'link',
                            },
                        },
                        {
                            _type: 'text-link',
                            _key: '2303c1170370',
                            title: 'Issuer Playbook',
                            newWindow: false,
                            link: {
                                mode: 'use-case-list',
                                _type: 'link',
                            },
                        },
                    ],
                },
            ],
        },
        topNavigation: {
            _type: 'top-navigation',
            aside: [
                {
                    _key: '085cf504af0c',
                    _type: 'button-link',
                    icon: 'github',
                    newWindow: false,
                    title: 'Start building',
                    url: {
                        _type: 'link',
                        mode: 'external',
                        url: 'https://github.com',
                    },
                    variant: 'primary',
                },
            ],
            items: [
                {
                    _key: 'efd5b6f2c709',
                    _type: 'text-link',
                    link: {
                        _type: 'link',
                        mode: 'use-case-list',
                    },
                    newWindow: false,
                    title: 'Use Cases',
                },
                {
                    _key: '7cbfc6bcd06e',
                    _type: 'text-link',
                    link: {
                        _type: 'link',
                        mode: 'guide-list',
                    },
                    newWindow: false,
                    title: 'Guides',
                },
                {
                    _key: '1c7fc13001e0',
                    _type: 'text-link',
                    link: {
                        _type: 'link',
                        mode: 'external',
                        url: 'https://github.com',
                    },
                    newWindow: false,
                    title: 'Github',
                },
                {
                    _key: '74c4b9f9a65a',
                    _type: 'text-link',
                    link: {
                        _type: 'link',
                        mode: 'guide-list',
                    },
                    newWindow: false,
                    title: 'Docs',
                },
                {
                    _key: '9e9b89ff5f71',
                    _type: 'text-link',
                    link: {
                        _type: 'link',
                        mode: 'external',
                        url: 'https://discord.com',
                    },
                    newWindow: false,
                    title: 'Discord',
                },
            ],
        },
    },
})
