import { defineConfig } from 'vocs'

export default defineConfig({
    title: 'Solana Attestation Service',
    description: 'Documentation for the Solana Attestation Service',
    basePath: '/docs',
    font: {
        default: {
            google: 'Geist Mono',
        },
    },
    theme: {
        colorScheme: 'light'
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
            text: "Implementation Guides (TS)",
            collapsed: false,
            items: [
                {
                    text: "Attestation Fundamentals",
                    link: "/guides/ts/how-to-create-digital-credentials"
                },
                {
                    text: "Tokenized Attestations",
                    link: "/guides/ts/tokenized-attestations"
                },

            ]
        },
        {
            text: "Code Examples",
            link: "https://github.com/solana-foundation/solana-attestation-service/tree/master/examples/"
        }
    ],
})
