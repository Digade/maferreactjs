import carrusel1 from "./imgslider/img-avania-slider.webp"

const Slider = () => {
  return (
    <div className="d-flex align-content-center">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={{carrusel1}} className="d-block w-100" alt="..."/>
                <div className="carousel-caption text-start d-none d-md-block">
                  <div id="titleslider" className="d-flex row align-self-start "><h1 style= {{marginBottom: "-10px", padding: 0,}}><b>HARDseries</b></h1>
                    <h1 style={{padding: 0,}}><b><i>AVANIA</i></b></h1>
                    <hr className="hr-sm " style={{height: "5px", width: "100px", margin: "20px 0 20px 0", color: "rgb(140, 190, 255)!important", opacity: "1",}}></hr>
                    <h2 style={{padding: 0}}>Equipo Transmisor de FM Homologado</h2>
                    <h2 style={{padding: 0}}>250 / 500 / 1000 W</h2>
                    <br/>
                    <h3 style="padding: 0;"><a className="btn btn-lg btn-primary" href="mailto: maferelec@hotmail.com">Comprar</a></h3>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="../img/img-avania-slider.webp" className="d-block w-100" alt="..."/>
                <div className="carousel-caption text-start  d-none d-md-block ">
                  <h1  style={{marginBottom: "-10px"}}><b>HARDseries</b></h1>
                  <h1><b>MICROPLUS</b></h1>
                  <hr className="hr-sm " style={{height: "5px", width: "100px", margin: "20px 0 20px 0", color: "rgb(140, 190, 255)!important", opacity: "1"}}></hr>
                  <h2>Transmisor FM a la Vanguardia Tecnológica</h2>
                  <h2>100 / 250 / 500 / 850 / 1000 W</h2>
                  <br/>
                  <h3><a className="btn btn-lg btn-primary" href="mailto: maferelec@hotmail.com">Comprar</a></h3>
                </div>
              </div>
              <div className="carousel-item">
                <img src="../img/img-microplus-slider.webp" className="d-block w-100" alt="..."/>
                <div className="carousel-caption text-start d-none d-md-block ">
                  <h1  style={{marginBottom: "-10px"}}><b>MICROPLUS</b></h1>
                  <h1><b>TRANSMISORES FM</b></h1>
                  <hr className="hr-sm " style={{height: "5px", width: "100px", margin: "20px 0 20px 0", color: "rgb(140, 190, 255)!important", opacity: "1"}}></hr>
                  <h2>Equipo FM único en el mercado</h2>
                  <h2>50 / 100 W</h2>
                  <br/>
                  <h3><a className="btn btn-lg btn-primary" href="mailto: maferelec@hotmail.com">Comprar</a></h3>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

  )
}

export default Slider