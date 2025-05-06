import { Code } from '@/shared/ui/code'
import { Section } from '@/shared/ui/section'
import { FC } from 'react'

export const HowToImplement: FC = () => {
    const file1 = `
// PDA ["schema", credential, name, version]
#[derive(Clone, Debug, PartialEq, ShankAccount)]
#[repr(C)]
pub struct Schema {
    /// The Credential that manages this Schema
    pub credential: Pubkey,
    /// Name of Schema, in UTF8-encoded byte string.
    pub name: Vec<u8>,
    /// Description of what schema does, in UTF8-encoded byte string.
    pub description: Vec<u8>,
    /// The schema layout where data will be encoded with, in array of SchemaDataTypes.
    pub layout: Vec<u8>,
    /// Field names of schema stored as serialized array of Strings.
    /// First 4 bytes are number of bytes in array.
    pub field_names: Vec<u8>,
    /// Whether or not this schema is still valid
    pub is_paused: bool,
    /// Version of this schema. Defaults to 1.
    pub version: u8,
}
`.trim()

    const file2 = `
pub struct Schema {
    /// The Credential that manages this Schema
    pub credential: Pubkey,
    /// Name of Schema, in UTF8-encoded byte string.
    pub name: Vec<u8>,
    /// Description of what schema does, in UTF8-encoded byte string.
    pub description: Vec<u8>,
}
`.trim()

    return (
        <Section title="How to implement" linkTitle="More in docs" linkHref="/">
            <Code
                files={[
                    { name: 'create-any-schema-for-your-use-case.rs', content: file1, language: 'rust' },
                    { name: 'attest-with-any-schema.rs', content: file2, language: 'rust' },
                ]}
            />
        </Section>
    )
}
