import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  projects: any = [
    {
        id:"teamTraveler",
        name: "MEMORIES APP",
        technologies: 'React, Node.js, Express & MongoDB.',
        images: [
            {
                title:'Trip',
                src: "assets/images/memories-app.png",
            }
        ],
        url: "https://play.google.com/store/apps/details?id=team.traveler.teamtraveler",
        detail:"Created a simple social media app that allows users to post interesting events that happened in their lives.",
        codeSourceUrl:'https://github.com/zinedineBenkhider/team_traveler',
        detailIsDisplayed: false,
    },
    {
        id:"mautic",
        name: "INSHORTS CLONE",
        technologies: 'React, Node.js, Express & MongoDB.',
        images: [
            {
                title:'Marketing campaigns',
                src:   "assets/images/inshorts-clone.png",
            }
        ],
        url:'#portfolio',
        detail:"Inshorts is a news app that selects latest and best news from multiple national and international sources and summarises them to present in a short and crisp.",
        codeSourceUrl:'https://github.com/zinedineBenkhider/mautic_monitoring',
        detailIsDisplayed: false,
    },
    {
        id:"pokedex",
        name: "EXPENSE TRACKER",
        technologies: 'React, Hooks, Context API.',
        images: [
            {
                title:'Pokedex',
                src:   "assets/images/expense-tracker.jpg",
            },
        ],
        url:'#portfolio',
        detail:"Developed an application that helps to keep an accurate record of your money inflow and outflow.",
        codeSourceUrl:'https://github.com/ifi-2019/trainer-ui-zinedineBenkhider',
        detailIsDisplayed: false,
    },
    {
        id:"portfolio",
        name: "PORTFOLIO",
        technologies: 'Angular11, Html5, CSS, TypeScript, BootStrap',
        images: [
            {
                title:'Portfolio',
                src:   "assets/images/portfolio.webp",
            },
        ],
        url:'https://medium.com/zinedine-projects/beautiful-cv-portfolio-72921a198640',
        detail:"<p> CV in the form of a responsive WEB site that I put in open-source on GitHub accompanied by a publication of a <a title='See the article' href='https://medium.com/zinedine-projects/beautiful-cv-portfolio-72921a198640' target='_blank'>article</a> on medium. </p>",
        codeSourceUrl:'https://github.com/zinedineBenkhider/portfolio',
        detailIsDisplayed: false,
    },
    {
        id:"riddle",
        name: "DAILY JOURNAL",
        technologies: 'Node.js, Express, EJS, JavaScript, Html5, CSS, BootStrap',
        images: [
            {
                title:'Riddle',
                src:   "assets/images/daily-journal.png",
            },
        ],
        url:'https://transfer-riddle-solver.herokuapp.com/index.html',
        detail:"Created a personal diary/blog website where one can add/compose different blogs in website. • Technologies used are NodeJS and ExpressJS as backend along with use of EJS for templating and layouts functionality for better code structuring. Also used Lodash for working with url and strings.",
        codeSourceUrl:'https://github.com/zinedineBenkhider/transfer_riddle_client',
        detailIsDisplayed: false,
    },
];

detailOnClick(project: any) {
  this.projects.filter((item: { detailIsDisplayed: any; id: any; })=>item.detailIsDisplayed && item.id!=project.id).map((elem: { detailIsDisplayed: boolean; })=>elem.detailIsDisplayed=false);
  project.detailIsDisplayed=!project.detailIsDisplayed;
}
}
