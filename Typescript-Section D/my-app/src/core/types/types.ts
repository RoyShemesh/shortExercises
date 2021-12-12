 interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
}

interface CoursePartBaseWithDescription extends CoursePartBase{
    description:string,
}

interface CourseSpeacialPart extends CoursePartBaseWithDescription{
    type:'special',
    requirements:string[],
}
 interface CourseNormalPart extends CoursePartBaseWithDescription {
    type: "normal";
    description: string;
}
 interface CourseProjectPart extends CoursePartBase {
    type: "groupProject";
    groupProjectCount: number;
}
  
 interface CourseSubmissionPart extends CoursePartBaseWithDescription {
    type: "submission";
    description: string;
    exerciseSubmissionLink: string;
}
  
export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseSpeacialPart;
  
  
export interface CourseName{
    name:string
}
