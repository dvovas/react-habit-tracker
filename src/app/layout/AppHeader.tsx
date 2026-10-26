import { clsx } from 'clsx';

import { HugeIcon, icons } from '@/shared/ui';

import s from './AppHeader.module.scss';
import { usePageTitle } from './usePageTitle.ts';

interface AppHeaderProps {
  onMenuClick: () => void;
}

export const AppHeader = ({
  onMenuClick,
}: AppHeaderProps) => {
  return (
    <header className={s.appHeader}>
      <button
        type="button"
        className={clsx(s.appHeaderButton)}
        onClick={onMenuClick}
      >
        <HugeIcon icon={icons.menu} size={18} />
      </button>
      <h1 className={s.appHeaderTitle}>{usePageTitle()}</h1>
      <input type="text" className={s.appHeaderInput} placeholder="Search habits..." />
      <div className={s.appHeaderProfileWrapper}>
        <div className={s.appHeaderProfileIcon} />
        <div className={s.headerProfileInfo}>
          <span className={s.profileName}>Maya Chen</span>
          <span className={s.profileSubscription}>Free plan</span>
        </div>
      </div>
    </header>
  );
};
