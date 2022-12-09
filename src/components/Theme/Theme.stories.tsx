import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import {defaultTheme} from './defaultTheme';
import pkg from './package.json';
import {Text, ScrollView} from 'react-native';

import {ThemeProvider} from './index';

import Button from '../Button';
import Checkbox from '../Checkbox';
import RadioButton from '../RadioButton';
import Form from '../Form';
import TextLink from '../TextLink';
import {ArrowRightIcon} from '../Icons';
import Input from '../Input';
import Dropdown from '../Dropdown';
import Multiselect from '../Multiselect';

import Title from '../../storybook/preview/Title';
import Divider from '../../storybook/preview/Divider';
import {customFontTheme} from '../../storybook/preview/ThemeDecorator';

export default {
  title: 'Theme',
  component: ThemeProvider,
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = args => {
  return (
    <ThemeProvider {...args}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingVertical: 40,
          paddingBottom: 200,
        }}
      >
        {/* Button */}
        <Title>Button</Title>
        <Button>Button</Button>
        <Divider />
        <Button color="secondary">Button</Button>
        <Divider />
        <Button variant="outlined">Button</Button>
        <Divider />
        <Button variant="outlined" color="secondary">
          Button
        </Button>
        <Divider />

        {/* Checkbox */}
        <Title>Checkbox</Title>
        <Checkbox label="Primary" />
        <Divider />
        <Checkbox checked={true} label="Checked" />
        <Divider />
        <Checkbox checked={true} disabled label="Disabled" />
        <Divider />
        <Checkbox color="secondary" label="Secondary" />
        <Divider />
        <Checkbox checked={true} color="secondary" label="Checked" />
        <Divider />
        <Checkbox checked={true} disabled color="secondary" label="Disabled" />

        {/* Radio button */}
        <Title>Radio button</Title>
        <RadioButton value={1} label="Primary" />
        <Divider />
        <Form>
          <RadioButton value={1} label="Checked" checked={true} />
        </Form>
        <Divider />
        <Form>
          <RadioButton value={1} label="Disabled" checked={true} disabled />
        </Form>
        <Divider />
        <RadioButton value={1} color="secondary" label="Secondary" />
        <Divider />
        <Form>
          <RadioButton
            value={1}
            checked={true}
            color="secondary"
            label="Checked"
          />
        </Form>
        <Divider />
        <RadioButton
          value={1}
          checked={true}
          disabled
          color="secondary"
          label="Disabled"
        />

        {/* TextLink */}
        <Title>TextLink</Title>
        <TextLink>Primary</TextLink>
        <Divider />
        <TextLink color="secondary">Secondary</TextLink>
        <Divider />
        <TextLink disabled>Disabled</TextLink>
        <Divider />
        <TextLink iconRight={<ArrowRightIcon />}>With icon</TextLink>

        {/* Input */}
        <Title>Input</Title>
        <Input label="Color primary" placeholder="some@mail.com" />
        <Divider />
        <Input
          label="Color secondary"
          placeholder="some@mail.com"
          color="secondary"
        />
        <Divider />
        <Input
          label="Error state"
          placeholder="some@mail.com"
          error="This is an error"
        />
        <Divider />
        <Input label="Hint" placeholder="some@mail.com" hint="This is a hint" />

        {/* Dropdown */}
        <Title>Dropdown</Title>
        <Dropdown label="Dropdown" placeholder="It use Input">
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </Text>
        </Dropdown>

        {/* Multiselect */}
        <Title>Multiselect</Title>
        <Multiselect
          label="Multiselect"
          placeholder="Placeholder"
          options={[
            {label: 'One', value: 1},
            {label: 'Two', value: 2},
            {label: 'Three', value: 3},
            {label: 'Four', value: 4},
            {label: 'Five', value: 5},
            {label: 'Six', value: 6},
            {label: 'Seven', value: 7},
          ]}
        />
      </ScrollView>
    </ThemeProvider>
  );
};

export const Theme = Template.bind({});
Theme.args = {
  theme: {...defaultTheme, ...customFontTheme},
};
