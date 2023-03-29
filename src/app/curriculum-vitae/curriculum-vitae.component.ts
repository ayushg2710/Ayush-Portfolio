import { Component,OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']
})

export class CurriculumVitaeComponent implements OnInit {
  planeIcon: any ;
  gameIcon:any;
  volleyBallIcon:any;

  experiences :any = [
    {
        title: "Software Intern",
        company: 'Biz2Credit',
        period: "2023 - Present(1 month)",
        technologies: 'Angular, Node.js, Express.js, MongoDB',
        missions: [
            "Perform UI and/or API tests to optimize performance",
            "Build reusable code and libraries for future use",
            "Gather and address technical and design requirements",
            "Write clean code to develop functional web applications.",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Teaching Assistant",
        company: 'Coding Ninjas',
        period: "2021 - 2022 (5 months)",
        technologies: 'JAVA, Data Structures and Algorithms',
        missions: [
            "Took doubt sessions and resolved around 900 doubts with an average rating of 4.74.",
            "Debugged codes and helped students with their assignments and problems.",
        ],
        detailIsDisplayed: false,
    },
    {
        title: "Web developer",
        company: 'Photoshooto',
        period: "2020 - 2021 (1 year)",
        technologies: 'HTML, CSS , Javascript, React.js, Node.js',
        missions: [
            "Developed using HTML,CSS and JavaScript to enhance functionality and user experience on web pages.",
            "Improving an application for creating prevention plans.",
            "Participated in weekly company meetings to present design ideas and showcase finished apps.",
        ],
        detailIsDisplayed: false,
    },
];

  ngOnInit(): void {
    this.planeIcon=awesom.faPlane;
    this.gameIcon=awesom.faGamepad;
    this.volleyBallIcon=awesom.faVolleyballBall;
  }

  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }
}
