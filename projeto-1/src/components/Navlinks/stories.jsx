import { NavLinks } from '.';
import link from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: link,
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
