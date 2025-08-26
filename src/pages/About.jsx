import Footer from "../components/Footer"

export default function About() {
  return (
    <div className="about">
      <div className="inner mb-5">
        <h1 className="display-3 mt-4 mb-3 text-primary">About Me</h1>
        {/* <div className="d-flex flex-wrap pe-3 w-100">
          
          <img src="../images/banner.png" alt="" width="100%" className="mt-3 ms-auto me-auto"/>
        </div> */}

        <h1 className="mt-5 text-primary">Programming</h1>
        <div className="about-card d-flex flex-wrap justify-content-left">
          <p className="ms-5 me-5">
            I started learning the basics of programming from my dad when I was in 4th grade. After doing lots of practices with easy problems on LeetCode, I was able to learn more advanced data structures and languages. Now, I use programming languages such as C++, Java, and Python for competitive programming contests like <a href="https://usaco.org" target="_blank">USACO</a>, R for data science, Q# for quantum computing, and swift for app development. I'm still relatively new to web development and React, so this website might not be the prettiest. Because I love programming so much, I became the captain for programming club and created a <a href="https://nnhsprogramming.club" target="_blank">club website</a> for us as well, and I even posted videos explaining programming problems. All my programming projects are public on my <a href="https://github.com/alantao5056" target="_blank">GitHub</a> page. 
          </p>
          <img src="../images/programming.jpeg" alt="" width="300px" className="me-auto ms-auto"/>
        </div>

        <h1 className="mt-5 text-primary">YouTube</h1>
        <div className="about-card d-flex flex-wrap justify-content-left">
          <p className="ms-5 me-3 mb-4 mt-3">
            I have a <a href="https://www.youtube.com/channel/UCzdtyvYuUM6EGKhtsbF_jhQ" target="_blank">YouTube Channel</a> that I started on November 10th, 2023. I started by posting solutions to USACO Silver problems. However, it didn't get much attention, as USACO is not yet very well known, and people on YouTube don't enjoy these types of content as much. So, I experimented with posting ukulele covers of songs. The first cover I posted was <a href="https://www.youtube.com/watch?v=SN_2eu-3reo" target="_blank">IDGAF by BoyWithUke ft. blackbear.</a>. Quickly after, I posted <a href="https://www.youtube.com/watch?v=t19MRxlTntg">She Said No by BoywithUke</a>, getting over 10k views. I also posted other random things, like going to Costco and badminton montages. I hope to continue posting more content in the future and grow my channel even more. 
          </p>
          <iframe width="350px" height="200px" src="https://www.youtube.com/embed/SN_2eu-3reo?si=gHnEa18GpOn4qvjV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="me-auto ms-auto"></iframe>
        </div>

        <h1 className="mt-5 text-primary">Badminton</h1>
        <div className="about-card d-flex flex-wrap justify-content-left">
          <p className="ms-5 me-3 mb-4 mt-3">
            I started playing badminton when I was in 7th grade. I actually initially played table tennis, but I switched because I'm a bit too tall for it, which created problems for my posture. Badminton, on the other hand, is a sport where players have to straigten up and extend their body. This improved my posture, and I stuck with it until today. I won many tournaments, volunteered at badminton camps at Newton Parks and Recreation, and also was the captain of the badminton club at our school. Overall, this sport helped me stay active and in shape. 
          </p>
          <iframe width="350px" height="200px" src="https://www.youtube.com/embed/JCSy6fdkxv4?si=gB7D0PQ1Nf9e7ts6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="me-auto ms-auto"></iframe>
        </div>

        <h1 className="mt-5 text-primary">Viola</h1>
        <div className="about-card d-flex flex-wrap justify-content-left">
          <p className="ms-5 me-3 mb-5 mt-3">
            I chose viola as my instrument in 5th grade because of it's deep and warm tone. I played in the elementry school orchestra, which was very boring to me because the pieces were all very simple accompaniments. So I stopped going to the orchestra in middle school and didn't practice viola. But then I realized it was a big mistake in high school, because I had found my passion for music and I wanted to play in a more advanced orchestra again. So I began picking it up again. Currently I am in the Reportory Orchestra at Boston Youth Symphony Orchestras (BYSO).
          </p>
          <iframe width="350px" height="200px" src="https://www.youtube.com/embed/ceofxYIgnMI?si=QGBvwbkWiLAmJFaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="me-auto ms-auto"></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}