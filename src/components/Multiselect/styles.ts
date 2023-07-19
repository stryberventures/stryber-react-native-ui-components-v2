import {createUseStyles} from '../Theme';

export default createUseStyles((theme, slideUp) => ({
  dropdown: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  layoutFloatingLabel: {
    height: 64,
  },
  content: {
    ...(!slideUp && {maxHeight: 160}),
  },
  innerContent: {},
  dropdownTextFloatingLabel: {
    lineHeight: 24,
    marginTop: 8,
  },
  labelContainerFloatingLabel: {
    top: 0,
  },
  tagsBoxContainer: {
    marginVertical: -4,
  },
  tagsBoxContainerFloatingLabel: {
    marginTop: 4,
    marginBottom: 0,
  },
  tagsBox: {
    display: 'flex',
    flexDirection: 'row',
    height: 28,
  },
  tagsBoxHideGradient: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 25,
  },
  tag: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    paddingLeft: 12,
    paddingRight: 6,
    marginRight: 4,
    borderRadius: 5,
    backgroundColor: theme.colors.primary.extraLight50,
  },
  tagText: {
    color: theme.colors.primary.main500,
    lineHeight: 22,
  },
  removeTagButton: {
    marginLeft: 8,
  },
  searchContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutralGray.light200,
  },
  searchInput: {
    borderWidth: 0,
    paddingHorizontal: 12,
    paddingVertical: 11,
  },
  searchLabel: {
    fontSize: 12,
    lineHeight: 14,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
}));
