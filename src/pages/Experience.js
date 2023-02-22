import React from "react";
import { 
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"



function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor='#3e497a' >
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2018"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />} 
        >
          <h3 className="vertical-timeline-element-title">
            Colegio Calasanz Pereira
          </h3>
          <p> High School Diploma </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - Present"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />} 
        >
          <h3 className="vertical-timeline-element-title">
            Universidad Tecnológica de Pereira
          </h3>
          <p> Currently in my 5th year of Computer Science Degree </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - Present"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />} 
        >
          <h3 className="vertical-timeline-element-title">
            OpenBootcamp
          </h3>
          <p> HTML, CSS, Javascript courses </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - Present"
          iconStyle={{background: "#61DAFB", color: "#fff"}}
          icon={<SchoolIcon />} 
        >
          <h3 className="vertical-timeline-element-title">
            OpenBootcamp, Freecodecamp, autodidact
          </h3>
          <p> Focusing on React </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience