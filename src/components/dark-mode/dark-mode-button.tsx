import DarkModeImage from "../../library/assets/icons/black-icons/dark-mode.png";
import LightModeImage from "../../library/assets/icons/white-icons/light-mode.png";
import { themStoreActions } from "../../library/store/theme-store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../library/store/typescript-hooks";
const DarkModeButton = (): JSX.Element => {
  const darkModeActive = useAppSelector((state) => state.theme.darkModeActive);
  const dispatch = useAppDispatch();
  const darkModeButtonClicked = () => {
    dispatch(themStoreActions.setDarkModeActive(!darkModeActive));

    darkModeActive
      ? document.body.setAttribute("data-dark-mode", "false")
      : document.body.setAttribute("data-dark-mode", "true");
  };

  return (
    <button
      className={`dark-light-mode-button  bg-primary-000 ${
        !darkModeActive && "dark-light-mode-button-active"
      }`}
      onClick={darkModeButtonClicked}
    >
      {darkModeActive && <img src={DarkModeImage} alt="dark mode" />}
      {!darkModeActive && <img src={LightModeImage} alt="light mode" />}
    </button>
  );
};
export default DarkModeButton;
