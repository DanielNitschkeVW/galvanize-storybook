import React from 'react'
import renderer from 'react-test-renderer'
import ShowDate from './ShowDate'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme'

test("ShowDate renders consistently", () => {
    const tree = renderer.create(<ShowDate />).toJSON();
    expect(tree).toMatchSnapshot();
})


// configure({adapter: new Adapter()})

// describe('MyComponent', () => {
//     it('calls getData when the component loads', () => {
//       const getData = jest.fn()
  
//       const wrapper = shallow(<ShowDate sneakyRefresh={getData} />)
  
//       expect(getData.mock.calls.length).toBe(1)
//     })
//   })