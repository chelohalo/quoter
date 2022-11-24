export function getYearsOld(year) {
    return new Date().getFullYear() - year
}

export function incrementByBrand(brand){
    let increment
    switch (brand) {
        case "1":
            increment = 1.3
            break;
        case "2":
            increment = 1.15
            break
        case "3":
            increment = 1.05
            break
        default:
            break;
    }
    return increment
}

export function incrementByPlan(plan){
    return plan === '1' ? 1.2 : 1.5
}

export function fixByCurrency(notFixedYet){
    return notFixedYet.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}