import React,{useEffect} from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';

function App() {
  const PROJECTS = [
    {
      title : "TodoList",
      backend : "SpringBoot",
      db : "MySQL",
      etc : "간단한 기능을 구현하되, 코드의 가독성에 집중하며 만든 프로젝트",
      link : "http://kjh-projects.kro.kr/todo-list",
      git_link: "https://github.com/Root-kjh/TodoList-SpringBoot"
    },

    {
      title : "RecruitList",
      backend : "Spring",
      db : "MySQL, MongoDB",
      etc : "써보고 싶은 다양한 기술스택을 사용하며 만든 프로젝트(코드 리팩토링, 버그 fix 중)",
      link : "http://kjh-projects.kro.kr/recruit-list",
      git_link: "https://github.com/Root-kjh/Recruit_List-Server"
    },
    
    {
      title: "MemorialDayCalender",
      backend: "Django",
      db: "SQLite",
      etc: "백엔드 제작완료, view 제작중",
      link: "http://kjh-projects.kro.kr/memorialday-calender",
      git_link: "https://github.com/Root-kjh/MemorialDay-Calendar"
    },

    {
      title: "RailsTest",
      backend: "Ruby on Rails",
      db: "SQLite",
      etc: "백엔드 제작완료, view 제작중",
      link: "http://kjh-projects.kro.kr/rails-test",
      git_link: "https://github.com/Root-kjh/RailsTest"
    },

    {
      title: "Toyproject-Board",
      backend: "Flask",
      db: "MySQL, ElasticSearch",
      etc: "제작중",
      link: "http://kjh-projects.kro.kr/toyproject-board",
      git_link: "https://github.com/Root-kjh/Toyproject-Board"
    }
  ];

  useEffect(() => {
    document.title = "kjh-Projects";
  })

  return (
    <div id="App">
      {
        PROJECTS.map(project => {
          return <ProjectCard key={project.title} title={project.title} backend={project.backend} db={project.db} etc={project.etc} link={project.link} git_link={project.git_link}/>
        })
      }
    </div>
  );
}

export default App;
