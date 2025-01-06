import React, { useState } from "react";
import axios from "axios";

const CrearPlantilla = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    urlVistaPrevia: "",
    categoria: "",
    funciones: [{ nombre: "", descripcion: "" }],
  });

  const [mostrarModal, setMostrarModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFuncionChange = (index, e) => {
    const { name, value } = e.target;
    const nuevasFunciones = [...formData.funciones];
    nuevasFunciones[index][name] = value;
    setFormData({ ...formData, funciones: nuevasFunciones });
  };

  const agregarFuncion = () => {
    setFormData({
      ...formData,
      funciones: [...formData.funciones, { nombre: "", descripcion: "" }],
    });
  };

  const eliminarFuncion = (index) => {
    const nuevasFunciones = formData.funciones.filter((_, i) => i !== index);
    setFormData({ ...formData, funciones: nuevasFunciones });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/plantillas",
        formData
      );
      console.log(response.data);

      setFormData({
        nombre: "",
        descripcion: "",
        precio: "",
        urlVistaPrevia: "",
        categoria: "",
        funciones: [{ nombre: "", descripcion: "" }],
      });

      // Mostrar el modal
      setMostrarModal(true);

      // Ocultar el modal después de 3 segundos
      setTimeout(() => setMostrarModal(false), 3000);
    } catch (error) {
      console.error("Error al crear la plantilla:", error);
      alert("Error al crear la plantilla");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Crear una nueva plantilla</h2>

      {/* Modal */}
      {mostrarModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-1/3 animate-fadeIn"
            style={{ animation: "fadeIn 0.5s ease-in-out" }}
          >
            <h2 className="text-center text-xl font-bold text-green-600">
              ¡Plantilla creada con éxito!
            </h2>
            <p className="text-center mt-2 text-gray-700">
              La plantilla se ha guardado correctamente.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold mb-2">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Descripción</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Precio</label>
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">URL Vista Previa</label>
          <input
            type="text"
            name="urlVistaPrevia"
            value={formData.urlVistaPrevia}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Categoría</label>
          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block font-bold mb-2">Funciones</label>
          {formData.funciones.map((funcion, index) => (
            <div key={index} className="flex space-x-4 mb-2">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={funcion.nombre}
                onChange={(e) => handleFuncionChange(index, e)}
                className="w-1/2 border border-gray-300 rounded-md p-2"
                required
              />
              <input
                type="text"
                name="descripcion"
                placeholder="Descripción"
                value={funcion.descripcion}
                onChange={(e) => handleFuncionChange(index, e)}
                className="w-1/2 border border-gray-300 rounded-md p-2"
              />
              <button
                type="button"
                onClick={() => eliminarFuncion(index)}
                className="text-red-500"
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={agregarFuncion}
            className="mt-2 bg-blue-500 text-white p-2 rounded-md"
          >
            Agregar Función
          </button>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-md w-full"
        >
          Crear Plantilla
        </button>
      </form>
    </div>
  );
};

export default CrearPlantilla;