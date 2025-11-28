import { useState } from "react";

function Component(){
    const [name, setName]= useState();
    const [age, setAge]= useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Bijay");
    }

     const incrementAge = () => {
        setAge(age + 1);
    }

     const EmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Employee Status: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={EmployedStatus}>Employed</button>
        </div>
    );
}

export default Component