import { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { SampleButton } from './components/Button';

const onClickHandler = () => {
  alert('Making sure events are working with styled-components')
}

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <SampleButton color="#33afff" onClick={onClickHandler}>
          Testing styled-components
        </SampleButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
