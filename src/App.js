import TaskContainer from './components/TasksContainer';
import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <TaskContainer />
    </div>
  );
};

export default App;
