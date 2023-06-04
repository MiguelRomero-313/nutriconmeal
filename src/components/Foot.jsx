import "./Foot.css";

const Foot = () => {
  return (
    <footer className="contacto">
      <div>
        <p>Síguenos en nuestras redes sociales:</p>
        <a href="#" target="_blank">
          <img src="/contact/instagram.svg" />
        </a>
        <a href="#" target="_blank">
          <img src="/contact/facebook.svg" />
        </a>
        <a href="#" target="_blank">
          <img src="/contact/whatsapp.svg" />
        </a>
        <a href="#" target="_blank">
          <img src="/contact/twitter.svg" />
        </a>
        <a href="#" target="_blank">
          <img src="/contact/email.svg" />
        </a>
      </div>
      <div>2023,MisteryLux®. Todos los derechos reservados.</div>
    </footer>
  );
};

export default Foot;
