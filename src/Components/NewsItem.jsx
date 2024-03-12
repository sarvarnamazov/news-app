
import image from '../assets/news.jpg'

export default function NewsItem({ title, description, src, url }) {
    return (
        <div className="card bg-dark text-light d-inline-block m-3" style={{ maxWidth: '400px' }}>

            <img src={src ? src : image} className='card-img-top' style={{ height: '250px', width: '100%' }} />

            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 20)}</h5>
                <p className="card-text">{description ? description.slice(0, 90) : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum consectetur nemo commodi.'}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}
