// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Controls from './Controls';

test('Controls Render Correctly', () => {
    render(<Controls/>)
});

test('Toggle Lock Gate', ({ closed, locked, toggleLocked}) => {
    const { getTextBy } = render(<Controls disabled={!closed} onClick={toggleLocked}/>)
    const doorStatus = getTextBy(/locked/i)
    const openStatus = getTextBy(/closed/i)
    expect(doorStatus.classList.contains('Lock Gate')).toBe(true);
    expect(openStatus.classList.contains('Close Gate')).toBe(true);
})