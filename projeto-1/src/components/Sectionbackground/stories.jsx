import { Sectionbackground } from '.';

export default {
  title: 'Sectionbackground',
  component: Sectionbackground,
  args: {
    children: (
      <div>
        <h1>SectionBackgraound</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eum
          error minima corrupti dignissimos in beatae porro nostrum excepturi
          accusantium expedita quisquam aperiam temporibus nulla sit autem,
          totam exercitationem harum.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Sectionbackground {...args} />
    </div>
  );
};
