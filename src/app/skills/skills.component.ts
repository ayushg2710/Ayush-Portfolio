import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills: any = {
    technologies: [
      { name: 'Java, C++, C, SQL', percent: 90, remark: 'excellent' },
      { name: 'JavaScript, Angular', percent: 70, remark: 'good' },
      { name: 'HTML, CSS, Bootstrap', percent: 90, remark: 'excellent' },
      { name: 'Javascript, React.js', percent: 70, remark: 'very-good' },
      { name: 'Node.js, Express.js, MongoDB', percent: 90, remark: 'excellent'},
    ],
    tools: [
      { name: 'Git', percent: 90, remark: 'excellent' },
      { name: 'Office', percent: 90, remark: 'excellent' },
      { name: 'Linux, Windows', percent: 70, remark: 'very-good' },
      { name: 'MySql, PgSql', percent: 90, remark: 'excellent' },
      { name: 'Docker, Kubernetes', percent: 50, remark: 'average' },
    ],
    methodologies: [
      { name: 'Scrum', percent: 70, remark: 'very-good' },
      { name: 'Data Science', percent: 90, remark: 'excellent' },
      { name: 'Disign Thinking', percent: 70, remark: 'good' },
      { name: 'Cloud Computing', percent: 90, remark: 'excellent' },
      { name: 'DevOps', percent: 50, remark: 'average' },
    ],
  };
}
