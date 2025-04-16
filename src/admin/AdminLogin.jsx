import { useState } from "react";
import Button from "../UI/Button";

function AdminLogin() {
  function verifyAdmin(name, password) {
    return name === "admin" && password === "admin@123";
  }

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('oli-dale-xjSkI_seiZY-unsplash.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-80 p-10 rounded-xl shadow-lg flex flex-col items-center gap-5">
        <p>Please start by entering your name</p>
        <input
          type="text"
          placeholder="admin"
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <p>Enter the password</p>
        <input
          type="text"
          placeholder="admin@123"
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        {verifyAdmin(name, password) && (
          <>
            <Button type="primary" to="/modifyevent">
              Add Event
            </Button>
            <Button type="primary" to="/deleteevent">
              Delete Event
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminLogin;
