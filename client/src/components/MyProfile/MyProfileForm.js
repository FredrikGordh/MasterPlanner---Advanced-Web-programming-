import "../../pages/MyProfile.css";

// Created the profile form that is used for the user and for other
// users to be able to see the choosen courses
function MyProfileForm(props) {
  // Handles if the user wants to change there personal information
  const handleEdit = (e) => {
    const button = document.getElementById("edit-button");
    let values = getValues();

    // If the button is clicked the text changes.
    // When the button is clicked again the changes are saved and stored in the database
    if (button.innerHTML === "Spara ändringar") {
      button.innerHTML = "Edit";
      fetch("http://localhost:3000/My_profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((response) => response.json());
    } else {
      button.innerHTML = "Spara ändringar";
    }
  };

  // Fetched the previous saved values from the database
  function getValues() {
    const idList = ["Name", "ProfileEmail", "LiuID", "Master"];
    let values = [];
    idList.forEach((id) => {
      let input = document.getElementById(id + "-input");
      values.push(input.value);
    });
    return values;
  }

  // Handles if the edit textfield should be displayed or not
  function editInfo(id) {
    let div = document.getElementById(id);
    if (props.edit) {
      return "hidden";
    } else if (div !== null) {
      return "text";
    }
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0"> Namn </h6>
          </div>
          <div className="col-sm-9 text-secondary" id="Name-div">
            {props.setValues("Name")}

            <input type={editInfo("Name-div")} id="Name-input" />
          </div>
        </div>
        <hr className="border" />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Email</h6>
          </div>
          <div className="col-sm-9 text-secondary" id="ProfileEmail-div">
            {props.setValues("ProfileEmail")}
            <input type={editInfo()} id="ProfileEmail-input" />
          </div>
        </div>
        <hr className="border" />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Liu-id</h6>
          </div>
          <div className="col-sm-9 text-secondary" id="LiuID-div">
            {props.setValues("LiuID")}
            <input type={editInfo()} id="LiuID-input" />
          </div>
        </div>
        <hr className="border" />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Master</h6>
          </div>
          <div className="col-sm-9 text-secondary" id="Master-div">
            {props.setValues("Master")}
            <input type={editInfo()} id="Master-input" />
          </div>
        </div>
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-sm-12">
            <button
              className="btn btn-info"
              id="edit-button"
              onClick={(event) => {
                handleEdit(event);
                props.setDisplay(true);
                props.setEdit(!props.edit);
              }}
              style={{ color: "white" }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfileForm;
