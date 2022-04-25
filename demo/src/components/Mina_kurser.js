import React, {useEffect, useState} from 'react' 
import {Link} from 'react-router-dom'; 

function Mina_kurser() {

    useEffect( () => {
        fetchItems(); 
    }, []); 

    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const data = await fetch('/Mina_kurser'); 
        const items = await data.json(); 
        setItems(items); 
    };

    return (
        <section>
        {
            items.map(item => (
                <div>
                <p>{item.name}</p>
                <p>{item.msg}</p>
                <p>{item.username}</p>
                </div>
            ))
        };
         </section>
        
    )
}

export default Mina_kurser; 
