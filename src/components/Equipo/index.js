
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Equipo.css";

const Equipo =(props)=>{
    const {colaboradores,eliminarColaborador,cambiarColor,like} = props;
    const {colorPrimario,titulo,id}= props.datos;
    const obj ={
        backgroundColor:hexToRgba(colorPrimario,0.6)
    }
    return(
        <>
        {
            colaboradores.length > 0 &&
            <section className="equipo"  style={obj}>
                <input 
                    type="color" 
                    className="input-color"
                    value={colorPrimario}
                    onChange={(e)=> cambiarColor(e.target.value,id)}
                    />
                <h3 style={{borderColor:colorPrimario}} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador,i)=> <Colaborador 
                        datos={colaborador} 
                        colorPrimario={colorPrimario} 
                        key={i} 
                        eliminar={eliminarColaborador} 
                        like={like}  />)
                    }
                </div>
            </section>
        }
        </>
    )
}

export default Equipo;