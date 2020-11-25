import { Carousel, Image  } from 'antd';
import placeholder from'../Images/placeholder.png'

const contentStyle = {
    height: '460px',
    color: '#000',
    lineHeight: '160px',
    fontSize: 80,
    textAlign: 'center',
};

function LandingCarousel() {

    return(
        <Carousel 
            autoplay
            dotPosition={"top"}
        >
            <div>
            <h3 style={contentStyle}>
                <Image
                    height={460}
                    src={placeholder}
                />
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    );
}

export default LandingCarousel;