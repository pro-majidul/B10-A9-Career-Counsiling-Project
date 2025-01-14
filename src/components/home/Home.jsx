import React from 'react';
import Banner from '../banner/Banner';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../page/service/ServiceCard';
import { Helmet } from 'react-helmet';
import Feedback from '../feedback/Feedback';
import Event from '../events/Event';

const Home = () => {
    const items = useLoaderData();
    const data = items.slice(0, 6)
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            <Banner></Banner>
            <h3 className='md:text-3xl text-xl my-5 py-5 font-bold underline underline-offset-8 uppercase'>Our Services</h3>
            <section className='grid md:grid-cols-3 gap-10 my-10 py-5'>

                {
                    data && data.map(item => <ServiceCard key={item.id} item={item}></ServiceCard>
                    )
                }

            </section>
            <div className='w-32 mx-auto md:my-5 md:py-5'>
                <Link to='/service'> <button className='btn md:btn-md btn-sm btn-accent '>Show ALL</button></Link>
            </div>
            <section className='md:my-5 md:py-5'>
                <Event></Event>
            </section>

            <section className='md:my-5 md:py-5'>
                <Feedback></Feedback>
            </section>
        </div>
    );
};

export default Home;