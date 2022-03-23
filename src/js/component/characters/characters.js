import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import "./characters.css";

export const Characters = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <img
              className="img-fluid"
              src="https://img.europapress.es/fotoweb/fotonoticia_20191226114223_1200.jpg"
            />
            <h4>Luke Skywalker</h4>
            <div className="d-flex justify-content-between bg-dark">
                <button className="detalles btn btn-outline-warning my-2 btn-lg rounded-0">
                  <span>detalles</span>
                </button>
                <button className="btn btn-outline-warning my-2 rounded-0">
                  <AiFillStar/>
                </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <img
              className="img-fluid"
              src="https://p4.wallpaperbetter.com/wallpaper/878/610/411/movies-star-wars-darth-vader-wallpaper-preview.jpg"
            />
            <h4>Dark Vader</h4>
            <div className="d-flex justify-content-between bg-dark">
                <button className="detalles btn btn-outline-warning my-2 btn-lg rounded-0">
                  <span>detalles</span>
                </button>
                <button className="btn btn-outline-warning my-2 rounded-0">
                  <AiFillStar/>
                </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <img
              className="img-fluid"
              src="https://www.latercera.com/resizer/at6zJiwzvHBfWY_cJVN-KSCSOx8=/900x600/filters:focal(536x189:546x179)/cloudfront-us-east-1.images.arcpublishing.com/copesa/THJYZD5OKJGCXCOP6ZJZJ42C4Q.jpeg"
            />
            <h4>Leia Organa</h4>
            <div className="d-flex justify-content-between bg-dark">
                <button className="detalles btn btn-outline-warning my-2 btn-lg rounded-0">
                  <span>detalles</span>
                </button>
                <button className="btn btn-outline-warning my-2 rounded-0">
                  <AiFillStar/>
                </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <img
              className="img-fluid"
              src="https://conocedores.com/wp-content/uploads/2022/03/obi-wan-lenobi-capitulos-10032022in1.jpg"
            />
            <h4>Obi-Wan Kenobi</h4>
            <div className="d-flex justify-content-between bg-dark">
                <button className="detalles btn btn-outline-warning my-2 btn-lg rounded-0">
                  <span>detalles</span>
                </button>
                <button className="btn btn-outline-warning my-2 rounded-0">
                  <AiFillStar/>
                </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <img
              className="img-fluid"
              src="https://fotografias.lasexta.com/clipping/cmsimages02/2022/03/10/AEDDC886-4108-4991-A29F-4FF84E0E654D/joel-edgerton-mete-piel-owen-lars-tio-luke-skywalkers_58.jpg?crop=1884,1068,x272,y0&width=1000&height=567&optimize=high&format=webply"
            />
            <h4>Owen Lars</h4>
            <div className="d-flex justify-content-between bg-dark">
                <button className="detalles btn btn-outline-warning my-2 btn-lg rounded-0">
                  <span>detalles</span>
                </button>
                <button className="btn btn-outline-warning my-2 rounded-0">
                  <AiFillStar/>
                </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <img
              className="img-fluid"
              src="https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780"
            />
            <h4>Biggs Darklighter</h4>
            <div className="d-flex justify-content-between bg-dark">
                <button className="detalles btn btn-outline-warning my-2 btn-lg rounded-0">
                  <span>detalles</span>
                </button>
                <button className="btn btn-outline-warning my-2 rounded-0">
                  <AiFillStar/>
                </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <img
              className="img-fluid"
              src="https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2016/04/C3po_Brazo.jpg?fit=640%2C360&quality=80&ssl=1"
            />
            <h4>C3-PO</h4>
            <div className="d-flex justify-content-between bg-dark">
                <button className="detalles btn btn-outline-warning my-2 btn-lg rounded-0">
                  <span>detalles</span>
                </button>
                <button className="btn btn-outline-warning my-2 rounded-0">
                  <AiFillStar/>
                </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <img
              className="img-fluid"
              src="https://wipy.tv/wp-content/uploads/2020/05/r2-d2-nunca-revelo-la-identidad-de-darth-vader-1-1200x720.jpg"
            />
            <h4>R2-D2</h4>
            <div className="d-flex justify-content-between bg-dark">
                <button className="detalles btn btn-outline-warning my-2 btn-lg rounded-0">
                  <span>detalles</span>
                </button>
                <button className="btn btn-outline-warning my-2 rounded-0">
                  <AiFillStar/>
                </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <img
              className="img-fluid"
              src="https://cdnb.artstation.com/p/assets/images/images/001/727/465/large/paul-beards-r5-d4-final-preview-01.jpg?1451853235"
            />
            <h4>R5-D4</h4>
            <div className="d-flex justify-content-between bg-dark">
                <button className="detalles btn btn-outline-warning my-2 btn-lg rounded-0">
                  <span>detalles</span>
                </button>
                <button className="btn btn-outline-warning my-2 rounded-0">
                  <AiFillStar/>
                </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
          <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
            <img
              className="img-fluid"
              src="https://swrpggm.com/wp-content/uploads/2020/01/Beru-Lars_FE.png"
            />
            <h4>Beru Whitesun lars</h4>
            <div className="d-flex justify-content-between bg-dark">
                <button className="detalles btn btn-outline-warning my-2 btn-lg rounded-0">
                  <span>detalles</span>
                </button>
                <button className="btn btn-outline-warning my-2 rounded-0">
                  <AiFillStar/>
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
