import type { RouteObject } from 'react-router';

import { Route } from '@/shared/config/route.ts';
import { getGreeting } from '@/shared/lib/date';

import { AppLayout } from './layout/AppLayout.tsx';
import { PageHabits } from './pages/PageHabits.tsx';
import { PageSettings } from './pages/PageSettings.tsx';
import { PageStatistics } from './pages/PageStatistics.tsx';
import { PageToday } from './pages/PageToday.tsx';

export const routes: RouteObject[] = [
  {
    Component: AppLayout,
    children: [
      { index: true, Component: PageToday, handle: { title: () => `${getGreeting() + ', Maya'}` } },
      { path: Route.HABITS, Component: PageHabits, handle: { title: 'Habits' } },
      { path: Route.STATISTICS, Component: PageStatistics, handle: { title: 'Statistics' } },
      { path: Route.SETTINGS, Component: PageSettings, handle: { title: 'Settings' } },
    ],
  },
];
