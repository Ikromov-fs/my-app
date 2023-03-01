import "./banner.css"

const Banner = ({ data }) => {
    return (
        <div className="parent__div">
            {data.map(item => (
                <div key={item.id} className="wropper">
                    <p>{item.text}</p>
                    <span>{item.number}</span>
                </div>
            ))}
        </div>
    )
}

export default Banner