import React ,{ useRef }from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials=()=> {
    
    const slider=useRef();
    let tx=0;
    const slideForward=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt=""/>
                        <div>
                            <h3>Olivia Stark</h3>
                            <span>California,USA</span>
                        </div>
                    </div>
                    <p>If you’re not using EverNote, you’re missing out.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt=""/>
                        <div>
                            <h3>William Jackson</h3>
                            <span>Boston,USA</span>
                        </div>
                    </div>
                    <p>If you want a truly distraction-free environment then you can’t do better than Edusity for your note-taking needs.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt=""/>
                        <div>
                            <h3>Paisley Grey</h3>
                            <span>Toronto,Canada</span>
                        </div>
                    </div>
                    <p>The pins feature is super useful as well, using them allows you to easily find an important note as pinned notes stick to the top of the list of saved notes, new notes go below.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt=""/>
                        <div>
                            <h3>Bruce Wayne</h3>
                            <span>Sydney,Australia</span>
                        </div>
                    </div>
                    <p>Edusity is helping me keep all of my information and notes in one place, and allows me to access them wherever I go - it's like the modern day equivalent of always having some paper and pen on you.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
