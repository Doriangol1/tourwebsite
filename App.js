import logo from './logo.svg';
import { Animator, ScrollContainer, ScrollPage, Sticky, Zoom, batch, Fade, MoveOut, StickyIn, FadeIn, ZoomIn, Move, MoveIn} from 'react-scroll-motion';
import './App.css';
import backvid from './images/Israel4K.mp4';
import music from './images/music.mp3';
import insta from './images/Instagram_logo_2022.png';
import facebook from './images/Facebook_logo_(2021).png';
import holdingFlag from './images/holdingFlag.jpg';



const ZoomInScrollOut = batch(StickyIn(11,12), FadeIn(), ZoomIn(), MoveIn(-200,0))
const FadeUp = batch(Fade(), Sticky(), Move())
function App() {
  return (
    <div className="layout">
      <ScrollContainer>

          <ScrollPage page = {0}>
          <div className='section-0' centered>
            <video src={backvid}  autoPlay loop muted/>
            <audio src={music} controls/>
            <Animator animation={batch(MoveIn(),Sticky(), FadeIn(), MoveOut(0, -200))}>
              <h1>Richard Benhamou  רישאר בן חמו </h1>
            </Animator>
          
            </div>
          </ScrollPage>
          
          
          <ScrollPage page = {1}>
          <div className='section-1'> 
            <Animator animation={ZoomInScrollOut}>
              
              <h1>About</h1>
            
            </Animator>
            <Animator animation={batch(Fade(), MoveIn(4000, 150), StickyIn(29,13.5))}>
              <a href='https://www.instagram.com/richardbenhamouguide/'>
                <img src={insta} alt='insta' className='insta'></img>
                </a>
            </Animator>
            <Animator animation={batch(Fade(), MoveIn(4000, 150), StickyIn(37,13.5))}>
              <a href='https://www.facebook.com/RichardBenhamouguide'>
                <img src={facebook} alt='facebook' className='facebook'></img>
                </a>
            </Animator>
            <Animator animation={batch(Fade(), MoveIn(1000,0,3000,0),StickyIn(71,60))}>
        
                <img src={holdingFlag} alt='holdingFlag' className='holdingFlag'></img>
                
            </Animator>
            </div>
          </ScrollPage>

        

          <ScrollPage page = {2}>
            <Animator animation={FadeUp}>
              <h2>fade up</h2>
            </Animator>
          </ScrollPage>

          <ScrollPage page = {3}>
            <div className='section-3'>
              <h2>
                <Animator animation={MoveIn(-1000,0)}>Hello</Animator>
                <Animator animation={MoveIn(1000,0)}>How are u</Animator>
                <Animator animation={MoveOut(1000,0)}>okay cool</Animator>
              </h2>
            </div>
          </ScrollPage>

          <ScrollPage page = {4}>
            <Animator animation={batch(Fade(), Sticky())}>
              <h2>done</h2>
            </Animator>
          </ScrollPage>
          
      </ScrollContainer>
      </div>
  );
}

export default App;
