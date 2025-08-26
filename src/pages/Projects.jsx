import Footer from "../components/Footer"


export default function Projects() {
  const projectCards = [
    {
      image: "../images/programming-club.png",
      title: "Programming Club Website",
      description: "The official website for the programming club at Newton North High School. Built with React and hosted on GitHub Pages.",
      link: "https://nnhsprogramming.club"
    },
    {
      image: "../images/spotify-songs.png",
      title: "Spotify Songs",
      description: "This is a project where I used R to analyze trends in spotify songs. I used datasets from Kaggle with different variables about a certain track (eg. Danceability, Popularity, Speechiness). ",
      link: "https://alienjao.quarto.pub/spotify-songs/pages/"
    },
    {
      image: "../images/carbon-dioxide.png",
      title: "Carbon Dioxide",
      description: "This is a project where I used R to analyze trends in carbon dioxide emissions. I used datasets from Kaggle.",
      link: "https://alienjao.quarto.pub/carbon-dioxide/"
    },
    {
      image: "../images/star-shopper.png",
      title: "Star Shopper",
      description: "A destop tool built with .NET Framework using C#. Used to help people know exactly where items are in a store (currently only Star and Shaws). This is very helpful to instacarters.",
      link: "https://github.com/taojianzzh/StarShopper/tree/main"
    },
    {
      image: "../images/namedle.png",
      title: "Namedle",
      description: "A fun twist on the popular game Wordle, where players guess names instead of words. Built with C++.",
      link: "https://github.com/alantao5056/Namedle"
    }
  ];

  return (
    <div className="projects">
      <div className="inner">
        <h1 className="display-3 text-primary mt-4">Projects</h1>
        <div className="d-flex flex-wrap w-100 p-5 justify-content-center">
          {projectCards.map((card, idx) => (
            <div className="card me-4 mb-5" style={{width: "18rem"}} key={idx}>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <img src={card.image} className="card-img-top" alt={card.title} />
              </a>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
                <a href={card.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto p-1">Visit Site</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
