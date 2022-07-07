import React from 'react';

import { addons, types } from '@storybook/addons';
import YarnAddon from "../../../src/storybook/YarnAddon";

addons.register('my/tab', () => {
    addons.add('my-panel-addon/tab', {
        type: types.TAB,
        title: 'Yarn Install',
        route: ({ storyId, refId }) => (refId ? `/yarn/${refId}_${storyId}` : `/yarn/${storyId}`),
        match: ({ viewMode }) => viewMode === 'mytab',
        render: () => (<YarnAddon />),
    });
});
