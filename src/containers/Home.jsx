import React,{useState,useEffect} from "react";
import Header from "../component/Header";
import Search from "../component/Search";
import Categories from "../component/Categories";
import Carousel from "../component/Carousel";
import CarouselItem from "../component/CarouselItem";
import Footer from "../component/Footer";
import useInitialState from '../hooks/useInitialState';
import "../assets/styles/App.scss";

const API='http://localhost:3000/InitialState/';

const App = () => {
    const initialState=useInitialState(API);    
    return (
        <div className="App">
        <Header />
        <Search />
        {initialState.mylist.length>0 && 

            <Categories title="Mis Favoritos">
                <Carousel>
                {initialState.mylist.map(item=>
                <CarouselItem key={item.id}{...item} />
                )}
                </Carousel>
            </Categories>
        }
  
        <Categories title="Tendencias">
            <Carousel>
                {initialState.trends.map(item=>
                <CarouselItem key={item.id}{...item} />
                )}
            </Carousel>
        </Categories>

       
        <Categories title="Estrenos">
            <Carousel>
            {initialState.originals.map(item=>
                <CarouselItem key={item.id}{...item} />
                )}
         
            </Carousel>
        </Categories>
        <Footer />
    </div>
  );
}
export default App;