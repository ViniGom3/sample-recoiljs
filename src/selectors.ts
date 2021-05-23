import { selector } from 'recoil';

import { currentUserIDState } from './atoms';

const tableOfUsers = [
  {
    id: 1,
    name: 'Lucas'
  },
  {
    id: 2,
    name: 'Lucas Vinicius'
  },
  {
    id: 3,
    name: 'Vinicius'
  }
];

export const currentUserNameState = selector({
  key: 'CurrentUserName',
  get: ({ get }) => {
    return tableOfUsers[get(currentUserIDState)].name;
  }
});
