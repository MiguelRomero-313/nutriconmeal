import React from "react";
import "./Foot.css";

const Foot = () => {
  return (
    <footer className="contacto" id="contact">
      <div>
        <p>Síguenos en nuestras redes sociales:</p>
        <a
          href="https://www.instagram.com/nutri_con_meal?igsh=MW1nNHcwNnIzeHk3Mg=="
          target="_blank"
        >
          <img src={`${import.meta.env.BASE_URL}/contact/instagram.svg`} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61575801458458&mibextid=ZbWKwL"
          target="_blank"
        >
          <img src={`${import.meta.env.BASE_URL}/contact/facebook.svg`} />
        </a>
        <a href="#" target="_blank">
          <img src={`${import.meta.env.BASE_URL}/contact/email.svg`} />
        </a>
      </div>
      <div>2025,Nutriconmeal. Todos los derechos reservados.</div>
    </footer>
  );
};

export default Foot;
