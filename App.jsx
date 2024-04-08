import Tode from "./component/Tode.jsx";
import Firstcomponent from "./component/Firstcomponent.jsx";
import Secondcompo from "./component/Secondcompo.jsx";
import "./App.css"
import Items from "./component/Items.jsx";
import { useState } from "react";
import Welcome from "./component/Welcome.jsx";
function App() {



    
  const arr = [
  { name: 'Task 1 go to collage', duedate: '2024-04-08' },
  { name: 'Task 2  go to gym', duedate: '2024-04-09' },
  { name: 'Task 3', duedate: '2024-04-10' },
  { name: 'Task 4', duedate: '2024-04-11' },
  { name: 'Task 5', duedate: '2024-04-12' }
];

    const [todolist,settodo]=useState(arr)


    const addlist = (name, duedate) => {
      const newTodoList = [...todolist, { name: name, duedate: duedate }];
      settodo(newTodoList);
    };

    const deleteitme = (namee) => {

  const newlist = todolist.filter((a) => a.name !== namee);
  
  settodo(newlist);
}

  return (

    

    <center className="Container">

         <Tode></Tode>
         {todolist.length==0&&<Welcome/>}
         <Firstcomponent addlist={addlist}></Firstcomponent>
        <Items todolist={todolist} handlerdelete={deleteitme}></Items>
         
         

         
    </center>
    

    
      
    

      
  );
}

export default App
