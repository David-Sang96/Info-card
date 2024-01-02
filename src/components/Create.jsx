import React, { useRef, useState } from "react";

const Create = () => {
  // const defaultData = {
  //   id: Math.floor(Math.random() * 100),
  //   name: "",
  //   address: "",
  // };
  // const [info, setInfo] = useState(defaultData);
  const [data, setData] = useState([]);
  const nameInput = useRef();
  const addressInput = useRef();

  const handleCreate = (e) => {
    e.preventDefault();
    // if (info.name === "") {
    //   setInfo(defaultData);
    //   return;
    // } else if (info.address === "") {
    //   setInfo(defaultData);
    //   return;
    // }
    // setData((prev) => [...prev, info]);
    // setInfo(defaultData);
    const data = {
      name: nameInput.current.value,
      address: addressInput.current.value,
    };
    if (data.name.length === 0 || data.address.length === 0) {
      nameInput.current.value = "";
      addressInput.current.value = "";
      return alert("Pls fill out all fields");
    }
    setData((prev) => [...prev, data]);
    nameInput.current.value = "";
    addressInput.current.value = "";
  };

  return (
    <form className="container" onSubmit={handleCreate}>
      <div className="input">
        <input
          type="text"
          // value={info.name}
          // onChange={(e) => setInfo({ ...info, name: e.target.value })}
          placeholder="name..."
          value={data.name}
          ref={nameInput}
        />
        <input
          type="text"
          // value={info.address}
          // onChange={(e) => setInfo({ ...info, address: e.target.value })}
          placeholder="address..."
          value={data.address}
          ref={addressInput}
        />
        <div>
          <button type="submit">create</button>
        </div>
      </div>
      <div className="info-container">
        {data.length ? (
          data.map((item) => (
            <div key={item.name} className=" card">
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
