import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Quae incidunt inventore magni, ipsam exercitationem facere sint
    molestiae blanditiis repellendus, ea quod earum. Tenetur
    consequatur aperiam minima, consequuntur eveniet mollitia facere!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
