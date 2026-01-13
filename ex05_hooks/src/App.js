import logo from './logo.svg';
import './App.css';
import ReducerCon from './containers/ReducerCon';
import {Routes, Route} from "react-router-dom"
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';
import ListPage from './pages/ListPage';
import TestContext from './store/TestContext';
import TestPage from './pages/TestPage';
function App() {
  return (<>
    <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path='/context' element={<TestPage />}></Route>
    </Routes>
    {/* <ReducerCon /> */}
  </>);
}

export default App;
