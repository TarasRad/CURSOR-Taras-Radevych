//str.charAt(str.length - 1)
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
  const men = [];
  const women = [];
  const groups = new Array(3);
  for (let i = 0; i < students.length; i++) {
    let name = students[i];

    if (name.charAt(name.length - 1) === "а") {
      women.push(name);
    } else {
      men.push(name);
    }
  }

  for (let i = 0; i < groups.length; i++) {
    groups[i] = new Array(2);

    groups[i][0] = men[i];
    groups[i][1] = women[i];
  }

  return groups;
}
//groupsThemes[i][0] = groups[i].join(' і ');
function getGroupThemes() {
  const groupsThemes = [];
  let groups = getPairs(students);
  for (let i in groups) {
    groupsThemes[i] = new Array(2);

    groupsThemes[i][0] = groups[i].join(" і ");
    groupsThemes[i][1] = themes[i];
  }
  return groupsThemes;
}

function getStudentMarks() {
  const studentsMarks = [];
  for (let i in students) {
    studentsMarks[i] = new Array(2);

    studentsMarks[i][0] = students[i];
    studentsMarks[i][1] = marks[i];
  }
  return studentsMarks;
}

function getStudentMarksTheme() {
  const groupsThemesMarks = [];
  let groupsThemes = getGroupThemes();
  for (let i in groupsThemes) {
    groupsThemesMarks[i] = new Array(2);

    groupsThemesMarks[i][0] = groupsThemes[i];

    groupsThemesMarks[i][1] = getRandom();
  }
  return groupsThemesMarks;
}
function getRandom() {
  let rand = Math.random();
  var mark = Math.floor(rand * 5) + 1;

  return mark;
}

console.log(getPairs(students));
console.log(getGroupThemes());
console.log(getStudentMarks());
console.log(getStudentMarksTheme());
