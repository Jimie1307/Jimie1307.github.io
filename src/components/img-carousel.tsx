import LYSMovie from '../assets/personal_photos/selfie/IMG_2941.JPEG';
import InternHonda from '../assets/personal_photos/internship/IMG_3706.JPEG';
import HatyaiMuseum from '../assets/personal_photos/hatyai/IMG_0205.JPG';
import GradFormal from '../assets/personal_photos/grad/IMG_7818.JPG';
import GradSelfie3 from '../assets/personal_photos/grad/grad_friend3.jpg';
import ChoiPanjatPokok from '../assets/personal_photos/cats/IMG_2358.JPEG';
import Poppy from '../assets/personal_photos/cats/IMG_0091.JPEG';
import WhitePng from '../assets/white_bg.jpg';
import YeeSang from '../assets/personal_photos/random/IMG_8105.JPEG';
import DoubleRainbow from '../assets/personal_photos/random/IMG_0330.JPEG';

import { useEffect, useState } from 'react';

interface ImgCarouselProps {

}

const ImgCarousel: React.FC<ImgCarouselProps> = () => {

    const [index, setIndex] = useState(0);

    const imgRotation = [
        GradFormal,
        GradSelfie3,
        WhitePng,
        InternHonda,
        HatyaiMuseum,
        WhitePng,
        ChoiPanjatPokok,
        LYSMovie,
        Poppy,
        WhitePng,
        YeeSang,
        DoubleRainbow,
    ];

    const imgRotationDesc = [
        'Formal picture of my graduation.',
        'Me with my friend during graduation convo.',
        'Me in front of Honda factory in Alor Gajah, Malacca. This is where I did my internship.',
        'Me at the Folklore Museum Songkhla. My suggested spot was considered!',
        'Our first and oldest cat (mother, grandma, great grandma..to many of our cats), Choi, climbing a tree.',
        'Took a picture in front of the BTS Love Yourself Tour banner.',
        'My cat, Poppy!',
    ];

    // store timeoutID in ref, initialy it's null
    var timeoutID: any = null;

    useEffect(()=>{
        timeoutID = setInterval(()=>{
            setIndex((currentIndex) => currentIndex == imgRotation.length-1 ? 0 : currentIndex+1)
        }, 10000)

        // clear interval if component unmounts before value reaches 100
        return () => clearTimeout(timeoutID);
    }, [index]);
    
    return (
        <div className='m-16 grid grid-flow-col grid-rows-2 grid-col-4 gap-1'>
            {(imgRotation && imgRotation.length > 0) &&
                imgRotation.map((index) =>
                <img className='max-w-full max-h-full' src={imgRotation[index]} alt={imgRotationDesc[index]}></img>
            )}
        </div>
    );
}

export default ImgCarousel;