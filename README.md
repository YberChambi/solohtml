# Reloj-Agujas
Reloj de agujas - javascript, html, css
Una app bastante simple.
de la funcion Date() sacamos la hora de el cliente. Via html y css cree las agujas del reloj y mediante transform:rotate;
movi las agujas del reloj. Pero eso no es todo, el ciruclo del reloj tiene 360 grados. y por ejemplo si solo agregas los 
segundos de la hora no llega ni a la mitad. 360 grados dividido 60 minutos nos da el numero que tenemos que multiplicar por 
los segundos que nos da la funcion Date(). El caso de las horas es igual, solo que no son 60, sino 12. Por ende el calculo es 360/12. De esta manera logre que las agujas giren el circulo completo.
Ejecute la funcion cada 1 segundo con setInterval y listo.


