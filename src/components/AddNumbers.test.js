import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme'
import AddNumbers from './AddNumbers'

configure({ adapter: new Adapter() })

describe('AddNumbers', () => {
  let wrapper
  const mockFunc = jest.fn()

  beforeEach(() => {
    wrapper = mount(<AddNumbers />)
  })

  afterEach(() => {
    wrapper = null;
  })

  it('renders', () => {})

  it('has one AddNumber component', () => {
    const addNumber = wrapper.find("AddNumber")
    expect(addNumber).toBeDefined()
    expect(addNumber).toHaveLength(1)
    expect(addNumber.first()).toBeDefined()
  })

  it("has one button", () => {
    const button = wrapper.find("button").first()
    expect(button).toBeDefined()
  })

  it("has zero AddNumber elements after zero clicks", () => {
    const button = wrapper.find("button").first()
    expect(wrapper.find("Number")).toHaveLength(0)
  })

  it("has one AddNumber element after one click", () => {
    const button = wrapper.find("button").first()
    button.simulate("click")
    expect(wrapper.find("Number")).toHaveLength(1)
  })

  it("has ten AddNumber elements after ten clicks", () => {
    const button = wrapper.find("button").first()
    for (let n = 0; n < 10; n++) {
        button.simulate("click")
    }
    expect(wrapper.find("Number")).toHaveLength(10)
  })
})