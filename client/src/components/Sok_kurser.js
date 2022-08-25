import React, {useEffect, useState} from 'react' 

 
function Sok_kurser() {
    useEffect( () => {
        fetchItems(); 
        console.log(items)
    }, []); 

    const [items, setItems] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const [course, setCourse] = useState([]); 
    const fetchItems = async() => {
        const data = await fetch('/Sok_kurser'); 
        const items = await data.json();  
        setItems(items); 
    }
         
    // Sending chosen courses to Mina_kurser
    const handleSubmit = (e) => {
        e.preventDefault(); 
        fetch('http://localhost:3000/Mina_kurser', {
            method: 'POST', 
            headers: {
                'Content-Type':'application/json'
            }, 
            body: JSON.stringify(course)
        })
    }
        

    
    return(
        <form id = "Kurs-holder" onSubmit={handleSubmit}>
            <div className="form-outline" style={{marginTop: "20px"}}>
                <input type="search" id="form1" className="form-control" onChange={event => {setSearchTerm(event.target.value)}} placeholder="Sök kurser/inriktning" aria-label="Search" />
            </div>  
            <div style={{ overflowX: "auto"}}>
                <table className="table align-middle mb-0 bg-white" id="mycourse-table" >
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
                        <th scope="col">Inriktning</th>

                        </tr>
                    </thead>
                    <tbody>
                        { 
                            // Filtering searchbar
                            items.filter((val) =>{
                                if (searchTerm === "") {
                                    return val
                                }else if (val.Kursnamn.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val
                                }else if (val.Inriktning.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val
                                }
                            // Displaying data in table
                            }).map(item => (
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
                                    <td>{item.Inriktning}</td>
                                    <td><button onClick= {() => setCourse(item)} className="btn btn-outline-info">+</button> </td>
                                </tr>
                                ))
                        

                    }
                    </tbody>

                </table>
            </div> 
        </form>

    );

}

export default Sok_kurser; 
