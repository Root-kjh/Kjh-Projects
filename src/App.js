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
