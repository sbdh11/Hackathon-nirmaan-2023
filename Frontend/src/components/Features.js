import "./Features.css"


let Features = () =>  {
    return  <section id="features" className="features">
    <div className="container" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-7" data-aos="fade-up" data-aos-delay={100}>
          <h3>Our Features  <br /></h3>
          <div className="row gy-4">
            <div className="col-md-12">
              <div className="icon-list d-flex">
                <i className="ri-discuss-line" style={{color: '#ffbb2c'}} />
                <span>Student + Alumni Engagement
                    <br></br>
                    <span className="lowermsg"> Empower your student and alumni to connect anywhere, anytime on desktop</span>
                    </span> 
                
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-12">
              <div className="icon-list d-flex">
                <i className="ri-bar-chart-box-line" style={{color: '#5578ff'}} />
                <span>Mentoring + Career Development
                <br></br>
                    <span className="lowermsg">Facilitate informal mentoring relationships and robust mentoring programs with automated</span>  <span className="lowermsg"> matching at scale</span>
                    
                </span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-12">
              <div className="icon-list d-flex">
                <i className="ri-calendar-todo-line" style={{color: '#e80368'}} />
                <span>Event Management
                <br></br>
                    <span className="lowermsg">Easily create and promote events directly in the platform</span>

                </span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-12">
              <div className="icon-list d-flex">
                <i className="ri-community-line" style={{color: '#e361ff'}} />
                <span>Affinity Group Spaces 
                <br></br>
                    <span className="lowermsg">Tap into a diverse and supportive network of peers and professional who are willing to help</span>

                </span>
              </div>
            </div>{/* End Icon List Item*/}
            <div className="col-md-12">
              <div className="icon-list d-flex">
                <i className="ri-database-2-line" style={{color: '#47aeff'}} />
                <span>Business Promotion
                <br></br>
                    <span className="lowermsg">Showcase your community and alumni business to support them</span>

                </span>
              </div>
            </div>{/* End Icon List Item*/}
           
          </div>
        </div>
        <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay={200}>
          <div className="phone-wrap">
            <img src="assets/img/iphone.png" alt="Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    <div className="details">
      <div className="container" data-aos="fade-up" data-aos-delay={300}>
      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <div>
                  <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
                  <p>Colleges Incoorperated</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-journal-richtext" style={{color: '#ee6c20'}} />
                <div>
                  <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
                  <p>Alumni Registered</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-headset" style={{color: '#15be56'}} />
                <div>
                  <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={1} className="purecounter" />
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-people" style={{color: '#bb0852'}} />
                <div>
                  <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  </section>
}

export default Features;