/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";
const Employee = ({ workers }) => {
  const [employee, setEmployee] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(
        `https://617c0238d842cf001711c1cc.mockapi.io/company/${workers}/workers`
      )
      .then((res) => {
      
        setEmployee(res.data);
      });
  };

  return (
    <div>
      {employee.map((ele) => {
        return (
          <div>
            <div>
              {" "}
              Experince :{" "}
              {ele.isSenior ? (
                <span style={{ color: "green" }}>Senior </span>
              ) : (
                <span style={{ color: "red" }}>Junior</span>
              )}
            </div>
            <div> Anual Salary : {ele.salary} $</div>
            <div> works as a : {ele.avatardepartment} </div>
          </div>
        );
      })}
    </div>
  );
};

export default Employee;
