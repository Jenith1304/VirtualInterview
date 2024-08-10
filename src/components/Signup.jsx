import React from 'react';
import styles from '../components/SignUp.module.css';
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"

const Signup = () => {
    return (
        <>
        <Navbar/>
        <div className={styles.signup_form_container}>
            <div className={styles.signup_form}>
                <h1 className={styles.header}>Create Account</h1>
                <form>
                    <div className={styles.form_group}>
                        <label>Full Name</label>
                        <div className={styles.input_wrapper}>
                            <span className={styles.input_icon}>👤</span>
                            <input type="text" placeholder="Enter your full name" />
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <label>Email</label>
                        <div className={styles.input_wrapper}>
                            <span className={styles.input_icon}>@</span>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <label>Password</label>
                        <div className={styles.input_wrapper}>
                            <span className={styles.input_icon}>🔒</span>
                            <input type="password" placeholder="Enter your password" />
                        </div>
                    </div>
                    <button type="submit" className={styles.signup_button}>
                        Sign Up
                    </button>
                </form>
                <div className={styles.additional_options}>
                    <p>
                        Already have an account? <a href="#">Sign in here</a>
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    );
};

export default Signup;
