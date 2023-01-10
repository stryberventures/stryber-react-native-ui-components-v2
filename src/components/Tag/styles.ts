import {createUseStyles} from '../Theme';
import {ITagProps, TTagSize} from './index';

type ITagPropsRequired = Required<ITagProps>;

type TTagSizePadding = {
  paddingHorizontal: number;
  paddingVertical: number;
};

const tagSizes: Record<TTagSize, TTagSizePadding> = {
  large: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  medium: {
    paddingHorizontal: 8,
    paddingVertical: 3.5,
  },
  small: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
};

export default createUseStyles(
  (
    theme,
    color: ITagPropsRequired['color'],
    size: ITagPropsRequired['size'],
  ) => ({
    tag: {
      backgroundColor: theme.colors[color].extraLight50,
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 100,
      ...tagSizes[size],
    },
    tagPressed: {
      paddingHorizontal: tagSizes[size].paddingHorizontal - 1,
      paddingVertical: tagSizes[size].paddingVertical - 1,
      borderWidth: 1,
      borderColor: theme.colors[color].medium300,
    },
    tagSelected: {
      backgroundColor: theme.colors[color].light200,
    },
    tagDisabled: {
      backgroundColor: theme.colors.neutralGray.light100,
    },
    leftIcon: {
      marginRight: 6,
    },
    rightIcon: {
      marginLeft: 6,
    },
    round: {
      borderRadius: 100,
    },
    square: {
      borderRadius: 5,
    },
  }),
);
