import React, { Suspense } from 'react'
import { RecoilRoot } from 'recoil'

import CurrentUserInfo from './src/CurrentUserInfo'

export default function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <CurrentUserInfo />
      </Suspense>
    </RecoilRoot>
  );
}
