import { selector } from 'recoil';

import { currentUserIDState } from './atoms';

const tableOfUsers = [
  {
    id: 1,
    name: 'Lucas Vinicius'
  },
  {
    id: 2,
    name: 'Vinicius Lucas'
  },
  {
    id: 3,
    name: 'Lucas'
  }
];

export const currentUserNameState = selector({
  key: 'CurrentUserName',
  get: ({ get }) => {
    return tableOfUsers[get(currentUserIDState)].name;
  }
});
