import WhitePaintbrushIcon from "../../library/assets/icons/white-icons/paintbrush-white.png";
import BlackPaintbrushIcon from "../../library/assets/icons/black-icons/paintbrush-black.png";

import {
  useAppDispatch,
  useAppSelector,
} from "../../library/store/typescript-hooks";
import {
  themeStoreSlice,
  themStoreActions,
} from "../../library/store/theme-store";
const ThemePulloutButton = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const themeMenuActive = useAppSelector(
    (state) => state.theme.themeMenuActive
  );
  const darkModeActive = useAppSelector((state) => state.theme.darkModeActive);

  const themeButtonClickHandler = () => {
    dispatch(themStoreActions.setThemeMenuActive(!themeMenuActive));
  };

  return (
    <button
      className={`theme-pullout-button ${
        themeMenuActive && "theme-pullout-button-active"
      }
      ${themeMenuActive ? "bg-primary-1000" : "bg-primary-000"}
      `}
      onClick={themeButtonClickHandler}
    >
      {!themeMenuActive && darkModeActive && (
        <img src={BlackPaintbrushIcon} alt="paint brush" />
      )}
      {themeMenuActive && darkModeActive && (
        <img src={WhitePaintbrushIcon} alt="paint brush" />
      )}

      {!themeMenuActive && !darkModeActive && (
        <img src={WhitePaintbrushIcon} alt="paint brush" />
      )}
      {themeMenuActive && !darkModeActive && (
        <img src={BlackPaintbrushIcon} alt="paint brush" />
      )}
    </button>
  );
};
export default ThemePulloutButton;
