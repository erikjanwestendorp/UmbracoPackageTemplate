import type { ManifestBundle } from '@umbraco-cms/backoffice/extension-registry';

const manifests: Array<ManifestBundle> = [
  {
    type: 'bundle',
    alias: 'UmbracoPackage.Bundle',
    name: 'UmbracoPackage Bundle',
    js: () => import('./index.ts'),
  },
];

export default manifests;
