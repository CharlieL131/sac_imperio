import styles from './styles.module.css';
import { SacCardProps } from './types';

export default function SacCard(props: SacCardProps){
    return (
        <div className={styles.container}>
            <div className = {styles.card}>
                <div className = {styles.icon}>
                    
                </div>
                
                <div className = {styles.title}>

                </div>

                <div className = {styles.state} >

                </div>

            </div>
        </div>
    )
}