import styles from './Landing.module.css'
import {WelcomePage} from "./WelcomePage/WelcomePage";


export const Landing = () => {
    return (
        <div className={styles.Landing}>
                <WelcomePage/>

        </div>
    )
}