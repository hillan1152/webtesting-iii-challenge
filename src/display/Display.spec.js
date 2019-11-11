// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Display from './Display';

test('It renders correctly', () => {
   expect(render(<Display/>)).toMatchSnapshot();
});

test('Door is Closed if prop is True', () => {
    const mockClosed = jest.fn();
    const { getByText } = render(<Display closed={true}/>)

    fireEvent.click(getByText(/closed/i))
    expect(mockClosed).toHaveBeenCalledTimes(0);
})

test('Displays Locked if the locked prop is true', () => {
    const mockOpen = jest.fn();
    const { getByText } = render(<Display locked={true}/>)

    fireEvent.click(getByText(/locked/i))
    expect(mockOpen).toHaveBeenCalledTimes(0);
})

test('When locked or closed use the red-led class', () => {
    const { getByText } = render(<Display closed={true} locked={true}/>)
    
    expect(getByText(/locked/i).classList.contains('red-led')).toBe(true);
    expect(getByText(/closed/i).classList.contains('red-led')).toBe(true);
})

test(`When unlock or open use 'green-led' class`, () => {
    const { getByText } = render(<Display closed={false} locked={false}/>)

    expect(getByText(/unlocked/i).classList.contains('green-led')).toBe(true);
    expect(getByText(/open/i).classList.contains('green-led')).toBe(true);
})
