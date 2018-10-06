import React from 'react';
import { shallow } from "enzyme";
import ImageBlock from './imageBlock';

describe('ImageBlock component', () => {
    it('renders correctly', () => {
        const snap = shallow(<ImageBlock />);
        expect(snap).toMatchSnapshot();
    })
})