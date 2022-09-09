import React from "react";
import {Link} from 'react-router-dom';
import {useParams} from "react-router-dom";
import CaseJC from "./Components/CaseJC";
import CaseSF from "./Components/CaseSF";
import CaseCanada150 from "./Components/CaseCanada150";
import CaseMcDs from "./Components/CaseMcDs";
import Back from "./Components/Back"
import Pagination from "./Components/Pagination";
import Page1Label from "./Components/Page1Label";
import Page2Label from "./Components/Page2Label";
import Page3Label from "./Components/Page3Label";
import Page4Label from "./Components/Page4Label";


var CaseData = require('./Components/Data Modules/CaseData'); //data set

function CaseStudy() {

  return (
    <div className="caseStudy">
      <div className={"pagination"}><DisplayPagination /></div>
      <div className={"paginationMobile"}><DisplayPaginationMobile /></div>
      <DisplayCaseStudy />
      <div className={"pagination"}><DisplayPagination /></div>
      <div className={"paginationMobile"}><DisplayPaginationMobile /></div>
    </div>
  );
}


function DisplayPagination (){
  let {project} = useParams();
  if(project === "JasonClerkID"){
    return (
      <div className="caseStudy__nav">
        <Link to="/"><Back className={"backButton"} /></Link>
        <div className="caseStudy__nav-pageLinks">
          <Page1Label className={"pageActive"}/>
          <Link to="/work/SugarFlower"><Pagination className={"pageTwo"}/></Link>
          <Link to="/work/Canada150"><Pagination className={"pageThree"}/></Link>
          <Link to="/work/McDonaldsGCTA"><Pagination className={"pageFour"}/></Link> 
        </div>
      </div>
    )
  }
  else if(project === "SugarFlower"){
      return (
        <div className="caseStudy__nav">
          <Link to="/"><Back className={"backButton"} /></Link>
          <div className="caseStudy__nav-pageLinks">
            <Link to="/work/JasonClerkID"><Pagination className={"pageOne"}/></Link>
            <Page2Label className={"pageActive"}/>
            <Link to="/work/Canada150"><Pagination className={"pageThree"}/></Link>
            <Link to="/work/McDonaldsGCTA"><Pagination className={"pageFour"}/></Link>
          </div>
        </div>
      )
    }
    else if(project === "Canada150"){
      return (
        <div className="caseStudy__nav">
          <Link to="/"><Back className={"backButton"} /></Link>
          <div className="caseStudy__nav-pageLinks">
            <Link to="/work/JasonClerkID"><Pagination className={"pageOne"}/></Link>
            <Link to="/work/SugarFlower"><Pagination className={"pageTwo"}/></Link>
            <Page3Label className={"pageActive"}/>
            <Link to="/work/McDonaldsGCTA"><Pagination className={"pageFour"}/></Link>
          </div>
        </div>
      )
    }
    else if(project === "McDonaldsGCTA"){
      return (
        <div className="caseStudy__nav">
          <Link to="/"><Back className={"backButton"} /></Link>
          <div className="caseStudy__nav-pageLinks">
            <Link to="/work/JasonClerkID"><Pagination className={"pageOne"}/></Link>
            <Link to="/work/SugarFlower"><Pagination className={"pageTwo"}/></Link>
            <Link to="/work/Canada150"><Pagination className={"pageThree"}/></Link>
            <Page4Label className={"pageActive"}/>
          </div>
        </div>
      )
    }
    else return console.log("error")
  }
function DisplayPaginationMobile (){
  let {project} = useParams();
  if(project === "JasonClerkID"){
    return (
      <div className="caseStudy__nav">
        <Link to="/"><Back className={"backButton"} /></Link>
        <div className="caseStudy__nav-pageLinks">
          <Pagination className={"pageOneActiveMobile"}/>
          <Link to="/work/SugarFlower"><Pagination className={"pageTwo"}/></Link>
          <Link to="/work/Canada150"><Pagination className={"pageThree"}/></Link>
          <Link to="/work/McDonaldsGCTA"><Pagination className={"pageFour"}/></Link> 
        </div>
      </div>
    )
  }
  else if(project === "SugarFlower"){
      return (
        <div className="caseStudy__nav">
          <Link to="/"><Back className={"backButton"} /></Link>
          <div className="caseStudy__nav-pageLinks">
          <Link to="/work/JasonClerkID"><Pagination className={"pageOne"}/></Link>
          <Pagination className={"pageTwoActiveMobile"}/>
          <Link to="/work/Canada150"><Pagination className={"pageThree"}/></Link>
          <Link to="/work/McDonaldsGCTA"><Pagination className={"pageFour"}/></Link> 
          </div>
        </div>
      )
    }
    else if(project === "Canada150"){
      return (
        <div className="caseStudy__nav">
          <Link to="/"><Back className={"backButton"} /></Link>
          <div className="caseStudy__nav-pageLinks">
          <Link to="/work/JasonClerkID"><Pagination className={"pageOne"}/></Link>
          <Link to="/work/SugarFlower"><Pagination className={"pageTwo"}/></Link>
          <Pagination className={"pageThreeActiveMobile"}/>
          <Link to="/work/McDonaldsGCTA"><Pagination className={"pageFour"}/></Link> 
          </div>
        </div>
      )
    }
    else if(project === "McDonaldsGCTA"){
      return (
        <div className="caseStudy__nav">
          <Link to="/"><Back className={"backButton"} /></Link>
          <div className="caseStudy__nav-pageLinks">
          <Link to="/work/JasonClerkID"><Pagination className={"pageOne"}/></Link>
          <Link to="/work/SugarFlower"><Pagination className={"pageTwo"}/></Link>
          <Link to="/work/Canada150"><Pagination className={"pageThree"}/></Link>
          <Pagination className={"pageFourActiveMobile"}/>
          </div>
        </div>
      )
    }
    else return console.log("error")
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
