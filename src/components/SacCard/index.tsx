import styles from './styles.module.css';
import { SacCardProps } from './types';

export default function SacCard(props: SacCardProps){
    return (
        <div className = {styles.card}>
            <div className = {styles.icon}>
                <i className={props.icon}></i>
            </div>
            
            <div className = {styles.title}>
                <h3>{props.title}</h3>
            </div>

            <div className = {styles.state} >
            
            </div>
            {props.children}
        </div>
    )
}