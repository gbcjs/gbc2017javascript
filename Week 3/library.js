var courses = [];

function addCourse(){

	// Create Book Objects
	// Store them in array

	var course = {
		id: 'c123',
		name: 'fdsgfdg',
		capacity: 50,
		studentsEnrolled: 20,
		description: "fdsfsadfsdafsdf..",
		instructor: {
			name: "Bob Joe",
			salary: 20000
		},
		price: 600,
		startDate: new Date(),
		students: [{}, {}, {}],
		checkAvailability: function () {
			return (capacity - studentsEnrolled) > 1
		},
		enroll: function (student) {
			// Step 1: Check Availability
			if (this.checkAvailability()) {
				this.students.push(student);
			} else {
				alert("Error: Max Capacity Reached.")
			}
			// Step 2: Add student
		}
	}

	courses.push(course);

}


var student = {
	id: 's123',
	name: "fdsfsd"
}

addCourse('c123', student);

var addCourse = function (courseId, student) {
	course.enroll(student);
} 
