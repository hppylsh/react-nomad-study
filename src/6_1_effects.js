import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  //console.log("call an api - all time render");

  /*
  const iRunOnlyOnce = () => {
    console.log("i run only once.");
  };

  useEffect(iRunOnlyOnce, []);
  */

  //실행하자마자 한번만 실행(랜더)
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);

   /* keyword가 변화할 때, 관련 구문이 실행됨 */
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) console.log("SEARCH FOR", keyword);
  }, [keyword]);
 
  //counter버튼이 변화할때 관련 구문이 실행됨
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  /* 여러개도 설정가능 */
  useEffect(() => {
    console.log("I run when keyword & 'counter' changes");
  }, [keyword, counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
      <h1>{counter}</h1>
      <button onClick={onClick}> click me</button>
    </div>
  );
}

export default App;
