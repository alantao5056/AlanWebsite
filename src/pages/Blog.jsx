import { Link } from "react-router-dom"
import Footer from "../components/Footer"

export default function Blog() {
  return (
    <div className="blog">
      <div className="inner">
        <h1 className="display-3 text-primary mt-4 mb-5">Blog</h1>
        <div className="blogs d-flex flex-column align-items-center">
          <div className="blog-card card text-white w-75 mb-4">
            <div className="card-header">Programming</div>
            <div className="card-body">
              <h4 className="card-title">Publishing This Site</h4>
              <h6 className="card-subtitle mb-2">7/12/2024</h6>
              <p className="card-text">
                It really took lots of work.
                I worked on this for so long because it was one of the first times working with React. 
                I had to do a <strong>TON</strong> of research, and I went through a <strong>TON</strong> of problems along the way. 
                <br />
                <br />
                Please check out my <Link to="/projects">Projects</Link>, <a href="https://www.youtube.com/channel/UCzdtyvYuUM6EGKhtsbF_jhQ" target="_blank">YouTube</a>, and <a href="https://github.com/alantao5056" target="_blank">GitHub</a>. It would make me very happy :)
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />      
    </div>
  )
}