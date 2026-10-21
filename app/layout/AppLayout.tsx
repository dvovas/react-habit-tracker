import { Outlet } from "react-router";

import s from "./AppLayout.module.scss";

export const AppLayout = () => {
  return (
    <main className={s.appMain}>
      <Outlet />
    </main>
  );
};
