let chave = "730a0441fd02a7a66cb7af1609f3337a"
function tela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".desc").innerHTML = dados.weather[0].description
    document.querySelector(".temp-ar").innerHTML = "Umidade do ar:   " + dados.main.humidity
}
async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br"+ "&units=metric")
    .then(resposta => resposta.json())
    tela(dados)
}
function clickBotao() {
    let cidade = document.querySelector(".pesqCidade").value
    buscarCidade(cidade)
}