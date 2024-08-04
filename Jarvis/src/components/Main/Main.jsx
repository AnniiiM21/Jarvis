import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'


const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Jarvis</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

           {!showResult
           ?<>
           
           <div className="greet">
              <p><span>Hello , Boss.</span></p>
              <p><span2>Lets get the work done!</span2></p>
            </div>
            <div className="cards">
              <div className="card">
                <p>What is an Anchor being?</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Breifly summarize this concept: Urban planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Generate the C++ code for a recursive tree</p>
                <img src={assets.code_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.message_icon} alt="" />
              </div>
            </div>
           </>
           :<div className='result'>
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.jarvis_icon} alt="" />
                {loading
                ?<div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
                
              </div>
           </div>
          }



            <div className="main-bottom">
              <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
                <div>
                  <img src={assets.gallery_icon} alt="" />
                  <img src={assets.mic_icon} alt="" />
                  {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                </div>
              </div>
              <p className="bottom-info">
                Jarvis is your personal AI assisant , it may sometimes display inaccurate info as it is based on Gemini developed by google.
              </p>
            </div>
        </div>
      
    </div>
  )
}

export default Main
