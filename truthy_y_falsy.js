// Un valor falsy es aquel que es falso en un contexto booleano, 
// estos son: 0, "" (string vacío), false, NaN, undefined o null.

// Coersión explícita
Boolean() // false
Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false

// Coersión implícita (no la uses)
!!0 // false
!!"" // false
!!null // false
!!undefined // false
!!NaN // false
!!false // false

// Un valor truthy es aquel que es verdadero en un contexto booleano,
// son todos los valores que no sean falsy, que especificamos en la 
// anterior sección.

// Coersión explícita
Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1, 2, 3]) // true
Boolean(function hola() {}) // true
Boolean({ a: 1, b: 2 }) // true
Boolean([]) // true
Boolean({}) // true