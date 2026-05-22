import useThemeStore from '../store/themeStore';

function ThemeToggle() {
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <div>
      <h3>현재 테마 : {darkMode ? 'Dark Mode' : 'Light Mode'}</h3>
      <button onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}

export default ThemeToggle;
