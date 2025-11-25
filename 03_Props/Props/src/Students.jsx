
import PropTypes from 'prop-types'
function Students(props){
    return(
        <div className="details">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Faculty: {props.faculty}</p>
            <p>Graduated: {props.isGraduated ? "Yes" : "No"}</p>
        </div>
    )
}

Students.propTypes= {
    name: PropTypes.string,
    age: PropTypes.number,
    faculty: PropTypes.string,
    isGraduated: PropTypes.bool,
}

export default Students