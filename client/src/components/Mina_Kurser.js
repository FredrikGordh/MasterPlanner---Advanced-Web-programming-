import React, {useEffect, useState} from 'react'

function Mina_kurser(){
    useEffect( () => {
        fetchItems(); 
    }, []); 

    const [courses, setCourses] = useState([]); 
    const [singleCourse, setSingleCourse] = useState([]);
    const fetchItems = async() => {
        const data = await fetch('/Mina_kurser'); 
        const courses = await data.json(); 
        setCourses(courses); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();  
        fetch('http://localhost:3000/Mina_kurser', {
            method: 'DELETE', 
            headers: {
                'Content-Type':'application/json'
            }, 
            body: JSON.stringify(singleCourse)
        }).then(() => {
            console.log("course deleted")
        })
        fetchItems(); 

    }
        

    return( 
        <form onSubmit={handleSubmit}>
            <div class = "container-fluid">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Kurskod</th>
                    <th scope="col">Kursnamn</th>
                    <th scope="col">HP</th>
                    <th scope="col">Nivå</th>
                    <th scope="col">Block</th>
                    <th scope="col">VOF</th>
                    <th scope="col">Säsong</th>
                    <th scope="col">Period</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                    // Filtering searchbar
                    courses.map(item => (
                    <tr>
                        <td>{item.Kurskod}</td>
                        <td>{item.Kursnamn}</td>
                        <td>{item.HP}</td>
                        <td>{item.Nivå}</td>
                        <td>{item.Block}</td>
                        <td>{item.VOF}</td>
                        <td>{item.Säsong}</td>
                        <td>{item.Period}</td>
                        <td><button onClick={() => setSingleCourse(item)}> X </button> </td>
                    </tr>
                    ))
                }
                </tbody>

            </table>
            </div>
        </form> 
    )
}

export default Mina_kurser; 
