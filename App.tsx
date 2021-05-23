import React from 'react'
import { RecoilRoot } from 'recoil'

import TodoList from './src/TodoList'

export default function App() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}
