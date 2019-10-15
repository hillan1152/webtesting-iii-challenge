// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('It renders correctly', () => {
    render(<Display/>)
});

test('Door is Closed and Locked', () => {
    const { getByText } = render(<Display closed={true} locked={true}/>);
    const lockStatus = getByText(/locked/i);
    const doorStatus = getByText(/closed/i);
    expect(lockStatus.classList.contains('red-led')).toBe(true);
    expect(doorStatus.classList.contains('red-led')).toBe(true);
});

test('Door is Closed and Unlocked', () => {
    const { getByText } = render(<Display closed={true} locked={false}/>);
    const lockStatus = getByText(/unlocked/i);
    const doorStatus = getByText(/closed/i);
    expect(lockStatus.classList.contains('green-led')).toBe(true);
    expect(doorStatus.classList.contains('red-led')).toBe(true);
});

test('Door is Open and Unlocked', () => {
    const { getByText } = render(<Display closed={false} locked={false}/>);
    const lockStatus = getByText(/unlocked/i);
    const doorStatus = getByText(/open/i);
    expect(lockStatus.classList.contains('green-led')).toBe(true);
    expect(doorStatus.classList.contains('green-led')).toBe(true);
});

