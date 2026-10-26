import { useClickOutside } from '@reactuses/core';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';
import { Outlet } from 'react-router';

import { AppHeader } from './AppHeader';
import s from './AppLayout.module.scss';
import { AppSidebar } from './AppSidebar';

export const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const sidebarRef = useRef<HTMLDivElement>(null);
  useClickOutside(sidebarRef, () => {
    setIsOpen(false);
  });
  return (
    <div className={s.appLayout}>
      <AppHeader onMenuClick={handleClick} />
      <div className={clsx(s.sidebarWrapper, isOpen && s.open)}>
        <AppSidebar className={clsx(s.appSidebar, isOpen && s.open)} ref={sidebarRef} />
      </div>
      <main className={s.appMain}>
        <Outlet />
      </main>
    </div>
  );
};
