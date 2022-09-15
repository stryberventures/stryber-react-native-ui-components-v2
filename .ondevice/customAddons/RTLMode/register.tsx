import React from 'react';
import addons from '@storybook/addons';
import RtlAddon from "../../../src/storybook/RTLAddon";

addons.register('storybook-addon-rtl', () => {
    const channel = addons.getChannel();
    addons.addPanel('storybook-addon-rtl/rtl-panel', {
        title: 'RTL',
        render: ({ active }) => <RtlAddon active={active} />,
        paramKey: 'rtl',
    });
});
