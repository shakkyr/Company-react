import React from "react";

const UnavailableCars = ({ notAvailableCars }) => {
  return (
    <div>
      {notAvailableCars.map((ele) => {
        return (
          <div key={ele.id}>
            <div>{ele.name}</div>
            <div>
              premium car :
              {ele.isGold ? (
                <span style={{ fontWeight: "900" }}>"yes" </span>
              ) : (
                "no"
              )}
            </div>
            <div>
              Car Status:
              {ele.isAvaiable ? (
                <span style={{ color: "green" }}>Available </span>
              ) : (
                <span style={{ color: "red" }}>unavailable</span>
              )}
            </div>
            <div>
              suitable for :
              {ele.isSenior ? (
                <span style={{ fontWeight: "900" }}>"Senior" </span>
              ) : (
                "Junior"
              )}
            </div>
            <div>
              <img
                src={ele.avatar}
                style={{ width: "20%", height: "20%", borderRadius: "10px" }}
                alt="avatar"
              ></img>
              rented for : {ele.rentDetails.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UnavailableCars;
