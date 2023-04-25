import '../../../assets/scss/SliderDots.scss';
import vectorImg from '../../../assets/images/vector.png';

const SliderDots = () => {
    return (
        <>
        <div className='slider-dots'>
            <div className='slider-dots__items'>
                <div className='dot-item'></div>
                <div className='dot-item'></div>
                <div className='dot-item'></div>
                <div className='dot-item'></div>
                <div className='dot-item'></div>
                <div className='dot-item'></div>
                <div className='dot-item'></div>
            </div>
            <div className='slider-dots__control'>
                <img className='back-btn' src={vectorImg} alt="" />
                <img className='next-btn' src={vectorImg} alt="" />
            </div>
        </div>
    
        
        </>
    )
}

export default SliderDots;