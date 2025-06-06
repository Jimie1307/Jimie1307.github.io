import Navbar from "./navbar";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {


  return (
    <div className="bg-white mb-16 mr-16 ml-16 flex flex-row justify-items-center-safe items-baseline-last gap-6">
        <h1 className="text-7xl">JIMIE'S</h1>
        <div>
            <Navbar></Navbar>
        </div>
    </div>
  );
}

export default Header;