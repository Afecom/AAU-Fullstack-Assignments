import Header from "./Header/header.jsx"
import Article from "./Article/article.jsx"
import featuredImage from './assets/featured-img.webp'

function App() {
  return(
    <div>
      <Header />
      <div className="main">
        <Article img={featuredImage} author='Sarah Johnson' date='March 15, 2024' size='5 min read' 
                                    title='The Future of Web Development: Trend to wath in 2024'
                                    description='Discover the cutting edge technologies and methedologies that are shaping
                                    the future of web development. From AI integrations to progressive web apps, learn
                                    whats coming next in the digital landscape.'/>
      </div>
    </div>
  )
}

export default App
