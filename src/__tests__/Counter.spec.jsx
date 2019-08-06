import { shallow } from "enzyme"
import React from "react"
import Counter from "../Counter"

describe("<Counter />", () => {
  it("should should render", () => {
    expect(shallow(<Counter />)).toMatchSnapshot()
  })

  it("should increment", () => {
    const instance = shallow(<Counter />).instance()
    instance.increment()
    expect(instance).toHaveProperty("state.count", 1)
  })

  it("should decrement", () => {
    const instance = shallow(<Counter />).instance()
    instance.decrement()
    expect(instance).toHaveProperty("state.count", -1)
  })
})
