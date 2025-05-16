# Solana Attestation Website

This is a Next.js-based website that describes attestation services available on the Solana blockchain.

### Important Links

- **Production Site**: [https://solana-attestation-site.vercel.app](https://solana-attestation-site.vercel.app)
- **Production CMS**: [https://attest.sanity.studio](https://attest.sanity.studio)

- **Staging CMS**: [https://attest-dev.sanity.studio](https://attest-dev.sanity.studio)
- **Staging Site**: [https://solana-attestation-site-staging.vercel.app](https://solana-attestation-site-staging.vercel.app)

## Project Structure

The project follows the Feature-Sliced Design (FSD) architecture with the following high-level structure:

```
app/                # Next.js app router
src/
├── app/            # High-level app components
├── features/       # Feature-specific components
├── entities/       # Business entities
├── widgets/        # Composite components
├── shared/
│   ├── ui/         # All UI components
│   ├── sanity/     # Sanity schemas and configuration
│   └── ...         # Other shared utilities and APIs
```

## Technology Stack

- Next.js
- Tailwind CSS
- TypeScript
- Sanity CMS
- pnpm (package manager)
- Vercel (deployment)

## Branching Strategy

The project follows a two-branch strategy for managing deployments:

- **`main`**: Production branch, deployed to the production environment
- **`development`**: Staging branch, used for pre-production testing

## Contribution Guidelines

### Working with Branches

1. For any new feature or bugfix:
   - Create a new branch from `development`
   - Use a descriptive name (e.g., `feature/attestation-form` or `fix/header-alignment`)
   - Implement your changes
   - Open a Pull Request to the `development` branch

2. After code review and approval:
   - Merge into `development` for staging deployment
   - Once tested in staging, changes can be promoted to `main` for production

### Code Standards

- Follow the established code style and FSD architecture
- Write meaningful commit messages
- Include comments where necessary

## Sanity CMS Configuration

### Updating Sanity Schema

When modifying Sanity schemas:

1. Make changes to schema files in `src/shared/sanity/schema/`
2. Generate TypeScript types by running:
   ```
   pnpm run typegen
   ```

> **Note**: The type generation process runs automatically on every build, but you may want to run it manually during development.

### Deployment of Schema Changes

Schema changes are automatically deployed when:

- Changes are merged to the `development` branch (deploys to staging CMS)
- Changes are merged to the `main` branch (deploys to production CMS)

This automatic deployment is triggered whenever files in the `src/shared/sanity` directory are modified during a build.
