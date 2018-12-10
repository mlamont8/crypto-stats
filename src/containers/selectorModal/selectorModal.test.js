import React from "react";
import { shallow } from "enzyme";
import { SelectorModal } from "./selectorModal";

describe("Selector Modal", () => {
    const currentArray = [0, 1];
    const component = shallow(<SelectorModal currentArray={currentArray} modalStatus={jest.fn} />)

    it("renders without crashing", () => {
        expect(component).toMatchSnapshot();
    });
})