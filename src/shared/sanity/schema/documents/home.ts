import { defineArrayMember, defineField, defineType } from 'sanity'

export const home = defineType({
    name: 'home',
    type: 'document',
    fields: [
        defineField({
            name: 'content',
            type: 'array',
            of: [
                defineArrayMember({ type: 'hero' }),
                defineArrayMember({ type: 'testimonials' }),
                defineArrayMember({ type: 'steps' }),
                defineArrayMember({ type: 'use-cases' }),
                defineArrayMember({ type: 'quote' }),
                defineArrayMember({ type: 'code-examples' }),
                defineArrayMember({ type: 'guides' }),
            ],
        }),
    ],
    preview: {
        prepare: () => ({ title: 'Home', subtitle: 'Main page' }),
    },
    initialValue: {
        content: [
            {
                _type: 'hero',
                _key: '9503d72e65e8',
                title: 'Solana Attestation Service',
                content: 'An infrastructure public good for making attestations onchain or offchain about anything.',
                links: [
                    {
                        _type: 'button-link',
                        _key: '27b7f275f256',
                        title: 'Explore on Github',
                        variant: 'primary',
                        newWindow: false,
                        url: {
                            mode: 'external',
                            _type: 'link',
                            url: 'https://github.com',
                        },
                        icon: 'github',
                    },
                    {
                        _type: 'button-link',
                        _key: 'c76d93326233',
                        title: 'Read documentation',
                        variant: 'secondary',
                        newWindow: false,
                        url: {
                            mode: 'guide-list',
                            _type: 'link',
                        },
                        icon: 'documentation',
                    },
                ],
            },
            {
                _type: 'testimonials',
                _key: '428b873e177a',
                title: 'Teams using SAS',
                docsLinkTitle: '',
                content: [
                    {
                        _type: 'testimonial',
                        _key: 'f7aef1d9582f',
                        name: 'Blue Wolf',
                        layout: 'small',
                        testimonial: '',
                    },
                    {
                        _type: 'testimonial',
                        _key: 'c45b51db8b81ffc86ba67e059931b660',
                        name: 'Blue Wolf',
                        layout: 'small',
                        testimonial: '',
                    },
                    {
                        _type: 'testimonial',
                        _key: '46d45954647b886e6f2a5010fdd55008',
                        name: 'Blue Wolf',
                        layout: 'large',
                        testimonial:
                            'Integrating SAS allowed us to gate community access based on social trust scores — no more bots, no more headaches. It’s fast, neutral, and built exactly the way a Solana-native attestation layer should be.',
                    },
                    {
                        _type: 'testimonial',
                        _key: 'eaa4f026ee24751c617a2b95b51aa715',
                        name: 'Blue Wolf',
                        layout: 'small',
                        testimonial: '',
                    },
                    {
                        _type: 'testimonial',
                        _key: '6650009ed5fb43226506e4262988be77',
                        name: 'Blue Wolf',
                        layout: 'small',
                        testimonial: '',
                    },
                    {
                        _type: 'testimonial',
                        _key: 'c0f0394bd991c3a9008c3e1083c7a6ee',
                        name: 'Blue Wolf',
                        layout: 'small',
                        testimonial: '',
                    },
                    {
                        _type: 'testimonial',
                        _key: '59cb68f275e37bccfe94564a84729e05',
                        name: 'Blue Wolf',
                        layout: 'small',
                        testimonial: '',
                    },
                    {
                        _type: 'testimonial',
                        _key: '7d14b5c5baf8801227b5150bf4376500',
                        name: 'Blue Wolf',
                        layout: 'small',
                        testimonial: '',
                    },
                    {
                        _type: 'testimonial',
                        _key: 'b1c0a205fd2580e2b61ded35d6e6141c',
                        name: 'Blue Wolf',
                        layout: 'small',
                        testimonial: '',
                    },
                    {
                        _type: 'testimonial',
                        _key: '5a945a6acb3f5459380c9d52132b6df0',
                        name: 'Blue Wolf',
                        layout: 'medium',
                        testimonial: 'Simple SDK, but very powerful results. Our matchmaking now filters out bots using onchain attestations.',
                    },
                    {
                        _type: 'testimonial',
                        _key: '1d66600124f6c3dd02f03964642924cf',
                        name: 'Blue Wolf',
                        layout: 'small',
                        testimonial: '',
                    },
                    {
                        _type: 'testimonial',
                        _key: '7ccc9e6472eef8b60364d9b9b743b455',
                        name: 'Blue Wolf',
                        layout: 'small',
                        testimonial: '',
                    },
                ],
            },
            {
                _type: 'steps',
                _key: '7f93dfce3a61',
                title: 'How SAS works?',
                docsLinkTitle: '',
                content: [
                    {
                        _type: 'step',
                        _key: '486a56ad4436',
                        title: 'Issuer',
                        description: 'Defines credential schema (or re‑uses an existing one) and signs attestation data via SAS SDK',
                    },
                    {
                        _type: 'step',
                        _key: '4d9bb5d50f72',
                        title: 'SAS Program',
                        description: 'On‑chain contract verifies issuer signature & writes attestation record',
                    },
                    {
                        _type: 'step',
                        _key: '6f040d650f33',
                        title: 'Holder',
                        description: 'Receives the attestation (push or pull), stores reference in their wallet',
                    },
                    {
                        _type: 'step',
                        _key: 'd2d0ce10a47f',
                        title: 'Verifier',
                        description: 'Requests presentation; holder supplies attestation hash & signature',
                    },
                ],
            },
            {
                _type: 'use-cases',
                _key: '0cd67495a0cb',
                title: 'Use cases',
                docsLinkTitle: 'Check More',
                mode: 'latest',
                docsLink: {
                    mode: 'use-case-list',
                    _type: 'link',
                },
                latestAmount: 6,
            },
            {
                _type: 'quote',
                _key: '5232845c7460',
                name: 'Autodesk',
                testimonial:
                    'Integrating SAS allowed us to gate community access based on social trust scores — no more bots, no more headaches. It’s fast, neutral, and built exactly the way a Solana-native attestation layer should be.',
            },
            {
                _type: 'code-examples',
                _key: '3916b52de6c4',
                title: 'How to implement',
                docsLinkTitle: 'More in docs',
                docsLink: {
                    mode: 'guide-list',
                    _type: 'link',
                },
                content: [
                    {
                        _type: 'code-file',
                        _key: '598b15dc95eb',
                        name: 'create-any-schema-for-your-use-case.rs',
                        type: 'rust',
                        code: '// PDA ["schema", credential, name, version]\n#[derive(Clone, Debug, PartialEq, ShankAccount)]\n#[repr(C)]\npub struct Schema {\n    /// The Credential that manages this Schema\n    pub credential: Pubkey,\n    /// Name of Schema, in UTF8-encoded byte string.\n    pub name: Vec<u8>,\n    /// Description of what schema does, in UTF8-encoded byte string.\n    pub description: Vec<u8>,\n    /// The schema layout where data will be encoded with, in array of SchemaDataTypes.\n    pub layout: Vec<u8>,\n    /// Field names of schema stored as serialized array of Strings.\n    /// First 4 bytes are number of bytes in array.\n    pub field_names: Vec<u8>,\n    /// Whether or not this schema is still valid\n    pub is_paused: bool,\n    /// Version of this schema. Defaults to 1.\n    pub version: u8,\n}',
                    },
                    {
                        _type: 'code-file',
                        _key: '04056af70f12',
                        name: 'attest-with-any-schema.rs',
                        type: 'rust',
                        code: 'pub struct Schema {\n    /// The Credential that manages this Schema\n    pub credential: Pubkey,\n    /// Name of Schema, in UTF8-encoded byte string.\n    pub name: Vec<u8>,\n    /// Description of what schema does, in UTF8-encoded byte string.\n    pub description: Vec<u8>,\n}',
                    },
                ],
            },
            {
                _type: 'guides',
                _key: '8439ea696712',
                title: 'Learn with guides',
                docsLinkTitle: 'Check all',
                mode: 'latest',
                latestAmount: 5,
                docsLink: {
                    mode: 'guide-list',
                    _type: 'link',
                },
            },
            {
                _type: 'hero',
                _key: '4072f59b55f1',
                title: 'Start building on SAS today',
                content: 'An infrastructure public good for making attestations onchain or offchain about anything.',
                links: [
                    {
                        _type: 'button-link',
                        _key: '93a324eee3f1',
                        title: 'Explore on Github',
                        variant: 'primary',
                        newWindow: false,
                        url: {
                            mode: 'external',
                            _type: 'link',
                            url: 'https://github.com',
                        },
                        icon: 'github',
                    },
                    {
                        _type: 'button-link',
                        _key: 'b8ca599b8c6f',
                        title: 'Read documentation',
                        variant: 'secondary',
                        newWindow: false,
                        url: {
                            mode: 'guide-list',
                            _type: 'link',
                        },
                        icon: 'documentation',
                    },
                ],
            },
        ],
    },
})
