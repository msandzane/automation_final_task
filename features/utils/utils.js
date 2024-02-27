function parseMenuExpression(menuExpression) {
    //Women -> Tops -> T-shirts
return menuExpression.split(` -> `);
}

const result = parseMenuExpression("Women -> Tops");

console.log(result);