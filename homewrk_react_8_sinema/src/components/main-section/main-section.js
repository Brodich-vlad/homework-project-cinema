import Slider from '../slider/slider';
import './main-section.css';

export default function MainSection({data}) {
    return (
        <section className='main-section'>
            <Slider dataMain={data}/>
        </section>
    )
}