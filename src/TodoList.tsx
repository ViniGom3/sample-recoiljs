import React from 'react'
import { useRecoilValue } from 'recoil'

import TodoItemCreator from './TodoItemCreator'
import TodoListFilters from './TodoListFilters'
import TodoListStats from './TodoListStats'
import TodoItem from './TodoItem'

import { todoListState } from './atoms'
import { filteredTodoListState } from './selectors'

export default function TodoList() {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}
