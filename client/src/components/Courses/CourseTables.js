import CoursesSearchBar from "./CoursesSearchBar.js";
import "./CourseTables.css"

function CourseTables (props) {

        

        // Loads item master checkbox as checked or unchecked depending on previous actions
        function handleChecked(item){

    
            if (item.Master === 1){
                return true; 
            }else{
                return false; 
            }
        }

        function ifSearchCourses (){
            if (props.type === "searchCourses"){
                return(
                    props.courses.filter((val) =>{
                        if (props.searchTerm === "") {
                            return val
                        }else if (val.Kursnamn.toLowerCase().includes(props.searchTerm.toLowerCase())){
                            return val
                        }else if (val.Inriktning.toLowerCase().includes(props.searchTerm.toLowerCase())){
                            return val
                        }
                    })
                )
            }else{
                return(
                    props.courses
                )
            }
        }

        function tableColumns (){
            if (props.type ==="searchCourses"){
                return(
                    <th scope="col">Inriktning</th>
                )
            }else if(props.type === "myCourses"){
                return(
                    <th>Master</th>
                )
            }
        }
        
    return(
        <div style={{ overflowX: "auto"}}>
            <table className="table align-middle mb-0 bg-white" style={{fontSize: "13px"}} id="mycourse-table" >
                <thead className = "bg-light">
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
                        {tableColumns()}
                    </tr>
                </thead>
                <tbody>
                    {ifSearchCourses().map(item => (
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
                            {props.type === "searchCourses" ? 
                            (                          
                            <div>
                            <td id="inriktning">{item.Inriktning}</td>
                            <td><button className="btn btn-outline-info" onClick= {() => props.onClick(item)} >+</button> </td>
                            </div>         
                            ) : ("")}
                            
                            {props.type==="myCourses" ? 
                            (
                                <div>
                                <td align='center'>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id={JSON.stringify(item)} onChange={(e) => props.onChange(e, item)} checked = {handleChecked(item)}></input>
                                </div> 
                                </td>
                                <td align="center">
                                <button className="btn btn-outline-info" onClick = {() => props.onClick(item)}> X </button>
                                </td> 
                                </div>
                                 
                            ):("")}

                            {/* { props.type ==="randomProfile" ? 
                            ():()} */}
                        </tr>
                    ))
                
                }
                </tbody>

            </table>

            </div>
    )
}

export default CourseTables;