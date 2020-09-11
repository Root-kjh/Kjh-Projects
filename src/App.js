import React,{useEffect} from 'react';
import './App.css';
import Project_card from './components/Project_card';

function App() {
  const PROJECTS = [
    {
      title : "TodoList",
      backend : "SpringBoot",
      db : "MySQL",
      etc : "간단한 기능을 구현하되, 코드의 가독성에 집중하며 만든 프로젝트",
      link : "/todolist-springboot"
    },
    {
      title : "RecruitList",
      backend : "Spring",
      db : "MySQL, MongoDB",
      etc : "써보고 싶은 다양한 기술스택을 사용하며 만든 프로젝트",
      link : "/recruitlist-spring"
    },
    {
      title: "SoldierMailAuto",
      backend : "미정",
      db: "미정",
      etc : "제작중",
      link : "/soldier-mail-auto"
    },
    {
      title: "MemorialDayCalender",
      backend: "미정",
      db: "미정",
      etc: "제작중",
      link: "/memorialday-calender"
    },
    {
      title: "When-Should-I-dodge",
      backend: "Django",
      db: "미정",
      etc: "제작중(롤 전적 검색을 기반으로 한 닷지 판단 웹)",
      link: "/when-shuld-i-dodge"
    }
  ];

  useEffect(() => {
    document.title = "kjh-Projects";
  })

  return (
    <div id="App">
      {
        PROJECTS.map(project => {
          return <Project_card title={project.title} backend={project.backend} db={project.db} etc={project.etc} link={project.link}/>
        })
      }
    </div>
  );
}

export default App;
