import styles from './Landing.module.css'
import {WelcomePage} from "./WelcomePage/WelcomePage";
import {SecondPage} from "./SecondPage/SecondPage";


export const Landing = () => {
    return (
        <div className={styles.Landing}>
            <div style={{display: 'inline-block', justifyContent: "center", width: '100%'}}>
                <WelcomePage/>
                <SecondPage/>
            </div>
        </div>
    )
}