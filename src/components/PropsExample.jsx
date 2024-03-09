
import PropTypes from 'prop-types';

function PropsExample(Props){
    
    return(
        <div className="student">
            <p>name: {Props.studentName}</p>
            <p>age: {Props.age}</p>
            <p>Student: {Props.isStudent ? "yes":"no"}</p>
        </div>
    );
  
}
PropsExample.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    Student: PropTypes.bool,
}

PropsExample.defaultProps={
    name: "guest",
    age:0,
    Student: "no",
}

export default PropsExample