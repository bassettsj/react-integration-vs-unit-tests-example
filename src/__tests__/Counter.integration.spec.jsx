import { render, fireEvent, cleanup, wait } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Counter from "../Counter"
import React from "react"

describe("Counter application", () => {
  afterEach(cleanup)
  it("increments and decrements when the user clicks on each of the buttons, always showing the count", async () => {
    const { getByText, getByLabelText } = render(<Counter />)

    const increment = getByText("+")
    const decrement = getByText("-")
    const count = getByText("Times clicked: 0")

    fireEvent.click(increment)
    await wait()
    expect(count).toHaveTextContent("Times clicked: 1")
    fireEvent.click(decrement)
    expect(count).toHaveTextContent("Times clicked: 0")
  })
})
