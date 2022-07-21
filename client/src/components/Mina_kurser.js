import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client';

function Mina_Kurser(){


    const [courses, setCourses] = useState([]); 
    const [singleCourse, setSingleCourse] = useState([]);
    const fetchItems = async() => {

        const data = await fetch('/Mina_kurser'); 
        const courses = await data.json(); 
        setCourses(courses); 

    }

    useEffect( () => {
        fetchItems(); 
    }, []); 

    const handleSubmit = (e) => {
        e.preventDefault();          
        fetch('http://localhost:3000/Mina_kurser', {
            method: 'DELETE', 
            headers: {
                'Content-Type':'application/json'
            }, 
            body: JSON.stringify(singleCourse)
        })

        fetchItems(); 

    }


    // Posts the new master course to the datbase
    const handleMaster = (master) => {
        fetch('http://localhost:3000/Mina_kurser', {
            method: 'POST', 
            headers: {
                'Content-Type':'application/json'
            }, 
            body: master
        })
    }

    function calculateHP(){
        let hp = 0; 
        let Math = 0; 
        let teknisk = 0; 
        let Avancerad = 0;
        let Master = 0; 
        let AvanceradI = 0; 
        
        courses.map(item => {
            if (item.typ === 'Matematik'){
                Math = Math + Number(item.HP);
            }else if (item.typ === 'Teknisk'){
                teknisk = teknisk + Number(item.HP); 
            }
        
            if (item.nivå === 'A1X'){
                Avancerad = Avancerad + Number(item.HP); 
            }

            if (item.Master === 1 && item.nivå === 'A1X'){
                Master = Master + Number(item.HP); 
            }

            if (item.typ === "Ekonomi" && item.nivå === 'A1X'){
                AvanceradI = AvanceradI + Number(item.HP);
            }

            let int = Number(item.HP);
            hp = hp + int; 
        });
        
        let Array = [hp, Math, teknisk, Avancerad, Master, AvanceradI]; 
        return Array; 
    }


    // Updates the Master attribute and sends to handleMaster 
    function handleInputChange(e, item){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log("Value: " + value);
        if(value) {
            item.Master = 1; 
        }else{
            item.Master = 0; 
        }

        handleMaster(JSON.stringify(item)); 

    }

    // Loads item master checkbox as checked or unchecked depending on previous actions
    function handleChecked(item){

        let element = document.getElementById(JSON.stringify(item)); 

        if (element !== null && item.Master === 1){
            element.checked = true; 
        }else if(element !== null){
            element.checked = false; 
        }
    }

    return( 
        <form id = "form" onSubmit={handleSubmit}>
             <div class = "container-fluid" id = "card-holder">
                <div class="card" id = "total">
                    <div class="card-body"> 300 HP </div>
                    <div class="card-body"> {calculateHP()[0]} </div>
                    
                </div>
                <div class="card" id = "total">
                    <div class="card-body"> Matematik 45 HP</div>
                    <div class="card-body"> {calculateHP()[1]} </div>
                    
                </div>
                <div class="card" id = "total">
                    <div class="card-body"> Teknsik 70 HP</div>
                    <div class="card-body"> {calculateHP()[2]} </div>
                    
                </div>
                <div class="card" id = "total">
                    <div class="card-body"> Avancerad 90 HP</div>
                    <div class="card-body"> {calculateHP()[3]} </div>
                    
                </div>
                <div class="card" id = "total">
                    <div class="card-body"> Master 30 HP</div>
                    <div class="card-body"> {calculateHP()[4]} </div>
                    
                </div>
                <div class="card" id = "total">
                    <div class="card-body"> Avancerade inom Industriell ekonomi 30 HP </div>
                    <div class="card-body"> {calculateHP()[5]} </div>
                    
                </div>
            </div> 

            <div class = "container-fluid">
            <table class="table align-middle mb-0 bg-white" id = "mycourse-table">
                <thead class = "bg-light">
                    <tr>
                        <th>Kurskod</th>
                        <th>Kursnamn</th>
                        <th>HP</th>
                        <th>Nivå</th>
                        <th>Block</th>
                        <th>Typ</th>
                        <th>VOF</th>
                        <th>Säsong</th>
                        <th>Period</th>
                        <th>Master</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    { 
                    // Filtering searchbar
                    courses.map(item => (
                        <tr>
                            <td>{item.Kurskod}</td>
                            <td>{item.Kursnamn}</td>
                            <td align='center'>{item.HP}</td>
                            <td align='center'>{item.Nivå}</td>
                            <td align='center'>{item.Block}</td>
                            <td>{item.typ}</td>
                            <td align='center'>{item.VOF}</td>
                            <td>{item.Säsong}</td>
                            <td align='center'>{item.Period}</td>
                            <td align='center'>
                            <div class="form-check form-switch">
                                 <input class="form-check-input" type="checkbox" id={JSON.stringify(item)} onChange={(e) => handleInputChange(e, item)}>{handleChecked(item)}</input>
                            </div> 
                            </td>
                            <td>
                            <button onClick={() => setSingleCourse(item)}> X </button>
                            </td> 
                        </tr>
                    ))
                }
                </tbody>

            </table>

            </div>
               
        </form> 
    )
}

export default Mina_Kurser; 