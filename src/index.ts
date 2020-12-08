const SCHULD_2019 = 19.3 * 10 ** 9
const SCHULD_2022 = 24.3 * 10 ** 9
const SCHULD_DELTA = (SCHULD_2022 - SCHULD_2019) / (365 * 3 - 1) / 24 / 3600

/*
* Prijzen constants
* */
const PRIJS_FIETS = 150
const PRIJS_KRAT = 24
const PRIJS_BAPAO = 0.90

const getSchuldToday = (): number => {
    const today = new Date()
    const secondsSince31Dec2019 = (today.getTime() - new Date('2019-12-31').getTime()) / 1000
    return Math.round(SCHULD_2019 + SCHULD_DELTA * secondsSince31Dec2019)
}

type Figures = {
    fiets: number
    krat: number
    bapao: number
}

const getFigures = (schuld: number): Figures => {
    return {
        fiets: Math.round(schuld / PRIJS_FIETS),
        krat: Math.round(schuld / PRIJS_KRAT),
        bapao: Math.round(schuld / PRIJS_BAPAO),
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
    const counter_fiets = document.getElementById('counter_fiets')
    const counter_krat = document.getElementById('counter_krat')
    const counter_bapao = document.getElementById('counter_bapao')

    function render(): void {
        const schuld = getSchuldToday()
        const figures = getFigures(schuld)
        counter.innerText = formatPrice(schuld)
        counter_fiets.innerText = formatNumber(figures.fiets)
        counter_krat.innerText = formatNumber(figures.krat)
        counter_bapao.innerText = formatNumber(figures.bapao)
        window.requestAnimationFrame(render)
    }

    render()
})
