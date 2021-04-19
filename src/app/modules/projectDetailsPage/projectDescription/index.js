import React from "react";
import map from 'lodash/map';
import styles from './project_description.module.scss';
import Div from 'Common/components/div';
import { parseNewLine } from 'Common/utils';
const getHighlight = (highlight) => {

  if (highlight) {
    if (highlight == 'green')
      return styles.highlight_green;
    else if (highlight == 'blue')
      return styles.highlight_blue;
  }

  return null;
}

const ProjectDescription = ({ project, className }) => {
  const { description, dates, location } = project;

  return (
    <Div align="stretch" className={`${styles.description_container} ${className}`}>
      <Div row justify="space_between" className={styles.sub_info_container}>
        <Div>
          <div className={styles.title}>Location</div>
          <div className={styles.value}>{location}</div>
        </Div>
        <Div align="end">
          <div className={styles.title}>Dates</div>
          <div className={styles.value}>{dates}</div>
        </Div>
      </Div>

      {map(description, (description, index) => {
        if (description.type == "text") {
          return <div key={index} className={`${styles.text} ${getHighlight(description.highlight)}`} dangerouslySetInnerHTML={{ __html: parseNewLine(description.value) }}></div>;
        } 
        else if (description.type == 'quote') {
          return (<div key={index} className={styles.quote}>"{description.value}" - {description.author}</div>)
        }
        
        else if (description.type == 'points') {

          return (
            <Div key={index} className={`${styles.points_container} ${getHighlight(description.highlight)}`}>
              {description.title ? <div className={styles.title}>{description.title}</div> : null}
              <ul className={styles.points_ul}>
                {
                  map(description.value, (value, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: value }}></li>
                    
                  ))
                }
              </ul>
              
            
            </Div>
            
          )
          
        } else if (description.type == 'header') {
          return (<div key={index} className={styles.header}>{description.value}</div>)
        }
        else if (description.type == 'bolded') {
          return (<div key={index} className={styles.header}><b>{description.value}</b></div>)
        }

        return null;
      })}
    </Div>
  );
};

export default ProjectDescription;
