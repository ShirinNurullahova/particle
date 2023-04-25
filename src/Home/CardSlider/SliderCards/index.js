import '../../../assets/scss/SliderCards.scss';
import sunsetImg from '../../../assets/images/sunset.png';
import backImg from '../../../assets/images/subtract.png';
import sliderCardData from './slider-card-data.json';
import Particle from '../../../Particle';
const SliderCards = () => {
    return (
        <>
        <div className='slider-cards'>
            <div className='slider-cards__image'>
                <img className='back-img-slider' src={backImg} alt="" />
                <img className='front-img-slider' src={sunsetImg} alt="" />
            </div>
            <div className='slider-cards__content'>
                <p className='slider-cards__content__desc'>
                    “She could feel the beautiful view before ever seeing it. A sunset
                    that all beach lovers strive to catch at least once in a lifetime.”
                </p>
                <h3 className='slider-cards__content__title'>The Dreamriders - Chapter 1</h3>
            </div>
        </div>
        
        
        </>
    )
}

export default SliderCards;