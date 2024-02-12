export const getJalaliDate = () => {
    const gregorianDate = new Date();
    const gregorianYear = gregorianDate.getFullYear();
    const gregorianMonth = gregorianDate.getMonth() + 1;
    const gregorianDay = gregorianDate.getDate();

    const persianDate = new Date();
    persianDate.setFullYear(gregorianYear, gregorianMonth - 1, gregorianDay);

    const persianYear = persianDate.getFullYear();
    const persianMonth = persianDate.getMonth() + 1;
    const persianDay = persianDate.getDate();

    const persianTimeString = persianDate.toLocaleTimeString('fa-IR');

    return `${persianYear}/${persianMonth}/${persianDay} ${persianTimeString}`;
};