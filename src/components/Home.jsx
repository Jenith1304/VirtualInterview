import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import styles from '../components/Home.module.css'
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className={styles.landing_page}>
            {/* Header Section */}
            <header className={styles.header}>
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to Virtual Interview
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    The ultimate tool for managing your interview needs efficiently.
                </motion.p>
                <ScrollLink 
                    to={styles.features} 
                    smooth={true} 
                    duration={1000}
                    className={styles.scroll_button}
                >
                    Discover More
                </ScrollLink>
            </header>

            {/* Features Section */}
            <section id="features" className={styles.features}>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2>Feature One</h2>
                    <p>Details about feature one.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2>Feature Two</h2>
                    <p>Details about feature two.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2>Feature Three</h2>
                    <p>Details about feature three.</p>
                </motion.div>
            </section>

           <Footer/>
        </div>
        </>
    );
};

export default Home;
