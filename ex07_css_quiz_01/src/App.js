import logo from './logo.svg';
import './App.css';
import Test03 from './components/test/TestCom03';
import { Route, Routes } from 'react-router-dom';
import LoginCon from './containers/LoginCon';
import IndexCon from './containers/IndexCon';
import RegCon from './containers/RegCon';
import ListCon from './containers/ListCon';
import InfoCom from './components/InfoCom';
import InfoCon from './containers/InfoCon';
import HeaderCom from './components/common/HeaderCom';
import ModifyCon from './containers/ModifyCon';
import PostListCon from './containers/post/PostListCon';
import PostDetailCon from './containers/post/PostDetailCon';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initState } from './redux/authSlice';
import { initInput } from './redux/inputSlice';

function App() {
  return (<>
    <Routes>
      <Route element={<HeaderCom />}>
        <Route path='/' element={<IndexCon />}/>
        <Route path='/login' element={<LoginCon />}/>
        <Route path='/register' element={<RegCon />}/>
        <Route path='/list' element={<ListCon />}/>
        <Route path='/info/:username' element={<InfoCon />}/>
        <Route path='/modify/:username' element={<ModifyCon />}/>

        <Route path='/post'>
          <Route path='list' element={<PostListCon />}/>
          <Route path='detail/:id' element={<PostDetailCon />}/>
        </Route>

      </Route>
    </Routes>
  </>);
}

export default App;
