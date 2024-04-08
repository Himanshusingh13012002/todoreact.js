import React from 'react'
import Secondcompo from "./Secondcompo.jsx";


function Items({todolist,handlerdelete}) {
  return (
    <div className="item">

        {
            todolist.map(obj=> <Secondcompo name={obj.name} date={obj.duedate} handlerdelete={handlerdelete}></Secondcompo>)
        
        }
    
    </div>

  );
}

export default Items