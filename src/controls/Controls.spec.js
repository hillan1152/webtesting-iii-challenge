import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {toBeDisabled} from '@testing-library/jest-dom'
import Controls from './Controls';

expect.extend({toBeDisabled});



// Test away!
test('Controls Renders Correctly', () => {
    expect(render(<Controls/>)).toMatchSnapshot();
})

test('Button for closed & locked state', () => {
    const { getByText } = render(<Controls closed={true} locked={true}/>)

    expect(getByText(/lock gate/i));
    expect(getByText(/open gate/i))
})

test('Locked and closed, unlockfires function', () => {
    const toggleLockedMock = jest.fn();
    const { getByText } = render(<Controls locked={true} closed={true} 
        toggleLocked={toggleLockedMock} />)

    const unlockButton = getByText(/^unlock gate$/i);

    fireEvent.click(unlockButton);
    expect(toggleLockedMock).toHaveBeenCalled();
});


test('open button disabled when gate is locked', () => {
    const toggleLockedMock = jest.fn();
    const toggleClosedMock = jest.fn();
    const { getByText } = render(<Controls locked={true} closed={true} 
        toggleLocked={toggleLockedMock} toggleClosed={toggleClosedMock} />)

        const openGateButton = getByText(/^open gate$/i);

        fireEvent.click(openGateButton);
        expect(openGateButton).toBeDisabled();
});


test('open button disabled when gate is locked', () => {
    const toggleLockedMock = jest.fn();
    const toggleClosedMock = jest.fn();
    const { getByText } = render(<Controls locked={false} closed={false} 
        toggleLocked={toggleLockedMock} toggleClosed={toggleClosedMock} />)

        const lockButton = getByText(/^lock gate$/i);
        
        fireEvent.click(lockButton);
        expect(lockButton).toBeDisabled();
});



// test('Button changed after close gate', async() => {
//     const { findByText } = 
//         render(<Controls closed={true} disabled={true}/>)

//     fireEvent.click(await findByText(/open gate/i));
//     expect(/toggle-btn/i).not.toHaveBeenCalled();
// })
