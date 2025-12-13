# Umbraco Community Package Starter Template

A .NET template for creating Umbraco packages with the structure used in erikjanwestendorp's Umbraco community packages.

This template is similar to [LottePitcher's opinionated-package-starter](https://github.com/LottePitcher/opinionated-package-starter) but uses the repository structure found in [erikjanwestendorp's Umbraco community packages](https://github.com/erikjanwestendorp).

## Quick Start

See [Getting Started Guide](docs/GETTING_STARTED.md) for detailed instructions.

## Installation

Install this template using the .NET CLI:

```bash
dotnet new install Umbraco.Community.Templates.ErikPackageStarter
```

Or from a local path:

```bash
dotnet new install ./
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

- **src/**: Contains the main package project, Assets project, and Client project
  - **YourPackage/**: Main C# package code
  - **YourPackage.Assets/**: Razor SDK project for serving frontend assets
  - **YourPackage.Client/**: TypeScript/Vite project for building frontend code
- **examples/**: Contains an example Umbraco site for testing the package
- **assets/**: For logos and other assets
- **.github/workflows/**: Pre-configured GitHub Actions for build and publish
- **umbraco-marketplace.json**: Configuration for the Umbraco Marketplace
- **README.md**: Template readme for your package
- **LICENSE**: MIT license file

## Project Structure

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
│   ├── YourPackageName/           # Main C# package
│   ├── YourPackageName.Assets/    # Frontend assets (wwwroot)
│   └── YourPackageName.Client/    # TypeScript/Vite frontend project
├── LICENSE
├── README.md
├── YourPackageName.sln
└── umbraco-marketplace.json
```

## Building the Template Package

To build and pack this template for distribution:

```bash
dotnet pack template-pack.csproj
```

This will create a NuGet package in the `bin/Release` directory.

## Publishing to NuGet

To publish the template to NuGet.org:

```bash
dotnet nuget push bin/Release/Umbraco.Community.Templates.ErikPackageStarter.*.nupkg --api-key YOUR_API_KEY --source https://api.nuget.org/v3/index.json
```

## License

MIT