export interface ILink {
  /**
   * The URL that the hyperlink points to.
   */
  href: string;
  /**
   * Content of the link
   */
  label: string;
  /**
   * Attribute contains text representing advisory information related to the element it belongs to.
   */
  title?: string;
}
