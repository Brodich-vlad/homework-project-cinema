import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './slider.css';
import star from '../../image/svg/star-filled.svg';
import { createKey } from '../../methods/create_key';
import { randomObjects } from '../../methods/random-objects';

export default function Slider({dataMain, callbackLocation}) {
    const createCarouselItems = (data) =>{
        const Items = data.map(({id,name, info, image,category, rating, backdrop},i)=>{
            return(
                <Carousel.Item key={createKey(i)}  onClick={()=>{
                    callbackLocation(category,id)
                }} className='carousel__item'>
                    <img className="d-block w-100 carousel__item-img"
                    src={backdrop}
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
        })
        return Items
    }

    return (
        <Carousel fade className='carousel' indicators={false} interval={5000} controls={false}>
            {createCarouselItems(randomObjects(dataMain))}
        </Carousel>
    )
}