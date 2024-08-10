import React from 'react';
import styles from "../components/BlurryBackground.module.css"

const BlurryBackground = () => {
    return (
        <div className={styles.blurry_background}>
            <div className={styles.blurry_shape}></div>
        </div>
    );
};

export default BlurryBackground;
