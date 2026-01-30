let texto = "en un lugar de la Mancha de cuyo nombre y cuya nombra" // este es el texto original

/* 
meta caracteres
COMODINES
 -- ( si ponemos los comodines en MAYUSCULAS es para negarlo )
\d -> es para decir un numero cualquiera pero de un digito, si quires mas de uno repetir \d por la cantidad de digitos
\s -> es para decir un spacio cualquiera
\w -> es para decir un caracter alpha-numerico

 -- ( si ponemos en [] es para decir cualquiera de este grupo de estos caracteres)
 /[abc]/ -> los que tengan a o b o b

 /[a-j]/ -> los valores que estan dentro del rango de "a" hasta "j"

  -- ( para ver variable)
  /condicion/g -> para que sea global
  /condicion/i -> para que no sea keySensitive

  METACARACTERES
  ? -> caracter opcional
  + -> caracter que puede aparecer de "0 a muchas veces"
  * -> caracter que puden aparecer de "1 a muchas veces"
  {m,n} -> maracter que puede aparecer de "m a n veces"
 si ponemos "{1,}" seria lo mismo de poner el "+"

  FUNCIONES
  /condicion/.test(string) -> para saber si dentro del string se encuentra dicha condicion


  DELIMITADORES
  ^[condicion] -> que la condicion este al principio
  [condicion]$ -> que la condicion este al final
  ^[^condicion] -> que la este al principio y no sea de dicha condicion
  

 */ 
texto = texto.replace(/cuy./g, "cuy@")
console.log(texto);
