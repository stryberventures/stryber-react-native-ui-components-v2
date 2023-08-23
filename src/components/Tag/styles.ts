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
    paddingVertical: 4,
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
