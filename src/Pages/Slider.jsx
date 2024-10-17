import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Slider() {
    return (
        <div className='h-[600px] mt-2'>
            <Carousel>
                <Carousel.Item>
                    {/* <div className='imageSlider'></div> */}
                    <img className='h-[600px] w-[30%] rounded-xl ml-4' src={'https://imgs7.luluandsky.com/catalog/product/8/9/898907884623054-_1_.JPG'} alt="" />


                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='h-[600px] w-[30%] rounded-xl ml-4' src={'https://imgs7.luluandsky.com/catalog/product/8/9/898907884623054-_1_.JPG'} alt="" />



                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='h-[600px] w-[30%] rounded-xl ml-4' src={'https://cdn.cartpe.in/images/gallery_md/65434ae7b62a2.jpeg'} alt="" />

                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default Slider
