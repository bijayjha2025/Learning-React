
function Hello(props){

    if(props.isLoggedIn){
        return <h2 className= "welcomeMessage">Welcome {props.username}</h2>
    }
    else{
        return <h2 className= "logInMessage">Login to continue</h2>
    }
}

export default Hello