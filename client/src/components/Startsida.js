import React, { Component } from 'react'; 


class Startsida extends Component {


    componentDidMount() {


    //     const config = {
    //         headers : {
    //             Authorization: 'Bearer ' + localStorage.getItem('token')
    //         }
    //     }
        
    //     fetch('http://localhost:3000/isUserAuth' , {
    //         method: 'GET',
    //         headers: {
    //             Authorization: 'Bearer ' + localStorage.getItem('token')
    //         },
           
    //     })
    //     .then(response => response.json())
    //     .then(actualData => console.log(actualData))
    //     .catch(err =>{})

    }

    render() {
        return(
            <section>
                <div class = "container-fluid">
                    <h1 class = "mt-5"> Welcome </h1>
                    <p> This site was created using Node</p>
                </div>
            </section> 
        )
    }
}


export default Startsida; 
