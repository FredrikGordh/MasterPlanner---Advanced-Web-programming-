import React, {useEffect, useState} from 'react'; 
import {useLocation} from 'react-router-dom'; 
import CourseTables from "./components/Courses/CourseTables.js";


function Profiles(){

    const location = useLocation(); 
    const [courses, setCourses] = useState([]); 
    const fetchItems = async() =>{
        
        const courseData = await fetch(`/Homepage`); 
        // const userCourses = await courseData.json(); 

        // console.log(userCourses)
        // setCourses(userCourses); 
    }


    useEffect(() => {
        fetchItems(); 
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
                                        <h4>{location.state.name}</h4>
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
                                        {location.state.name}
                                    </div>
                                </div>
                                <hr class="border"/>
                                <div class="row"> 
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id = "ProfileEmail-div">
                                        {location.state.profileEmail}
                                    </div>
                                </div>
                                <hr class = "border"/>
                                <div class="row"> 
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Liu-id</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id = "LiuID-div">
                                        {location.state.liuID}
                                    </div>
                                </div>
                                <hr class="border"/>
                                <div class="row"> 
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Master</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary" id = "Master-div">
                                        {location.state.master}
                                    </div>
                                </div>                             
                            </div>
                        </div>
                        <div class="row gutters-sm">
                            <div class="col-md-12">
                                <div class="card mb-3" >
                                    <div class="card-body" style={{width: "100%"}}>
                                    <CourseTables
                                        type={"myProfile"}
                                        courses={courses}
                                    ></CourseTables>
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