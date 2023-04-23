
import { useState } from "react";
import {v4 as uuid} from 'uuid';
import "./Formulario.css"
import Campo from "../Campo/Campo.js";
import ListaOpciones from "../LIstaOpciones/ListaOpciones.js";
import Boton from "../Boton/Boton";

const Formulario =(props)=>{
    const [nombre,setNombre]=useState('');
    const [puesto,setPuesto]=useState('');
    const [foto,setFoto]=useState('');
    const [equipo,setEquipo]=useState('');

    const [titulo,setTitulo]=useState('');
    const [color,setColor]=useState('')

    const {registrarColaborador,creaEquipo}= props;

    const manejarEnvio=(e)=>{
        e.preventDefault();
        let datosEnviar ={
            id:uuid(),
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosEnviar)
        setNombre('');
        setPuesto('')
        setFoto('')
    }

    const menjarNuevoEquipo=(e)=>{
        e.preventDefault()
        let nuevo={
            titulo,
            colorPrimario: color
        }
        creaEquipo(nuevo);
    }
    return(
        <section className="formulario">
            <form onSubmit={manejarEnvio} >
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Campo 
                titulo="Nombre"  
                placeholder="Ingresar nombre" 
                required 
                valor={nombre}
                actualizarValor={setNombre} 
                type="text" 
                />

                <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto}
                actualizarValor={setPuesto}
                type="text" 
                />

                <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto}
                actualizarValor={setFoto}
                type="text" 
                />

                <ListaOpciones valor={equipo} actualizarEquipo={setEquipo} equipos={props.equipos} />
                <Boton texto="Crear"  />
            </form>
            <form onSubmit={menjarNuevoEquipo} >
                <h2>Rellena el formulario para crear el Equipo</h2>
                <Campo 
                titulo="Titulo"  
                placeholder="Ingresar nombre de equipo" 
                required 
                valor={titulo}
                actualizarValor={setTitulo}
                type="text" 
                />

                <Campo 
                titulo="Color" 
                placeholder="Ingresar color en Hex" 
                required 
                valor={color}
                actualizarValor={setColor}
                type="color"
                />
                <Boton texto="Registrar equipo"  />
            </form> 
        </section>
    )
}
export default  Formulario;