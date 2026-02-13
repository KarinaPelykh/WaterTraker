import { List } from '../../components/List';
import icon from '/sprite.svg';
import css from './welcome.module.css';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const info = [
  {
    iconName: 'calendar',
    content: 'Habit drive',
  },
  { iconName: 'chart', content: 'View statistics' },
  { iconName: 'setting-user', content: 'Personal rate setting' },
];

export function Welcome() {
  return (
    <section
      className={clsx(
        `${css.background} tablet-ms:pt-10 desktop-m:pt-20 tablet-ms:pb-[50px] desktop-m:pb-[294px] min-h-screen w-full pt-6 pb-10`,
      )}
    >
      <div className="desktop-m:flex desktop-m:gap-[81px] desktop-m:justify-center container">
        <div className="desktop-m:pb-0 pb-10">
          <h1 className="text-5x mb-4 font-bold">Water consumption tracker</h1>
          <p className="text-3x mb-6">Record daily water intake and track</p>

          <p className="text-2x mb-3 font-bold">Tracker Benefits</p>
          <ul className="tablet-ms:flex-row tablet-ms:justify-between desktop-m:flex-col mb-6 flex flex-col gap-4">
            {info.map(({ iconName, content }) => {
              return (
                <li className="flex items-center gap-2" key={iconName}>
                  <svg className="size-8">
                    <use xlinkHref={icon + `#${iconName}`}></use>
                  </svg>
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
          <Link
            to="/signin"
            className="bg-blue shadow-secondary text-1x tablet-ms:text-2x tablet-ms:w-[300px] block w-full rounded-s px-[30px] py-2 text-center text-white"
          >
            Try tracker
          </Link>
        </div>
        <List />
      </div>
    </section>
  );
}
