const students = [
  { name: "Олександр", s: "M" },
  { name: "Ігор", s: "M" },
  { name: "Олена", s: "F" },
  { name: "Іра", s: "F" },
  { name: "Олексій", s: "M" },
  { name: "Світлана", s: "F" },
];

const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
  const men = [];
  const women = [];

  for (i in students) {
    if (students[i].s == "M") men.push(students[i].name);
    else if (students[i].s == "F") women.push(students[i].name);
  }

  const groups = new Array(3);
  for (var i = 0; i < groups.length; i++) {
    groups[i] = new Array(2);

    groups[i][0] = men[i];
    groups[i][1] = women[i];
  }

  // 1
  //console.log(groups);

  const groupsThemes = [];
  for (i in groups) {
    groupsThemes[i] = new Array(2);

    groupsThemes[i][0] = groups[i];
    groupsThemes[i][1] = themes[i];
  }

  // 2
  // console.log(groupsThemes);

  const studentsMarks = [];
  for (i in students) {
    studentsMarks[i] = new Array(2);

    studentsMarks[i][0] = students[i].name;
    studentsMarks[i][1] = marks[i];
  }

  // 3
  //console.log(studentsMarks);

  const groupsThemesMarks = [];
  for (i in groupsThemes) {
    groupsThemesMarks[i] = new Array(2);

    groupsThemesMarks[i][0] = groupsThemes[i];

    let rand = Math.random();
    var mark = Math.floor(rand * 5) + 1;

    groupsThemesMarks[i][1] = mark;
  }

  // 4
  console.log(groupsThemesMarks);
}

const pairs = getPairs(students);
console.log(pairs);
