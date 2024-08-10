import styles from "../components/Navbar.module.css"
const Navbar = () => {
    return (
        <div className={styles.container}>
            <img src="" alt="" />
            <div className={styles.navbar}>
                <div className={styles.navbarleft}>
                    <ul>
                        <li>For Interviewers</li>
                        <li>For Interviewee</li>
                    </ul>
                </div>
                <div className={styles.navbarright}>
                    <ul>
                        <li>Sign In</li>
                        <li>Sign Up</li>
                    </ul>
                </div>
            </div>
        </div >
    )

}
export default Navbar;