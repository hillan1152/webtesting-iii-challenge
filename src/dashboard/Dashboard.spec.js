// Test away
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer'



import Dashboard from './Dashboard';


describe('<Dashboard/>', () => {
    it('Should match snapshot', () => {
        const dash = renderer.create(<Dashboard/>).toJSON();
        expect(dash).toMatchSnapshot();
    })
})

test('They are working', () => {
    const { getByText } = render(<Dashboard/>);
    getByText(/open/i);
    getByText(/close gate/i)
})
