function agecalc() {
    let year = document.querySelector('#year').value

    const d = new Date();
    const years = d.getFullYear()
    let res = '';
    let i = years - year
    if (year > years) {
        res = "მომავლიდან ხარ თუ წარსულიდან?"
    }
    else {
        res = `შენ ხარ: ${i} წლის`
    }
    let x = document.querySelector('#res')
    x.innerHTML = res
    x.style.display = "block"
}


