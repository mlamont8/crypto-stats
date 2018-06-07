import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import { shallow } from "enzyme";

describe("Header", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
  });
  it("should not show form on initial render", () => {
    const wrapper = shallow(<Header firstLoad={true} />);
    expect(wrapper.find("CoinForm").exists()).toBeFalsy();
  });

  it("should show form after initial render", () => {
    const wrapper = shallow(<Header firstLoad={false} />);
    expect(wrapper.find("CoinForm").exists());
  });
});
