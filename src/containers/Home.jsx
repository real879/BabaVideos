import React,{useState,useEffect} from "react";
import {connect} from 'react-redux';
import Search from "../component/Search";
import Categories from "../component/Categories";
import Carousel from "../component/Carousel";
import CarouselItem from "../component/CarouselItem";
import backgroundSearch from '../assets/static/backgroundSearch.jpg';
import backgroundOriginals from '../assets/static/backgroundOriginals.jpg';
import "../assets/styles/App.scss";


const Home = ({myList, trends, originals}) => {

    return (
        <>
        <Search isHome bgImg={backgroundSearch}/>  

        {myList.length>0 && 

            <Categories title="Mis Favoritos">
                <Carousel>
                {myList.map(item=>
                <CarouselItem 
                    key={item.id}
                    {...item}
                    isList
                    />
                )}
                </Carousel>
            </Categories>
        }
  
        <Categories title="Tendencias">
            <Carousel>
                {trends.map(item=>
                <CarouselItem key={item.id}{...item} />
                )}
            </Carousel>
        </Categories>

       
        <Categories title="Estrenos" bgImg={backgroundOriginals}>
            <Carousel>
            {originals.map(item=>
                <CarouselItem key={item.id}{...item} />
                )}
         
            </Carousel>
        </Categories>
    </>
  );
}

const mapStateToProps=state=>{
    return {
        myList:state.myList,
        trends:state.trends,
        originals:state.originals,
    };
};
export default connect(mapStateToProps,null)(Home);