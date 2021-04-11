import MuiLink from '@material-ui/core/Link';

import { ILink } from './Link.types';

/**
 * Component that allow move user to another page
 */
export const Link = ({
  label,
  href,
  title,
}: ILink ): JSX.Element => (
  <MuiLink
    color="secondary"
    target="_blank"
    rel="noopener noreferrer"
    href={ href }
    title={ title }
  >
    { label }
  </MuiLink>
);

export default Link;
