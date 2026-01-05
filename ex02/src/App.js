import logo from './logo.svg';
import './App.css';
import StateTest01 from './StateTest01';
import Ex01Con from './containers/Ex01Con';
import Quiz01Con from './containers/Quiz01Con';
import Quiz02Con from './containers/Quiz02Con';
import Ex02Con from './containers/Ex02Con';
import Ex03Con from './containers/Ex03Con';
import Quiz03Con from './containers/Quiz03Con';
function App() {
  return (<>
  <Quiz03Con />
  {/*
  <Ex03Con />
    <Ex02Con />
    <hr></hr>
    <Quiz02Con />
    <hr></hr>
    <Quiz01Con />

    <hr></hr>
      <Ex01Con />
      <hr />
      <StateTest01 />
     */}
  </>);
}

export default App;
