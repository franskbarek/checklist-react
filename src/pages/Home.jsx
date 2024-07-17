import React, { useEffect, useState } from "react";

import axios from "axios";
import { Button, FormContainer } from "../components";
import Endpoint from "../utils/api-endpoint";

const Home = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const getChecklist = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    const data = await axios
      .get(Endpoint.checlist)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));

    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(Endpoint.checlist, { name: name })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getChecklist();
  }, [data]);

  return (
    <>
      {data && (
        <div>
          <FormContainer>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col items-center justify-center gap-4 p-10">
              <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <Button name="Submit" />
            </form>
          </FormContainer>

          <div className="flex justify-center items-center gap-5 flex-row flex-wrap">
            {data.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "#FFFFFF",
                  boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
                  padding: 15,
                  borderRadius: 8,
                  width: 250,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <button onClick={() => handleDelete(item.id)}>Delete</button> */}
                <p>
                  {item.name} {item.checklistCompletionStatus}
                </p>
                {item.items ? (
                  <>
                    {item.items.map((child) => (
                      <div key={child.id}>
                        <p>{child.name}</p>
                        <p>{child.itemCompletionStatus}</p>
                      </div>
                    ))}
                  </>
                ) : (
                  <p style={{ marginLeft: 10 }}>gak ada</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
