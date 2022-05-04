import React, {useEffect, useState} from 'react' 
import {Link} from 'react-router-dom'; 


 
function Mina_kurser() {
    useEffect( () => {
        fetchItems(); 
    }, []); 

    const [items, setItems] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 
    const fetchItems = async() => {
        const data = await fetch('/Mina_Kurser'); 
        const items = await data.json(); 
        setItems(items); 
    }
    //{item.Kurskod } {item.Kursnamn} {item.HP} {item.Nivå } {item.Block} {item.VOF} {item.Säsong} {item.period}


    return(
        <section id = "Kurs-holder">
            <div class = "search-wrapper">
                <label for = "search"> Sök kurser</label>   
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
                        if (searchTerm == "") {
                            return val
                        }else if (val.Kursnamn.toLowerCase().includes(searchTerm.toLowerCase())){
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
                        <td>{item.VOF}</td>
                        <td>{item.Säsong}</td>
                        <td>{item.Period}</td>
                        <td><button>Lägg till</button> </td>
                    </tr>
                    ))
                }
                </tbody>

            </table>
        </section>

    );


}

export default Mina_kurser; 
