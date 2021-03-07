import { Tag } from 'react-tag-input';

export type HandleAddition = ( tag: Tag ) => void;
export type HandleDelete = ( index: number ) => void;
export type HandleDrag = ( tag: Tag, currPos: number, newPos: number ) => void;

export interface ISelectFilter {
  delimiters: number[];
  handleAddition?: HandleAddition;
  handleDelete?: HandleDelete;
  handleDrag?: HandleDrag;
  handleTagClick?: () => void;
  tags: Tag[];
}
