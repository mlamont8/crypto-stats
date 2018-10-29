import React from "react";
import { shallow } from "enzyme";
import { Header } from "./header";


describe("Header", () => {
  const wrapper = shallow(<Header />);
  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a `.navbar-container`", () => {
    expect(wrapper.find(".navbar-container").length).toBe(1);
  });

  it("should hide center and right content on homepage", () => {
    const homepageHeader = shallow(<Header
      firstLoad />)
    expect(homepageHeader.find('.navbar-hide').length).toBe(2);
  });


});
