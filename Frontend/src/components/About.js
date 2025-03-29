
let About = () => {
    return  <section id="why-us" className="why-us">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>About Us</h2>
      </div>
      <div className="row g-0" data-aos="fade-up" data-aos-delay={200}>
        <div className="col-xl-5 img-bg" style={{backgroundImage: 'url("assets/img/why-us-bg.jpg")'}} />
        <div className="col-xl-7 slides  position-relative">
          <div className="slides-1 swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="item">
                  <h3 className="mb-3">Connections that you didn't even knew you had</h3>
                  <h4 className="mb-3">Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsam perferendis asperiores explicabo vel tempore velit totam, natus nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum. Ullam reiciendis dignissimos laborum aut, magni voluptatem velit doloribus quas sapiente optio.</p>
                </div>
              </div>{/* End slide item */}
              <div className="swiper-slide">
                <div className="item">
                  <h3 className="mb-3">Unde perspiciatis ut repellat dolorem</h3>
                  <h4 className="mb-3">Amet cumque nam sed voluptas doloribus iusto. Dolorem eos aliquam quis.</h4>
                  <p>Dolorem quia fuga consectetur voluptatem. Earum consequatur nulla maxime necessitatibus cum accusamus. Voluptatem dolorem ut numquam dolorum delectus autem veritatis facilis. Et ea ut repellat ea. Facere est dolores fugiat dolor.</p>
                </div>
              </div>{/* End slide item */}
              <div className="swiper-slide">
                <div className="item">
                  <h3 className="mb-3">Aliquid non alias minus</h3>
                  <h4 className="mb-3">Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.</h4>
                  <p>Neque voluptates aut. Soluta aut perspiciatis porro deserunt. Voluptate ut itaque velit. Aut consectetur voluptatem aspernatur sequi sit laborum. Voluptas enim dolorum fugiat aut.</p>
                </div>
              </div>{/* End slide item */}
              <div className="swiper-slide">
                <div className="item">
                  <h3 className="mb-3">Necessitatibus suscipit non voluptatem quibusdam</h3>
                  <h4 className="mb-3">Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est. Eum similique neque autem ut.</h4>
                  <p>Ut rerum et autem vel. Et rerum molestiae aut sit vel incidunt sit at voluptatem. Saepe dolorem et sed voluptate impedit. Ad et qui sint at qui animi animi rerum.</p>
                </div>
              </div>{/* End slide item */}
            </div>
            <div className="swiper-pagination" />
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>
    </div>
  </section>
}

export default About;