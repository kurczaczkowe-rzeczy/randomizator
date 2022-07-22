import { Fields, Mapping } from 'types';

export interface IDraw {
  /** Array of fields with error. */
  errors: string[];
  /** Array of available fields. */
  fields: Fields;
  /** Methods trigger drawing result to fields. */
  onRandomClick: () => void;
  /** Map of list with drawn answers. */
  result: Mapping< string >;
}
