import React from "react";
import {Link} from 'react-router-dom';
import {useParams} from "react-router-dom";
import CaseJC from "./Components/CaseJC";
import CaseSF from "./Components/CaseSF";
import CaseCanada150 from "./Components/CaseCanada150";
import CaseMcDs from "./Components/CaseMcDs";
import Back from "./Components/Back"
import Next from "./Components/Next";

var CaseData = require('./Components/Data Modules/CaseData'); //data set

function CaseStudy() {

  return (
    <div className="caseStudy">
      <div className="caseStudy__nav">
        <Link to="/"><Back /></Link>
        <Link to={NextCase()}><Next /></Link>
      </div>
      <DisplayCaseStudy />
            <div className="caseStudy__nav">
        <Link to="/" onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}><Back /></Link>
        <Link to={NextCase()} onClick={()=>{window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}><Next /></Link>
      </div>
    </div>
  );
}

function NextCase (){
  let {project} = useParams();
  const currentProj = CaseData.find(element => element.URLquery === project);
  const indexCurrentProj = CaseData.indexOf(currentProj);
    if(indexCurrentProj === 0){
      return "/work/SugarFlower";
    }
    else if(indexCurrentProj === 1){
      return "/work/Canada150";
    }
    else if(indexCurrentProj === 2){
      return "/work/McDonaldsGCTA";
    }
    else if(indexCurrentProj === 3){
      return "/work/JasonClerkID";
    } 
}

function DisplayCaseStudy (){
  let {project} = useParams();
  if(project === "JasonClerkID"){
    return (
      <CaseJC />
    )
  }
  else if(project === "SugarFlower"){
    return (
      <CaseSF />
    )
  }
  else if(project === "Canada150"){
    return (
      <CaseCanada150 />
    )
  }
  else if(project === "McDonaldsGCTA"){
    return (
      <CaseMcDs />
    )
  }
  else return console.log("error")
}

export default CaseStudy;