const FREE_MONTHS_PER_YEAR = 2;

export const planDatabase = [
    { id: 1, name: "Arcade", img: "iconArcade", pricePerMonth: 9 },
    { id: 2, name: "Advanced", img: "iconAdvanced", pricePerMonth: 12 },
    { id: 3, name: "Pro", img: "iconPro", pricePerMonth: 15 },
];

export const getFreeMonthsPerYearAmount = () => {
    return FREE_MONTHS_PER_YEAR;
};

export const getYearlyPrice = (monthlyPrice) => {
    return monthlyPrice * (12 - FREE_MONTHS_PER_YEAR);
};

export const addonsDataBase = [
    {
        id: 1,
        name: "Online service",
        description: "Access to multidlaver games",
        pricePerMonth: 1,
    },
    {
        id: 2,
        name: "Larger storage",
        description: "Extra 1TB or cloud save",
        pricePerMonth: 2,
    },
    {
        id: 3,
        name: "Customizable profile",
        description: "Custom theme on your profile",
        pricePerMonth: 2,
    },
];

export const getAddonById = (id) => {
    return addonsDataBase.find((item) => item.id === id);
};

export const getPlanById = (id) => {
    return planDatabase.find((item) => item.id === id);
};
