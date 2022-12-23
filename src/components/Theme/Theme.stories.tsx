import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import {defaultTheme} from './defaultTheme';
import pkg from './package.json';
import {ScrollView, View} from 'react-native';

import {ThemeProvider, ThemeType} from './index';

import Button from '../Button';
import Checkbox from '../Checkbox';
import RadioButton from '../RadioButton';
import Form from '../Form';
import TextLink from '../TextLink';
import {ArrowRightIconDeprecated} from '../Icons';
import Input from '../Input';
import Dropdown from '../Dropdown';
import Multiselect from '../Multiselect';
import Text from '../Text';

import Title from '../../storybook/preview/Title';
import Divider from '../../storybook/preview/Divider';
import {customFontTheme} from '../../storybook/preview/ThemeDecorator';
import useStyles from './Theme.styles.stories';

export default {
  title: 'Theme',
  component: ThemeProvider,
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof ThemeProvider>;

const contrastMapping = {
  primary: {
    light200: 'black',
    light100: 'black',
    extraLight50: 'black',
  },
  secondary: {
    light200: 'black',
    light100: 'black',
    extraLight50: 'black',
  },
  error: {
    dark600: 'both',
    main500: 'both',
    medium400: 'both',
    medium300: 'black',
    light200: 'black',
    light100: 'black',
    extraLight50: 'black',
  },
  success: {
    main500: 'both',
    medium400: 'black',
    medium300: 'black',
    light200: 'black',
    light100: 'black',
    extraLight50: 'black',
  },
  warning: {
    dark600: 'black',
    main500: 'black',
    medium400: 'black',
    medium300: 'black',
    light200: 'black',
    light100: 'black',
    extraLight50: 'black',
  },
  contrast: {
    white: 'black',
  },
  neutralGray: {
    medium300: 'black',
    light200: 'black',
    light100: 'black',
    extraLight50: 'black',
  },
  text: {
    disabled: 'black',
    tint: 'black',
  },
  background: {
    white: 'black',
    extraLightGrey: 'black',
  },
};

type TContrast = 'white' | 'black' | 'both';

interface IColorCard {
  name: string;
  color: string;
  contrast?: TContrast;
}

const ColorCard: React.FC<IColorCard> = ({name, color, contrast = 'white'}) => {
  const styles = useStyles();

  const handleContrast = (contrastVariant: TContrast) => {
    const white = (
      <Text weight="medium" variant="body1" style={styles.contrastWhiteColor}>
        AAA
      </Text>
    );
    switch (contrastVariant) {
      case 'black':
        return (
          <Text
            weight="medium"
            variant="body1"
            style={styles.contrastBlackColor}
          >
            AAA
          </Text>
        );
      case 'white':
        return white;
      case 'both':
        return (
          <View style={styles.bothContrastWrapper}>
            <Text
              weight="medium"
              variant="body1"
              style={styles.contrastWhiteColor}
            >
              AAA /
            </Text>
            <Text
              weight="medium"
              variant="body1"
              style={styles.contrastBlackColor}
            >
              {' '}
              AAA
            </Text>
          </View>
        );
      default:
        return white;
    }
  };

  const borderForWhiteColor =
    color.toLowerCase() === '#ffffff' || color.toLowerCase() === '#fff'
      ? {borderWidth: 0.5, borderColor: '#000'}
      : {};

  return (
    <View style={styles.card}>
      <View
        style={[
          {backgroundColor: color, ...borderForWhiteColor},
          styles.cardTop,
        ]}
      >
        {handleContrast(contrast)}
      </View>
      <View style={styles.cardBottom}>
        <Text weight="medium">{name}</Text>
        <Text style={styles.color}>{color}</Text>
      </View>
    </View>
  );
};

const createTemplate = (
  type: 'colors' | 'components',
): ComponentStory<typeof ThemeProvider> => ({theme, ...rest}) => {
  const styles = useStyles();
  if (type === 'colors') {
    // @ts-ignore
    const themeColors: ThemeType['colors'] = theme.colors;
    const themeColorsNames = Object.keys(themeColors);
    return (
      <ThemeProvider theme={theme} {...rest}>
        <ScrollView contentContainerStyle={styles.contentWrapper}>
          {themeColorsNames.map(paletteName => {
            const colorNames = Object.keys(
              themeColors[paletteName as keyof typeof themeColors],
            );
            return (
              <View key={paletteName}>
                <Text
                  weight="semiBold"
                  variant="h1"
                  style={styles.paletteTitle}
                >
                  {paletteName}:
                </Text>
                <View style={styles.cardWrapper}>
                  {colorNames.map(colorName => {
                    return (
                      <ColorCard
                        key={colorName}
                        name={colorName}
                        //@ts-ignore
                        color={themeColors[paletteName][colorName]}
                        //@ts-ignore
                        contrast={contrastMapping[paletteName][colorName]}
                      />
                    );
                  })}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider theme={theme} {...rest}>
      <ScrollView contentContainerStyle={styles.componentWrapper}>
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
        <TextLink iconRight={<ArrowRightIconDeprecated />}>With icon</TextLink>

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

export const Colors = createTemplate('colors').bind({});
Colors.args = {
  theme: {...defaultTheme, ...customFontTheme},
};
export const Components = createTemplate('components').bind({});
Components.args = {
  theme: {...defaultTheme, ...customFontTheme},
};
