
// import { useState } from "react";
import "./Campo.css"


const Campo=(props)=>{
    //const [valor,setValor]= useState('');
    const manejarValor=(e)=>{
        props.actualizarValor(e.target.value)
    }
    const {type="text"}=props
    return(
        <div  className={`campo campo-${type}`}>
            <label>{props.titulo.toUpperCase()}</label>
            <input type={type} 
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarValor}
            />
        </div>
    )
}

export default Campo;