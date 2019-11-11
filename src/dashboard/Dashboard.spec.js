// Test away
import React from 'react';
import { render } from '@testing-library/react';

import Display from '../display/Display';
import Controls from '../controls/Controls';

test('Shows the Controls and Display', () => {
    render(<Display/>, <Controls/>)
})