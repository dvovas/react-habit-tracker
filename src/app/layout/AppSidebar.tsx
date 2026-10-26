import { clsx } from 'clsx';
import type { Ref } from 'react';

import { HugeIcon, sidebarIcons } from '@/shared/ui';

import s from './AppSidebar.module.scss';
interface AppSidebarProps {
  className: string;
  ref: Ref<HTMLDivElement> | null;
}
import { NavLink } from 'react-router';

import { Route } from '@/shared/config/route';

import logo from './logo.svg';
import logoTablet from './logo-tablet.svg';

const navigation = [
  { name: 'Today', path: Route.TODAY, icon: sidebarIcons.today },
  { name: 'Habits', path: Route.HABITS, icon: sidebarIcons.habits },
  { name: 'Statistics', path: Route.STATISTICS, icon: sidebarIcons.statistics },
  { name: 'Settings', path: Route.SETTINGS, icon: sidebarIcons.settings },
];

export const AppSidebar = ({ className, ref }: AppSidebarProps) => {
  return (
    <div className={clsx(s.sidebarWrapper, className)} ref={ref}>
      <div className={s.railList}>
        <picture className={s.sidebarLogo}>
          <source srcSet={logoTablet} media="(768px <= width  < 1280px)" />
          <img src={logo} alt="logo" />
        </picture>
        <nav className={s.sidebarNavigation}>
          {navigation.map((link) => (
            <NavLink key={link.name} to={link.path} className={clsx(s.railItem, s.sidebarLink)}>
              <HugeIcon icon={link.icon} className={s.sidebarLinkIcon} />
              <span className={clsx(s.sidebarLinkText)}>{link.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};
