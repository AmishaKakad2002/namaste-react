import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props){
        super(props);
        // console.log("Parent Constructor Called");
    }
    componentDidMount(){
        // console.log("Parent Component Did Mount Called");
    }
  render() {
    // console.log("Parent Component Rendered");
    return (
      <div className="p-4 m-4 bg-slate-200 w-[600px] h-[450px] hover:bg-slate-300 rounded-lg">
        <h2 className="p-2 m-2 font-bold">This is Namaste React's Course Project </h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
