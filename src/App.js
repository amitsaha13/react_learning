import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionCLick from './components/FunctionCLick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Amit" fathersName="Akhil Saha">
        <p>This is child props ...</p>
      </Greet>
      <Greet name="Avik" />
      <Greet name="Shuddo" /> 
      <Message />  
      <Counter /> */}
      <FunctionCLick />
      <ClassClick />

    </div>
  );
}

export default App;
