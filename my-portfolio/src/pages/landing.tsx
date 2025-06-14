import ImgCarousel from '../components/img-carousel';
import WorkIcon from '../assets/icons8-work-50.png';
import LocationIcon from '../assets/icons8-location-50.png';
import CareerGoalIcon from '../assets/icons8-career-50.png';

interface LandingProps {
}

const LandingPage: React.FC<LandingProps> = () => {

  return (
    <div id="landing" className="flex flex-col">
        <div className='flex flex-row justify-between m-12 gap-4 pb-5'>
            <div className="p-4 rounded-md w-3/5">
                <h2 className='text-xl font-bold mb-3'>Formal Introduction.</h2>
                <p className='text-base/8'>
                    Welcome to my humble web portfolio! <br/>
                    I am a Web Developer, but also involved in Mobile Development as well. <br/>
                    How you may ask? <br/>
                    Well, that's the beauty of working in corporate sometimes, I guess.
                    In my case, I signed up for web development but ended up being involved in other stuff as well 🙂<br/>
                    You can view the technologies I have touched or currently learning under Career section!
                </p>
            </div>
            <div className="p-4 rounded-md w-2/5 gap-4">
                <h2 className='text-xl font-bold mb-3'>Other info.</h2>
                <div className='flex flex-row gap-4'>
                    {/* <img className='h-full' src={WorkIcon}></img> */}
                    <p className='text-base/8'>
                        I prefer hybrid work. Full remote work is a dream though!
                    </p>
                </div>
                <br/>
                <div className='flex flex-row gap-4'>
                    {/* <img className='h-full' src={LocationIcon}></img> */}
                    <p className='text-base/8'>
                        Born and raised in Malacca, Malaysia. Currently residing here as well.<br/> 
                        No plans on moving elsewhere but who knows?
                    </p>
                </div>
                <br/>
                <div className='flex flex-row gap-4'>
                    {/* <img className='h-full' src={CareerGoalIcon}></img> */}
                    <p className='text-base/8'>
                        Web and mobile development for more than 2 years. Now, I am in an automation team. <br/>
                        Anxious for my future, but isn't life just unpredictable at times?
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;