import React from "react";
import { shallow } from "enzyme";
import { SelectorModal } from "./selectorModal";

describe("Selector Modal", () => {
    const wrapper = shallow(<SelectorModal />);

    it("renders without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    });
})