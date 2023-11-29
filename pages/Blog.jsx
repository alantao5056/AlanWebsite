import './Blog.css'

export default function Blog() {
  return (
    <div className="blog">
      <h1 className="display-1 mt-4 mb-5">Blog</h1>
      <div className="blogs d-flex flex-column align-items-center">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Making This Site</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">11/28/23</h6>
            <p className="card-text">
              It really took lots of work.
              I worked on this for so long because it was one of the first times that I got exposed to html + css.
              I had to do a <strong>TON</strong> of research, and I went through a <strong>TON</strong> of problems along the way. 
              <br />
              <br />
              Please check out my <a href="https://www.youtube.com/@AlanCS-ub9id" target="_blank">YouTube</a> and <a href="https://github.com/alantao5056" target="_blank">GitHub</a>. It would help me out a lot :)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}