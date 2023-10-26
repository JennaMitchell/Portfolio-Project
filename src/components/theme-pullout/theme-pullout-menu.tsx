import { useAppSelector } from "../../library/store/typescript-hooks";
import { MouseEvent } from "react";
const ThemePulloutMenu = (): JSX.Element => {
  const themeMenuActive = useAppSelector(
    (state) => state.theme.themeMenuActive
  );
  const themeColors = ["red", "orange", "yellow", "lime", "blue", "purple"];

  const pulloutMenuButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
    const possibleNullTargetElement = event.target;

    if (possibleNullTargetElement) {
      const buttonElement = possibleNullTargetElement as HTMLButtonElement;
      const color = buttonElement.dataset.themeColor;
      changeSubThemeHandler(`${color}`);
    }
  };

  const changeSubThemeHandler = (newTheme: string) => {
    document.body.setAttribute("data-sub-theme", newTheme);
  };

  return (
    <div
      className={`theme-pullout-menu bg-primary-000 ${
        themeMenuActive && "theme-pullout-menu-active"
      }`}
    >
      {themeColors.map((entry) => {
        return (
          <button
            data-theme-color={entry}
            onClick={pulloutMenuButtonHandler}
          ></button>
        );
      })}
    </div>
  );
};
export default ThemePulloutMenu;
