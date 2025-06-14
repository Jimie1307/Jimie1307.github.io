import { Link } from "react-router-dom"

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {

  const handlePageNav = async (e: number) => {
    console.log("btn navbar is clicked!")
    console.log(e)

  }

  return (
    <div className='navbar'>
        <Link to="/" className="btn btn-link text-black no-underline">
          <p className="text-1xl">Home</p>
        </Link>
        <Link to="/career" className="btn btn-link text-black no-underline">
          <p className="text-1xl">Career</p>
        </Link>
        <Link to="/edu" className="btn btn-link text-black no-underline">
          <p className="text-1xl">Education</p>
        </Link>
        <Link to="/gallery" className="btn btn-link text-black no-underline">
          <p className="text-1xl">Gallery</p>
        </Link>
    </div>
  );
}

export default Navbar;