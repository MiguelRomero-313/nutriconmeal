/*Pagina principal de nutriconmeal */

import React from "react";
import "./Main.css";
import "./Button.css";
import "./form.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const Main = () => {
  //VARIABLES GLOBALES Y CONSTANTES
  const itemData = [
    {
      img: "https://fmgastronomia.com.mx/wp-content/uploads/2021/06/comida-industrial.jpg",
      client: "Comedores industriales",
    },
    {
      img: "https://53.fs1.hubspotusercontent-na1.net/hubfs/53/ES%20Blog%20images/La%20importancia%20de%20las%20PYMES%20en%20Argentina/PYMES%20en%20Colombia-cropped.webp",
      client: "Pequeñas y medianas empresas",
    },
    {
      img: "https://images.unsplash.com/photo-1698265473208-ef2e5934e93c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudGUlMjBlbGVnYW50ZXxlbnwwfHwwfHx8MA%3D%3D",
      client: "Restaurantes y cadenas de comida",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Supermercado.jpg",
      client: "Supermercados y tiendas de autoservicio",
    },
  ];
  return (
    /*Banner inicial */
    <div className="contenido">
      <div className="contain1">
        <img
          src={`${import.meta.env.BASE_URL}/nutriconmeal_logo.png`}
          className="home"
        />
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
        <img
          src={`${import.meta.env.BASE_URL}/wp_about.jpg`}
          alt="about"
          className="home"
        />
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
      </div>
      {/*Material UI components */}
      {/*section: política de calidad*/}
      <div className="contain1" id="mui">
        <Card sx={{ maxWidth: 345, mb: 1, boxShadow: 15 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`${import.meta.env.BASE_URL}/politica-calidad.png`}
              alt="politica de calidad"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Política de calidad
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                En Nutriconmeal nos comprometemos a ofrecer servicios de
                consultoría en inocuidad alimentaria con altos estándares de
                calidad, en materia de normativa nacional e internacional.
                Basamos nuestro trabajo en el enfoque al cliente a través del
                liderazgo y participación del personal para la mejora continua y
                relaciones sólidas con nuestros aliados promoviendo procesos
                eficientes para garantizar soluciones seguras y efectivas.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/*section: objetivos*/}
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            mb: 1,
            borderRadius: "5px",
            boxShadow: 15,
          }}
        >
          <Typography variant="h5" component="div" sx={{ m: 2 }}>
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
                <React.Fragment>
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
                src={`${import.meta.env.BASE_URL}/contact/groups.svg`}
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
                src={`${import.meta.env.BASE_URL}/contact/analytics.svg`}
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
                src={`${import.meta.env.BASE_URL}/contact/flag_circle.svg`}
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
                src={`${import.meta.env.BASE_URL}/contact/preview.svg`}
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
        <Box
          sx={{
            width: 350,
            height: "auto",
            bgcolor: "background.paper",
            boxShadow: 15,
            borderRadius: "5px",
            p: 2,
            mb: 1,
          }}
        >
          <Typography variant="h5" component="div" sx={{ m: 2 }}>
            Nuestros clientes
          </Typography>
          <ImageList variant="masonry" cols={2} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar position="below" title={item.client} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        {/*section: Servicios y soluciones*/}
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            mb: 1,
            borderRadius: "5px",
            boxShadow: 15,
          }}
        >
          <Typography variant="h5" component="div" sx={{ m: 2 }}>
            Servicios y soluciones
          </Typography>
          <ListItem alignItems="flex-start">
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
          <ListItem alignItems="flex-start">
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
          <ListItem alignItems="flex-start">
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
          <ListItem alignItems="flex-start">
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
      </div>
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
