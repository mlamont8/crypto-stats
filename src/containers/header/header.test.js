import React from "react";
import { shallow } from "enzyme";
import { Header } from "./header";


describe("Header", () => {
  const liveResults = [{}, { flag: 4, id: 1, price: "0.0999" }]
  const wrapper = shallow(<Header liveResults={liveResults} />);

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render a `.navbar-container`", () => {
    expect(wrapper.find(".navbar-container").length).toBe(1);
  });


});
