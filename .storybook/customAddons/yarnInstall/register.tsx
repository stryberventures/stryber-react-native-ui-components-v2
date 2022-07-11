import React from 'react';

import { addons, types } from '@storybook/addons';
import YarnAddon from "../../../src/storybook/YarnAddon";

addons.register('yarn', () => {
    addons.add('yarn', {
        type: types.TAB,
        title: 'Yarn Install',
        route: ({ storyId, refId }) => (refId ? `/yarn/${refId}_${storyId}` : `/yarn/${storyId}`),
        match: ({ viewMode }) => viewMode === 'yarn',
        render: ({active}) => (<YarnAddon active={active} />),
    });
});
