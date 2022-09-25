function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    /*ESSE SINAL (||) SIGNIFICA (OU). OTARIO!! (17/09/2022-11:30) TAVARESCAUA
            SE O (INICIO){ini} TIVER VAZIO OU SE O (FIM){fim} TIVER VAZIO OU O (PASSO){passo} TIVER VAZIO VAI DAR ALERT
    significado do codigo*/

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = `contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(var c = i; c <= f; c += p ) {
                res.innerHTML += ` ${c} \u{1F449}`   
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -=p) {
                res.innerHTML += `${c} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }



}

