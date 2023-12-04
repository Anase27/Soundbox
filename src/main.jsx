import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={10000}>
          <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Simgot-EW200-Desktop-Banner-01.jpg?v=1698134695&width=2000" className="d-block w-100" alt="..." />
          <div className="slideshow-text">
            <h3>Sigmot EW-200</h3>
            <p>Experience the exceptional sound with sigmot</p>
            <button type='button' className='slideshow-button'>
              Buy now
            </button>
          </div>

        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Truthear-Crinacle-Zero-Red-Banner-001.jpg?v=1692344819&width=2000" className="d-block w-100" alt="..." />
          <div className="slideshow-text">
            <h3>Truthear Crinacle Zero:Red</h3>
            <p>An iem with tuning never before seen in this price segment.</p>
            <button type='button' className='slideshow-button'>
              Buy now
            </button>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Beginner-Headphone-Banner-New-01.jpg?v=1681456334&width=2000" className="d-block w-100" alt="..." />
          <div className="slideshow-text">
            <h3>Senheisser H100</h3>
            <p>One of the best headphone from one of the best brand.</p>
            <button type='button' className='slideshow-button'>
              Buy now
            </button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>




    </div>
    <div className="most-loved-product-outer-div">
      <div className="most-loved-product-section">
        <h3 id="most-loved-product-heading">MOST LOVED PRODUCTS</h3>
        <div className="most-loved-products-container">
          <a href="" className="loved-product-link">
            <div className="most-loved-product-tile">
              <div className="small-product-image">
                <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-CCA-POLARIS-1160-1160.jpg?v=1699095100&width=800" alt="" />
              </div>
              <div className="product-name-box">
                <p className="product-brand-name">CCA</p>
                <p className="product-name">The polaris</p>
                <p className="product-price">
                  <span
                    className="iconify"
                    data-icon="clarity:rupee-line"
                    data-width={13}
                    data-height={13}
                  />
                  2300
                </p>
                <p className="product-review" />
              </div>
            </div>
          </a>
          <a href="" className="loved-product-link">
            <div className="most-loved-product-tile">
              <div className="small-product-image">
                <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-ddhifi-janus3-1160-1160.jpg?v=1699524151&width=800" alt="" />
              </div>
              <div className="product-name-box">
                <p className="product-brand-name">Hifi man</p>
                <p className="product-name">dunu 750</p>
                <p className="product-price">
                  <span
                    className="iconify"
                    data-icon="clarity:rupee-line"
                    data-width={13}
                    data-height={13}
                  />
                  15000
                </p>
                <p className="product-review" />
              </div>
            </div>
          </a>
          <a href="" className="loved-product-link">
            <div className="most-loved-product-tile">
              <div className="small-product-image">
                <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-CCA-Pianist-1160-1160-4.jpg?v=1699097573&width=300" alt="" />
              </div>
              <div className="product-name-box">
                <p className="product-brand-name">CCA</p>
                <p className="product-name">The Pianist 1160</p>
                <p className="product-price">
                  <span
                    className="iconify"
                    data-icon="clarity:rupee-line"
                    data-width={13}
                    data-height={13}
                  />
                  6000
                </p>
                <p className="product-review" />
              </div>
            </div>
          </a>
          <a href="" className="loved-product-link">
            <div className="most-loved-product-tile">
              <div className="small-product-image">
                <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-ORIVETI-OD100-01.jpg?v=1698306024&width=300" alt="" />
              </div>
              <div className="product-name-box">
                <p className="product-brand-name">Oriveti</p>
                <p className="product-name">Dune Ie200</p>
                <p className="product-price">
                  <span
                    className="iconify"
                    data-icon="clarity:rupee-line"
                    data-width={13}
                    data-height={13}
                  />
                  1349
                </p>
                <p className="product-review" />
              </div>
            </div>
          </a>
          <a href="" className="loved-product-link">
            <div className="most-loved-product-tile">
              <div className="small-product-image">
                <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-ORIVETI-OD200-05.jpg?v=1698320080&width=300" alt="" />
              </div>
              <div className="product-name-box">
                <p className="product-brand-name">Oriveti</p>
                <p className="product-name">BE350 dual dd</p>
                <p className="product-price">
                  <span
                    className="iconify"
                    data-icon="clarity:rupee-line"
                    data-width={13}
                    data-height={13}
                  />
                  3560
                </p>
                <p className="product-review" />
              </div>
            </div>
          </a>
        </div>
        <div className="most-loved-product-load-more load-more">
          <a href="">
            <p>View more</p>
            <span
              className="iconify"
              data-icon="ph:arrow-up-thin"
              data-rotate="90deg"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="about-the-site-container">
      <div className="about-the-site-left-panel">
        <img src="https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Popup-Newsletter-4_1.png?v=1621679456&width=600" alt="" />
      </div>
      <div className="about-the-site-right-panel">
        <div className="about-the-site-heading">
          <span>Like You, We Love Music</span>
        </div>
        <div className="about-the-site-desc">
          <span>And we believe a Headphone is more than just an instrument for sound. It's the key to a mind-blowing moment of emotion, bringing you closer to your favourite artist, and yourself.
            Imagine a world where the essence of your favorite song isn't just heard, but felt. A good pair of headphones is like a portal to a realm where every note, every beat, and every lyric isn't just played; it's experienced in its full spectrum. It's not just about sound; it's about immersing yourself in a symphony of emotions.
          </span>
        </div>
      </div>
    </div>

    <div className="signup-outer-div">
      <div className="signup-container">
        <div className="signup-container-desc">
          <p>
            Signup to our site to get{" "}
            <span className="Shadow-into-light-font">15%</span> off on your next
            three orders
          </p>
        </div>
        <div className="signup-container-button">
          <a href="./sign-up-form.html" className="simple-btn">
            Signup
          </a>
        </div>
      </div>
    </div>

    <footer>
      <div class="footer-outer-div">
        <div class="footer-container">
          <div class="footer-exclusive-beauty-program-box footer-col">
            <p class="exclusive-beauty-program-header footer-col-hedings">Exclusive program</p>
            <p class="exclusive-beauty-program-desc">
              Discover the loyalty program that rewards both your purchases and your engagement with us
            </p>
            <div class="link-box"><a href="" class="exclusive-beauty-program-link">Discover</a></div>
          </div>
          <div class="footer-client-service-box footer-col">
            <p class="client-service-header footer-col-hedings">Client service</p>
            <div class="client-service-links">
              <div class="link-box"><a href="../HTML/contact-us.html">Contact us</a></div>
              <div class="link-box"><a href="">Delivery & Returns</a></div>
              <div class="link-box"><a href="">FAQ</a></div>
            </div>
          </div>
          <div class="footer-legal-info-box footer-col">
            <p class="footer-legal-info-header footer-col-hedings">Legal information</p>
            <div class="legal-info-links">
              <div class="link-box"><a href="">Legal Terms and Conditions</a></div>
              <div class="link-box"><a href="">Data Protection</a></div>
              <div class="link-box"><a href="">General Sales info</a></div>
              <div class="link-box"><a href="">Careers</a></div>
            </div>
          </div>
          <div class="footer-follow-us-box footer-col">
            <p class="footer-follow-us-header footer-col-hedings">Follow us</p>
            <div class="follow-us-links">
              <div class="link-box"><a href="">Instagram</a></div>
              <div class="link-box"><a href="">Twitter</a></div>
              <div class="link-box"><a href="">Facebook</a></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </React.StrictMode>,
)