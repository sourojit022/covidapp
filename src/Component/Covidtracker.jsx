import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Container,InputGroup,FormControl,Button,Form,Navbar} from "react-bootstrap";
import { BsCheckAll } from "react-icons/bs";
export default function UserDetails() {
  
  const [search, setSearch] = useState("");
  
  const [userD, setuserD] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then((res) => {
        //Console.log(res)
        setuserD(res.data.statewise);
        console.log(res.data.statewise);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>

       <section>
         
              <Row>
                <Col md="4"  >
        <h1 id="Title" >Live Covid Tracker</h1>
        <p id="Title">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
        </Col>

           
                <Col md="4"  xs={5}>
           <img  id="image1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnqXOYXAAROAJN52hm8TUQPDDq_k0yxHUgQ&usqp=CAU" alt="" srcset="" />
        </Col>
                <Col md="4"  xs={5}>
           <img  id="image1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnqXOYXAAROAJN52hm8TUQPDDq_k0yxHUgQ&usqp=CAU" alt="" srcset="" />
        </Col>
        
       

        </Row>

      </section >


      <Navbar className="bg-light justify-content-between">
  
  <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2"    onChange={ (e)=>setSearch(e.target.value)}/>
   
  </Form>
</Navbar>
          




          


        
         <div class="table">
          <div class="th">
            <div class="td">State</div>
            <div class="td">Active</div>
            <div class="td">Confirmed</div>
            <div class="td">Deaths</div>
            <div class="td" >Recovered</div>
            <div class="td">Last Update</div>
          </div>


          {userD .filter((v)=>{

              if (search === "") {
                return v;
              } else if (v.state.toLowerCase().includes(search.toLowerCase())) {
                return v;
              }


              
            }) .map((e) => {
            return (
              <>
                <div class="tbody" className="abc">
                  <div class="tr">
                    <div class="td" >{e.state}</div>
                    <div class="td" id="active">{e.active}</div>
                    <div class="td" id="confirm"> <BsCheckAll/> {e.confirmed}</div>
                    <div class="td" id="death"> {e.deaths}</div>
                    <div class="td" id="recoverd">{e.recovered}</div>
                    <div class="td">{e.lastupdatedtime}</div>
                  </div>
                </div>
              </>
            );
          })}

        </div>
   



      <section id="foot">
        <h3>* HOW IT SPREADS</h3>
        <hr />
        <p>The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.</p>

        <p>You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.</p>
      </section>




      <div id="indicator">
        <div id="section3">
          <h5> in green=all cases have recovered from the infection </h5>
        </div>
        <div id="section2">
          <h5> in Yellow=all cases are Confirmed</h5>
        </div>
        <div id="section1">
          <h5> in red=all cases are Death</h5>
        </div>



        
      </div> 

      
      

    </>
  );
}










