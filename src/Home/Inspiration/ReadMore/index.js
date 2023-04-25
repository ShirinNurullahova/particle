import '../../../assets/scss/ReadMore.scss';
import vectorimg from '../../../assets/images/vector.png'

const ReadMore = () => {
    return (
        <div className='read-more'>
            <p className='read-more__description'>
                "It is such a beautiful morning here on the ocean. <br/>
                Do you have time to spare? <br/>
                It's so lovely to be, upon the blue sea... <br/>
                Will you come sailing with me?
            </p>
            <h2 className='read-more__title'>READ MORE</h2>
            <img src={vectorimg} alt="" />

        </div>
        
    )
}

export default ReadMore;