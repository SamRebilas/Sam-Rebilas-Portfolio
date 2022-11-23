import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/Screenshot_20221123_095700.png";
import photo2 from "../../assets/small/commercial/Screenshot_20221123_095811.png";
import photo3 from "../../assets/small/commercial/Screenshot 2022-11-10 180353.png";


function Gallery(props) {
  const currentCategory = {
    name: "Gallery",
     
  };
  return (
    <section className="Gallery">
      <h1 id="Gallery">{capitalizeFirstLetter}</h1>
      <div className="flex-row">
      <a className="myWork" href="https://maxbransontaylor.github.io/genre-buddy/">
          <img
            src={photo}
            alt="Commercial Example"
            href="https://maxbransontaylor.github.io/genre-buddy/"
            className="img-thumbnail mx-1"
          />
          </a>
        <a className="myWork" href="https://lonely-gamer-hours.herokuapp.com/home">
            <img
            src={photo2}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
          </a>
          <a className="myWork" href="https://green-up-heroku.herokuapp.com/">
            <img
            src={photo3}
            alt="Commercial Example"
            className="img-thumbnail mx-1"
          />
          </a>
      </div>
    </section>
  );
}
export default Gallery;