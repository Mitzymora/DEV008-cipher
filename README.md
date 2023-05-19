# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Definición del producto](#2-definición-del-producto)
* [3.Criterios de aceptación].(#3-criterios-de-aceptación)

***

## 1. Preámbulo

Cifrar significa ocultar el contenido de un mensaje a simple vista, de manera
que sólo las partes autorizadas pueden descifrar un texto cifrado.
El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Definición del producto.

Este proyecto fue creado con base a los hitos del readme de laboratoria. 

Es una aplicación web que sirve para que la usuaria
pueda cifrar y descifrar un texto en el navegador indicando un desplazamiento
específico de caracteres (_offset_). Realizado utilizando HTML, CSS y JavaScript.

La temática es un texto de 280 caracteres, mismos que se utilizan en twitter, pensado
en que la usuaria pueda cifrar y descifrar algún texto para hacer una interación divertida,
misteriosa e importante con sus seguidores y amigos. Al tener estos caracteres y un 
boton que te redirige a twitter la usuaria puede crear un texto que puede estar basado en
cualquiera de los siguientes ejemplos:

*Poder compartir un texto con ciertas palabras censuradas por twitter.
*Hablar con amigos de forma secreta
*Hacer dinamica para seguidores de algún influencer.

Así está página hace más fácil a la usuaria ocultar los mensajes de manera instantanea
y le redirige a twitter para que pegue el texto creado en su feed. 


## 3. Criterios de aceptación

Criterios de aceptación mínimos del proyecto para considerar
Project Feedback:

* [ x] Tiene una interfaz que permite a la usuaria cifrar y descifrar.
* [ x] El proyecto es entregado incluyendo pruebas unitarios de los métodos de `cipher`
(`encode` y `decode`).
* [x ] El proyecto es entregado libre de _errores_ de `eslint` (_warnings_ son ok).
* [ x] El proyecto es entregado subiendo tu código a GitHub.
* [ x] La interfaz es "desplegada" usando GitHub Pages.
* [x ] El README contiene una definición del producto.
