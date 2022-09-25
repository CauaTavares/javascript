function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bbm.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jm.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'am.png')
            } else {
                //idoso
                img.setAttribute('src', 'im.png')
            }
        } else if  (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bbf.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jf.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'af.png')
            } else {
                //idoso
                img.setAttribute('src', 'if.png')
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }


}
