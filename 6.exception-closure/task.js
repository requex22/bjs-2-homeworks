// Задача №1
function parseCount(value) {
	let number = Number.parseInt(value, 10);
	if (Number.isNaN(number)) {
		throw new Error('Невалидное значение');
	} else {
		return number;
	}
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch(error) {
		return error;
	}
}

// console.log(validateCount('ауау'));

// Задача №2

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if (a > b + c || b > a + c || c > a + b) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}

	getPerimetr() {
		return this.p = (this.a + this.b + this.c);
	}

	getArea() {
		this.p = this.p / 2;
		return Math.round((this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c)) ** 0.5);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch(error) {
		return {
			getArea: () => "Ошибка! Треугольник не существует",
			getPerimeter: () => "Ошибка! Треугольник не существует"
		}
	}
}

let triangle = new Triangle(4, 4, 4);
console.log(triangle.getPerimetr());
console.log(triangle.getArea());
console.log(getTriangle(100, 5, 5))
