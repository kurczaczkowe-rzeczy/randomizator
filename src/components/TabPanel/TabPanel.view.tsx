import { ITabPanel } from './TabPanel.types';

/**
 * Component describe panel with content associated with specific tab.
 */
export const TabPanel = ({
  children,
  index,
  value,
  ...rest
}: ITabPanel ): JSX.Element => (
  <div
    role="tabpanel"
    hidden={ value !== index }
    { ...rest }
  >
    { value === index && children }
  </div>
);

export default TabPanel;
