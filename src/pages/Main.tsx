import { List } from "../components/List";
import icon from "/sprite.svg";
import css from "./main.module.css";
const info = [
  {
    iconName: "calendar",
    content: "Habit drive",
  },
  { iconName: "chart", content: "View statistics" },
  { iconName: "setting-user", content: "Personal rate setting" },
];

export function Main() {
  return (
    <section className={css.background}>
      <div className="desktop-m:flex desktop-m:justify-evenly desktop-m:items-center container">
        <div className="desktop-m:mr-[81px] pb-10">
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
          <button className="bg-blue shadow-secondary w-[280px] rounded-s px-[30px] py-2 text-white">
            Try tracker
          </button>
        </div>
        <List />
      </div>
    </section>
  );
}
