import React, {useContext, useState} from 'react';

export type TTagValue = number | string;
type TSelectedTags = TTagValue[];

export interface ITagGroupContext {
  selectedTags?: TSelectedTags;
  addTag: (tagValue: TTagValue) => void;
  removeTag: (tagValue: TTagValue) => void;
}

const defaultTagGroupContextValues: ITagGroupContext = {
  selectedTags: undefined,
  addTag: () => {},
  removeTag: () => {},
};

export const TagGroupContext: React.Context<ITagGroupContext> = React.createContext(
  defaultTagGroupContextValues,
);

interface ITagGroupProps {
  selectedTags?: TSelectedTags;
  onChange?: (selectedTags: any) => void;
}

const TagGroup: React.FC<ITagGroupProps> = ({
  selectedTags: initialSelectedTags,
  onChange,
  children,
}) => {
  const [selectedTags, setSelectedTags] = useState(initialSelectedTags || []);

  const handleAddTag: ITagGroupContext['addTag'] = tagValue => {
    const newSelectedTagsArr = [...selectedTags, tagValue];
    setSelectedTags(newSelectedTagsArr);
    onChange && onChange(newSelectedTagsArr);
  };
  const handleRemoveTag: ITagGroupContext['removeTag'] = tagValue => {
    const newSelectedTagsArr = [
      ...selectedTags.filter(selectedTag => selectedTag !== tagValue),
    ];
    setSelectedTags(newSelectedTagsArr);
    onChange && onChange(newSelectedTagsArr);
  };

  return (
    <TagGroupContext.Provider
      value={{selectedTags, addTag: handleAddTag, removeTag: handleRemoveTag}}
    >
      {children}
    </TagGroupContext.Provider>
  );
};

export const useTagGroupContext = (value: TTagValue) => {
  const {selectedTags, addTag, removeTag} = useContext(TagGroupContext);

  return {
    isTagSelected: selectedTags && selectedTags.includes(value),
    addTag,
    removeTag,
  };
};

export default TagGroup;
