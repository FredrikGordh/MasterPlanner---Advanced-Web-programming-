import React, { useEffect, useState } from "react";
import CourseTables from "./components/Courses/CourseTables.js";
import MyProfileForm from "./components/MyProfile/MyProfileForm.js";
import UploadImg from "./components/MyProfile/UploadImg.js";

// Creates the view for the userprofile
function MyProfile() {
  const [username, setUsername] = useState("");
  const [edit, setEdit] = useState(true);
  const [items, setItems] = useState([]);
  const [display, setDisplay] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const [imageUrl, setImageUrl] = useState();

  // Sends the sessionstorage to the database
  const fetchItems = async () => {
    fetch("http://localhost:3000/My_profile/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: sessionStorage.getItem("email"),
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    const dataCourses = await fetch("/Mina_kurser");
    const courses = await dataCourses.json();
    setItems(courses);
    const dataUserInfo = await fetch("/My_profile");

    const userInfo = await dataUserInfo.json();

    if (userInfo.length != 0) {
      setImageUrl(userInfo[0].imgUrl);
    }

    setUserInfo(userInfo);
    setDisplay(false);
  };

  useEffect(() => {
    fetchItems();
    setUsername(sessionStorage.getItem("email"));
  }, []);

  function setValues(id) {
    let input = document.getElementById(id + "-input");
    if (edit && display && input !== null) {
      return input.value;
    } else if (
      userInfo !== undefined &&
      !display &&
      userInfo[0] !== undefined
    ) {
      return userInfo[0][id];
    } else if (userInfo !== undefined && userInfo[0] !== undefined) {
      input.value = userInfo[0][id];
      return "";
    }
  }

  return (
    <div className="container" style={{ marginTop: "10px" }}>
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <UploadImg
              setValues={setValues}
              setImageUrl={setImageUrl}
              imageUrl={imageUrl}
              username={username}
            ></UploadImg>
          </div>
          <div className="col-md-8">
            <MyProfileForm
              setValues={setValues}
              setEdit={setEdit}
              edit={edit}
              setDisplay={setDisplay}
            ></MyProfileForm>

            <div className="row gutters-sm">
              <div className="col-md-12">
                <div className="card mb-3">
                  <div
                    className="card-body"
                    style={{ width: "100%", overflowX: "auto" }}
                  >
                    <CourseTables
                      type={"myProfile"}
                      courses={items}
                    ></CourseTables>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
