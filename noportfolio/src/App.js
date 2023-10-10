import logo from './logo.svg';
import './App.css';
import styles from './App.css';
import Introduction from './components/Introduction/Introduction.lazy';
import WorkSummary from './components/WorkSummary/WorkSummary';
import PersonalProjects from './components/PersonalProjects/PersonalProjects.lazy';

function App() {
  return (
    <div className={styles.resumeLayout} >
      <Introduction/>
      <WorkSummary />
      <PersonalProjects />
    </div>
  );
}

export default App;
