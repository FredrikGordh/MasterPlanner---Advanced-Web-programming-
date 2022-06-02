import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client';
import LogIn from './LogIn.js'
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
            let holder = item.HP; 
            if (holder.length === 2) {
                holder = holder[0]; 
                holder = Number(holder)/2
            }else if(holder.length === 3){
                holder = holder[0] + holder[1]; 
                holder = Number(holder)/2
            }else{
                holder = Number(item.HP)
            }

            if (item.typ === 'Matematik'){
                Math = Math + holder;

            }else if (item.typ === 'Teknisk'){
                teknisk = teknisk + holder; 
            }
        
            if (item.Nivå === 'A1X'){
                Avancerad = Avancerad + holder; 
            }

            if (item.Master === 1 && item.Nivå === 'A1X'){
                Master = Master + holder; 
            }

            if (item.typ === "Ekonomi" && item.Nivå === 'A1X'){
                AvanceradI = AvanceradI + holder;
            }

            hp = hp + holder; 
        });
        
        let Array = [hp, Math, teknisk, Avancerad, Master, AvanceradI]; 
        return Array; 
    }


    // Updates the Master attribute and sends to handleMaster 
    function handleInputChange(e, item){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(value) {
            item.Master = 1; 
        }else{
            item.Master = 0; 
        }

        handleMaster(JSON.stringify(item)); 
        const element = document.getElementById('master-div'); 
        element.innerHTML = calculateHP()[4]; 

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
                    <div class="card-body" id = "master-div"> {calculateHP()[4]} </div>
                    
                </div>
                <div class="card" id = "total">
                    <div class="card-body"> Avancerade inom Industriell ekonomi 30 HP </div>
                    <div class="card-body"> {calculateHP()[5]} </div>
                    
                </div>
            </div> 

            <div class = "container-fluid" style={{overflowX: "auto", width: "90%"}}>
                <table class="table align-middle mb-0 bg-white" id = "mycourse-table" style={{fontSize: "small"}}>
                    <thead>
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
                                <button class = "btn btn-outline-info" onClick={() => setSingleCourse(item)}> X </button>
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
