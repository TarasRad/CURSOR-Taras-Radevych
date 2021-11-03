class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this._marks = [5, 4, 4, 5];
    this.dismis = [];
  }
  getInfo() {
    console.log(
      `Студент  ${this.course}  го курсу  ${this.university}  ${this.fullName}`
    );
  }

  set marks(mark) {
    this._marks.push(mark);
  }

  get marks() {
    return this._marks;
  }

  getAverageMark() {
    const sum = this.marks.reduce((acc, value) => {
      return acc + value;
    });
    return sum / this.marks.length;
  }
  dismiss() {
    this.dismis = this._marks;
    this._marks = null;
  }

  recover() {
    this._marks = this.dismis;
  }
}

const student1 = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  1,
  "Остап Родоманський Бендер"
);

student1.getInfo();
student1._marks.push(5);
console.log(student1._marks);
console.log(student1.getAverageMark());
student1.dismiss();
console.log(`Оцінки студента після виключення: ${student1.marks}`);
student1.recover();
console.log(`Оцінки студента після поновлення: ${student1.marks}`);

//Advanced

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setInterval(() => this.getSchoolarShip(), 30000);
  }
  getSchoolarShip() {
    if (this.getAverageMark() >= 4.0) {
      return `Ви отримали 1400 грн. стипендії`;
    }
  }
}
const student2 = new BudgetStudent(
  "Національний університет 'Львівська політехніка'",
  2,
  "Радевич Тарас Романович"
);

student2.getInfo();
console.log(`Cтудент отриимує стипендію: ${student2.getSchoolarShip()}`);
