import React, { useEffect, useState } from "react";
import CourseTables from "./components/Courses/CourseTables.js";

function Sok_kurser() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [course, setCourse] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("/Sok_kurser");
    const items = await data.json();
    setItems(items);
  };

  // Sending chosen courses to Mina_kurser
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:3000/MyCourses/${sessionStorage.getItem("email")}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      }
    );
  };

  return (
    <form id="Kurs-holder" onSubmit={handleSubmit}>
      <div className="form-outline" style={{ marginTop: "20px" }}>
        <input
          type="search"
          id="form1"
          className="form-control"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          placeholder="Sök kurser/inriktning"
          aria-label="Search"
        />
      </div>
      <CourseTables
        courses={items}
        type={"searchCourses"}
        searchTerm={searchTerm}
        onClick={(value) => setCourse(value)}
      ></CourseTables>
    </form>
  );
}

export default Sok_kurser;
