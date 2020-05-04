import React from 'react';
import '../assets/styles/components/Search.scss';

const Search=({bgImg})=>(

    <section className="main" style={{backgroundImage:`url(${bgImg})`,backgroundSize:"cover" }}>
    <h2 className="main__title">¿Qué estas buscando?</h2>
    <input type="text" className="input__Search" placeholder="Buscar..."/>
    </section>
);

export default Search;