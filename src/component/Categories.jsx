import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({children,title,bgImg}) => (

    <div className="categories" style={{backgroundImage:`url(${bgImg})`,backgroundSize:"cover" }}>
        <h3 className="categories__title">{title}</h3>
        {children}
    </div>

);

export default Categories;
