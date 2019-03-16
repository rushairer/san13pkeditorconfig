let cities = require('./cities.json')

let config = require('./0100882001380000.json')

// 0x56A0
const start = 0x56A0

//0xF6
const step = 0xF6


for (i = 0, len = cities.length; i < len; i++) {
    let address = 0
    let header = start + i * step

    // Gold
    address = header + 0x36
    let gold = {
        "name": "Gold - 金",
        "category": `${i+1}. City - ${cities[i]}`,
        "intArgs": [2, 4],
        "strArgs": ["0000", address.toString(16).toUpperCase()],
        "widget": {
            "type": "int",
            "minValue": 0,
            "maxValue": 999999
        }
    }
    config.all[0].items.push(gold)

    // Food
    address = header + 0x3A
    let food = {
        "name": "Food - 兵糧",
        "category": `${i+1}. City - ${cities[i]}`,
        "intArgs": [2, 4],
        "strArgs": ["0000", address.toString(16).toUpperCase()],
        "widget": {
            "type": "int",
            "minValue": 0,
            "maxValue": 999999
        }
    }
    config.all[0].items.push(food)

    // Civilians
    address = header + 0x3E
    let civilians = {
        "name": "Civilians - 人口",
        "category": `${i+1}. City - ${cities[i]}`,
        "intArgs": [2, 4],
        "strArgs": ["0000", address.toString(16).toUpperCase()],
        "widget": {
            "type": "int",
            "minValue": 0,
            "maxValue": 999999
        }
    }
    config.all[0].items.push(civilians)


    // Soldiers
    address = header + 0x42
    let soldiers = {
        "name": "Soldiers - 兵役人口",
        "category": `${i+1}. City - ${cities[i]}`,
        "intArgs": [2, 4],
        "strArgs": ["0000", address.toString(16).toUpperCase()],
        "widget": {
            "type": "int",
            "minValue": 0,
            "maxValue": 999999
        }
    }
    config.all[0].items.push(soldiers)

    // Morale
    address = header + 0x42
    let morale = {
        "name": "Morale - 民心",
        "category": `${i+1}. City - ${cities[i]}`,
        "intArgs": [2, 4],
        "strArgs": ["0000", address.toString(16).toUpperCase()],
        "widget": {
            "type": "int",
            "minValue": 0,
            "maxValue": 999999
        }
    }
    config.all[0].items.push(morale)

    // Ruler
    address = header
    let ruler = {
        "name": "Ruler - 統治者",
        "category": `${i+1}. City - ${cities[i]}`,
        "intArgs": [2, 1],
        "strArgs": ["0000", address.toString(16).toUpperCase()],
        "widget": {
            "type": "int",
            "minValue": 0,
            "maxValue": 254
        }
    }
    config.all[0].items.push(ruler)

}

console.log(JSON.stringify(config, null, 2))