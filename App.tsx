import React from 'react'
import { RecoilRoot } from 'recoil'

import CurrentUserInfo from './src/CurrentUserInfo'

export default function App() {
  return (
    <RecoilRoot>
      <CurrentUserInfo />
    </RecoilRoot>
  );
}
