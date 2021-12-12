import React from "react";
import { CourseName } from "./types/types";

export default function Header(props:CourseName){
    return (
    <div>
      <h1>{props.name}</h1>

    </div>)
}