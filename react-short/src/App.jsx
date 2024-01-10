import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./Todo/TodoForm";
import TodoItem from "./Todo/TodoItem";

function App() {
  const [todo, setTodo] = useState([]);
  let a={};
  useEffect(()=> {
    return () => {
      //언 마운트
    }
  }, []); //마운트되었을때

  useEffect(()=>{

  })  //리렌더링 될 때마다

  useEffect(()=>{
    return () => {
      //객체가 바뀌기 직전에
    }
  }, [a]); //객체가 바뀌었을때

  const onSubmit = (newTodo)  => {
    const nextTodo = [...todo];
    nextTodo.push({title: newTodo, completed: false, id: Math.random()})
    setTodo(nextTodo);
  };
  return (
    <>
      {/*Fregment*/}
      <div className="app">TODO</div>
      <div className="app">
        {todo.length === 0 ? (
          <div>
            <div>할 일을 추가해보세요.</div>
            <TodoForm onSubmit={onSubmit}/>
          </div>
        ) : (
          <>
            {todo.map((ai, i) => (
              <TodoItem item={ai} key={ai.id} setTodo={setTodo} index={i}/>
            ))}
            <TodoForm onSubmit={onSubmit}/>
          </>
        )}
      </div>
    </>
  );
}

export default App;
