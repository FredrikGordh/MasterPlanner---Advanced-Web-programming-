

function CourseTables (props) {


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
        <div className = "container-fluid">
            <table className="table align-middle mb-0 bg-white" id = "mycourse-table">
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
                        <th>Master</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    { 
                    // Filtering searchbar
                    props.courses.map(item => (
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
                            <div className="form-check form-switch">
                                 <input className="form-check-input" type="checkbox" id={JSON.stringify(item)} onChange={(e) => props.onChange(e, item)}>{handleChecked(item)}</input>
                            </div> 
                            </td>
                            <td>
                            <button onClick = {() => props.onClick(item)}> X </button>
                            </td> 
                        </tr>
                    ))
                }
                </tbody>

            </table>

            </div>
    )
}

export default CourseTables;