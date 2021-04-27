import 'react-native';
import React from 'react';
import Rate from '../src/components/common/rate/rate';

import renderer from 'react-test-renderer';

it('Rate component renders correctly', () => {
    renderer.create(<Rate rate="4.0" />);
});
