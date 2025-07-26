import { Link } from "react-router-dom"

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className='navbar'>
        <Link to="/" className="btn btn-link text-black no-underline">
          <p className="text-lg">Home</p>
        </Link>
        <Link to="/career" className="btn btn-link text-black no-underline">
          <p className="text-lg">Career</p>
        </Link>
        <Link to="/edu" className="btn btn-link text-black no-underline">
          <p className="text-lg">Education</p>
        </Link>
        {/* <Link to="/gallery" className="btn btn-link text-black no-underline">
          <p className="text-lg">Gallery</p>
        </Link> */}
    </div>
  );
}

export default Navbar;