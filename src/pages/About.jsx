import Footer from "../components/Footer"

export default function About() {
  return (
    <div className="about">
      <div className="inner">
        <h1 className="display-3 mt-4 mb-3 text-primary">About Me</h1>
        {/* <div className="d-flex flex-wrap pe-3 w-100">
          
          <img src="../images/banner.png" alt="" width="100%" className="mt-3 ms-auto me-auto"/>
        </div> */}

        <h1 className="mt-5 text-primary">Programming</h1>
        <div className="about-card d-flex flex-wrap justify-content-left">
          <p className="ms-5 me-5">
            I started learning programming when I was in 4th grade. My dad was able to teach me the basics because he is a programmer. After doing lots of practices with easy problems on LeetCode, I was able to learn more advanced data structures and languages. Now, I use programming languages such as C++, Java, and Python for competitive programming contests like <a href="https://usaco.org" target="_blank">USACO</a>, and R for data science. I'm currently trying to pass USACO Gold. I'm still new to web development and React, so this website might not be the prettiest. Because I love programming so much, I became the captain for programming club, and I even posted videos explaining programming problems. All my programming projects are public on my <a href="https://github.com/alantao5056" target="_blank">GitHub</a> page. 
          </p>
          <img src="../images/programming.jpeg" alt="" width="300px" className="me-auto ms-auto"/>
        </div>

        <h1 className="mt-5 text-primary">YouTube</h1>
        <div className="about-card d-flex flex-wrap justify-content-left">
          <p className="ms-5 me-3 mb-4 mt-3">
            I have a <a href="https://www.youtube.com/channel/UCzdtyvYuUM6EGKhtsbF_jhQ" target="_blank">YouTube Channel</a> that I started on November 10th, 2023. I started by posting solutions to USACO Silver problems. However, it didn't get much attention, as USACO is not yet very well known, and people on YouTube don't enjoy these types of content as much. So, I experimented with posting ukulele covers of songs. The first cover I posted was <a href="https://www.youtube.com/watch?v=SN_2eu-3reo" target="_blank">IDGAF by BoyWithUke ft. blackbear.</a>. Although I don't think this was my best performance, it still got over 2.3k views, making it the most popular video on my channel. After this, I made more ukulele cover videos and also posted other things like badminton montages, and also a celebration for 100 subscribers. I hope I will post more creative videos in the future, and grow my channel. 
          </p>
          <iframe width="350px" height="200px" src="https://www.youtube.com/embed/SN_2eu-3reo?si=gHnEa18GpOn4qvjV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="me-auto ms-auto"></iframe>
        </div>

        <h1 className="mt-5 text-primary">Badminton</h1>
        <div className="about-card d-flex flex-wrap justify-content-left">
          <p className="ms-5 me-3 mb-4 mt-3">
            I started playing badminton when I was in 7th grade. I actually initially played table tennis, but I switched because I'm a bit too tall for it, which created problems for my posture. In contrast, I found that badminton is a sport where players have to straigten up and extend their body. This improved my posture, and I stuck with it. I won many tournaments, volunteered at the badminton course at Newton Parks and Recreation, and also was the captain of the badminton club at our school. Overall, this sport helped me stay active and in shape. 
          </p>
          <iframe width="350px" height="200px" src="https://www.youtube.com/embed/AlfUuBRpzMI?si=m0f-fLNBgWn-3JhK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="me-auto ms-auto"></iframe>
        </div>

        <h1 className="mt-5 text-primary">Viola</h1>
        <div className="about-card d-flex flex-wrap justify-content-left">
          <p className="ms-5 me-3 mb-5 mt-3 w-100">
            I chose viola as my instrument in 5th grade. I played in the elementry school orchestra, which was very boring to me because the pieces were all very simple accompaniments. So I stopped going to the orchestra in middle school and didn't practice viola. I realized it was a big mistake in high school, because I remembered that I was actually decent at it. So I began taking private lessons and relearning. I now have joined the Junior Repertory Orchestra at BYSO. 
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}