import React from "react";

import { CoursePart } from "./types/types";

export default function Content(props: { courses: CoursePart[] }) {
  return (
    <div>
      {props.courses.map((course) => {
        switch (course.type) {
          case "normal":
            return (
              <div key={course.name}>
                <div>
                  {course.name} {course.exerciseCount}
                </div>
                {course.description}
              </div>
            );
            break;
          case "groupProject":
            return (
              <div key={course.name}>
                <div>
                  -{course.name} {course.exerciseCount}
                </div>
                {course.groupProjectCount}
              </div>
            );
            break;
          case "submission":
            return (
              <div key={course.name}>
                <div>
                  -{course.name} {course.exerciseCount}
                </div>
                {course.description}
                {course.exerciseSubmissionLink}
              </div>
            );
          case "special":
            return (
              <div key={course.name}>
                <div>
                  -{course.name} {course.exerciseCount}
                </div>
                {course.description}
                {course.requirements.map((req) => {
                  return <div key={req}>{req}</div>;
                })}{" "}
              </div>
            );
            break;

          default:
            break;
        }
      })}
    </div>
  );
}
