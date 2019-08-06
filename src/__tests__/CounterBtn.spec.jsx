import { shallow } from "enzyme"
import React from "react"
import CounterBtn from "../CounterBtn"

describe("<CounterBth />", () => {
  it("should should render", () => {
    expect(shallow(<CounterBtn />)).toMatchSnapshot()
  })

  it("should call on press when clicked", () => {
    const onPress = jest.fn()
    shallow(<CounterBtn onPress={onPress} />).simulate("click", {
      preventDefault() {}
    })
    expect(onPress).toHaveBeenCalled()
  })
})
