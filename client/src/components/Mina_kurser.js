import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client';
import CourseTables from './CourseTables.js';

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



    return( 
        <form id = "form" onSubmit={handleSubmit}>
             <div className = "container-fluid" id = "card-holder">
                <div className="card" id = "total">
                    <div className="card-body d-flex align-items-stretch"> 300 HP </div>
                    <div className="card-body d-flex align-items-stretch"> {calculateHP()[0]} </div>
                    
                </div>
                <div className="card" id = "total">
                    <div className="card-body d-flex align-items-stretch"> Matematik 45 HP</div>
                    <div className="card-body d-flex align-items-stretch"> {calculateHP()[1]} </div>
                    
                </div>
                <div className="card" id = "total">
                    <div className="card-body d-flex align-items-stretch"> Teknsik 70 HP</div>
                    <div className="card-body d-flex align-items-stretch"> {calculateHP()[2]} </div>
                    
                </div>
                <div className="card" id = "total">
                    <div className="card-body d-flex align-items-stretch"> Avancerad 90 HP</div>
                    <div className="card-body d-flex align-items-stretch"> {calculateHP()[3]} </div>
                    
                </div>
                <div className="card" id = "total">
                    <div className="card-body d-flex align-items-stretch"> Master 30 HP</div>
                    <div className="card-body d-flex align-items-stretch"> {calculateHP()[4]} </div>
                    
                </div>
                <div className="card" id = "total">
                    <div className="card-body d-flex align-items-stretch w-125"> Avancerade Indek 30 HP </div>
                    <div className="card-body d-flex align-items-stretch"> {calculateHP()[5]} </div>
                    
                </div>
            </div> 
            <CourseTables courses={courses} type={"myCourses"} onChange={(e, value) => handleInputChange(e, value)} onClick={(value) => setSingleCourse(value)}></CourseTables>
               
        </form> 
    )
}

export default Mina_Kurser; 