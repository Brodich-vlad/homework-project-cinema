import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';
import star from '../../image/svg/star-filled.svg';

export default function Slider({dataMain}) {

    const createCarouselItems = (data) =>{
        const Items = data.map(({name, info, image,  rating},i)=>{
            if(i < 3){
                return(
                    <Carousel.Item  className='carousel__item'>
                    <img className="d-block w-100 carousel__item-img"
                    src={image}
                    alt={name}
                    />

                   <Carousel.Caption className='carousel__info'>
                    <h2 className='carousel__info-title'>{name}</h2>
                    <p className='carousel__info-text'>{info}</p>
                        <div className='carousel__info-rating'>
                        <img src={star} alt='star' />
                        <span>{rating}</span>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                )
            }
            else return null

        })
        return Items
    }

    return (
        <Carousel fade className='carousel' indicators={false} interval={5000} controls={false}>
            {createCarouselItems(dataMain)}
        </Carousel>
    )
}