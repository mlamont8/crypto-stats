import React from "react";
import { shallow } from "enzyme";
import { Header } from "./header";


describe("Header", () => {
  it("renders without crashing", () => {
    const snap = shallow(<Header />);
    expect(snap).toMatchSnapshot();
  });
  it("should render a `.uk-navbar-container`", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(".uk-navbar-container").length).toBe(1);
  });


});
