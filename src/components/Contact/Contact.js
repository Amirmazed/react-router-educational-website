import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const Contact = () => {
    return (
        <div>
        <MenuBar></MenuBar>
            <h1>Chittagong office: </h1>
            <p> 81, S.S. Khaled Road, Chittagong</p>
            <p> Phone : +88 023333 2854442, +88 023333 2854443, +88 023333 2851443</p>
            <p>Mobile: +88 01755 66 36 36
                Fax : +88 023333 2851446</p>

                <br />

            <h1>Dhaka Office:</h1>
            <p>House: 142, Road: 12, Block: E, Banani, Dhaka-1213</p>
        <Footer></Footer>
        </div>
    );
};

export default Contact;