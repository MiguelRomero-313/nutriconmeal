import "./Main.css";
import "./Button.css";
import Button from "./Button";

const Main = () => {
  return (
    <div className="contenido">
      <div className="contain1">
        <img
          src={`${import.meta.env.BASE_URL}/Imagotipo.svg`}
          className="home"
        />
        <div className="text-home">
          <h1>
            <i>Mistery Lux®</i>
          </h1>
          <h2>Velas con dedicatoria</h2>
          <p>
            <b>
              ¿Quieres sorprender a esa persona especial con un lindo mensaje?
              <br />
              Comprale una vela con una bonita dedicatoria
            </b>
          </p>
        </div>
      </div>
      <div className="m-ctn">
        <div className="s-ctn responsive">
          <div className="card" style={{ maxWidth: "450px" }}>
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
              <Button />
            </div>
          </div>
        </div>

        <div className="s-ctn responsive">
          <div className="card" style={{ maxWidth: "450px" }}>
            <img
              src={`${import.meta.env.BASE_URL}/home/vela2.png`}
              className="vela1 card-img-end img-fluid rounded-start"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Vela con cuentitas</h4>
              <p>
                Esta es una vela que al encenderla comenzarán a visualizarse las
                cuentitas con el texto que desees.
              </p>
              <Button />
            </div>
          </div>
        </div>

        <div className="s-ctn responsive">
          <div className="card" style={{ maxWidth: "450px" }}>
            <img
              src={`${import.meta.env.BASE_URL}/home/spray.jpg`}
              className="vela1 card-img-end img-fluid rounded-start"
              alt="..."
            />
            <div className="card-body">
              <h4 className="card-title">Spray Aromatizante</h4>
              <p>
                Dale un olor agradable a tus recuerdos y a nuestras velas con
                dedicatorias con un spray aromatizante disponible en distintos
                tipos de fragancias.
              </p>
              <Button />
            </div>
          </div>
        </div>
      </div>
      <div className="contain1" id="about">
        <img
          src={`${import.meta.env.BASE_URL}/wp-misterylux.jpg`}
          alt="Art"
          className="home"
        />
        <div className="text-home">
          <h1>Sobre nosotros</h1>
          <h2>
            Misión de <i>Mistery Lux®</i>
          </h2>
          <p>
            Nuestra misión es llevar luz y amor a la vida de las personas a
            través de nuestras velas con dedicatoria. Buscamos ofrecer una
            experiencia única y personalizada, que permita a nuestros clientes
            expresar sus sentimientos más profundos de manera especial y
            significativa. Nos esforzamos por crear velas de alta calidad, con
            diseños únicos y una amplia gama de fragancias, para satisfacer las
            necesidades y preferencias de nuestros clientes.
          </p>
          <h2>
            Visión de <i>Mistery Lux®</i>
          </h2>
          <p>
            Nuestra visión es convertirnos en la marca líder en el mercado de
            velas con dedicatoria, reconocida por la calidad y originalidad de
            nuestros productos. Queremos ser la opción preferida de nuestros
            clientes al momento de elegir un regalo especial y emotivo, y
            expandir nuestra presencia a nivel nacional e internacional. Además,
            nos comprometemos a ser una empresa socialmente responsable y
            sostenible, contribuyendo al bienestar de nuestra comunidad y al
            cuidado del medio ambiente.
          </p>
        </div>
      </div>
      <div className="contain1" id="contact">
        <form name="contact">
          <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>
            Formulario de contacto
          </h2>
          <p>¿Tienes algún comentario o sugerencia?,Nosotros te escuchamos😁</p>
          <input
            type="text"
            name="nombre"
            placeholder="nombre completo"
            required
          />
          <input
            type="mail"
            name="correo"
            placeholder="Correo Electrónico"
            required
          />
          <textarea
            type="text"
            name="mensaje"
            placeholder="Escribe tu mensaje"
            required
          />
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
