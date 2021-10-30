/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";
import AilableCars from "./Available.cars";
import UnavailableCars from "./UnAvailableCars";

const CarList = () => {
  const [cars, setCars] = React.useState([]);
  const [available, setAvailable] = React.useState([]);
  const [notAvailable, setNoneAvailable] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    filteredCars();
  }, [cars]);

  React.useEffect(() => {
    console.log(available);
    console.log(notAvailable);
  }, [available, notAvailable]);

  const getData = async () => {
    await axios
      .get("https://617c0238d842cf001711c1cc.mockapi.io/cars")
      .then((res) => {
        setCars(res.data);
      });
  };
  const filteredCars = () => {
    const newAvailable = [];
    const newNotAvailable = [];

    cars.filter((ele) => {
      return ele.isAvaiable
        ? newAvailable.push(ele)
        : newNotAvailable.push(ele);
    });

    setAvailable(newAvailable);
    setNoneAvailable(newNotAvailable);
  };

  return (
    <div>
      <AilableCars availableCars={available} />
      <UnavailableCars notAvailableCars={notAvailable} />
    </div>
  );
};

export default CarList;

// import React from "react";
// import axios from "axios";

// const Transfer = ({fromUser, toUser, amount, calcBalance}) => {
//     const [userBalance, setUserBalance] = React.useState("");
//     const [hasEnough, setHasEnough] = React.useState(true);
//     const [userData, setUserData] = React.useState([]);

//     const newLocal = [];
//     React.useEffect(() => {
//         getData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, newLocal);

//     React.useEffect(() => {
//         calcBalance(userData).then(value => {
//             setUserBalance(value);
//             makeTransaction();
//         });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [userData]);

//     const getData = async () => {
//         await axios.get(`https://6178f9f3aa7f340017404669.mockapi.io/users/${fromUser.id}/bank`).then(res => {
//             setUserData(res.data);
//         });
//     }

//     const makeTransaction = async () => {

//         if (userBalance >= amount) {
//             setHasEnough(true);
//         } else {
//             setHasEnough(false);
//         }

//         if (hasEnough) {
//             let data = {cash: amount, isWithdrawal: false};
//             const res = await axios.post(`https://6178f9f3aa7f340017404669.mockapi.io/users/${toUser.id}/bank`, data);
//             console.log("status=", res.status);
//         }

//     };

//     return (
//         <>
//             <input type="button" value="confirm" onClick={() => makeTransaction()}/>
//         </>
//     )
// }

// export default Transfer;
