// @flow
import React from 'react'
import TaskItem from './TaskItem'

type Props = {}

export default ({ todos = [] }: Props) => (
  <ul>
    {todos.map(todo => (
      <TaskItem key={todo.id} done={todo.done}>
        {todo.title}
      </TaskItem>
    ))}
  </ul>
)
