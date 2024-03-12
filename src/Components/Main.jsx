
import { useState, useEffect } from "react"
import NewsItem from "./NewsItem"

// https://api.thenewsapi.com/v1/news/all?api_token=CeJ6bHVGiNF2oQN9znURzBFAfodfQS1KIxYoV5xc&language=en&limit=3
// let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

export default function Main({ category }) {
    const [article, setArticle] = useState([])

    useEffect(() => {
        let url = `https://api.spaceflightnewsapi.net/v4/articles/?limit=10`
        fetch(url)
            .then(response => response.json())
            .then(data => setArticle(data.results))
            .catch(error => console.log('Error fetching articles:', error))
    }, [])


    return (
        <div className="container">
            <h2 className="text-center">Latest <span className="badge bg-primary">News</span></h2>

            {article.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.summary} src={news.image_url} url={news.url} />
            })}

        </div>

    )
}