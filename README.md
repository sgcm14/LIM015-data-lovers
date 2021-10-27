# Data Lovers (Laboratoria)

- Este proyecto se realizó siguiendo estas consideraciones [El Proyecto](https://github.com/Laboratoria/LIM015-data-lovers) , lo desarrollé dentro del segundo mes en [Laboratoria - Sede Lima](https://www.laboratoria.la/)

- **Periodo :** 16 Junio - 12 Julio, 2021
> En este proyecto se usó HTML, CSS y JS (Charts.js para el gráfico)

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Criterios que cumple el proyecto](#4-criterios-que-cumple-el-proyecto)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)

***

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

![json-interfaz](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

## 2. Resumen del proyecto

En este proyecto hemos **construido una _página web_ para visualizar un
_conjunto (set) de datos_** que se adecúe a lo que el usuario necesita.

Esta permite permita **visualizar la data, filtrarla, ordenarla y hacer cálculo agregado** de Pokemones.

Estos son los datos que contiene:

* [Pokémon](src/data/pokemon/pokemon.json):
  En este set hay una lista con los 251 Pokémon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego
  [Pokémon GO](http://pokemongolive.com).
  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)
  
## 3. Objetivos de aprendizaje

Los objetivos en general son los siguientes, de los cuáles utilicé los que están con ✓:

### HTML y CSS

* [x] Uso de HTML semántico.
* [x] Uso de selectores de CSS. (child | id | class | universal)
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] Uso de flexbox en CSS.

### DOM y Web APIs

* [x] Uso de selectores del DOM](querySelector)
* [x] Manejo de eventos del DOM.
* [x] Manipulación dinámica del DOM.(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de bucles (for | for..in | for..of | while)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [x] Manipular arrays (filter | map | sort | reduce)
* [x] Manipular objects (key | value)
* [x] Uso ES modules (`import`| `export`)
* [x] Diferenciar entre expression y statements.
* [x] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing

* [x] Testeo unitario.

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [x] Colaboración en Github (branches | pull requests | tags)

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [x] Planear y ejecutar tests de usabilidad.

## 4. Criterios que cumple el proyecto

* [x] UI: Solicita ingresar el nombre del usuario.
* [x] UI: Visualizar todos los pokemones en cards.
* [x] UI: Buscar un pokemon por su nombre.
* [x] UI: Filtrar los pokemones po su tipo.
* [x] UI: Ordenar por nombre de forma ascendente.
* [x] UI: Ordenar por nombre de forma descendente.
* [x] UI: Calcular entre dos pokemones  el mas fuerte.
* [x] UI: Es _responsive_.
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye un _plan de acción_ de tus objetivos de aprendizaje prioritizado en `README.md` (o otro archivo).
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [x] Consumir la data dinamicamente con **Fetch**.
* [x] Visualizar grafica con **Chart.js**.

### Definición del producto

#### ¿Quiénes son los usuarios?

Este proyecto va dirigido a los usuarios que son jugadores de Pokémon Go, pueden ser niños, adolescentes y/o adultos.

#### ¿Cuáles son los objetivos en relación con el producto?

El objetivo de este producto es que los usuarios puedan visualizar de manera dinámica todos los pokemones, para que sepan cuantos tienen y cuanto les falta. Además, poder saber sus características importantes de cada pokémon (tipo, tamaño, peso, nombre, debilidades, etc.) que los ayude a saber que pokemón tiene más probabilidades de ganar en un batalla pokemón, ya que con este producto podrá obtener la información necesaria.

#### ¿Cómo el producto soluciona los problemas/necesidades de dichos usuarios?

Esta aplicación ayuda a los usuarios a poder **buscar por nombres** a los pokemones, **filtrarlos por tipo** y así saber cuántos pokemones de cada tipo tiene. Además, permite **ordenarlos por orden alfabético (A-Z y Z-A)** para poder ubicarlos fácilmente y elegir dos pokemones para **calcular** cuál es el más fuerte.
Esto les facilita a los usuarios ya que tendrán toda la información en un solo lugar, siendo esta la guía perfecta para sus intereses, (Investigar, Jugar, Ocio, etc)

### Historias de usuario

Estas son las historias de usuario:

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/HU.jpg)

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

En este boceto, se planteo el esquema de ingreso de usuario.

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/protBaja1.jpg)
> Prototipo de Login - Baja Fidelidad

En este boceto, se planteo el esquema de la interfaz principal al ingresar a la web.

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/protBaja2.jpg)
> Prototipo de interfaz Principal - Baja Fidelidad

#### Prototipo de alta fidelidad

En este boceto, se planteo el esquema de ingreso de usuario.

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/protAlta1.jpg)
> Prototipo de Login - Alta Fidelidad

