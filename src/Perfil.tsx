import React, { useState, useEffect, useRef } from 'react';
import './Perfil.css';
import './Casa.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Casa: React.FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('loginToken'); // Obtener el token de localStorage
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Referencia para el input file
  const [fotoUrl, setFotoUrl] = useState<string | undefined>(undefined);

  // Estados para los datos del formulario
  const [nombre1, setNombre1] = useState('');
  const [altura1, setAltura1] = useState('');
  const [peso, setPeso] = useState('');
  const [enfermedades, setEnfermedades] = useState('');
  const [sangre, setSangre] = useState('');
  const [medico, setMedico] = useState('');
  const [matricula, setMatricula] = useState('');
  const [obra, setObra] = useState('');
  const [plan, setPlan] = useState('');
  const [edad1, setEdad1] = useState(51); // Estado para la edad, valor inicial como placeholder

  // Función para manejar el cierre del perfil y navegar a otra página
  const handleClose = () => {
    navigate('/estudiosnueva');
  };

  // Función para hacer la solicitud GET y rellenar los datos
  const fetchPerfil = async () => {
    try {
      const response = await axios.get('https://healthy-back.vercel.app/perfil', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Incluir el token en los headers
        },
      });

      const perfil = response.data[response.data.length - 1]; // Asume que perfil contiene los datos recibidos
      console.log(response.data);

      // Actualizar los estados con los datos recibidos para rellenar los inputs
      setNombre1(perfil.nombre_perfil || '');
      setAltura1(perfil.altura_perfil || '');
      setPeso(perfil.peso_perfil || '');
      setEnfermedades(perfil.enfermedadescronicas_perfil || '');
      setSangre(perfil.tiposangre_perfil || '');
      setMedico(perfil.médicocabecera_perfil || '');
      setMatricula(perfil.nmatricula_perfil || '');
      setObra(perfil.obrasocial_perfil || '');
      setPlan(perfil.plan_perfil || '');
      setEdad1(perfil.edad_perfil || 50); // Actualiza edad con valor del perfil
    } catch (error) {
      console.error('Error al obtener los datos del perfil:', error);
    }
  };

  // useEffect para hacer la solicitud GET al cargar el componente
  useEffect(() => {
    if (token) {
      fetchFoto();
      fetchPerfil(); // Ejecutar la solicitud solo si el token existe
    } else {
      console.error('No se encontró el token de autenticación');
    }
  }, [token]);

  // Función para manejar la selección de la imagen
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Abrir el selector de archivos al hacer clic en la imagen
    }
  };

  // Función para manejar el cambio de archivo
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      // Crear un FormData para enviar el archivo
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('https://healthy-back.vercel.app/foto', formData, {
          headers: {
            'Authorization': `Bearer ${token}`, // Incluir el token en los headers
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Imagen subida:', response.data);
      } catch (error) {
        console.error('Error al subir la imagen:', error);
      }
    }
  };

  // Función para manejar el envío del formulario
  const handleGuardar = async () => {
    const data = {
      nombre1,
      edad1,
      altura1,
      peso,
      enfermedades,
      sangre,
      medico,
      matricula,
      obra,
      plan,
    };

    try {
      const response = await axios.post('https://healthy-back.vercel.app/perfil', data, {
        headers: {
          'Authorization': `Bearer ${token}`, // Incluir el token en los headers
          'Content-Type': 'application/json',
        },
      });
      console.log('Datos guardados:', response.data);
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      if (error instanceof Error) {
        let errorposta=error.message;
        if (errorposta.includes("403")) {
          console.log("El string contiene el número 403");
  
  
          try {
            console.log("siguiente");
            // Aquí no necesitas pasar el token, ya que el navegador enviará las cookies automáticamente
            const response = await fetch(`https://healthy-back.vercel.app/refreshToken`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include', // Esto permite que las cookies se incluyan en la solicitud
            });
        
           
        
            const data = await response.json();
            console.log(data);
            localStorage.setItem('loginToken', data);
            //window.location.reload();
            await handleGuardar;
  
          } catch (err) {
            console.error('Error al hacer la solicitud:', err);
            navigate('/iniciar');
  
          } 
  
  
  
        }
        console.error("Error capturado:", error.message);
      } else {
        console.error("Error desconocido:", error);
      }
    }


  };


  const fetchFoto = async () => {
    try {
      const response = await axios.get('https://healthy-back.vercel.app/foto', {
        headers: {
          'Authorization': `Bearer ${token}`, // Incluir el token en los headers
        },
      });
  
      // Suponiendo que la foto viene en la respuesta como una URL
      const fotoUrl = response.data[response.data.length-1]["foto_foto"]; // Ajusta esto según la estructura de la respuesta
      console.log("data nuevo4")
      console.log(response.data);
      setFotoUrl(fotoUrl);

      console.log('URL de la foto:', fotoUrl);
      
      // Aquí puedes actualizar el estado si necesitas usar la foto en tu componente
    } catch (error) {
      console.error('Error al obtener la foto:', error);
    }
  };

  return (
    <div className="casa">
      <div className="franja superior">
        <img src="logo.png" className="holacompañero" alt="Descripción de la imagen" />
      </div>

      <div className="franja media">
        <div className="todomedio">
          <div className="franja-izquierda">
            <img
              src= {fotoUrl || "user.png"}
              className="input-estilo91910"
              alt="Descripción de la imagen"
              onClick={handleImageClick} // Al hacer clic, abre el selector de archivos
            />
            <h2>DATOS PERSONALES</h2>
            <input
              type="text"
              className="input-estilo"
              placeholder="Nombre"
              value={nombre1}
              onChange={(e) => setNombre1(e.target.value)}
            />
            <input type="text" className="input-estilo" placeholder="Apellido" />
            <input type="email" className="input-estilo" placeholder="Correo electrónico" />
            <input type="date" className="input-estilo" placeholder="Fecha de nacimiento" />
            <input type="text" className="input-estilo" placeholder="Sexo" />
          </div>

          <div className="franja-central">
            <h2>DATOS FISICOS</h2>
            <input
              type="text"
              className="input-estilo"
              placeholder="Peso"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
            <input
              type="text"
              className="input-estilo"
              placeholder="Altura"
              value={altura1}
              onChange={(e) => setAltura1(e.target.value)}
            />
            <input
              type="text"
              className="input-estilo"
              placeholder="Tipo de sangre"
              value={sangre}
              onChange={(e) => setSangre(e.target.value)}
            />
            <h2>DATOS MEDICOS</h2>
            <input
              type="text"
              className="input-estilo"
              placeholder="Médico principal"
              value={medico}
              onChange={(e) => setMedico(e.target.value)}
            />
            <input
              type="text"
              className="input-estilo"
              placeholder="Número de mi credencial"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
            />
            <input
              type="text"
              className="input-estilo"
              placeholder="Obra social"
              value={obra}
              onChange={(e) => setObra(e.target.value)}
            />
            <input
              type="text"
              className="input-estilo"
              placeholder="Plan obra social"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
            />
          </div>

          <div className="franja-derecha">
            <h2>ENFERMEDADES CRONICAS</h2>
            <input
              type="text"
              className="input-estilo"
              placeholder="Enfermedades crónicas"
              value={enfermedades}
              onChange={(e) => setEnfermedades(e.target.value)}
            />
            <div className="contenedor-botones-912">
              <button className="btn-imagen-912" onClick={handleGuardar}>
                <img src="guardar.png" className="btn-imagen-cerrar-912" alt="Guardar" />
              </button>
              <button className="btn-imagen-912" onClick={handleClose}>
                <img src="cerrar.png" className="btn-imagen-cerrar-912" alt="Cerrar" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="franja inferior">
        {/* Contenido de la franja inferior */}
      </div>

      {/* Input file oculto */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange} // Manejar el cambio del archivo
      />
    </div>
  );
};

export default Casa;
