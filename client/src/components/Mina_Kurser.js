import React, {useEffect, useState} from 'react'

function Mina_Kurser(){
    useEffect( () => {
        fetchItems(); 
    }, []); 

    const [courses, setCourses] = useState([]); 
    const [singleCourse, setSingleCourse] = useState([]);
    const [button, setButton] = useState(''); 
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
        })
        fetchItems(); 


    }

    function calculateHP(){
        let hp = 0; 
        let Math = 0; 
        let teknisk = 0; 
        let Avancerad = 0;

        courses.map(item => {
            if (item.typ === 'Matematik'){
                Math = Math + Number(item.HP);
            }else if (item.typ === 'Teknisk'){
                teknisk = teknisk + Number(item.HP); 
            }
        
            if (item.nivå === 'A1X'){
                Avancerad = Avancerad + Number(item.HP); 
            }

            let int = Number(item.HP);
            hp = hp + int; 
        });
        
        let Array = [hp, Math, teknisk, Avancerad]; 
        return Array; 
    }

    function inMaster(param) {
        document.getElementById('dropdownMenuButton').textContent = param; 

    }

    return( 
        <form id = "form" onSubmit={handleSubmit}>
            <div class = "container-fluid">
            <table class="table" id = "mycourse-table">
                <thead>
                    <tr>
                    <th scope="col">Kurskod</th>
                    <th scope="col">Kursnamn</th>
                    <th scope="col">HP</th>
                    <th scope="col">Nivå</th>
                    <th scope="col">Block</th>
                    <th scope="col">Typ</th>
                    <th scope="col">VOF</th>
                    <th scope="col">Säsong</th>
                    <th scope="col">Period</th>
                    <th scope="col">Inom masterprofil</th>

                    </tr>
                </thead>
                <tbody>
                    { 
                    // Filtering searchbar
                    courses.map(item => (
                    <section> 
                    <tr>
                        <td>{item.Kurskod}</td>
                        <td>{item.Kursnamn}</td>
                        <td>{item.HP}</td>
                        <td>{item.Nivå}</td>
                        <td>{item.Block}</td>
                        <td>{item.typ}</td>
                        <td>{item.VOF}</td>
                        <td>{item.Säsong}</td>
                        <td>{item.Period}</td>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        
                            </button>
                             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" id = "inMaster" href="#" onClick= {() => setButton(this.button)}>Ja</a>
                                <a class="dropdown-item" id= "inMaster" href="#" onClick= {() => setButton(this.button)}>Nej</a>
                            </div>
                        </div>

                    </tr>
                    <button onClick={() => setSingleCourse(item)}> X </button>
                    </section>
                    ))
                }
                </tbody>

            </table>

            </div>
                <div class = "container-fluid">
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
            </div> 
        </form> 
    )
}

export default Mina_Kurser; 
