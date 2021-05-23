import React, { useState } from 'react';
import { render } from 'react-dom';
import { RecoilRoot, atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import App from './App'

render(<App />, document.getElementById('root'));
