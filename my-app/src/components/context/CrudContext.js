import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";

//Crear nuestro contexto
const CrudContext = createContext();

//Crear el proveedor
const CrudProvider = ({children}) => {
    
    const [ db, setDb] = useState(null);

    const [dataToEdit, setDataToEdit] = useState(null);

    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:5000/santos";

    useEffect( () => {
    
        setLoading(true);
        
        api.get(url).then( res => {
            if(!res.err) {
                setDb(res);
                setError(null)
            } else {
                setDb(null);
                setError(res)
            }

        setLoading(false);
        } );
    }, [] );

    const createData = (data) => {
        data.id = Date.now();
        let options = { body: data, 
            headers: { "content-type": "application/json" }
        };
        api
            .post( url, options)
            .then(res => {
             if(!res.err) {
                setDb([...db, res])
            } else {
                setError(res)
            }
            });
    };

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`;

        let options = { body: data, 
            headers: { "content-type": "application/json" }
        };
        api
            .put( endpoint, options)
            .then(res => {
             if(!res.err) {
                let newData = db.map(e => e.id === data.id ? data : e);
                setDb(newData)
            } else {
                setError(res)
            }
            });
    };  

    const deleteData = (id) => {
        let isDelete = window.confirm(`Estás seguro de querer borrar el registro ${id}?`);

        if(isDelete) { 
            let endpoint = `${url}/${id}`;
            let options = { headers: { "content-type": "application/json" } };

            api
                .del(endpoint, options)
                .then((res) => {
                    if(!res.err) {
                    let newData = db.filter(e => e.id !== id);
                    setDb(newData)
                    } else {
                    setError(res)
                    }
                });
         } else {
             return
         }
    };
    const data = {
        db,
        error,
        loading,
        createData,
        dataToEdit,
        setDataToEdit,
        updateData,
        deleteData
    };

    return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>
};

export {CrudProvider};
export default CrudContext;
