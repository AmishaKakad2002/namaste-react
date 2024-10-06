import ItemList from "./ItemList";

const ResaturantCategory = ({data,showItems,setShowItems}) =>{
    //console.log(data);
    handleClick = () =>{
           setShowItems();
    };
    return (
        <div>
            <div className="mx-auto  w-6/12 my-4 p-3  bg-slate-50 rounded-sm shadow-md">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
            </div>
            {showItems && <ItemList items ={data.itemCards}/>}
            </div>
            
        </div>
    )
};

export default ResaturantCategory;