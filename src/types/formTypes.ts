/** Enum contains all possible types of form field. */
export type FieldType = 'text' | 'number' | 'select';

/** Object represent set information about field in form. */
export interface IField {
  /** Name of field used in form provided by user. */
  readonly name: string;
  /** Type of field used in form. */
  readonly type: FieldType;
}

/** Array of fields. */
export type Fields = IField[];

/** Object represent set of basic information specify form. */
export interface IBaseForm {
  /** Identifier of form. */
  readonly id: string;
  /** Name of form provided by user. */
  readonly name: string;
}

/** Object represent whole information about specific form. */
export interface IForm extends IBaseForm {
  /** Array of fields used in form. */
  readonly fields: Fields;
}

/** Array of forms. */
export type Forms = IForm[];
