import React from 'react';

function Secondcompo({name,date,handlerdelete}) {
  return (
    <div className="container ibtn"> {/* Use className instead of class */}
      <div className="row">
        <div className="col-sm-4">
          {name}
        </div>
        <div className="col-sm-4">
          {date}
        </div>
        <div className="col-sm-2">
        <button type="button" class="btn btn-danger" onClick={()=>handlerdelete(name)}>Delete</button>

        </div>
      </div>
    </div>
  );
}

export default Secondcompo;
