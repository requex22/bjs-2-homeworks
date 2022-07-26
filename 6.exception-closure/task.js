// Задача №1
function parseCount(value) {
	let number = Number.parseInt(value, 10);
	if (Number.isNaN(number)) {
		throw new Error('Невалидное значение');
	} return number;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch(error) {
		console.log(error);
	}
}

// console.log(validateCount('ауау'));

// Задача №2

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (this.a > this.b + this.c || this.b > this.a + this.c || this.c > this.a + this.b) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	getPerimetr() {
		this.p = (this.a + this.b + this.c);
		return this.p;
	}

	getArea() {
		this.p = (this.a + this.b + this.c) / 2;
		return Math.round((this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c)) ** 0.5);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch(error) {
		return new Triangle(a, b, c) = {
			getPerimetr() {
				return console.log('Ошибка! Треугольник не существует');
			},
			
			getArea() {
				return console.log('Ошибка! Треугольник не существует');
			}
		}
	}	
}

let triangle = new Triangle(4, 4, 4);
console.log(triangle.getPerimetr());
console.log(triangle.getArea());
// let triangle1 = new Triangle(4, 4, 4);
console.log(getTriangle(1, 2, 1))