En este boceto, se planteo el esquema de la interfaz principal al ingresar a la web.

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/protAlta2.jpg)
> Prototipo de interfaz Principal - Alta Fidelidad

En este boceto, se planteo el esquema fildrado por tipo de Pokemon

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/protAlta3.jpg)
> Prototipo Filtrado

En este boceto, se planteo el esquema de orderna los pokemones por nombre (Ascendente - Descendente)

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/protAlta4.jpg)
> Prototipo Ordenar (Asc-Desc)

En este boceto, se planteo el esquema para calacuar que pokemon es mas fuerte

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/protAlta5.jpg)
> Prototipo Estadisticas


#### Testeos de usabilidad

Por cada funcionalidad terminada se enviaba el link a usuarios para que nos den feedback del producto, asi saber que mejorar.
Al gunos comentarios recibidos fueron:
- "Al buscar el pokemon desde mi celular no lo encuentro"(La solucion fue         que al escribir el nombre del pokemon ignore las mayusculas).
- "Los colores no eran amigables"(La solucion fue buscar colores agradables).
- "El en celular se veia pequeño"(La solucion fue adaptar la web para celular).
- "Para calcular que pokemon es mas fuerte tengo que escribir el nombre y no recuerdo como se escribe el nombre del pokemon"(La solucion fue hacer listas desplegables con lso nombres de los pokemones).

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)
A continuacion de muestra el funcionamiento de la pagina:

Ingreso a la web: Por defecto el cursor ya estara en "Escribir Nombre"

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img1.jpg)
>Pantalla de **Login**

El usuario escribe su nombre y le da click en el boton **Ingresar**:

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img2.jpg)
> Pantalla de **Login**

El usuario ingresa a la web, se muestra su nombre y todo el contenido:

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img3.jpg)
> Pantalla de **Inicio**

Al poner el cursor sobre alguna card del pokemon este tiene un comportamientoo diferente(se eleva).

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img4.jpg)
> Pantalla de **Inicio** - Card

El usuario escribe el nombre del pokemon a buscar, sin importar minusculas o mayusculas

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img5.jpg)
> Pantalla de **Inicio** - Buscar

El usuario da click en **Buscar** y se muestra el pokemon

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img6.jpg)
> Pantalla de **Inicio** - Buscar

El usuario selecciona el opcion **Filtrar** y se muestra la lista de opciones

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img7.jpg)
> Pantalla de **Filtrar**

El usuario selecciona que tipo de pokemon desea filtrar

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img8.jpg)
> Pantalla de **Filtrar**

Se muestra el resultado de la opcion escogida

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img9.jpg)
> Pantalla de **Filtrar**

El usuario selecciona el opcion **Ordenar** y se muestra la lista de opciones

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img10.jpg)
> Pantalla de **Ordenar**

El usuario selecciona como desea ordenarlo (Ascendente / Descendente):

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img11.jpg)
> Pantalla de **Ordenar**

Se muestra el resultado de la opcion escogida:

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img12.jpg)
> Pantalla de **Ordenar**

El usuario selecciona el opcion **Estadistica**, se muestra la lista de opciones de los dos pokemones y elige.

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img13.jpg)
> Pantalla de **Estadistica**

Se presiona el boton **calcular** y se muestra el pokemon mas poderoso:

![](https://raw.githubusercontent.com/sgcm14/LIM015-data-lovers/main/src/imagenes/img14.jpg)
> Pantalla de **Estadistica**

### Pruebas unitarias

Las _pruebas unitarias_ tienen una cobertura del mas 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contiene las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

## 5. Consideraciones técnicas

La lógica del proyecto esta implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO se ha usado librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts).

No se utilizo la _pseudo-variable_ `this`.

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`.
Acá va la página que se muestra al usuario. También nos sirve para indicar
qué scripts se usan y une todo lo que hemos hecho.

### `src/main.js`

Aqui está el código que tiene que ver con mostrar los datos en la pantalla.
La interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos
y objetos.

Este archivo contiene toda la funcionalidad que corresponde a obtener,
procesar y manipular datos (funciones):

* `filterData(data, condition)`: esta función `filter` o filtrar recibe la
  data, y nos retorna aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permite hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estas funciones son [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones son después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

### `src/data`

En esta carpeta están los datos. Dentro de la carpeta hay dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usamos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).

### `test/data.spec.js`

Las pruebas unitarias de las funciones implementadas en el archivo `data.js`.


**Realizado por :** 

Sammy Gigi Cantoral Montejo (sgcm14)

<img src ="https://raw.githubusercontent.com/sgcm14/sgcm14/main/sammy.jpg" width="200">
