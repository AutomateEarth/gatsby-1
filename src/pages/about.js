import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I currently work with entrepreneurs to strengthen their busienss models with digital solutions!</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default AboutPage