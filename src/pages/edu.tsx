import SKBB2 from '../assets/personal_photos/edu/skbb2.jpg';
import MGHS from '../assets/personal_photos/edu/mghs.jpeg';
import SAMURA from '../assets/personal_photos/edu/samura.jpg';
import UMS from '../assets/personal_photos/edu/ums.png';

interface EduProps {
  logo?: string;
  school: string;
  duration: string;
  desc: string;
  edulevel: string;
}

function EduDescLayout({ school, duration, desc, edulevel, logo}: EduProps){
  return(
    <div className="flex flex-row gap-6 m-4">
      <div className="avatar">
        <div className="w-24 rounded">
          <img src={logo} />
        </div>
      </div>
      <div>
        <h3 className="text-l font-bold">{school}</h3>
        <p className="text-sm font-semibold">{edulevel}</p>
        <p className="text-sm font-medium">{duration}</p>
        <p className="mt-2 text-sm ">{desc}</p>
      </div>
      
    </div>
  )
}

const EduPage: React.FC<EduProps> = () => {

  return (
    <div id="edu" className="flex flex-col">
        <div className={window.screen.width <= 768 ? 'flex flex-row m-2 mb-0 gap-4 pb-5':'flex flex-row m-12 mb-0 gap-4 pb-5'}>
          <div className='walnut-brown-bg text-upright'>
            <p className="side-text-bar text-sm font-semibold">FUN YEARS</p>
          </div>
          <div className="walnut-brown-bg p-[1.675px] rounded-[2px]"></div>
          <div>
            <h3 className="text-xl font-semibold mb-4">UNIVERSITY</h3>
            <EduDescLayout 
              school={"Universiti Malaysia Sabah (UMS)"}
              duration={"2018-2022"} 
              edulevel={"Bachelors Degree in Computer Science (Software Engineering)"}
              desc={""}   
              logo={UMS}           
            />
          </div>
        </div>
        <div className={window.screen.width <= 768 ? 'flex flex-row m-2 mb-0 gap-4 pb-5':'flex flex-row m-12 mb-0 gap-4 pb-5'}>
          <div className='walnut-brown-bg text-upright'>
            <p className="side-text-bar text-sm font-semibold">OKAY LAH</p>
          </div>
          <div className="walnut-brown-bg p-[1.675px] rounded-[2px]"></div>
          <div>
            <h3 className="text-xl font-semibold mb-4">PRE-UNIVERSITY</h3>
            <EduDescLayout 
              school={"Universiti Malaysia Sabah (UMS)"}
              duration={"2017-2018"} 
              edulevel={"Foundation in Science and Technology"}
              desc={""} 
              logo={UMS}           
            />
          </div>
        </div>
        <div className={window.screen.width <= 768 ? 'flex flex-row m-2 mb-0 gap-4 pb-5':'flex flex-row m-12 mb-0 gap-4 pb-5'}>
          <div className='walnut-brown-bg text-upright'>
            <p className="side-text-bar text-sm font-semibold">ONLY SAMURA OKAY-ISH</p>
          </div>
          <div className="walnut-brown-bg p-[1.675px] rounded-[2px]"></div>
          <div>
            <h3 className="text-xl font-semibold mb-4">SCHOOL</h3>
            <EduDescLayout 
              school={"SM Sains Muar (SAMURA)"}
              duration={"2015-2017"} 
              edulevel={"Secondary"}
              desc={""}  
              logo={SAMURA}           
            />
            <EduDescLayout 
              school={"SMK Tinggi Perempuan Melaka (Malacca Girls High School)"}
              duration={"2012-2015"} 
              edulevel={"Secondary"}
              desc={""}  
              logo={MGHS}           
            />
            <EduDescLayout 
              school={"SK Batu Berendam 2"} 
              duration={"2005-2011"} 
              edulevel={"Primary"}
              desc={""}      
              logo={SKBB2}      
            />
          </div>
        </div>
    </div>
  )
}

export default EduPage;