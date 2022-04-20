import { Tags, Tag } from 'types';

export type HandleAddition = ( tag: Tag ) => void;
export type HandleDelete = ( index: number ) => void;
export type HandleDrag = ( tag: Tag, currPos: number, newPos: number ) => void;

export interface ISelectFilter {
  /** Array of key codes use as delimiters. */
  delimiters: number[];
  /** Method trigger when tag is added. */
  handleAddition?: HandleAddition;
  /** Method trigger when tag is removed. */
  handleDelete?: HandleDelete;
  /** Method trigger when tag is dragged. */
  handleDrag?: HandleDrag;
  /** Method trigger when tag is clicked. */
  handleTagClick?: () => void;
  /** Array of selected tags. */
  tags: Tags;
}
