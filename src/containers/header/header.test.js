import React from "react";
import { shallow } from "enzyme";
import Header from "./header";


describe("Header", () => {
  it("renders without crashing", () => {
    const snap = shallow(<Header />);
    expect(snap).toMatchSnapshot();
  });
  it("should not show form on initial render", () => {
    const wrapper = shallow(<Header firstLoad />);
    expect(wrapper.find("CoinForm").exists()).toBeFalsy();
  });

  it("should show form after initial render", () => {
    const wrapper = shallow(<Header firstLoad={false} />);
    expect(wrapper.find("CoinForm").exists());
  });
});
