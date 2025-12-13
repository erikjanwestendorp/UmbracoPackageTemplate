import type { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';

export const onInit: UmbEntryPointOnInit = (_host, _extensionRegistry) => {
  // Register your extensions here
  console.log('UmbracoPackage initialized');
};

export default onInit;
