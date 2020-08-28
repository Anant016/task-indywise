// Multiple test Grouping
describe("All Number tests", () => {});

// 1. React-Dom

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// 2. Shallow - Unlike react-dom, it doesn't go deeper

// import React from "react";
// import { shallow } from "enzyme";
// import App from "./App";
// it("renders without crashing", () => {
//   shallow(<App />);
//   // const welcome = <h2>Welcome to React</h2>;
//   // expect(wrapper.contains(welcome)).toEqual(true);
// });

// 3. Snapshot

// import React from "react";
// import renderer from "react-test-renderer";
// import App from "./App";

// test("App snapshot test", () => {
//   const component = renderer.create(<App />);
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
