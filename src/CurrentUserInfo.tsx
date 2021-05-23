import React from 'react'
import { useRecoilValue } from 'recoil'

import { currentUserNameState } from './selectors'

export default function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameState);
  return <div>{userName}</div>;
}
