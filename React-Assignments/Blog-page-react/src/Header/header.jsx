import styles from './header.module.css'

function Header(){
    return(
        <div className={styles.headerContainer}>
            <h1>Tech Insights</h1>
            <p>Exploring the latest trends in technology and design</p>
            <hr />
        </div>
    )
}
export default Header