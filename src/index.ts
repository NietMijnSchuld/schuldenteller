const SCHULD_2019 = 19.3 * 10 ** 9
const SCHULD_2022 = 24.3 * 10 ** 9
const SCHULD_DELTA = (SCHULD_2022 - SCHULD_2019) / (365 * 3 - 1) / 24 / 3600

/*
* Prijzen constants
* */
const PRIJS_BAPAO = 0.89 // https://www.ah.nl/producten/product/wi31392/ah-bapao-rundvlees
const PRIJS_SWAPFIETS = 16.5 // https://swapfiets.nl/offer/amsterdam
const PRIJS_KOFFIE = 0.4
const PRIJS_STUDIEBENODIGDHEDEN = 58 // https://www.nibud.nl/consumenten/wat-kost-studeren/
const PRIJS_COLLEGEGELD = 2143 // https://www.rijksoverheid.nl/onderwerpen/hoger-onderwijs/vraag-en-antwoord/hoogte-van-het-collegegeld-hogeschool-universiteit
const PRIJS_HUUR = 417 // https://www.nibud.nl/consumenten/wat-kost-studeren/
const PRIJS_STARTERSWONING = 282046 // https://www.rtlnieuws.nl/economie/life/artikel/4672856/starters-lenen-meer-gemiddeld-25-ton-hypotheek
const PRIJS_NETFLIX = 7.99 // https://netflix.com
const PRIJS_AMALIA_MAAND = 1587000 // https://www.metronieuws.nl/in-het-nieuws/binnenland/2020/09/prinsjesdag-anno-2020
const PRIJS_DOCENT_MAAND = 4097 // https://www.nationaleberoepengids.nl/universitair-docent
const PRIJS_BASIS_ZORG_VERZEKERING = 124.82 // https://www.zorgwijzer.nl/zorgpremie

const getSchuldToday = (): number => {
    const today = new Date()
    const secondsSince31Dec2019 = (today.getTime() - new Date('2019-12-31').getTime()) / 1000
    return Math.round(SCHULD_2019 + SCHULD_DELTA * secondsSince31Dec2019)
}

type Figures = {
    bapao: number
    swapfiets: number
    koffie: number
    studieBenodigdheden: number
    collegegeld: number
    huur: number
    startersWoning: number
    netflix: number
    amaliaMaand: number
    docentJaren: number
    basisZorgVerzekering: number
}

const getFigures = (schuld: number): Figures => {
    return {
        bapao: Math.round(schuld / PRIJS_BAPAO),
        swapfiets: Math.round(schuld / PRIJS_SWAPFIETS),
        koffie: Math.round(schuld / PRIJS_KOFFIE),
        studieBenodigdheden: Math.round(schuld / PRIJS_STUDIEBENODIGDHEDEN),
        collegegeld: Math.round(schuld / PRIJS_COLLEGEGELD),
        huur: Math.round(schuld / PRIJS_HUUR),
        startersWoning: Math.round(schuld / PRIJS_STARTERSWONING),
        netflix: Math.round(schuld / PRIJS_NETFLIX),
        amaliaMaand: Math.round(schuld / PRIJS_AMALIA_MAAND),
        docentJaren: Math.round(schuld / PRIJS_DOCENT_MAAND),
        basisZorgVerzekering: Math.round(schuld / PRIJS_BASIS_ZORG_VERZEKERING),
    }
}

const formatPrice = (amount: number): string => {
    return Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount)
}
const formatNumber = (amount: number): string => {
    return Intl.NumberFormat('nl-NL', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount)
}

window.addEventListener('load', () => {
    const counter = document.getElementById('counter')
    const counter_bapao = document.getElementById('counter_bapao')
    const counter_swapfiets = document.getElementById('counter_swapfiets')
    const counter_koffie = document.getElementById('counter_koffie')
    const counter_studieBenodigdheden = document.getElementById('counter_studieBenodigdheden')
    const counter_collegegeld = document.getElementById('counter_collegegeld')
    const counter_huur = document.getElementById('counter_huur')
    const counter_startersWoning = document.getElementById('counter_startersWoning')
    const counter_netflix = document.getElementById('counter_netflix')
    const counter_amaliaMaand = document.getElementById('counter_amaliaMaand')
    const counter_docentMaand = document.getElementById('counter_docentMaand')
    const counter_basisZorgVerzekering = document.getElementById('counter_basisZorgVerzekering')

    function render(): void {
        const schuld = getSchuldToday()
        counter.innerText = formatPrice(schuld)

        const figures = getFigures(schuld)
        counter_bapao.innerText = formatNumber(figures.bapao)
        counter_swapfiets.innerText = formatNumber(figures.swapfiets)
        counter_koffie.innerText = formatNumber(figures.koffie)
        counter_studieBenodigdheden.innerText = formatNumber(figures.studieBenodigdheden)
        counter_collegegeld.innerText = formatNumber(figures.collegegeld)
        counter_huur.innerText = formatNumber(figures.huur)
        counter_startersWoning.innerText = formatNumber(figures.startersWoning)
        counter_netflix.innerText = formatNumber(figures.netflix)
        counter_amaliaMaand.innerText = formatNumber(figures.amaliaMaand)
        counter_docentMaand.innerText = formatNumber(figures.docentJaren)
        counter_basisZorgVerzekering.innerText = formatNumber(figures.basisZorgVerzekering)
        window.requestAnimationFrame(render)
    }

    render()
})
