import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>I currently work with entrepreneurs to strengthen their busienss models with digital solutions!</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage