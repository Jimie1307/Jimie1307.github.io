interface BannerProps {

}

const Banner: React.FC<BannerProps> = () => {


  return (
    <div className='h-10 light-coral-bg font-bold rounded-(inherit)'>
        <p className="ml-6">This website is under development. It is ugly on mobile. It is not complete yet. Don't judge!</p>
    </div>
  );
}

export default Banner;