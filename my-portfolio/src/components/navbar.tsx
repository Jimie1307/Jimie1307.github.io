interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {


  return (
    <div className='flex flex-row items-baseline-last gap-4'>
        <button>
            <p className='text-1xl'>Home</p>
        </button>
        <button>
            <p className='text-1xl'>Career</p>
        </button>
        <button>
            <p className='text-1xl'>Education</p>
        </button>
        <button>
            <p className='text-1xl'>Gallery</p>
        </button>
    </div>
  );
}

export default Navbar;