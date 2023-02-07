const FREE_MONTHS_PER_YEAR = 2;

export const planDatabase = [
    {id: 1, name: 'Arcade', img: 'iconArcade', price: 9},
    {id: 2, name: 'Advanced', img: 'iconAdvanced', price: 12},
    {id: 3, name: 'Pro', img: 'iconPro', price: 15},
]

export const getFreeMonthsPerYearAmount = () => {
    return FREE_MONTHS_PER_YEAR;
}

export const getYearlyPrice = (monthlyPrice) => {
    return monthlyPrice * (12 - FREE_MONTHS_PER_YEAR);
}