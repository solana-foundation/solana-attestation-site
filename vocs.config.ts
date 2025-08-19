import { defineConfig } from 'vocs'

export default defineConfig({
    title: 'Solana Attestation Service',
    description: 'Documentation for the Solana Attestation Service',
    basePath: '/docs',
    font: {
        default: {
            google: 'Geist',
        },
    },
    theme: {
        colorScheme: 'light',
        accentColor: '#9945FF',
        variables: {
            color: {
                background: '#FAFBFC',
                backgroundDark: '#F3F4F6',
                border: '#E5E7EB',
                borderAccent: '#9945FF',
                text: '#1F2937',
                textAccent: '#9945FF',
                codeInlineBackground: '#F3F4F6',
                codeInlineBorder: '#E5E7EB',
                codeBlockBackground: '#FAFBFC',
                successBackground: '#14F19510',
                successBorder: '#14F195',
                successText: '#047857',
                warningBackground: '#FEF3C7',
                warningBorder: '#F59E0B',
                warningText: '#D97706',
                dangerBackground: '#FEE2E2',
                dangerBorder: '#EF4444',
                dangerText: '#DC2626',
                infoBackground: '#00D9E010',
                infoBorder: '#00D9E0',
                infoText: '#0891B2',
            },
        },
    },
    iconUrl: {
        light: '/favicon.ico',
        dark: '/favicon.ico',
    },
    logoUrl: {
        light: '/logo.svg',
        dark: '/logo.svg',
    },
    socials: [
        {
            icon: 'github',
            link: 'https://github.com/solana-foundation/solana-attestation-service',
        },
    ],
    sidebar: [
        {
            text: "Credentials",
            link: "/credentials"
        },
        {
            text: "Schemas",
            link: "/schemas"
        },
        {
            text: "Attestations",
            link: "/attestations"
        },
        {
            text: "PDA Helpers",
            link: "/helpers"
        },
        {
            text: "Instructions",
            collapsed: false,
            items: [
                {
                    text: "Create Credential",
                    link: "/instructions/create-credential"
                },
                {
                    text: "Create Schema",
                    link: "/instructions/create-schema"
                },
                {
                    text: "Create Attestation",
                    link: "/instructions/create-attestation"
                },
                {
                    text: "Create Tokenized Attestation",
                    link: "/instructions/create-tokenized-attestation"
                },
                {
                    text: "Change Authorized Signers",
                    link: "/instructions/change-authorized-signers"
                },
                {
                    text: "Change Schema Description",
                    link: "/instructions/change-schema-description"
                },
                {
                    text: "Close Attestation",
                    link: "/instructions/close-attestation"
                },
                {
                    text: "Close Tokenized Attestation",
                    link: "/instructions/close-tokenized-attestation"
                },
                {
                    text: "Emit Event",
                    link: "/instructions/emit-event"
                }
            ]
        },
        {
            text: "Guides",
            collapsed: false,
            items: [
                {
                    text: "TypeScript",
                    collapsed: false,
                    items: [
                        {
                            text: "Basic attestation flow",
                            link: "/guides/ts/how-to-create-digital-credentials"
                        },
                        {
                            text: "Tokenized Attestations",
                            link: "/guides/ts/tokenized-attestations"
                        },
                        {
                            text: "Encrypted Attestation Data",
                            collapsed: false,
                            items: [
                                {
                                    text: "Introduction",
                                    link: "/guides/ts/lit-encrypted-attestations/introduction"
                                },
                                {
                                    text: "Getting Started",
                                    link: "/guides/ts/lit-encrypted-attestations/getting-started"
                                },
                                {
                                    text: "Encrypted Basic Attestation Flow",
                                    link: "/guides/ts/lit-encrypted-attestations/basic-attestation-flow"
                                },
                                {
                                    text: "Encrypted Tokenized Attestation",
                                    link: "/guides/ts/lit-encrypted-attestations/tokenized-attestations"
                                }
                            ]
                        }
                    ]
                },
                {
                    text: "Rust",
                    collapsed: false,
                    items: [
                        {
                            text: "Basic attestation flow",
                            link: "/guides/rust/how-to-create-digital-credentials"
                        },
                        {
                            text: "Tokenized Attestations",
                            link: "/guides/rust/tokenized-attestations"
                        }
                    ]
                },
            ]
        },
        {
            text: "Code Examples",
            link: "https://github.com/solana-foundation/solana-attestation-service/tree/master/examples/"
        }
    ],
})
