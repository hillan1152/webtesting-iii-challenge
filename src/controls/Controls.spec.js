import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls';

// Test away!
test('Controls Renders Correctly', () => {
    expect(render(<Controls/>)).toMatchSnapshot();
})

