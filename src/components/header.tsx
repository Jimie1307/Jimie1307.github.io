import Navbar from "./navbar";

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {


  return (
    <div className={window.screen.width <= 768 ? "flex flex-col justify-items-center gap-6" : "flex flex-row justify-items-center-safe items-baseline-last gap-6"}>
        <h1 className="text-7xl text-black">JIMIE'S</h1>
        <div>
            <Navbar></Navbar>
        </div>
    </div>
  );
}

export default Header;