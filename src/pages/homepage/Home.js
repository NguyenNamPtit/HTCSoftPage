import React from 'react';
import Slide from './Slide/Slide';
import Banner from './Banner/Banner';
import Experience from './Experience/Experience';
import Product from './Products/Product';
import Unique from './Unique/Unique';

const Home = () => {
    return (
        <div>
            <section>
                <Slide />
            </section>
            <section>
                <Banner />
            </section>
            <section>
                <Experience />
            </section>
            <section>
                <Product />
            </section>
            <section>
                <Unique />
            </section>
        </div>

    );
}

export default Home;
