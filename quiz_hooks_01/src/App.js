import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeaderCom from './components/common/HeaderCom';
import IndexPage from './pages/IndexPage';
import MDeletePage from './pages/member/MDeletePage';
import MListPage from './pages/member/MListPage';
import NotFound from './components/common/NotFound';
import MOnePage from './pages/member/MOnePage';

function App() {
  return (<>
    <Routes>
      <Route element={ <HeaderCom /> }>
        <Route path='/' element={ <IndexPage /> } />
        <Route path='/member'>
          <Route path='list' element={<MListPage />} />
          <Route path='one' element={<MOnePage />} />
          <Route path='delete/:id' element={<MDeletePage />} />
        </Route>
      </Route>
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  </>);
}

export default App;
