import React from 'react';
import Hero from '../Components/Hero';

const Home =() => {
    return 
       <Hero hero="defaultHero" />
}

Hero.defaultProps = {
    hero:"defaultHero"
}

export default Home
