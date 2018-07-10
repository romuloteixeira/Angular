var minhaVar = 'Minha variável';
function minhaFunc2(x, y) {
    return x + y;
}
//ES 6 ou ES 2015
var num2 = 2;
var pI2 = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); //ES 6 ou ES 2015
var Matematica2 = /** @class */ (function () {
    function Matematica2() {
    }
    Matematica2.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica2;
}());
var n1 = 'asdf';
n1 = '2';
