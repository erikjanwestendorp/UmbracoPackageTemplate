# UmbracoPackage.Client

This is the client-side TypeScript/JavaScript project for the UmbracoPackage.

## Development

### Prerequisites

- Node.js 18+ and npm

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

The build output will be placed in the `../UmbracoPackage.Assets/wwwroot` directory.

## Project Structure

```
src/
├── bundle.manifests.ts  # Bundle manifest definition
├── index.ts             # Entry point for the bundle
└── vite-env.d.ts        # Vite environment types
```

## Adding Extensions

To add Umbraco backoffice extensions:

1. Create your extension files in the `src/` directory
2. Import and register them in `src/index.ts`
3. Build the project with `npm run build`

## Learn More

- [Umbraco Backoffice Documentation](https://docs.umbraco.com/umbraco-cms/extending/customize-the-backoffice)
- [Umbraco UI Library](https://uui.umbraco.com/)
- [Lit Element Documentation](https://lit.dev/)
