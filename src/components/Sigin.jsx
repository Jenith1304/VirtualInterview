import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import styles from "../components/Signin.module.css"
const Signin=()=>
{
    return (
        <>
        <Navbar/>
        <div className={styles.login_form_container}>
            <div className={styles.login_form}>
                <h1>Welcome Back</h1>
                <form>
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
                    <button type="submit" className={styles.login_button}>
                        Sign In
                    </button>
                </form>
                <div className="additional-options">
                    <a href="#">Forgot your password?</a>
                    <p>
                        Don't have an account? <a href="#">Sign up here</a>
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Signin;