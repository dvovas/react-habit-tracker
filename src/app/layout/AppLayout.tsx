import { Outlet } from 'react-router';

import s from './AppLayout.module.scss';

export const AppLayout = () =>
  (
    <main className={s.appMain}>
      <Outlet />
    </main>
  )
;
