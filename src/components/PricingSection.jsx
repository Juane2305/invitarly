import React, { useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const plans = [
  {
    name: "Pro",
    price: "$10.000",
    image: "https://via.placeholder.com/300x200", // Reemplaza con tu imagen
    features: [
      "Invitaciones ilimitadas",
      "Diseños exclusivos y animados",
      "Integración con Google Maps",
      "Confirmación avanzada",
      "Análisis de datos del evento",
      "Soporte prioritario",
    ],
  },
  {
    name: "Premium",
    price: "$7.500",
    image: "https://via.placeholder.com/300x200", // Reemplaza con tu imagen
    features: [
      "Invitaciones ilimitadas",
      "Diseños personalizados",
      "Integración con Google Maps",
      "Confirmación avanzada",
      "Soporte estándar",
    ],
  },
  {
    name: "Básico",
    price: "$5.000",
    image: "https://via.placeholder.com/300x200", // Reemplaza con tu imagen
    features: [
      "Hasta 50 invitaciones",
      "Un diseño predeterminado",
      "Integración básica con Google Maps",
      "Confirmación estándar",
    ],
  },
];

const PricingSection = () => {
  const [flipped, setFlipped] = useState(Array(plans.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Elige tu Plan Ideal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative w-full h-96 perspective"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div
                className={`absolute w-full h-full transition-transform duration-500 transform ${
                  flipped[index] ? "rotate-y-180" : "rotate-y-0"
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Lado Frontal */}
                <div
                  className="absolute w-full h-full bg-white shadow-md rounded-lg p-6 text-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-bold text-gray-800 mb-4">
                    {plan.price}
                  </p>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                    onClick={() => handleFlip(index)}
                  >
                    ¿Qué incluye?
                  </button>
                </div>

                {/* Lado Posterior */}
                <div
                  className="absolute w-full h-full bg-gray-200 shadow-md rounded-lg p-6 text-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    {plan.name} - Detalles
                  </h3>
                  <ul className="mb-6">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 text-sm py-1 border-b last:border-none"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
                    onClick={() => handleFlip(index)}
                  >
                    Volver
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
