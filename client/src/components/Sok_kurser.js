import React, {useEffect, useState} from 'react' 


 
function Sok_kurser() {
    useEffect( () => {
        fetchItems(); 

    }, []); 

    const [items, setItems] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const [course, setCourse] = useState([]); 
    let fetchItems = async() => {
        const data = await fetch('/Sok_kurser'); 
        const items = await data.json(); 
        setItems(items); 
        
    }
    //{item.Kurskod } {item.Kursnamn} {item.HP} {item.Nivå } {item.Block} {item.VOF} {item.Säsong} {item.period}
  

    
       
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
            <div class = "search-wrapper">
                <label for = "search"> Sök kurser </label>   
                <input type="search" id = "search" onChange={event => {setSearchTerm(event.target.value)}}></input> 
            </div> 
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
                    items.filter((val) =>{
                        if (searchTerm === "") {
                            return val
                        }else if (val.Kursnamn.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    // Displaying data in table
                    }).map(item => (
                    <tr >
                        <td>{item.Kurskod}</td>
                        <td>{item.Kursnamn}</td>
                        <td>{item.HP}</td>
                        <td>{item.Nivå}</td>
                        <td>{item.Block}</td>
                        <td>{item.VOF}</td>
                        <td>{item.Säsong}</td>
                        <td>{item.Period}</td>
                        <td><button onClick= {() => setCourse(item)}>Lägg till</button> </td>
                    </tr>
                    ))
                }
                </tbody>

            </table>
        
        </form>

    );

}

export default Sok_kurser; 
