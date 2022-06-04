import { shallow } from "enzyme"

import Home from "../pages/index"

configuration

describe("Home page", function () {
	test("outputs a component", () => {
		expect(shallow(<Home />)).not.toBeNull()
	})
})
