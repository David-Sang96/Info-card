import React, { useState } from "react";

const Create = () => {
  const defaultData = {
    id: Math.floor(Math.random() * 100),
    name: "",
    address: "",
  };
  const [info, setInfo] = useState(defaultData);
  const [data, setData] = useState([]);
  console.log(data);

  const handleCreate = (e) => {
    e.preventDefault();
    if (info.name === "") {
      setInfo(defaultData);
      return;
    } else if (info.address === "") {
      setInfo(defaultData);
      return;
    }
    setData((prev) => [...prev, info]);
    setInfo(defaultData);
  };

  return (
    <form className="container" onSubmit={handleCreate}>
      <div className="input">
        <input
          type="text"
          value={info.name}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
          placeholder="name..."
        />
        <input
          type="text"
          value={info.address}
          onChange={(e) => setInfo({ ...info, address: e.target.value })}
          placeholder="address..."
        />
        <div>
          <button type="submit">create</button>
        </div>
      </div>
      <div className="info-container">
        {data.length ? (
          data.map((item) => (
            <div key={item.id} className=" card">
              <div>{item.name}</div>
              <div>{item.address}</div>
            </div>
          ))
        ) : (
          <p style={{ fontSize: "25px", fontWeight: "bold" }}>No Info</p>
        )}
      </div>
    </form>
  );
};

export default Create;
