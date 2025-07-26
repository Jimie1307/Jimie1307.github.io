interface LandingProps {
}

const LandingPage: React.FC<LandingProps> = () => {

  return (
    <div id="landing" className="flex flex-col">
        {/* formal intro */}
        <div className='flex flex-row m-12 gap-4 pb-5'>
            <div className='walnut-brown-bg text-upright'>
                <p className="side-text-bar text-sm font-semibold">FORMAL INTRODUCTION</p>
            </div>
            <div className="walnut-brown-bg p-[1.675px] rounded-[2px]"></div>
            <div className="w-3/5">
                <h3 className="text-xl font-semibold mb-4">HELLO!（ΦωΦ）</h3>
                <p className='m-4 text-base/8'>
                    Welcome to my webpage! <br/>
                    I am a Software Developer, mainly frontends but sometimes....just <i>sometimes</i> do backend stuff as well (but more to APIs than database).<br/>
                    Involved in mobile development as well; hybrid apps (angular+ionic, cordova+electron+sapui5) and native (Swift).<br/>
                    Now though, I do automation stuff. Still new so can only bravely mention Automic as my new skillset, for now.<br/><br/> 
                    It's all over the place, you say? I know. That's the beauty of working in corporate, I guess? ¯\_( ◉ 3 ◉ )_/¯ <br/><br/>
                    Feel free to explore this page! Still barebones though as it's a WIP! (not optimised for mobile)
                </p>
            </div>
        </div>
        {/* whatever intro */}
        <div className='flex flex-row m-12 gap-4 pb-5'>
            <div className='walnut-brown-bg text-upright'>
                <p className="side-text-bar text-sm font-semibold">YOU CAN KNOW ME A BIT</p>
            </div>
            <div className="walnut-brown-bg p-[1.675px] rounded-[2px]"></div>
            <div className="w-3/5">
                <h3 className="text-xl font-semibold mb-4">INTERESTS!¯\_(͠≖ ͜ʖ͠≖)_/¯</h3>
                <div className='m-4'>
                    <h3 className="text-l font-semibold">🎵MUSIC</h3>
                    <p className='m-4 mt-0 text-base/8'>
                        Primarily listen to English and Korean songs.
                        Genres could vary since music nowadays mostly are fusions of different genres but most that I like has RnB, HipHop, and Pop mixed in them.<br/>
                        Some musicians I like currently: Sleep Token, BTS, TXT (Tubatu), Amaarae.<br/>
                        <p className='font-medium'>🔁On-repeat</p>
                        <iframe 
                        width="320" height="100" 
                        src="https://www.youtube.com/embed/dHGnpeA6rI0?si=j17FpO0NKZxJ1T5I" 
                        title="Ghost girl" frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe> 
                    </p>
                </div>
                <div className='m-4'>
                    <h3 className="text-l font-semibold">🕹️GAMES</h3>
                    <p className='m-4 mt-0 text-base/8'>
                        Play mostly RPGs. Not a big fan of multiplayer games (especially competitive) but I do play gacha from time-to-time (mihoyo mostly)!<br/>
                        <p className='font-medium'>Some of my favorite games! (ΦзΦ) ❤️  </p>
                        <div className='flex flex-row gap-6'>
                            <div className="tooltip tooltip-bottom"  data-tip="Baldurs Gate 3">
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://static.wikia.nocookie.net/forgottenrealms/images/1/1a/BG3_logo_1.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="tooltip tooltip-bottom"  data-tip="Citizen Sleeper (1 and 2)">
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://i.pinimg.com/474x/e6/d1/6e/e6d16e6b96319be1a0cf5fd5345abb5e.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="tooltip tooltip-bottom"  data-tip="All Mass Effect series">
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://media.contentapi.ea.com/content/dam/eacom/mass-effect-legendary-edition/common/n7-tile-01.jpg.adapt.crop191x100.628p.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="tooltip tooltip-bottom"  data-tip="Cyberpunk 2077">
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/158/posts/40080/final_image/CyberpunkLogo0.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="tooltip tooltip-bottom"  data-tip="Death Stranding">
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://i.redd.it/b1ufrrsvjx6z.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="tooltip tooltip-bottom"  data-tip="Final Fantasy 7">
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://logos-world.net/wp-content/uploads/2023/12/Final-Fantasy-7-Symbol.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="tooltip tooltip-bottom"  data-tip="Stardew Valley">
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9srtUax5Q-suX0GQNyTcz4sCIPS79jw3keA&s" />
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </p>
                </div>
                <div className='m-4'>
                    <h3 className="text-l font-semibold">❓❓OTHER STUFF</h3>
                    <p className='m-4 mt-0 text-base/8'>
                        You have to know and befriend me first :D I think there is more than enough info here for you to strike a convo with me for the first time right?
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;