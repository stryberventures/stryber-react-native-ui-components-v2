import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  dropdown: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  content: {
    maxHeight: 160,
  },
  innerContent: {},
  tagsBoxContainer: {
    marginVertical: -4,
  },
  tagsBox: {
    display: 'flex',
    flexDirection: 'row',
    height: 32,
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
    paddingLeft: 12,
    paddingRight: 6,
    marginRight: 4,
    borderRadius: 5,
    backgroundColor: theme.colors.primary.extraLight50,
  },
  tagText: {
    color: theme.colors.primary.main500,
    lineHeight: 24,
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
}));
