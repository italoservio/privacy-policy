import {DataCollect} from './pages/data-collect';
import {DataProtection} from './pages/data-protection';
import {Finish} from './pages/finish';
import {Rights} from './pages/rights';
import {Start} from './pages/start';

export const routes = [
  {
    path: '/',
    element: <Start />
  },
  {
    path: '/data-collect',
    element: <DataCollect />
  },
  {
    path: '/data-protection',
    element: <DataProtection />
  },
  {
    path: '/rights',
    element: <Rights />
  },
  {
    path: '/finish',
    element: <Finish />
  },
];
