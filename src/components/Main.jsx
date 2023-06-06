import "./Main.css";

const Main = () => {
  return (
    <div className="contenido">
      <div className="contain1">
        <img
          src={`${import.meta.env.BASE_URL}/Imagotipo.svg`}
          className="home"
        />
        <div className="text-home">
          <h1>Mistery Lux</h1>
          <h2>Velas con dedicatoria</h2>
          <p>
            <br />
            ¿Quieres sorprender a esa persona especial con un lindo mensaje?
            <br />
            Comprale una vela con una bonita dedicatoria
          </p>
        </div>
      </div>
      <div className="m-ctn">
        <div className="s-ctn responsive">
          <div className="card" style={{ maxWidth: "500px" }}>
            <img
              src={`${import.meta.env.BASE_URL}/home/vela1.png`}
              className="vela1 card-img-end img-fluid rounded-start"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Vela con papel encerado</h4>
              <p>
                Esta es una vela que al encenderla comenzará a visualizarse la
                dedicatoria que desees sobre papel.
              </p>
              <a href="#" className="btn btn-primary">
                Personalizar
              </a>
            </div>
          </div>
        </div>

        <div className="s-ctn responsive">
          <div className="card" style={{ maxWidth: "500px" }}>
            <img
              src={`${import.meta.env.BASE_URL}/home/vela2.png`}
              className="vela1 card-img-end img-fluid rounded-start"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Vela con cuentitas</h4>
              <p>
                Esta es una vela que al encenderla comenzará a visualizarse la
                dedicatoria que desees sobre papel.
              </p>
              <a href="#" className="btn btn-primary">
                Personalizar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
