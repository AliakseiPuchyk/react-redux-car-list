import React from "react";
import { shallow } from "enzyme";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Row from "../components/Row";

configure({ adapter: new Adapter() });

describe("List of Components", () => {
    it("should render correctly ROW component", () => {
        const output = shallow(<Row key="key" row="row" />);
        expect(output).toMatchSnapshot();
    });
});
