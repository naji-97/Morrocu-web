function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    if ((grades[i] >= 38 )&& ((((grades[i] % 5)) == 3 )|| ((grades[i] % 5) == 4))) {
      grades[i] = grades[i] + (5 - (grades[i] % 5));
    }
    return grades;
  }
}

// function gradingStudents(grades) {
//   // Write your code here
//   let grade = grades % 5;
//   if (grades > 40) {
//     return grades;
//   } else if (grades >= 38) {
//     return grades + grade;
//   } else {
//     return false;
//   }
//   //   return grades + grade;
// }
