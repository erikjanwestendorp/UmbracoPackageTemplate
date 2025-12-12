# Umbraco Community Package Starter Template

A .NET template for creating Umbraco packages with the structure used in erikjanwestendorp's Umbraco community packages.

## Installation

Install this template using the .NET CLI:

```bash
dotnet new install Umbraco.Community.Templates.ErikPackageStarter
```

## Usage

Create a new Umbraco package using this template:

```bash
dotnet new umbracopackage -n YourPackageName
```

### Available Parameters

- `-n|--name`: The name of the package (required)
- `-a|--author-name`: The name of the author for the license and NuGet package
- `-d|--description`: The description of the package
- `-gu|--github-user`: The GitHub username for the repository
- `-gr|--github-repo`: The name of the GitHub repository
- `-pt|--package-title`: The title of the package

### Example

```bash
dotnet new umbracopackage -n Umbraco.Community.MyPackage -a "John Doe" -d "My awesome Umbraco package" -gu "johndoe" -gr "Umbraco.Community.MyPackage"
```

## Features

This template creates an Umbraco package with the following structure:

- **src/**: Contains the main package project
- **examples/**: Contains an example Umbraco site for testing the package
- **assets/**: For logos and other assets
- **.github/workflows/**: Pre-configured GitHub Actions for build and publish
- **umbraco-marketplace.json**: Configuration for the Umbraco Marketplace
- **README.md**: Template readme for your package
- **LICENSE**: MIT license file

## Structure

The generated project follows the structure used in erikjanwestendorp's Umbraco community packages:

```
YourPackageName/
├── .github/
│   └── workflows/
│       ├── build.yml
│       └── publish.yml
├── assets/
│   └── logo.png
├── examples/
│   └── YourPackageName.Site/
├── src/
│   └── YourPackageName/
├── LICENSE
├── README.md
├── YourPackageName.sln
└── umbraco-marketplace.json
```

## Getting Started

After creating your package:

1. Open the solution in Visual Studio or your preferred IDE
2. Update the logo in the `assets/` directory
3. Start developing your package in the `src/YourPackageName/` directory
4. Test your package using the example site in `examples/YourPackageName.Site/`
5. Update the README.md with details about your package

## Links

- [GitHub Repository](https://github.com/erikjanwestendorp/UmbracoPackageTemplate)
- [Umbraco Documentation](https://docs.umbraco.com/)
- [Umbraco Marketplace](https://marketplace.umbraco.com/)

## License

MIT
