import * as React from 'react';
import {ThemeProvider, ThemeType, useTheme} from '../../../components/Theme';
import Button from '../../../components/Button';
import {Text, ScrollView} from 'react-native';
import Title from '../Title';
import Divider from '../Divider';
import Checkbox from '../../../components/Checkbox';
import RadioButton from '../../../components/RadioButton';
import Form from '../../../components/Form';
import TextLink from '../../../components/TextLink';
import {ArrowRightIcon} from '../../../components/Icons';
import Input from '../../../components/Input';
import Dropdown from '../../../components/Dropdown';
import Multiselect from '../../../components/Multiselect';
import {useEffect} from 'react';

const ThemePreview = ({theme}: {theme: ThemeType}) => {
  const {updateTheme} = useTheme();

  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return (
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
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s
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
  );
};

const ThemeChooser = ({theme}: {theme: ThemeType}) => (
  <ThemeProvider initial={theme}>
    <ThemePreview theme={theme} />
  </ThemeProvider>
);

export default ThemeChooser;
