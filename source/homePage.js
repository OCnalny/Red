window.onload = function () {
    const an = document.getElementById('an');
    const hp = document.getElementById('hp');
    const peo = document.getElementById('peo');
    const body = document.getElementById('body');
    const dati = document.getElementById('outer');
    const container = document.getElementById('container');
    an.addEventListener('click', function () {

        dati.style.transition = "0.4s";
        setTimeout(function () {
            dati.style.opacity = 0;
            dati.style.display = 'flex';
            setTimeout(function () {
                dati.style.opacity = 1;
            }, 300);
        })
    })

    hp.addEventListener('click', function () {
        dati.style.transition = "0.4s";
        body.style.transition = '0.4s';
        container.style.transition = "0.4s";
        setTimeout(function () {
            dati.style.opacity = 1;
            container.style.opacity = 1;
            body.style.opacity = 0;
            
            setTimeout(function () {
                dati.style.opacity = 0;
                container.style.opacity = 0;
                body.style.opacity = 1;
                setTimeout(function(){
                    dati.style.display = 'none'
                    container.style.display = 'none'
                    body.style = 'flex'
                },300)
            }, 300);
        })
    })

    peo.addEventListener('click', function () {
        dati.style.transition = "0.4s";
        body.style.transition = "0.4s";
        container.style.transition = "0.4s";
        setTimeout(function () {
            dati.style.opacity = 1;
            body.style.opacity = 1;
            container.style.opacity = 0;
            setTimeout(function () {
                dati.style.opacity = 0;
                body.style.opacity = 0;
                container.style.opacity = 1;
                setTimeout(function(){
                    dati.style.display = 'none'
                    body.style.display = 'none'
                    container.style.display = 'flex'
                },300)
            }, 300);
        })
    })

    
}