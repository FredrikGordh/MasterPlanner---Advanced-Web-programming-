import React from "react";

// Creates a profile card which is used on the homepage this includes the progile image
// and a button which navigates to the persons homepage
function ProfileCards(props) {
  return (
    <div className="card" style={{ width: "300px", marginBottom: "20px" }}>
      <div className="card-body">
        <div className="d-flex flex-column align-items-center text-center">
          <img
            src={props.imgUrl}
            alt="Admin"
            className="rounded-circle"
            id="profileCards-img"
            width="150"
          />
          <div className="mt-3">
            <p> {props.name}</p>
            <p> {props.profileEmail}</p>
            <p> {props.liuID}</p>
            <p> {props.master}</p>
            <button
              className="btn btn-outline-info"
              onClick={() => props.onClick(props.owner)}
            >
              {" "}
              Visa kurser{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCards;
