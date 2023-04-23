import "./ListaOpciones.css"

const ListaOpciones =(props)=>{
    const manejarCambio=(e)=>{
        props.actualizarEquipo(e.target.value)
    }
    return(
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.value} onChange={manejarCambio}>
                <option value=""  defaultValue="" hidden >Selecionar equipo</option>
                { props.equipos.map((equipo,i)=> <option key={i} value={equipo} >{equipo}</option>)}
            </select>
        </div>
    )
}

export default ListaOpciones