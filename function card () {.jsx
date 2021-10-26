function Card({ category, title, year, img }) {
  return (
    <div class="card">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div class="about">
        <p>{category}</p>
        <h3>
          {title} <span>{year}</span>
        </h3>
      </div>
    </div>
  )
}

function App() {
  return <div className="card-container"></div>
}
