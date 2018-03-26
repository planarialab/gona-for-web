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

test('TaskItem component has children', () => {
  const component = renderer.create(<TaskItem done="false">task2</TaskItem>)
  const { root } = component
  expect(root.findByType('span').children).toEqual(['task2'])
})

test('TaskItem component has not childrend', () => {
  const component = renderer.create(<TaskItem done="false" />)
  const { root } = component
  expect(root.findByType('span').children).toEqual([])
})

test('TaskItem component has not done props', () => {
  const component = renderer.create(<TaskItem>task3</TaskItem>)
  const { root } = component
  expect(root.findByType('input').props.defaultChecked).toEqual('false')
})

test('TaskItem component has done pops value is true ', () => {
  const component = renderer.create(<TaskItem done="true" />)
  const { root } = component
  expect(root.findByType('input').props.defaultChecked).toEqual('true')
})

test('TaskItem component has done pops value is false', () => {
  const component = renderer.create(<TaskItem done="false" />)
  const { root } = component
  expect(root.findByType('input').props.defaultChecked).toEqual('false')
})
