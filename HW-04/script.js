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

  for (i in students) {
    let name = students[i].split("");
    let j = name.length - 1;

    if (name[j] === "а") {
      women.push(students[i]);
    } else {
      men.push(students[i]);
    }
  }

  for (let i = 0; i < groups.length; i++) {
    groups[i] = new Array(2);

    groups[i][0] = men[i];
    groups[i][1] = women[i];
  }

  return groups;
}

function getGroupThemes() {
  const groupsThemes = [];
  let groups = getPairs(students);
  for (i in groups) {
    groupsThemes[i] = new Array(2);

    groupsThemes[i][0] = groups[i];
    groupsThemes[i][1] = themes[i];
  }
  return groupsThemes;
}

function getStudentMarks() {
  const studentsMarks = [];
  for (i in students) {
    studentsMarks[i] = new Array(2);

    studentsMarks[i][0] = students[i];
    studentsMarks[i][1] = marks[i];
  }
  return studentsMarks;
}

function getStudentMarksTheme() {
  const groupsThemesMarks = [];
  let groupsThemes = getGroupThemes();
  for (i in groupsThemes) {
    groupsThemesMarks[i] = new Array(2);

    groupsThemesMarks[i][0] = groupsThemes[i];

    let rand = Math.random();
    var mark = Math.floor(rand * 5) + 1;

    groupsThemesMarks[i][1] = mark;
  }
  return groupsThemesMarks;
}
console.log(getPairs(students));
console.log(getGroupThemes());
console.log(getStudentMarks());
console.log(getStudentMarksTheme());
