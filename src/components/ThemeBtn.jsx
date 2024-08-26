import { useDispatch, useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../features/theme/themeSlice";


const ThemeBtn = () => {

    const dispatch = useDispatch();
    const themeMode = useSelector(state => state.themeReducer.themeMode);
    console.log(themeMode)

    const themeToggle = (e) => {
        // if the currentTarget is checked then do the darkTheme otherwise lightTheme
        const status = e.currentTarget.checked;
        if (status) {
            dispatch(lightTheme())
        }
        else {
            dispatch(darkTheme())
        }
    }

    return (
        <label
            className="inline-flex items-center cursor-pointer"
            >
                <input 
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={themeMode === "light"}
                onChange={(e) => themeToggle(e)}
                />
                <div
                className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:contents-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                >
                </div>
                <span className="ml-3 text-sm font-bold dark:text-white text-gray-900">Toggle Theme</span>
            </label>
    )
}

export default ThemeBtn;