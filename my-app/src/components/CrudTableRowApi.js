import React, { useContext } from "react";
import CrudContext from "./context/CrudContext";

const CrudTableRowApi = ({ e }) => {
    
    const { setDataToEdit, deleteData } = useContext(CrudContext);

    let { name, constellation, id } = e; 
    return(
        <tr>
            <td>{name}</td>
            <td>{constellation}</td>
            <td>
                <button onClick= {() => setDataToEdit(e)}>Editar</button>
                <button onClick= {() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
};

export default CrudTableRowApi
