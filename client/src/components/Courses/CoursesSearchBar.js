
// Creates the component for the searchbar used in search courses
// and on the homepage
function CoursesSearchBar (props) {

    return(
        // Filtering searchbar the user can search for a specific program and coursename
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
}

export default CoursesSearchBar;