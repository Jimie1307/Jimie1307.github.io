import InstaLogo from '../assets/instagram.png';
import GithubLogo from '../assets/github.png';
import LinkedInLogo from '../assets/linkedin.png';
import GmailLogo from '../assets/gmail.png';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {


  return (
    <div className='mt-6 pt-16 walnut-brown-bg'>
        <div className='m-4 flex flex-col gap-6'>
            <div className='text-white'>
                <p className='text-sm'>This website serves as a portfolio, but thinking of making it more personal.
                    <br></br>
                    Designed and developed, by yours truly! Keeping it simple.
                </p>
            </div>
            {/* Might have to change these icons to suit the aesthetic */}
            <div className='flex gap-4'>
                <button>
                    <img src={InstaLogo}></img>
                </button>
                <button>
                    <img src={GithubLogo}></img>
                </button>
                <button>
                    <img src={LinkedInLogo}></img>
                </button>
                <button>
                    <img src={GmailLogo}></img>
                </button>
            </div>
        </div>
    </div>
  );
}

export default Footer;