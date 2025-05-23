import { defineConfig } from 'vocs'

export default defineConfig({
    title: 'SAS',
    description: 'Documentation for the Solana Attestation Service',
    basePath:  "/docs",
    font: {
        default: {
            google: 'Geist Mono',
        },
    },
    theme: {
        colorScheme: 'light'
    },
    iconUrl: {
        light: '/logo.svg',
        dark: '/logo.svg',
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
            link: "/docs/credentials"
        },
        {
            text: "Schemas",
            link: "/docs/schemas"
        },
        {
            text: "Attestations",
            link: "/docs/attestations"
        },
        {
            text: "PDA Helpers",
            link: "/docs/helpers"
        },
        {
            text: "Instructions",
            collapsed: false,
            items: [
                {
                    text: "Create Credential",
                    link: "/docs/instructions/create-credential"
                },
                {
                    text: "Create Schema",
                    link: "/docs/instructions/create-schema"
                },
                {
                    text: "Create Attestation",
                    link: "/docs/instructions/create-attestation"
                },
                {
                    text: "Create Tokenized Attestation",
                    link: "/docs/instructions/create-tokenized-attestation"
                },
                {
                    text: "Change Authorized Signers",
                    link: "/docs/instructions/change-authorized-signers"
                },
                {
                    text: "Change Schema Description",
                    link: "/docs/instructions/change-schema-description"
                },
                {
                    text: "Close Attestation",
                    link: "/docs/instructions/close-attestation"
                },
                {
                    text: "Close Tokenized Attestation",
                    link: "/docs/instructions/close-tokenized-attestation"
                },
                {
                    text: "Emit Event",
                    link: "/docs/instructions/emit-event"
                }
            ]
        }
    ],
})
