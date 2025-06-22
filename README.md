README - Proyecto de pruebas automatizadas con Cypress
==============================

Este archivo contiene las instrucciones necesarias para ejecutar este proyecto de pruebas automatizadas desde cero en otro computador.

REQUISITOS PREVIOS
------------------------------
1. Tener instalado Node.js (v14 o superior recomendado)
   - Descargar desde: https://nodejs.org/

2. Tener instalado Git (opcional, si se clona el proyecto desde un repositorio)
   - Descargar desde: https://git-scm.com/

PASOS DE INSTALACIÓN
------------------------------
1. Clonar o descargar este repositorio
   - Clonar: git clone [URL_DEL_REPOSITORIO]
   - O descargar como .zip y descomprimir

2. Navegar a la carpeta del proyecto:
   cd nombre-del-proyecto

3. Instalar las dependencias necesarias:
   npm install

4. Instalar el plugin para carga de archivos:
   npm install --save-dev cypress-file-upload

5. Agregar el plugin al archivo de soporte de Cypress:
   Editar `cypress/support/commands.js` y agregar:
   import 'cypress-file-upload';

6. Verificar instalación de Cypress:
   npx cypress verify

7. Agregar la imagen usada en la prueba:
   - Colocar el archivo `carnet.png` dentro de la carpeta:
     `cypress/fixtures/`
   - Este archivo es necesario para la prueba de carga de archivos.

8. Ejecutar Cypress:
   npx cypress open
   - Se abrirá la interfaz gráfica de Cypress.
   - Seleccionar el archivo de prueba: `PracticaUno.cy.js`

NOTAS ADICIONALES
------------------------------
- Asegúrate de tener acceso a internet para acceder a la web de pruebas: https://demo.testim.io/checkout

