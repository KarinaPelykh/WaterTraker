import icon from '/sprite.svg';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { info } from './welcome.constants';
import css from './welcome.module.css';
import { List } from '../../components/List';

export function Welcome() {
  return (
    <section
      className={clsx(
        `${css.background} tablet-ms:pt-10 desktop-m:pt-20 tablet-ms:pb-[50px] desktop-m:pb-[294px] relative overflow-hidden pt-6 pb-10`,
      )}
    >
      <div
        className={clsx(
          `${css.bottle}`,
          'desktop-m:hidden absolute right-0 bottom-0 z-10 h-[386px] w-[518px]',
        )}
      />
      <div className="desktop-m:flex desktop-m:gap-[81px] desktop-m:justify-center container">
        <div className="desktop-m:pb-0 pb-10">
          <h1 className="text-5x mb-4 font-bold">Water consumption tracker</h1>
          <p className="text-3x tablet-ms:w-full mb-6 w-[197px]">
            Record daily water intake and track
          </p>

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
            className="bg-blue shadow-secondary text-1x tablet-ms:text-2x tablet-ms:w-[300px] block h-9 w-full rounded-s px-[30px] py-2 text-center text-white"
          >
            Try tracker
          </Link>
        </div>
        <List />
      </div>
    </section>
  );
}
//  <div
//    className={clsx(
//      `${css.background}`,
//      'absolute right-0 bottom-0 -z-20 h-auto w-full',
//    )}
//  />;
