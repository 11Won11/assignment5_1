import CreateUser from "../User/CreateUser";
import ShowUser from "../User/ShowUser";
import { Route, Routes } from "react-router-dom";
import EditUser from "../User/EditUser";
import User from "../User/User";
import Header from "../Common/Header";

function showList() {
    return (
      <div className="App">
        <header className="container">
          <div className="">
            <Header />
            <Routes>
              <Route path="/edit-user/:id" element={<EditUser />} />
              <Route path="/user/:id" element={<User />} />
              <Route path="/create-user" element={<CreateUser />} />
              <Route path="/show-user" element={<ShowUser />} />
            </Routes>
            
          </div>
        </header>
      </div>
    );
  }

  export default showList;