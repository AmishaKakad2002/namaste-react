import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userInfo :{
      name: "Dummy",
      location: "Default"
      }
    };
    // console.log(" Child Constructor Called");
  }
  async componentDidMount(){
     const data = await fetch("https://api.github.com/users/AmishaKakad2002");
     const json = await data.json();
     console.log(json);
     this.setState({
      userInfo : json
     })
    // console.log(" Child Component Did Mount Called");
  }
  render() {
      const {name, location,avatar_url} = this.state.userInfo;
    // console.log( " Child Component Rendered");
    return (
      <div className="p-2 m-2">
        <img src={avatar_url} alt="Profile Picture" className="h-56 rounded-lg" />
        <h3 className="font-bold mt-3">Name: {name}</h3>
        <h4 className="font-bold mt-1">Location: {location}</h4>
        <h4 className="font-bold mt-1">Contact: amishak_21</h4>
      </div>
    );
  }
}

export default UserClass;
