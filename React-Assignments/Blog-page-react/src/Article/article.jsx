import styles from './article.module.css'

function Article(props){
    return(
        <div className={styles.articleContainer}>
            <img src={props.img} alt="featured-image" className={styles.featuredImage}/>
            <div className={styles.contentContainer}>
                <ul>
                    <li>{props.author}</li>
                    <li>{props.date}</li>
                    <li>{props.size}</li>
                </ul>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <a href="#">Read full article</a>
            </div>
        </div>
    )
}
export default Article