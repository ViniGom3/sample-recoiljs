import { selector } from 'recoil';

import { currentUserIDState } from './atoms';

export const currentUserNameState = selector({
  key: 'CurrentUserName',
  get: async ({ get }) => {
    const response = await fetch('https://api.github.com/orgs/axios')
      .then(response => response.json())
      .then(data => data);
    return response.login;
  }
});
