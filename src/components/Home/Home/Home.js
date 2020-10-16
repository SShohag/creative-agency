import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import ClientName from '../ClientName/ClientName';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ClientName></ClientName>
            <Services></Services>
            <Works></Works>
            <ClientFeedback></ClientFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;