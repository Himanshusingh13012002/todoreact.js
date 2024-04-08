import React, { useState } from 'react';

function Firstcomponent({ addlist }) {
  const [name, setname] = useState("");
  const [date, setdate] = useState("");

  const adddate = (e) => {
    setdate(e.target.value);
  };

  const addname = (e) => {
    setname(e.target.value);
  };

  const addhandler = () => {
    addlist(name, date);
    setname("");
    setdate("");
  };

  return (
    <div className="container ibtn">
      <div className="row">
        <div className="col-sm-4">
          <input type="text" placeholder="Enter todo here" value={name} onChange={addname} />
        </div>
        <div className="col-sm-4">
          <input type="date" value={date} onChange={adddate} />
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-primary" onClick={addhandler}>add</button>
        </div>
      </div>
    </div>
  );
}

export default Firstcomponent;
