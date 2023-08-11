var starBucks = {
    drinks: {
        coffee: [
            {black: 'just coffee'},
            {latte: 'ise'},
            {espresso: 'cold'},
            {cappuccino: 'foam'},
            {americano: 'hot water'},
            {doppio: '2oz_espresso'},
        ],
        tea:[
            {green_tea: 'cancer'},
            {black_tea: 'headache'},
            {raspberries: 'chill'},
            {chamomile: 'sleep'},
            {ginger: 'immunity'},
            {jasmine: 'stress'},
        ]
    }
}
console.log(starBucks)



let towns = ['Bishkek', 'Los_Angeles', 'Chicago', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']
for (let i  = 0; i < towns.length; i++){
    if (towns[i].length > 7){
        console.log(towns[i])
    }
}


var day = Number(prompt('day'))
switch (day) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
    default:
        console.error('try again')
}


