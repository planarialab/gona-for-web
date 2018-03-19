import React from 'react'
import TaskItem from '../TaskItem'
import renderer from 'react-test-renderer'

test('should render TaskItem component', () => {
  const component = renderer.create(<TaskItem done="false">task1</TaskItem>)
  const { root } = component
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
  expect(root.findByType('span').children).toEqual(['task1'])
})
