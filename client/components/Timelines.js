import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import { HiAcademicCap } from "react-icons/hi";

export default function Timelines(){
  return(
    <div>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={< HiAcademicCap/>}
  >
    <h3 className="vertical-timeline-element-title"></h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
     
    </p>
    </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={< HiAcademicCap/>}
  >
    <h3 className="vertical-timeline-element-title">答辩</h3>
    <h4 className="vertical-timeline-element-subtitle">丁真</h4>
    <p>
      牛逼嗷兄弟们
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={< HiAcademicCap/>}
  >
    <h3 className="vertical-timeline-element-title">15</h3>
    <h4 className="vertical-timeline-element-subtitle">共产党</h4>
    <p>
      hentai
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2029"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={< HiAcademicCap/>}
  >
    <h3 className="vertical-timeline-element-title">🐮</h3>
    <h4 className="vertical-timeline-element-subtitle">🐮</h4>
    <p>
      🐮
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2025"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={< HiAcademicCap/>}

  >
    <h3 className="vertical-timeline-element-title">牛逼</h3>
    <h4 className="vertical-timeline-element-subtitle">牛逼</h4>
    <p>
      太牛逼
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2023"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={< HiAcademicCap/>}

  >
    <h3 className="vertical-timeline-element-title">牛逼</h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2027"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={< HiAcademicCap/>}
  >
    <h3 className="vertical-timeline-element-title"></h3>
    <h4 className="vertical-timeline-element-subtitle"></h4>
    <p>
      
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={< HiAcademicCap/>}
  />
</VerticalTimeline>
</div>
  );
}