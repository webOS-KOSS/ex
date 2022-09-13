import React from 'react';
import { Navbar,Container,Nav,NavDropdown,Button,Card } from 'react-bootstrap';
import { useState } from 'react';
import '../views/Control.css';
import img_ln from '../../img/light_on.png';
import img_lf from '../../img/light_off.png';
import img_w from '../../img/wopen2.png';
import img_b from '../../img/curtain.png';
import img_wo from '../../img/wopen.png';
import img_wc from '../../img/wclose.png';
import Switch from '@enact/sandstone/Switch';
import Slider from '@enact/sandstone/Slider';


const App = () => {
  return (
    <div className='Control'>
      <div className='app-title'>가전제어</div>
      <div className='tem'>
        <div className='app-list'>
          <ul>
            <li>조명</li>
            <li>블라인드</li>
            <li>창문</li>
          </ul>
        </div>
        <div className='img-list'>
          <ul>
            <li><Light /></li>
            <li><Blind /></li>
            <li><Window /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Light(){
  let [led, setled] = useState(false);
  return (
    <div style={{ display: "inline-block"}}>
      <Card style={{ width: '60px' }}>
        <Card.Body>
          <div style={{ padding: '2px' }}>
            {
              led === true
              ? <img src={img_lf} style={{ width: '150px', height: '150px'}}/>
              : <img src={img_ln} style={{ width: '150px', height: '150px' }}/>
            }
          </div>
          <div style={{marginBottom:'55px'}}></div>
          <div style={{paddingLeft:'25px'}}><Button style={{width:'100px', height:'30px', fontSize:'20px'}} variant="outline-primary" onClick={()=>{setled(!led)}}>Switch</Button></div>
        </Card.Body>
      </Card>
    </div>
  )
}
function Blind() {
  let [blind, setblind] = useState(false);
  return (
    <div style={{ display: "inline-block"}}>
      <Card style={{ width: '60px' }}>
        <Card.Body>
          <div style={{ padding: '2px' }}>
            {
              blind === true
              ? <img src={img_w} style={{ width: '150px' , height: '150px'}}/>
              : <img src={img_b} style={{ width: '150px' , height: '150px'}}/>
            }
          </div>
          <div style={{marginBottom:'55px'}}></div>
          <div><Slider style={{width:'300px'}}
  defaultValue={100}
  max={100}
  min={0}
  step={20}
  tooltip
/></div>
        </Card.Body>
      </Card>
    </div>
  )
}
function Window() {
  let [wind, setwind] = useState(false);
  return (
    <div style={{ display: "inline-block"}}>
      <Card style={{ width: '60px' }}>
        <Card.Body>
          <div style={{ padding: '2px' }}>
            {
              wind === true
              ? <img src={img_wo} style={{ width: '150px' , height: '150px'}}/>
              : <img src={img_wc} style={{ width: '150px' , height: '150px'}}/>
            }
          </div>
          <div style={{marginBottom:'55px'}}></div>
          <div style={{paddingLeft:'25px'}}><Button style={{width:'100px', height:'30px', fontSize:'20px'}} variant="outline-primary" onClick={()=>{setwind(!wind)}}>Switch</Button></div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default App;