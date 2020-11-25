import { Carousel, Image  } from 'antd';
import placeholder_0 from'../Images/placeholder-0.png'
import placeholder_1 from'../Images/placeholder-1.jpg'
import placeholder_2 from'../Images/placeholder-2.jpg'
import placeholder_3 from'../Images/placeholder-3.png'
import placeholder_4 from'../Images/placeholder-4.png'

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
                    src={placeholder_0}
                />
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}>
                <Image
                    src={placeholder_1}
                />
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}>
                <Image
                    src={placeholder_2}
                />
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}>
                <Image
                    width={500}
                    height={460}
                    src={placeholder_3}
                />
            </h3>
            </div>
            <div>
            <h3 style={contentStyle}>
                <Image
                    width={500}
                    height={460}
                    src={placeholder_4}
                />
            </h3>
            </div>
        </Carousel>
    );
}

export default LandingCarousel;