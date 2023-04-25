import '../../../assets/scss/Welcome.scss';
import childImgBackground from '../../../assets/images/subtract.png';
import childImg from '../../../assets/images/child.png';

const Welcome = () => {
    return (
        <div className='welcome'>
            <h1 className='welcome__header'>WELCOME TO THE INSPIRATION STATION !</h1>
            <div className='welcome__card'>
                <div className='welcome__card__image'>
                    <img className='back-img' src={childImgBackground} alt="" />
                    <img className='front-img' src={childImg} alt="" />
                </div>
                <div className='welcome__card__content'>
                    <h1 className='welcome__card__content__title'>
                        WHEN IS THE LAST TIME <br/>
                        YOU READ AN EXCEPTIONAL STORY ?
                    </h1>
                    <p className='welcome__card__content__desc'>
                        One you could not put down until you had finished it, and wanted to
                        read again the moment you did? This was the goal of this five-year
                        project: To create the best inspirational fiction story possible! This
                        unforgettable story of kindness and hope, with a side of silly humor, is
                        fun for the entire family and makes a great gift!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome;