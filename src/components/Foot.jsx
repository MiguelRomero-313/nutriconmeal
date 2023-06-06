import "./Foot.css";

const Foot = () => {
  return (
    <footer className="contacto" id="contact">
      <div>
        <p>Síguenos en nuestras redes sociales:</p>
        <a href="https://www.instagram.com/misteryluxmx/" target="_blank">
          <img src="/contact/instagram.svg" />
        </a>
        <a
          href="https://www.facebook.com/people/Mistery-Lux/100092727324060/"
          target="_blank"
        >
          <img src="/contact/facebook.svg" />
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
