import css from './App.module.css';
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <ContentHooks />
      <Sidebar />
    </div>
  );
}

export default App;