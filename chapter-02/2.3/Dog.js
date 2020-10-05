"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
class Dog extends Animal_1.Animal {
    constructor() {
        super({
            name: 'Dog',
            sound: 'Wof!',
            family: 'Canidae',
            foodChainType: Animal_1.FoodChainType.Carnivorous,
        });
    }
}
