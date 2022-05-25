import React, {useEffect, useState} from 'react' 
import {Link} from 'react-router-dom'; 

function Mina_kurser() {
    useEffect( () => {
        fetchItems(); 
    }, []); 

    const [items, setItems] = useState([]); 
    const fetchItems = async() => {
        const data = await fetch('/Mina_Kurser'); 
        const items = await data.json(); 
        setItems(items); 
    }
    

    return(
        <section div = "test">

             {
           
                items.map(item => (
                    <div>
                        <ul>
                            <li>{item.Kurskod } {item.Kursnamn} {item.HP} {item.Nivå } {item.Block} {item.VOF} {item.Säsong} {item.period}  <button> Lägg till </button> </li>
                           

                        </ul>
                    
                    </div> 
                ))
             }
        
        </section>

    );


}

export default Mina_kurser; 
