import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);

  //console.log(toDo);
  //form 자동 submit하며 refresh되는 것 막기

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    console.log(toDo);
    setToDo("");
    // array 더하기
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
        <button>Add to Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
