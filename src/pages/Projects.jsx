import Footer from "../components/Footer"

export default function Projects() {
  return (
    <div className="projects">
      <div className="inner">
        <h1 className="display-3 text-primary mt-4">Projects</h1>
        <div className="d-flex flex-wrap w-100 p-5">
          <div className="card me-3 mb-4" style={{width: "18rem"}}>
            <a href="https://alienjao.quarto.pub/spotify-songs/pages/" target="_blank">
              <img src="../images/spotify-songs.png" className="card-img-top" />
            </a>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Spotify Songs</h5>
              <p className="card-text">
                This is a project where I used R to analyze trends in spotify songs. I used datasets from Kaggle with different variables about a certain track (eg. Danceability, Popularity, Speechiness). 
              </p>
              <a href="https://alienjao.quarto.pub/spotify-songs/pages/" target="_blank" className="btn btn-primary mt-auto p-1">Visit Site</a>
            </div>
          </div>

          <div className="card me-3 mb-4" style={{width: "18rem"}}>
            <a href="https://alienjao.quarto.pub/carbon-dioxide/" target="_blank">
              <img src="../images/carbon-dioxide.png" className="card-img-top" />
            </a>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Carbon Dioxide</h5>
              <p className="card-text">
                This is a project where I used R to analyze trends in carbon dioxide emissions. I used datasets from Kaggle. 
              </p>
              <a href="https://alienjao.quarto.pub/carbon-dioxide/" target="_blank" className="btn btn-primary mt-auto p-1">Visit Site</a>
            </div>
          </div>

          <div className="card me-3 mb-4" style={{width: "18rem"}}>
            <a href="https://github.com/taojianzzh/StarShopper/tree/main" target="_blank">
              <img src="../images/star-shopper.png" className="card-img-top" />
            </a>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Star Shopper</h5>
              <p className="card-text">
                A destop tool built with .NET Framework using C#. Used to help people know exactly where items are in a store (currently only Star and Shaws). This is very helpful to instacarters. 
              </p>
              <a href="https://github.com/taojianzzh/StarShopper/tree/main" target="_blank" className="btn btn-primary mt-auto p-1">Visit Site</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
