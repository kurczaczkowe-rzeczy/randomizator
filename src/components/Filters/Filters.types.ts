export interface IField {
  /** Name of field. */
  name: string;
  /** Type of field which be display. */
  type: 'text';
}

export interface IFilters {
  /** Specify displaying of filters. If passed true filters should be display in one column
   *  otherwise should be display in rows. */
  columnOrder?: boolean;
  /** Contain object with defaults for every field. */
  defaultValues: {[ key: string ]: unknown }; // ToDo: issue #190
  /** Sets of fields with provides name of them and type that should be display, e.g. select. */
  fields: IField[];
  /** Methods gets form data if validation is successful. */
  onSubmit: ( formData: {[ key: string ]: unknown }) => void;
}
