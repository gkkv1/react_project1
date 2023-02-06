import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillAmazonCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Internet of Things</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem consequuntur officia aliquam unde, culpa quis, non
            incidunt at nulla tempore atque. In, suscipit fugiat voluptate
            molestias voluptas ullam debitis atque?
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            officia porro labore voluptate vero dolore praesentium rem id
            tempore eos modi ad accusamus voluptates non recusandae deleniti
            nostrum illo quisquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet molestiae eligendi architecto dicta
            exercitationem corrupti aliquam a velit optio reprehenderit libero,
            illum debitis iste repudiandae consequatur est, laboriosam nulla
            nisi?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
