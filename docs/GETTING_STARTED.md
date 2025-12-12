# Getting Started with Umbraco Community Package Starter Template

This guide will help you create your first Umbraco package using this template.

## Prerequisites

- .NET 8.0 SDK or later
- Visual Studio 2022, VS Code, or Rider (optional but recommended)

## Step 1: Install the Template

```bash
dotnet new install Umbraco.Community.Templates.ErikPackageStarter
```

Or install from a local path for development:

```bash
cd /path/to/template
dotnet new install ./
```

## Step 2: Create Your Package

```bash
dotnet new umbracopackage -n Umbraco.Community.MyAwesomePackage \
  --author-name "Your Name" \
  --description "My awesome Umbraco package that does something cool" \
  --github-user "yourusername" \
  --github-repo "Umbraco.Community.MyAwesomePackage"
```

### Available Parameters

| Parameter | Short | Description | Required |
|-----------|-------|-------------|----------|
| `--name` | `-n` | The name of your package | Yes |
| `--author-name` | `-a` | Your name (for license and NuGet) | No |
| `--description` | `-d` | Package description | No |
| `--github-user` | `-gu` | Your GitHub username | No |
| `--github-repo` | `-gr` | GitHub repository name | No |
| `--package-title` | `-pt` | Custom title (auto-generated if not provided) | No |

## Step 3: Open the Solution

```bash
cd Umbraco.Community.MyAwesomePackage
code .  # VS Code
# or open in Visual Studio
```

## Step 4: Customize Your Package

### Update the Logo
Replace `assets/logo.png` with your own 128x128 PNG logo.

### Add Your Code
Start adding your package code in `src/Umbraco.Community.MyAwesomePackage/`:

```
src/Umbraco.Community.MyAwesomePackage/
├── Constants.cs            # Package constants
├── Composers/             # Add your composers
├── Controllers/           # Add your controllers
├── Services/              # Add your services
└── Models/               # Add your models
```

### Update Documentation
- Update `README.md` with usage instructions
- Update `src/Umbraco.Community.MyAwesomePackage/README.md` for NuGet

## Step 5: Test Your Package

The template includes an example Umbraco site for testing:

```bash
cd examples/Umbraco.Community.MyAwesomePackage.Site
dotnet run
```

Then navigate to `https://localhost:44300/umbraco` and login with:
- Username: `admin@admin.com`
- Password: `0123456789`

## Step 6: Build and Pack

Build your package:

```bash
dotnet build --configuration Release
```

Create a NuGet package:

```bash
dotnet pack src/Umbraco.Community.MyAwesomePackage/Umbraco.Community.MyAwesomePackage.csproj \
  --configuration Release \
  --output ./artifacts
```

## Step 7: Publish to NuGet

### First Time Setup

1. Get a NuGet API key from https://www.nuget.org/account/apikeys
2. Add it as a GitHub secret named `NUGET_API_KEY`

### Create a Release

The template includes a GitHub Action that automatically publishes to NuGet when you create a release:

1. Tag your commit: `git tag v1.0.0`
2. Push the tag: `git push origin v1.0.0`
3. Create a release on GitHub using that tag
4. The package will be automatically built and published to NuGet

## Step 8: Submit to Umbraco Marketplace

1. Update `umbraco-marketplace.json` with your package details
2. Add screenshots to the repository
3. Submit your package at https://marketplace.umbraco.com/

## Tips

### Version Numbering
Use semantic versioning (e.g., 1.0.0, 1.1.0, 2.0.0):
- **Major**: Breaking changes
- **Minor**: New features (backwards compatible)
- **Patch**: Bug fixes

### Testing
Consider adding unit tests:

```bash
mkdir tests
cd tests
dotnet new xunit -n Umbraco.Community.MyAwesomePackage.Tests
```

### Documentation
- Keep your README up to date
- Add code comments for public APIs
- Consider adding example code snippets

## Troubleshooting

### Template not found
If `dotnet new umbracopackage` doesn't work, ensure the template is installed:

```bash
dotnet new list
```

Look for "Umbraco Community Package Starter" in the output.

### Build errors
Ensure you have .NET 8.0 SDK installed:

```bash
dotnet --version
```

### Can't run the example site
Make sure ports 40000 and 44300 are not in use.

## Next Steps

- Join the Umbraco community on Discord: https://discord.gg/umbraco
- Read the Umbraco documentation: https://docs.umbraco.com/
- Explore other community packages for inspiration

## Resources

- [Umbraco Documentation](https://docs.umbraco.com/)
- [Umbraco Marketplace](https://marketplace.umbraco.com/)
- [.NET Templates Documentation](https://learn.microsoft.com/en-us/dotnet/core/tools/custom-templates)

## Support

If you encounter issues with this template:
1. Check the [GitHub Issues](https://github.com/erikjanwestendorp/UmbracoPackageTemplate/issues)
2. Create a new issue if your problem isn't already reported
3. Provide as much detail as possible (commands run, error messages, etc.)

Happy coding! 🚀
