import React from 'react'
import Copyright from '../Copyright'
import renderer from 'react-test-renderer'

test('should render Copyright component', () => {
  const component = renderer.create(<Copyright />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  // tree.props.changeComponentState()
  // re-rendering
  // tree = component.toJSON()
  // expect(tree).toMatchSnapshot()
})
