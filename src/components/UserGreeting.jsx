import PropTypes from 'prop-types';


function UserGreeting(props){

const welcome=<h2 className='loggedin'> welcome {props.username}</h2>;
const login= <h2 className='notloggedin'>please login</h2>;


    return(props.isLoggedin ? welcome:login);
}
UserGreeting.propTypes={
    isLoggedin: PropTypes.bool,
    username:PropTypes.string,
}
export default UserGreeting