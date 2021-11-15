import React, { useContext } from "react";
import CrudContext from "./context/CrudContext";
import CrudTableRowApi from "./CrudTableRowApi";

const CrudTableApi = () => {
    
    const { db : data } = useContext(CrudContext);

    return(
        <>
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelación</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.lenght === 0 ? <tr><td colSpan="3">Sin datos</td></tr> : data.map( e =>  <CrudTableRowApi 
                    key={e.id} 
                    e={e}
                    /> )}
                </tbody>
            </table>
        </div>
        </>
    )
};

export default CrudTableApi