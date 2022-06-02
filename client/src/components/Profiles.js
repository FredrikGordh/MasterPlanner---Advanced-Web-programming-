import React, {useEffect, useState} from 'react'; 
import {useLocation} from 'react-router-dom'; 


function Profiles(){

    const location = useLocation(); 
    const [courses, setCourses] = useState([]); 
    const fetchItems = async() =>{
        console.log("Email: " + location.state.id)
        const courseData = await fetch(`/Startsida/${location.state.id}`); 
        const userCourses = await courseData.json(); 
        setCourses(userCourses); 
    }

    useEffect(() => {
        fetchItems(); 
        console.log("user: " + location.state.id);
    }, []); 

    return(
        <div className = "container" style={{marginTop: "10px"}}> 
            <div className = "main-body">
                <div class = "row gutters-sm"> 
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                                    <div class="mt-3">
                                        <h4>{location.state.Name}</h4>
                                        <button class="btn btn-outline-primary">Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row"> 
                                    <div class="col-sm-3">
                                        <h6 class="mb-0"> Namn </h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id = "Name-div">
                                        {location.state.Name}
                                    </div>
                                </div>
                                <hr class="border"/>
                                <div class="row"> 
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id = "ProfileEmail-div">
                                        {location.state.ProfileEmail}
                                    </div>
                                </div>
                                <hr class = "border"/>
                                <div class="row"> 
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Liu-id</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id = "LiuID-div">
                                        {location.state.LiuID}
                                    </div>
                                </div>
                                <hr class="border"/>
                                <div class="row"> 
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Master</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id = "Master-div">
                                        {location.state.Master}
                                    </div>
                                </div>                             
                            </div>
                        </div>
                        <div class="row gutters-sm">
                            <div class="col-md-12">
                                <div class="card mb-3" >
                                    <div class="card-body" style={{width: "100%"}}>
                                        <table class="table align-middle mb-0 bg-white" style={{fontSize: "13px"}}>
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
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Profiles; 