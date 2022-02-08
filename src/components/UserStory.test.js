import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme'
import UserStory from './UserStory'

configure({ adapter: new Adapter() })

describe('UserStory', () => {
  let wrapper
  const mockFunc = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<UserStory updateStatus={mockFunc} />)
  })

  afterEach(() => {
    wrapper = null;
  })

  it('renders two buttons', () => {
    const buttons = wrapper.find("button")
    expect(buttons).toHaveLength(2)
  })

  it('has props for the first button', () => {
    const button = wrapper.find("button").first()
    expect(button.props()).toBeDefined()
  })

  it('has props for the last button', () => {
    const button = wrapper.find("button").last()
    expect(button.props()).toBeDefined()
  })

  it('has onClick for the first button', () => {
    const button = wrapper.find("button").first()
    expect(button.props().onClick).toBeDefined()
  })

  it('has onClick for the last button', () => {
    const button = wrapper.find("button").last()
    expect(button.props().onClick).toBeDefined()
  })

  it('has onClick for the first button of type function', () => {
    const button = wrapper.find("button").first()
    const onClick = button.props().onClick
    expect(typeof onClick).toBe("function")
  })

  it('has onClick for the last button of type function', () => {
    const button = wrapper.find("button").last()
    const onClick = button.props().onClick
    expect(typeof onClick).toBe("function")
  })

  it('can click the first button', () => {
    const button = wrapper.find("button").first()
    expect(mockFunc).not.toHaveBeenCalled()
    button.simulate("click")
    expect(mockFunc).toHaveBeenCalled()
    expect(mockFunc).toHaveBeenCalledWith("delivered")
  })

  it('can click the last button', () => {
    const button = wrapper.find("button").last()
    expect(mockFunc).not.toHaveBeenCalled()
    button.simulate("click")
    expect(mockFunc).toHaveBeenCalled()
    expect(mockFunc).toHaveBeenCalledWith("finished")
  })
})