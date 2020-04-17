import React from 'react';
import Header from '../component/Header';
import Search from '../component/Search';
import Categories from '../component/Categories';
import Carousel from '../component/Carousel';
import CarouselItem from '../component/CarouselItem';
import Footer from '../component/Footer';
import '../assets/styles/App.scss';

const App=()=>(
    <div className="App">
        <Header/>
        <Search/>
        <Categories title="Mis Favoritos">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>

        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>

        <Categories title="Estrenos">
            <Carousel>
                <CarouselItem/>
            </Carousel>
        </Categories>
        <Footer/>
    </div>
    
);

export default App;