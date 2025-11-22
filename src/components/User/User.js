import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./User.css";
const EditUser = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const getUserApi = "https://6916d86ba7a34288a27e9b23.mockapi.io/user";

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(getUserApi.concat("/") + id)
      .then((item) => {
        setUser(item.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="user mt-5">
      <table className="table table-bordered">
    <tbody>
      <tr>
        <td>Name</td>
        <td>{user.name}</td>
      </tr>
      <tr>
        <td>Age</td>
        <td>{user.age}</td>
      </tr>
      <tr>
        <td>Student Number</td>
        <td>{user.studentNumber}</td>
      </tr>
      <tr>
        <td>Region</td>
        <td>{user.region}</td>
      </tr>
    </tbody>
  </table>
    </div>
  );
};
export default EditUser;