import { useEffect, useState } from "react";
/*
  cleanup function
*/
function Hello() {
  useEffect(() => {
    console.log("created :)");
    /* 이 컴포넌트가 destroy될 때 return값이 실행됨 */
    return () => console.log("destroyed :(");
    
  }, []);
  /*
  //위의 기능과 같은 기능이다.
  function byFn(){
    console.log("destroyed :(");
  }
  function hiFn(){
    console.log("created :)");
    return byFn();
  }
  useEffect(hiFn,[]);
  */
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  /* 이전 value를 받아온다음 그 반댓값을 return  */
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
