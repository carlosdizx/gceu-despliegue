# gceu-despliegue
Para el  deploy en servidores apache y ngnix

##Pasos
###Apache 
1. Clonar el repositorio en la carpeta donde se encontrarán los archivos estáticos.
2. Ponerla en una carpeta llamada 'gceu' 
**(si se quiere cambiar el nombre toca desde el proyecto)**
4. Reiniciar el servicio y rogar que funcione 🙏

###NGnix
1. Clonar el repositorio
2. Instalar la dependencia serve con el siguiente comando:
```npm install -g serve```
3. Ejecutar el servidor de prueba, comando: ```serve -s dist```, esto mostrar una url, ingresela en un navegador 
4. Si todo funciono bien poner la carpeta en el directorio donde estará la app y hacer lo demas ...

