import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

// Test away!
test('Controls Renders Correctly', () => {
    expect(render(<Controls/>)).toMatchSnapshot();
})

test('Button for closed & locked state', () => {
    const { getByText } = render(<Controls closed={true}/>)

    expect(getByText(/lock gate/i));
    expect(getByText(/open gate/i))
})

test('Toggle close works', () => {
    const toggleClosedGate = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleClosedGate}  locked={false}/>)

    fireEvent.click(getByText(/close gate/i));
    expect(toggleClosedGate).toHaveBeenCalled();
})

test('Button changed after close gate', () => {
    const { getByText } = 
        render(<Controls locked={false}/>)

    fireEvent.click(getByText(/close gate/i));
    expect(getByText(/lock gate/i))
    expect(getByText(/close gate/i))
})
