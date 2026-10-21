import type { RouteObject } from 'react-router';

import { AppLayout } from './layout/AppLayout.tsx';

export const routes: RouteObject[] = [
  {
    Component: AppLayout,
    children: [],
  },
];
