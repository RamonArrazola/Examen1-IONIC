# Examen1_IONIC
 1 - Se deberá hacer una aplicación con tres pantallas la cuál tendrá un menú lateral con la ruta hacia las pantallas. Las opciones del menú vendrán de un servicio que llamará al archivo menú.json dentro de la carpeta data. 
   
 2 - Crear un  header personalizado que irá en cada pantalla donde el titulo se recibira por medio de @Input y un avatar.  
   
 3 - Pantalla 1:   
        ° La pantalla uno tendrá un botón que active un action-sheet  
        ° El botón “Mostrar Alert” desplegará un alert tipo input, que al darle en “Ok” mandara la información a consola.  
        ° Añadir checkbox que muestren su estado “true” o “false”          
          
 4 - Pantalla 2 :  
        ° Crear servicio que consuma la siguiente URL >> 'https://jsonplaceholder.typicode.com/users' Para mostrar la información en una lista.  
        ° Implementar un buscador que filtre por medio de un pipe.  
        ° Añadir sliding a cada opción y dependiendo de lo elegido se mande un mensaje a consola.  
        ° En la pantalla dos implementar un loading y que mientras este cargando la información detrás este pendiente con un ion-skeleton-test, después de unos segundos mostrar la información.  
        ° Al dar click a un elemento de la lista va a mandar a un modal con los datos de la persona seleccionada y con una opción de cerrarlo para volver a la pantalla anterior.  
          
 5 - Pantalla 3 :  
         ° Barra de progreso controlada por un ion-range.  
         ° Después de soltar el ion-range mostrar el valor del avance por medio de un toast.  
