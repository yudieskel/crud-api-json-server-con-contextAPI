import React, { useContext } from 'react';
import CrudContext from './context/CrudContext';
import CrudFormApi from './CrudFormApi';
import CrudTableApi from './CrudTableApi';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
    
    const { db, loading, error } = useContext(CrudContext);

    return(
    <>
    <div>
        <h1>Ejercicios con React</h1>
        <h2>CRUD API con Context API</h2>
          <article className= "grid-1-2">
            <CrudFormApi/>
            {loading && <Loader/>}
            {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545"/>}
            {db && <CrudTableApi/>}
          </article>
    </div>
    </>
    )
};

export default CrudApi;
