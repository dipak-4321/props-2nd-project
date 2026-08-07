
import './App.css'
import { Building } from 'lucide-react';
function App(){
  return (
    <>
    <div className="card">
      <div className="header">
        <h6 className="posCenterR">subscribe</h6>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwy1CidK3rqH2Vf3Fiv-f0DstoHzqDcPznaKZXxPOpQ&s=10" alt="" />
        <h4>$45/hr</h4>
      </div>

      <div className="center posCenterC ">
        <h4>Tony Stark</h4>
        <h5>UI/UX designer</h5>
        <p className='detail '><Building className='detailbtn' /><span>Epic Coders</span></p>
      </div>

      <div className="boxbar posCenterR">
        <h4>UI</h4>
         <h4>UX</h4>
         <h4>photoshop</h4>
         <h4>+4</h4>
      </div>

      <div className="bottom ">
        <p className="nextdetails">Stark is inventor of Jarvis AI who is CEO of Stark Industry </p>
        <div className="forline">
          <button>View Profile</button>
        </div>
      </div>


    </div>
    </>
  )
}
export default App