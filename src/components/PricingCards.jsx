import React from "react";
import "./PricingCards.css"; // Asegúrate de importar el CSS

const services = [
  {
    title: "PAQUETE ESENCIAL: DIAGNÓSTICO SANITARIO",
    price: "$10,000 MXN",
    features: [
      "Evaluación in situ de instalaciones, procesos y personal",
      "Checklist detallado basado en la NOM-251-SSA1-2009",
      "Informe con hallazgos, evidencias fotográficas y recomendaciones prácticas",
    ],
  },
  {
    title: "PAQUETE PROFESIONAL: FORMACIÓN EN INOCUIDAD",
    price: "$18,000 MXN",
    features: [
      "Curso teórico-práctico presencial o en línea (4 horas)",
      "Manual digital y guía visual de buenas prácticas de higiene",
      "Evaluación de aprendizaje y constancias con validez interna",
      "Asesoría personalizada durante una semana posterior, con enfoque a certificación en ISOS.",
    ],
  },
  {
    title: "PAQUETE ESENCIAL: AUDITORÍA+OPTIMIZACIÓN",
    price: "$40,000 MXN",
    features: [
      "Auditoría completa a procesos clave (recepción, almacenamiento, preparación y distribución)",
      "Diagnóstico de cumplimiento (NOM-251, HACCP, ISO 22000 e ISO 14000)",
      "Plan de mejora personalizado con cronograma",
      "2 visitas de seguimiento y asesoría por 2 meses",
    ],
  },
  {
    title:
      "PAQUETE ÉLITE: RUTA A LA CERTIFICACIÓN HACCP Y PUNTO LIMPIO/ISO 22000 e ISO 14000",
    price: "$65,000 MXN",
    features: [
      "Diagnóstico inicial completo",
      "Diseño e implementación del sistema HACCP, Punto Limpio, ISO 22000 o ISO 14000",
      "Desarrollo documental (manuales, registros, procedimientos)",
      "Simulacros de auditoría y acompañamiento técnico hasta certificación",
      "Capacitación especializada para el equipo clave",
    ],
  },
];

const PricingCards = () => {
  return (
    <div className="pricing-container">
      <h2 className="pricing-title">Nuestros Servicios</h2>
      <div className="pricing-grid">
        {services.map((service, index) => (
          <div key={index} className="pricing-card">
            <h3 className="card-title">{service.title}</h3>
            <p className="card-price">{service.price}</p>
            <ul className="card-features">
              {service.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>
            <button className="card-button">Elegir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
