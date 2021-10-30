import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import WorkersList from "./WorkersList";

const CompanyWorkers = () => {
  const [workers, setWorkers] = React.useState([]);

  // const [user, setUser] = React.useState(1234567890);
  // const [accountNumber, setaccountNumber] = React.useState(0);
  // const [accountPassword, setaccountPassword] = React.useState('');
  React.useEffect(() => {
    getData();
    // getCars();
  }, []);

  // const getCars = async () => {
  //   await axios
  //     .get("https://617c0238d842cf001711c1cc.mockapi.io/cars")
  //     .then((res) => {
  //       setCars(res.data);
  //     });
  // };

  const getData = async () => {
    await axios
      .get("https://617c0238d842cf001711c1cc.mockapi.io/company")
      .then((res) => {
        setWorkers(res.data);
      });
  };

  return (
    <>
      {/* <select name="carList" onChange={chooseCar}>
        {cars.map((c) => {
          return <option value={c.id}>{c.name}</option>;
        })}
      </select> */}
      <WorkersList workers={workers} />
    </>
  );
};

export default CompanyWorkers;
