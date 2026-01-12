import logo from './logo.svg';
import './App.css';
import ReducerCon from './containers/ReducerCon';
import {Routes, Route} from "react-router-dom"
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';
import ListPage from './pages/ListPage';
function App() {
  return (<>
    <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegPage />} />
        <Route path="/list" element={<ListPage />} />
    </Routes>
    {/* <ReducerCon /> */}
  </>);
}

export default App;
