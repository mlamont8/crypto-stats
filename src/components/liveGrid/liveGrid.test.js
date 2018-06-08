import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import liveResults from "./liveGrid";

describe("LiveGrid", () => {
  const props = {
    liveResults: [
      {
        searchesThisSession: 1,
        id: 1,
        flag: "0",
        price: "0.002498",
        time: "8:57:59 PM"
      },
      {
        searchesThisSession: 1,
        id: 2,
        flag: "1",
        price: "0.002498",
        time: "8:58:59 PM"
      },
      {
        searchesThisSession: 1,
        id: 3,
        flag: "1",
        price: "0.002498",
        time: "8:59:59 PM"
      },
      {
        searchesThisSession: 2,
        id: 1,
        flag: "1",
        price: "0.002498",
        time: "9:00:59 PM"
      }
    ],
    usd: 7702.12,
    to: "BTC"
  };
  it("renders without crashing", () => {
    shallow(<liveResults {...props} />);
  });

  it("matches snapshot", () => {
    const wrapper = renderer.create(<liveResults {...props} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
