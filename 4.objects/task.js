function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
} 

Student.prototype.addMark = function(mark) {
	if (this.marks === undefined) {
		this.marks = [mark];
	} else {
		this.marks.push(mark);
	} 
}

Student.prototype.addMarks = function(...restMarks) {
	if (this.marks === undefined) {
		this.marks = [...restMarks];
	} else {
		this.marks.push(...restMarks);
	}
}

Student.prototype.getAverage = function() {
	let sum = 0;
	
	if (this.marks === undefined) {
		return sum;
	}

	for (let i = 0; i < this.marks.length; i++) {
		sum += this.marks[i];
	}

	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
}
let student1 = new Student('Mark', 'male', 22);

student1.setSubject('Geometry');
student1.addMarks(3, 4, 6, 8);
console.log(student1.getAverage());
// student1.exclude('low grades');
console.log(student1);

let student2 = new Student('Maria', 'female', 24);

