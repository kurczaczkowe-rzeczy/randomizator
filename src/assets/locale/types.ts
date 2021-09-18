import localizationPL from './pl';

/** Map of existing strings to localize. */
export type LocaleResources = typeof localizationPL;
/** Identifiers of strings to localize. */
export type LocaleResourcesIDs = keyof LocaleResources;
