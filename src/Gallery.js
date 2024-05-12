import React from "react";

function Gallery(){
  return (
    <section id="gallery">
      <div className="container">
        <div className="row">
          <div align="center">
            <button className="btn filter-button active" data-filter="all">
              All
            </button>
            <button className="btn filter-button" data-filter="hdpe">
              Foods and Culture
            </button>
            <button className="btn filter-button" data-filter="sprinkle">
              Heritage Sites
            </button>
            <button className="btn filter-button" data-filter="spray">
              Paradise
            </button>
          </div>

          <div className="filter-gal-par">
            <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
              <img
                src="images/fiji-surprise/f1.jpg"
                className="img-responsive"
                alt="Fiji Surprise 1"
              />
            </div>

            {/* Add more images here... */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
