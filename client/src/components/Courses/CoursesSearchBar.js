

function CoursesSearchBar (props) {

    return(
        // Filtering searchbar
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