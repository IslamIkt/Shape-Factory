'use strict'
const colors = document.querySelector('.colors');
const shapes = document.querySelector('.shapes');
const create = document.querySelector('.button');
const grid = document.querySelector('.grid')
const output = document.querySelector('.output');
const existingShape = document.querySelectorAll('.existing-shape')

let count = 0

const shapesList = [];

class Shape {
    #shape;
    #color;

    constructor (_color, _shape){
        this.color = _color;
        this.shape = _shape; 
    }
    
    getInfo(){
        return `${this.color} ${this.shape}`
    }
}

function createShape() {
    if(count < 20){
        const newShape = document.createElement('div');
        const newObject = new Shape (colors.value, shapes.value); 
        shapesList.push(newObject);
        newShape.style.backgroundColor = newObject.color;
        newShape.classList.add(`${newObject.shape}`);
        grid.append(newShape);
    }
    else{
        output.innerText = 'Pallet is full';
    }
    count++;
};

create.addEventListener('click', () => {
    createShape();
});

existingShape.addEventListener('click', () => {
    output.innerText = getInfo;
})

