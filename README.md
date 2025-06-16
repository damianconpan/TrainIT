V# 📝 Registro de Usuarios - Aplicación Full Stack

Esta aplicación es un ejemplo básico pero funcional de una aplicación **Full Stack**.  
Consiste en:

- Un **backend en Node.js**, que proporciona una API REST.
- Un **frontend básico en HTML + Javascript**, que consume esta API.
- Una **base de datos en MongoDB**, donde se almacenan los usuarios.
  
---

## 🔹 Tecnologías Utilizadas

✅ **Node.js**  
✅ **Express**  
✅ **Mongoose**  
✅ **bcrypt**  
✅ **cors**  
✅ **dotenv**  
✅ **HTML + Javascript (fetch API)**    

---

## 🔹 Cómo se llevó a cabo el desarrollo

Este proyecto nació de la necesidad de implementar:
- Un **registro de usuarios básico**, pero seguro.
- Un **listado de usuarios** que se pueda consultar posteriormente.

---

### 1️⃣ Planificación

Se definieron primero:

- **Modelos de datos:**  
  Un esquema de `Usuario` con nombre, email y password hasheada.

- **Rutas:**  
  `POST /api/users/register`: para registrar nuevos usuarios.  
  `GET /api/users/list`: para obtener todos los usuarios.

---

### 2️⃣ Estructura de Proyecto

Se creó una estructura de archivos clara:

