/*Pagina principal de nutriconmeal */

import React from "react";
import "./Main.css";
import "./Button.css";
import "./form.css";
import "./PricingCards.css";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PricingCards from "./PricingCards";
import Clientes from "./clientes";

const Main = () => {
  return (
    /*Banner inicial */
    <div className="contenido">
      <div className="contain1" id="banner">
        <div className="logo-cont">
          <img
            src={`${import.meta.env.BASE_URL}/nutriconmeal_logo.png`}
            className="home"
          />
        </div>
        <div className="text-home">
          <h1>
            <i>Nutriconmeal</i>
          </h1>
          <h2>Consultoría en servicios de alimentación</h2>
          <h4>
            <b>"Protegiendo la calidad, asegurando tu bienestar"</b>
          </h4>
        </div>
      </div>
      {/* visión y misión card */}
      <div className="contain1" id="about">
        <div className="text-home">
          <h1>Sobre nosotros</h1>
          <h2>
            Misión de<i> Nutriconmeal</i>
          </h2>
          <p>
            Ofrecer soluciones integrales en normatividad alimentaria mediante
            asesorías, auditorías y capacitaciones, garantizando la inocuidad,
            calidad y cumplimiento legal. Aplicamos normas como la
            NOM-251-SSA1-2009, ISO 22000, ISO 14000, Punto Limpio y HACCP para
            fortalecer la seguridad alimentaria en los establecimientos de
            nuestros clientes
          </p>
          <h2>
            Visión de <i>Nutriconmeal</i>
          </h2>
          <p>
            Ser la consultoría líder en normatividad e inocuidad alimentaria en
            México, reconocida por su excelencia técnica, compromiso con la
            calidad y por fomentar una cultura de prácticas seguras y
            sostenibles en la industria alimentaria.
          </p>
        </div>
        <div className="logos">
          <ul>
            <li>
              <img src={`${import.meta.env.BASE_URL}/iso-logo.jpg`} alt="" />
            </li>
            <li>
              <img src={`${import.meta.env.BASE_URL}/haccp-logo.jpg`} alt="" />
            </li>
            <li>
              <img src={`${import.meta.env.BASE_URL}/nom-logo.jpg`} alt="" />
            </li>
            <li>
              <img src={`${import.meta.env.BASE_URL}/punto-logo.jpg`} alt="" />
            </li>
          </ul>
        </div>
      </div>
      {/*section: política de calidad*/}
      <div className="contain1" id="politica">
        <img
          src={`${import.meta.env.BASE_URL}/wp_about.jpg`}
          alt="politica-calidad"
        />
        <div className="text-home">
          <h2>politica de calidad</h2>
          <p>
            Ofrecer soluciones integrales en normatividad alimentaria mediante
            asesorías, auditorías y capacitaciones, garantizando la inocuidad,
            calidad y cumplimiento legal. Aplicamos normas como la
            NOM-251-SSA1-2009, ISO 22000, ISO 14000, Punto Limpio y HACCP para
            fortalecer la seguridad alimentaria en los establecimientos de
            nuestros clientes
          </p>
        </div>
      </div>
      {/*section: objetivos*/}
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          mb: 2,
          mt: 2,
          p: 2,
          borderRadius: "40px",
        }}
      >
        <Typography variant="h4" component="div" sx={{ m: 2 }}>
          Objetivos
        </Typography>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="garantizar"
              src={`${import.meta.env.BASE_URL}/contact/verified.svg`}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Garantizar"
            secondary={
              <React.Fragment sx={{ p: 5 }}>
                {
                  "Garantizar el cumplimiento de normas de inocuidad en los comedores,  mediante normas como NOM-251-SSA1-2009, ISO 14000 e ISO 22000. "
                }
              </React.Fragment>
            }
          />
        </ListItem>{" "}
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="capacitar"
              src={`${import.meta.env.BASE_URL}/contact/verified.svg`}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Capacitar"
            secondary={
              <React.Fragment>
                {
                  "Capacitar al personal en higiene y manejo seguro de alimentos por medio de BPH (Buenas prácticas de higiene). "
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="mejorar"
              src={`${import.meta.env.BASE_URL}/contact/verified.svg`}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Mejorar"
            secondary={
              <React.Fragment>
                {
                  "Mejorar procesos operativos para hacer más eficiente el servicio mediante estándares como HACCP y BPM (Buenas prácticas de manufactura). "
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Promover"
              src={`${import.meta.env.BASE_URL}/contact/verified.svg`}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Promover"
            secondary={
              <React.Fragment>
                {
                  "Promover una cultura de seguridad alimentaria y bienestar  del comensal."
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Evaluar"
              src={`${import.meta.env.BASE_URL}/contact/verified.svg`}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Evaluar"
            secondary={
              <React.Fragment>
                {
                  "Evaluar y elevar la calidad del servicio alimentario de manera continua."
                }
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      {/*section: nuestros clientes*/}
      <Clientes />
      {/*section: Servicios y soluciones*/}
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          mb: 2,
          mt: 2,
          p: 2,
          borderRadius: "40px",
        }}
      >
        <Typography variant="h4" component="div" sx={{ m: 2 }}>
          Servicios y soluciones
        </Typography>
        <ListItem
          alignItems="flex-start"
          sx={{ p: 3, backgroundColor: "#dfbdff", borderRadius: 5 }}
        >
          <ListItemAvatar>
            <Avatar
              alt="garantizar"
              src={`${import.meta.env.BASE_URL}/contact/checklist.svg`}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={
              <React.Fragment>
                {
                  "Cumplimiento de normativas de inocuidad, aplicando normas como NOM-251-SSA1-2009, ISO 22000, ISO 14000, Punto Limpio y HACCP mediante diagnóstico, capacitación y auditorías que aseguren su correcta implementación en los establecimientos de nuestros clientes"
                }
              </React.Fragment>
            }
          />
        </ListItem>{" "}
        <Divider variant="inset" component="li" />
        <ListItem
          alignItems="flex-start"
          sx={{ mt: 2, p: 3, backgroundColor: "#b8caff", borderRadius: 5 }}
        >
          <ListItemAvatar>
            <Avatar
              alt="capacitar"
              src={`${import.meta.env.BASE_URL}/contact/verified.svg`}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={
              <React.Fragment>
                {
                  "Establecer y validar sistemas en  inocuidad alimentaria, desarrollando e implementando planes personalizados. Adicionalmente, realizamos auditorías exhaustivas para verificar el cumplimiento de las mismas y acompañamos a su establecimiento en todo el proceso para obtener certificaciones clave (ISO 14000, ISO 22000, HACCAP Y Punto Limpio), permitiéndole demostrar proactivamente los más altos estándares de seguridad y calidad alimentaria"
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem
          alignItems="flex-start"
          sx={{ mt: 2, p: 3, backgroundColor: "#eaffc7", borderRadius: 5 }}
        >
          <ListItemAvatar>
            <Avatar
              alt="mejorar"
              src={`${import.meta.env.BASE_URL}/contact/tune.svg`}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={
              <React.Fragment>
                {
                  "Control en recepción, almacenamiento y preparación estableciendo protocolos para recibir, almacenar y preparar alimentos bajo condiciones seguras y controladas, garantizando calidad en todo el proceso"
                }
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem
          alignItems="flex-start"
          sx={{ mt: 2, p: 3, backgroundColor: "#ffa4c6", borderRadius: 5 }}
        >
          <ListItemAvatar>
            <Avatar
              alt="Promover"
              src={`${import.meta.env.BASE_URL}/contact/diversity.svg`}
            />
          </ListItemAvatar>
          <ListItemText
            secondary={
              <React.Fragment>
                {
                  "Capacitación en higiene y manipulación, formando al personal en buenas prácticas de higiene y manejo seguro de alimentos, con evaluaciones y seguimiento continuo para mantener la inocuidad"
                }
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      {/*section: paquetes*/}
      <PricingCards />
      {/*Contact form */}
      <div className="contain1" id="formulario1">
        <form name="contact" id="cform">
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
  ); //return
}; //main

export default Main;
