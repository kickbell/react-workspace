import logo from './logo.svg';
import './App.css';
import Test3 from './aaa';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
//addEventListener(이벤트, 함수이름)
function App() {
  const num = 1000;
  console.log("return값이 화면에 표현되는 값")
  const click = () => {
    alert('click event');
  }
  return (
      <>
        num : { num }
        <Header test="연습중" number={num} />
        <Nav name="홍길동" addr="산골짜기" />
        <Main tel="전화번호" nick="도적" myClick = {click} />

        <div>내용 바꾸기</div>
        <Test3 />
      </>
    );
}
export default App;
