import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const About = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <h1>
            Secure, effective distance learning tools for uninterrupted education
            </h1>
            <p>
            For students around the country, classroom learning has become distance learning. Despite the uncertainty around closed schools, teachers can still provide some continuity for their students. With Verizon’s reliable, secure network, school administrators can give teachers the connectivity and collaboration tools to help them connect with students, parents and colleagues.
            </p>
            <br />
            <p>
            We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.
            </p>
            <Footer></Footer>
        </div>
    );
};

export default About;