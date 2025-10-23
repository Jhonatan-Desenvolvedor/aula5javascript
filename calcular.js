function calcular() {
    var num = parseFloat(document.getElementById("numero").value);
    var resposta = document.getElementById("resposta");
    var tabuada = '';
    for (var i = 0; i < 10; i++) {
        tabuada += num + " x " + i + " = " + (num * i) + "<br/>";
    }
    resposta.innerHTML = tabuada;
    //    var num = parseFloat(document.getElementById("numero").value);
    //    for (var i = 1; i <= 10; i++) {
    //        document.writeln(num + " x " + i + " = " + (num * i) + "<br/>");
    //    }
}