import Nav from './component/Nav/Nav';
import Main from './component/Main/Main';
import './App.css';

const App = ({ nav, data }) => {
  return (
    <div>
      <Nav nav={nav} />
      <Main data={data} />
      </div>
  );
};

export default App;
