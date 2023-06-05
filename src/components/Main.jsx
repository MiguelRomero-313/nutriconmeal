import "./Main.css";

const Main = () => {
  return (
    <div class="contenido">
      <div class="contain1">
        <img src="/logo.png" class="home" />
        <div class="text-home">
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

      <div class="contain2 responsive">
        <div class="card" style="max-width: 500px;">
          <img
            src="/home/vela1.png"
            class="vela1 card-img-end img-fluid rounded-start"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">Vela con papel encerado</h4>
            <p>
              Esta es una vela que al encenderla comenzará a visualizarse la
              dedicatoria que desees sobre papel.
            </p>
            <a href="#" class="btn btn-primary">
              Personalizar
            </a>
          </div>
        </div>
      </div>

      <div class="contain2 responsive">
        <div class="card" style="max-width: 500px;">
          <img
            src="/home/vela2.png"
            class="vela1 card-img-end img-fluid rounded-start"
            alt="..."
          />
          <div class="card-body">
            <h4 class="card-title">Vela con cuentitas</h4>
            <p>
              Esta es una vela que al encenderla comenzará a visualizarse la
              dedicatoria que desees sobre papel.
            </p>
            <a href="#" class="btn btn-primary">
              Personalizar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
