import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Feedback = () => {
    return (
        <div className='md:flex items-center md:h-[400px] overflow-hidden justify-between gap-10 my-5  rounded-md shadow-md bg-blue-600 p-10 '>
            <section className='md:w-1/2 mb-4'>
                <h3 className='text-3xl md:text-5xl  font-bold text-white'>Student Says <br  /> About Us..</h3>
            </section>
            <section className='md:w-1/2 '>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='md:flex space-y-5 flex-col items-satart justify-between'>
                            <p className='text-xl text-white'>The course made us a more well-rounded thinker and that we were inspired to keep learning. The course made us see how miraculous the brain is.</p>
                            <div className='md:flex  gap-2 items-center'>
                                <img className='w-20 h-20 rounded-full' src="https://www.brighton.ac.uk/images/international/Edzwan-Redza-Anwar-Cropped-487332.png" alt="" />
                                <div>
                                    <h3 className='font-medium'> Edzwan Redza Anwar from from Malaysia </h3>
                                    <p> Civil Engineering BEng(Hons)</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='md:flex space-y-5 flex-col items-satart justify-between'>
                            <p className='text-xl text-white'> I realised that Brighton was the perfect university for me was when I saw the way they treated their community. Everyone has the same chances and support to succeed at whatever they set their mind to.</p>
                            <div className='md:flex  gap-2 items-center'>
                                <img className='w-20 h-20 rounded-full' src="https://www.brighton.ac.uk/images/international/Website-refresh24/Yousra-Brighton-STUDENT-.png"  alt="" />
                                <div>
                                    <h3 className='font-medium'> Yousra Ennassih Hassani from Spain </h3>
                                    <p>International Business Management BSc(Hons)</p>
                                </div>
                            </div>
                        </div>
                      
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='md:flex space-y-5 flex-col items-satart justify-between'>
                            <p className='text-xl text-white'>I think as an international student having UK work experience is paramount. I've learned far more that I could've imagined</p>
                            <div className='md:flex  gap-2 items-center'>
                                <img className='w-20 h-20 rounded-full' src="https://www.brighton.ac.uk/images/international/Website-refresh24/MJ-Tuttle-at-Brandwatch-Cropped-487x332.jpg" alt="" />
                                <div>
                                    <h3 className='font-medium'>  MJ Tuttle from USA</h3>
                                    <p>  Marketing (Branding and Communications) MSc </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='md:flex space-y-5 flex-col items-satart justify-between'>
                            <p className='text-xl text-white'>At Brighton, there are so many opportunities to build strong relationships with people from different backgrounds. As a student coming to Brighton from another country, I also learned to be independent and adapt to new and challenging environments, which has been definitely useful in my next steps after graduating.</p>
                            <div className='md:flex  gap-2 items-center'>
                                <img className='w-20 h-20 rounded-full' src="https://www.brighton.ac.uk/images/international/Polyxeni-Tsea-Cropped-487x332.png" alt="" />
                                <div>
                                    <h3>Polyxeni Tsea from Greece</h3>
                                    <p>Pharmacy MPharm</p>
                                </div>
                            </div>
                        </div>
                       
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='md:flex space-y-5 flex-col items-satart justify-between'>
                            <p className='text-xl text-white'>I am an international student, so it was important for me to study at a university that offered VISA sponsorship. Brighton was very quick to respond and my interview with the course lead was very reassuring.</p>
                            <div className='md:flex  gap-2 items-center'>
                                <img className='w-20 h-20 rounded-full' src="https://www.brighton.ac.uk/images/international/Website-refresh24/Taofiq-Durodola-Physics-PGCE-.jpg" alt="" />
                                <div>
                                    <h3 className='font-medium'>  Taofiq Durodola from Nigeria</h3>
                                    <p> (Secondary) Physics PGCE </p>
                                </div>
                            </div>
                        </div>
                       
                    </SwiperSlide>
                   
                </Swiper>
            </section>
        </div>
    );
};

export default Feedback;