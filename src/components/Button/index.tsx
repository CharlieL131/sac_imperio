import styles from './styles.module.css';

export interface ButtonProps{
    text: string;
}

export default function TextButton(props: ButtonProps){
    return(
        <button type='button'>
            {props.text};
        </button> 
    )
}