// Your code here

function saturdayFun (i = "roller-skate") {
    return `This Saturday, I want to ${i}!`
}

function mondayWork (i = "go to the office") {
    return `This Monday, I will ${i}.` 
}


function wrapAdjective (z = "*") {
    return function (i = 'special') {
        return `You are ${z}${i}${z}!`
    }
}
