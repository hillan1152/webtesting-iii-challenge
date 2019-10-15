// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from '../dashboard/Dashboard'

import Controls from './Controls';

test('Controls Render Correctly', () => {
    render(<Controls/>)
});

test('Toggle Buttons', () => {
   const { getByText } = render(<Dashboard/>);
   getByText(/lock gate/i);
   fireEvent.click(getByText(/close gate/i));
   getByText(/open gate/i);
   expect(getByText(/lock gate/i).disabled).toBe(false);
   fireEvent.click(getByText(/lock gate/i));
   getByText(/unlock gate/i);
   expect(getByText(/open gate/i).disabled).toBe(true);

})