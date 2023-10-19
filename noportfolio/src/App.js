import './App.css';
import Introduction from './components/Introduction/Introduction.lazy';
import WorkSummary from './components/WorkSummary/WorkSummary';
import PersonalProjects from './components/PersonalProjects/PersonalProjects.lazy';

function App() {
  return (
    <div className='Wrapper' >
      <div className='IntroductionWrapper'>
        <Introduction />
      </div>
      <div className='WorkWrapper'>
        <WorkSummary/>
      </div>
      <div className='ProjectsWrapper'>
        <PersonalProjects/>
      </div>
      
    </div>
  );
}

export default App;
