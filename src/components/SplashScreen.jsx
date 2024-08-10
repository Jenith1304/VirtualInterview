import React, { useEffect, useState } from 'react';
import styles from "../components/SplashScreen.module.css";

const SplashScreen = () => {
    return (
        <div className={styles.splash_screen}>
            <div className={styles.splash_content}>
                <img src="" alt="HR Manager Logo" className="splash-logo" />
                <h1 className={styles.splash_title}>Virtual Interviewer</h1>
            </div>
        </div>
    );
};

export default SplashScreen;
