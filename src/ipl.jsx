import {useState} from 'react'

function Ipl(props) {

  const [book,setBook]=useState(false)
  
    const handleClick=(e)=>{
      setBook(true)
    }
    if(props.show==true){
    return (
      <div>
       {/* props.name &&  */} <img src={props.image} alt="" />
        <h1>Match : {props.name}</h1>
        <h3>Price : {props.price}</h3>
        <h3>Location : {props.place}</h3>
        <p>{book?"Booked":"Not booked"}</p>
      <button onClick={handleClick}>Book</button> <br />
      <button onClick={()=>props.delete(props.id)}>Delete</button>
      </div>
    );
  } else {
    <p>Not access</p>
  }
} 
  
  export default Ipl;