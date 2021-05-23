import React from 'react'
import { useRecoilValue } from 'recoil'

export default function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameState);
  return <div>{userName}</div>;
}
