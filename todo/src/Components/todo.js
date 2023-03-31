import React, { useState } from "react";
import todo from "./todo.css"


const Todo = () =>{

    const[input, setInput] = useState("");
    const[items, setItems] = useState([]);
    const[toggled, setToggled] = useState(true);
    const[update, setUpdate] = useState(null);
    
    
    const addItems = () => {
        
        if(!input){
            alert("Cannot Add Empty Field");
        }
        else if( input && !toggled ){
            setItems(
                items.map((element) => {
                if(element.id === update)
                {
                    return { ... element, name:input}
                }
                return element;
            })
            )
            setToggled(true);
            setInput("");
            setUpdate(null);
        }
        else{
        const setAll = { id: new Date().getTime().toString(), name: input}
        setItems([... items, setAll]);

        setInput("");
        }
    }


    const deleteItem = (index) =>{
        
        const updated = items.filter((element) =>{
            return element.id !== index;
        })
        setItems(updated);
    }
        const editItems = (id) => {
            let edit = items.find((element) =>{
                return id === element.id;
            })
            setToggled(false);
            setInput(edit.name);
            setUpdate(id);

        }
    return(
        <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img className="todo-img"
                     src="https://png.pngtree.com/png-vector/20190727/ourmid/pngtree-business-work-to-do-list-png-image_1635099.jpg" 
                    alt="Todo Image"></img>
                    <figcaption className="todo-cap">Enter your Todos Here</figcaption>
                </figure>
                <div className="add">
                    <input className="place-box" type="text" placeholder ="Add Items" value={input} onChange={(e)=>{setInput(e.target.value)}} required/>
                    
                    {
                        toggled ? <button className="add-item" onClick={addItems}>Add Item</button> : <button className="add-item" onClick={addItems}>Edit Item</button>
                    }
                </div>


                <div className="Showitems">
                   {items.map( (element) => {
                        return(
                            <div className="each" key={ element.id }>
                                <h3 className="itemname"> { element.name } </h3>
                                <button className="add-item" onClick={()=>(deleteItem(element.id))}>Delete Item</button>
                                <button className="add-item" onClick={() => (editItems(element.id))}>Edit Item</button>
                            </div>

                        )
                    })
                }
                </div>

                

            </div>

        </div>
        </>
    );
} 
export default Todo;