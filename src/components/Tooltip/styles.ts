import {createUseStyles} from '../Theme';
import {IChildPosition, ITooltipSize} from './index';

const TRIANGLE_OFFSET = 12;
const TOOLTIP_OFFSET = 35;

export default createUseStyles(
  (
    theme,
    childPosition: IChildPosition,
    tooltipSize: ITooltipSize,
    withCloseButton?: boolean,
    withText?: boolean,
  ) => ({
    tooltip: {
      position: 'absolute',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      backgroundColor: theme.colors.background.white,
      zIndex: 0,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 8.3,
      elevation: 10,
      alignSelf: 'flex-start',
    },
    titleWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: withText ? 5 : 0,
    },
    title: {
      color: theme.colors.text.secondary,
      marginBottom: withCloseButton ? 0 : 4,
    },
    text: {
      color: theme.colors.text.tint,
    },
    overlay: {
      width: '100%',
      height: '100%',
    },
    top: {
      top: childPosition.top - tooltipSize.height - TRIANGLE_OFFSET,
      left: childPosition.left - (tooltipSize.width - childPosition.width) / 2,
    },
    topStart: {
      top: childPosition.top - tooltipSize.height - TRIANGLE_OFFSET,
      right: childPosition.left + childPosition.width - TOOLTIP_OFFSET,
    },
    topEnd: {
      top: childPosition.top - tooltipSize.height - TRIANGLE_OFFSET,
      left: childPosition.left + childPosition.width - TOOLTIP_OFFSET,
    },
    bottom: {
      top: childPosition.top + childPosition.height + TRIANGLE_OFFSET,
      left: childPosition.left - (tooltipSize.width - childPosition.width) / 2,
    },
    bottomStart: {
      top: childPosition.top + childPosition.height + TRIANGLE_OFFSET,
      right: childPosition.left + childPosition.width - TOOLTIP_OFFSET,
    },
    bottomEnd: {
      top: childPosition.top + childPosition.height + TRIANGLE_OFFSET,
      left: childPosition.left + childPosition.width - TOOLTIP_OFFSET,
    },
    left: {
      top: childPosition.top - (tooltipSize.height - childPosition.height) / 2,
      left: childPosition.left - tooltipSize.width - TRIANGLE_OFFSET,
    },
    leftStart: {
      top: childPosition.top - tooltipSize.height + TOOLTIP_OFFSET,
      left: childPosition.left - tooltipSize.width - TRIANGLE_OFFSET,
    },
    leftEnd: {
      top: childPosition.top + childPosition.height - TOOLTIP_OFFSET,
      left: childPosition.left - tooltipSize.width - TRIANGLE_OFFSET,
    },
    right: {
      top: childPosition.top - (tooltipSize.height - childPosition.height) / 2,
      left: childPosition.left + childPosition.width + TRIANGLE_OFFSET,
    },
    rightStart: {
      top: childPosition.top - tooltipSize.height + TOOLTIP_OFFSET,
      left: childPosition.left + childPosition.width + TRIANGLE_OFFSET,
    },
    rightEnd: {
      top: childPosition.top + childPosition.height - TOOLTIP_OFFSET,
      left: childPosition.left + childPosition.width + TRIANGLE_OFFSET,
    },
  }),
);
