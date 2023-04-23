
import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './components/Header/Header.js';
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg/index.js';
import Equipo from './components/Equipo/index.js';
import Footer from './components/Footer/index.jsx';

function App() {
  const [mostrarFormulario,actualizarMostrar]=useState(true);
  const [colaboradores,setColaboradores]=useState([
    {
      id:uuid(),
      equipo: "Front End",
      foto: "https://github.com/AlexGeovanni.png",
      nombre: "Alex Geovanni",
      puesto: "Desarrollador web",
      fav:true
    },
    {
    id:uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:false
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id:uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:false
  },
  {
    id:uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:false
  }
  ]);

  const [equipos,setEquipo]=useState(
    [
      {
        id:uuid(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id:uuid(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id:uuid(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id:uuid(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id:uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id:uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id:uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
    ])

  const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  // funcion de registra colaborador
  const registrarColaborador =(colaborador)=>{
    //Spread operator es utlizar ... toma los valores actuales y los va a copiar
    setColaboradores([...colaboradores,colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador =(id)=>{
    const nuevosColaboradores =colaboradores.filter((colaborador)=> colaborador.id !==id );
    setColaboradores(nuevosColaboradores);
  }

  const cambiarColor=(color,id)=>{
    //console.log("Actualizar",color,id);
    const equipoActualizado = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario= color;
      }
      return equipo;
    })
    setEquipo(equipoActualizado);
  }

  // Agregar nuevo equipo
  const creaEquipo=(nuevoEquipo)=>{
    setEquipo([...equipos,{...nuevoEquipo,id:uuid()}]);
  }

  const like=(id)=>{
    console.log("el id es:",id)
    const equipoActualizadosLike= colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })
    setColaboradores(equipoActualizadosLike)
  }

  return (
    <div>
      <Header/>
      {/* {mostrarFormulario? <Formulario/>: <></> } */}
      {/* otra forma de hacer un condicional mostrarFormulario = true entonces muestra el formulario caso 
      contrario no hace nada */}
      {mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo)=> equipo.titulo)}
          registrarColaborador={registrarColaborador}
          creaEquipo ={creaEquipo}
          />}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo)=> 
        <Equipo datos={equipo} key={equipo.titulo}
        /*colaborador se pasa solo si cumple que equipo sea igual al equipo.titulo,
         si no cumple solo para colaborador vacio pero no crea nada */
        colaboradores={colaboradores.filter((colaborador)=> colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        cambiarColor={cambiarColor}
        like={like}
        />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
