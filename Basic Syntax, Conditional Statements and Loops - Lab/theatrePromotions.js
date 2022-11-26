function promotions(dayType, age) {
    let price = 'Error!'

    if (dayType === 'Weekday') {
        if (0 <= age && age <= 18) {
            price = '12$'
        } else if (18 < age && age <= 64) {
            price = '18$'
        } else if (64 < age && age <= 122) {
            price = '12$'
        }
    } else if (dayType === 'Weekend') {
        if (0 <= age && age <= 18) {
            price = '15$'
        } else if (18 < age && age <= 64) {
            price = '20$'
        } else if (64 < age && age <= 122) {
            price = '15$'
        }
    } else if (dayType === 'Holiday') {
        if (0 <= age && age <= 18) {
            price = '5$'
        } else if (18 < age && age <= 64) {
            price = '12$'
        } else if (64 < age && age <= 122) {
            price = '10$'
        }
    }
    console.log(price)
}

promotions('Weekday', 42)
promotions('Holiday', -12)
promotions('Holiday', 15)
