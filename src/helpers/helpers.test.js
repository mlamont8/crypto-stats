import React from "react";
import { filterArray, fixLength } from "./index";

describe("helpers", () => {
  describe("filterArray", () => {
    const liveResults = [
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
      },
      {
        searchesThisSession: 2,
        id: 2,
        flag: "1",
        price: "0.002498",
        time: "9:01:59 PM"
      },
      {
        searchesThisSession: 2,
        id: 3,
        flag: "2",
        price: "0.002499",
        time: "9:02:59 PM"
      },
      {
        searchesThisSession: 2,
        id: 4,
        flag: "2",
        price: "0.002499",
        time: "9:03:59 PM"
      },
      {
        searchesThisSession: 2,
        id: 5,
        flag: "2",
        price: "0.002499",
        time: "9:04:59 PM"
      },
      {
        searchesThisSession: 2,
        id: 6,
        flag: "2",
        price: "0.002499",
        time: "9:05:59 PM"
      },
      {
        searchesThisSession: 2,
        id: 7,
        flag: "2",
        price: "0.002499",
        time: "9:06:59 PM"
      },
      {
        searchesThisSession: 2,
        id: 8,
        flag: "2",
        price: "0.002499",
        time: "9:07:59 PM"
      },
      {
        searchesThisSession: 2,
        id: 9,
        flag: "2",
        price: "0.002499",
        time: "9:09:59 PM"
      },
      {
        searchesThisSession: 2,
        id: 10,
        flag: "2",
        price: "0.002499",
        time: "9:09:59 PM"
      },
      {
        searchesThisSession: 2,
        id: 11,
        flag: "2",
        price: "0.002599",
        time: "9:10:59 PM"
      }
    ];

    it("should return only 10 values", () => {
      expect(filterArray(liveResults).length).toBe(10);
    });
    it("should only return results of current search", () => {
      expect(filterArray(liveResults)[0].searchesThisSession).toBe(2);
    });
  });
});

/*   Fix news length  */

describe("fixLength", () => {
  const origObj = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];
  it("should limit title in array objects", () => {
    expect(fixLength(origObj)[0].title.length).toEqual(78);
  });
});
