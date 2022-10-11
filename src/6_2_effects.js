import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    /* 이 컴포넌트가 destroy될 때 return값이 실행됨 */
    return () => console.log("destroyed :(");
  }, []);
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
