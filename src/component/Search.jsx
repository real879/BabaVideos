import React from 'react';
import classNames from 'classnames'
import '../assets/styles/components/Search.scss';

const Search=({bgImg,isHome})=>{

    
    return(
        <section className="main" >
        <h2 className="main__title">¿Qué estas buscando?</h2>
        <input type="text" className="input__Search" placeholder="Buscar..."/>
        </section>
    );
};

export default Search;