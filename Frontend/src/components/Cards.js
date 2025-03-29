
let Cards = () => {
    return <section id="counts" className="counts">
    <div className="container" data-aos="fade-up">
      <div className="row gy-4">
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="bi bi-emoji-smile" />
            <div>
              <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={1} className="purecounter" />
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="bi bi-journal-richtext" style={{color: '#ee6c20'}} />
            <div>
              <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={1} className="purecounter" />
              <p>Projects</p>
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
}

export default Cards;