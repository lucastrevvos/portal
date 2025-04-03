
import styles from './styles.module.css'

type Props = React.ComponentProps<"button"> & {
    title: string,
    typeBtn?: 'primary' | 'secundary'
}
export function Button({title, typeBtn = 'primary', ...rest}: Props){
    const className = `${styles.btn} ${typeBtn === 'primary' ? styles['btn-primary'] : styles['btn-secondary']}`
    
    return (
        <button type="button" className={className} {...rest}>
            {title}
        </button>
    )
}