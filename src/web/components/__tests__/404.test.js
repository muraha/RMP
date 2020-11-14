import React from 'react'
import toJson from 'enzyme-to-json'
import { cleanup } from '@testing-library/react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Page404 from '../404/Page404'

configure({ adapter: new Adapter() })

afterEach(cleanup)
describe('404 Page', () => {
  it('snapshot', () => {
    const wrapper = shallow(<Page404 />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
