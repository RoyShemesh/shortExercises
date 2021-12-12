import React from "react";
import { CoursePart } from "./types/types";

export default function Total(props:{courses:CoursePart[]}){
    
    
    return (
        <div><p>
        Number of exercises{" "}
         {props.courses.reduce ((carry, part) => carry + part.exerciseCount, 0)}
       </p></div>
    )
}