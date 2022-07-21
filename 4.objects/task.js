function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  this.setSubject = subjectName;
} 

Student.prototype.addMark = function(mark) {
	if (this.marks === undefined) {
		this.marks = [mark];
	} else {
		this.marks.push(mark);
	} 
}

Student.prototype.addMarks = function(...restMarks) {
	this.listMarks = restMarks;
}

Student.prototype.getAverage = function() {
	let sum = 0;
	for (let i = 0; i < Student.marks.length; i++) {
		sum += Student.marks[i];
	}

	return sum / Student.marks.length
}

let student1 = new Student('Mark', 'male', 22);

student1.setSubject('Geometry');
student1.addMark(4);
student1.addMark(5);
student1.addMark(3);
console.log(student1.getAverage())
console.log(student1);

let student2 = new Student('Maria', 'female', 24);

