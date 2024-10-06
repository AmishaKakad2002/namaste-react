const Contact = () =>{
    return (
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">Contact Us </h1>
            <form className="m-4 p-4">
                  <input type="text" className="border border-black p-2 m-2" placeholder="Enter Name" />
                  <input type="text" className="border border-black p-2 m-2" placeholder="Enter Message" />
                  <button className="m-2 p-2 border border-black rounded-lg bg-cyan-200">Submit</button>
            </form>
        </div>
    );
};

export default Contact;