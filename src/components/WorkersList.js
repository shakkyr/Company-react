import React from "react";
import Employee from "./employee";
import "../App.css";
import axios from "axios";

const WorkersList = ({ workers }) => {
  const [show, setShow] = React.useState(true);
  const [cars, setCars] = React.useState([]);
  React.useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    await axios
      .get("https://617c0238d842cf001711c1cc.mockapi.io/cars")
      .then((res) => {
        setCars(res.data);
      });
  };

  const showFunction = (id) => {
    setShow(!show);
  };

  const chooseCar = async (event) => {
    console.log(event.target.value);

    await axios.put(
      `https://617c0238d842cf001711c1cc.mockapi.io/cars/${event.target.value}`,
      {
        isAvaiable: false,
        rentDetails: { name: "shadi rada", salary: 100 },
      }
    );
  };

  return workers.map((ele) => {
    return (
      <div key={ele.id}>
        <div>
          <div>{ele.name}</div>

          <img
            src={ele.avatar}
            style={{ width: "10%", height: "10%", borderRadius: "10px" }}
            alt="avatar"
          ></img>
          <p onClick={() => showFunction(ele.id)}>
            Show/Hide Details {show ? "🔼" : "🔽"}{" "}
          </p>

          {show ? (
            ""
          ) : (
            <div className="showPepoleDetales">
              <div>
                Employee status in our company:{" "}
                {ele.isActive ? (
                  <span style={{ color: "green" }}>Active </span>
                ) : (
                  <span style={{ color: "red" }}>Fired this year</span>
                )}
              </div>
              <Employee workers={ele.id} />
              {ele.isActive ? (
                <>
                  pick a car for this Employee
                  <select name="carList" onChange={chooseCar}>
                    {cars.map((c) => {
                      return c.isAvaiable ? (
                        <option value={c.id} style={{ color: "green" }}>
                          {c.name}{" "}
                        </option>
                      ) : (
                        <option disabled value={c.id} style={{ color: "red" }}>
                          {c.name}
                        </option>
                      );
                    })}
                  </select>
                </>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </div>
    );
  });
};

export default WorkersList;

// /* eslint-disable array-callback-return */
// import React from "react";
// import axios from "axios";
// import './bank.css'
// // import InputButtons from "./inputButtons";

// const Users = ({user , handleType ,handleClick}) => {
//     const [userData, setUserData] = React.useState([])
//     const [balance, setBalance] = React.useState(0);
//     // const [cash, setCash] = React.useState([]);

//     React.useEffect(() => {
//         getData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     React.useEffect(() => {
//          calculateBalance()
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//         }, [userData])

//     const getData = async () => {
//         await axios.get(`https://6178f9f3aa7f340017404669.mockapi.io/users/${user.id}/bank`).then(res => {
//             setUserData(res.data);
//         });
//     }

//     const calculateBalance = () => {
//         let arr = [];
//       userData.map(usr => {
//             console.log("cash: ", usr.cash);

//             (usr.isWithdrawal) ? arr.push(usr.cash * -1) : arr.push(usr.cash);
//             console.log(arr);

//             let arrSum = arr.reduce((a, b) => a + b, 0)
//             console.log("balance: ", arrSum);

//              setBalance(arrSum);
//         })
//     }

//     return (<div>
//         <div className='users'>
//             <img
//             alt='user'
//             src={user.avatar}
//             style={{ width: "10%", height: "10%" }}
//           ></img>
//           <div>
//             <h2> {user.name}</h2>
//             <h2> Account Number {user.accountNumber}</h2>

//             </div>

//             <h6>Age :{user.age}</h6>
//               <h6> From {user.country}</h6>
//             <h5> Balance: <span style={{color: balance < 0 ? "red" : "green"}}>{balance}</span></h5><hr></hr><hr></hr>

//         </div>

//         </div>
//     )
// }

// export default Users;
