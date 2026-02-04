import { useEffect, useState } from "react";
//const path = "http://localhost:8080/"
const path = "http://13.209.26.170:8080/";
function App() {
  const [data, setData] = useState()
  useEffect( ()=> {
    const dataFunc = async () => {
      const res = await fetch(path);
      if( res.ok ){
        //boot 결과 값이 key,value형식이 아니므로 text()처리
        const data = await res.text();
        setData(data);
      }
    }
    dataFunc();
  })
  return (<>
    <h3>REACT</h3>
    <h3>boot ip : {data}</h3>
    </>
  );
}
export default App;