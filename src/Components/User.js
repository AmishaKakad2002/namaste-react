import { useState } from "react";

const User = ({name,location}) =>{
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h3>Count : {count}</h3>
            <h3>Count2 : {count2}</h3>
            <h3>Name: {name}</h3>
            <h4>Location: {location}</h4>
            <h4>Contact: amishak_21</h4>
        </div>
    )
};

export default User;