import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
    <NavBar />

      <section id="about">
      <div class="container" data-aos="fade-up">

        <header class="section-header pt-5">
          <h3> SRC INFORMATION SYSTEM
          </h3>
        <p>We offer a platform that empowers students to share their feedback and address academic concerns, fostering an environment dedicated to enhancing and nurturing student academic progress.</p>
        </header>

        <div class="row about-container">

          <div class="col-lg-6 content order-lg-1 order-2">
            <p>
    
            </p>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="bi bi-card-checklist"></i></div>
              <h4 class="title"><a href="{% url 'review' %}">Teacher's rating </a></h4>
              <p class="description">Teacher rating is one of the topics that has been widely studied over the years, which needs relevant attention by our educational administrative institutions.</p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="bi bi-brightness-high"></i></div>
              <h4 class="title"><a href="{% url 'review' %}">Students Feedback</a></h4>
              <p class="description">Students can give feedback as easy and stressfree as possible. This encourages both the lecturers and students to enhance Teaching and Learning. </p>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><i class="bi bi-calendar4-week"></i></div>
              <h4 class="title"><a href="{% url 'review' %}">Improves Productivity</a></h4>
              <p class="description">This system also improve the productivity of the student and the lecturers by regular feedback, which gives the lecturer dynamic style of engaging and giving the students the best information.</p>
            </div>

          </div>

          <div class="col-lg-6 background order-lg-2" data-aos="zoom-in">
            <img src="assets/img/about-img.svg" class="img-fluid" alt=""/>
          </div>
        </div>

        <div class="row about-extra">
          <div class="col-lg-6" data-aos="fade-right">
            <img src="assets/img/about-extra-1.svg" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-5 pt-lg-0" data-aos="fade-left">
            <h4>MAIN OBJECTIVE.</h4>
            <p>
                  The main goal of this project is to create a web-based system for teacher rating  by students. The scope enwraps the activities involved in the assessment scheme which will involve only students registered in methodist university ghana to be able to assess there lecturers.
            </p>
            <p>
                  The students rating will provide assessment that teachers can use to make positive changes in their service. The assessment information provided by the students can identify strength and weaknesses recognized by the students in a specific circumstances.
            </p>
          </div>
        </div>

        <div class="row about-extra">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            <img src="assets/img/about-extra-2.svg" class="img-fluid" alt="" />
          </div>

          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-right">
            <h4>SIGNIFICANCE.</h4>
            <p>
               The Project is to create a web-based applicaiton for students rating of teacher effectiveness system.  
            </p>
            <p>
              This provides a basic student rating system capable of allowing various class students to rate his or her teacher and these rating are then complied and analyzed by various administrative body. It also helps in proper storage and maintenance of Student documentation.
            </p>
            <p>
              Futhermore, it aids structured document representation and eliminates the tedious of performing monotonous rating system. The system is designed in a way that makes it possible to access through any device connected to the internet.
            </p>
          </div>

        </div>

      </div>
     </section>
     <Footer />

    </>
  )
}

export default About
