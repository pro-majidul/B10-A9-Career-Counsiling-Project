
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { Helmet } from 'react-helmet';

const Service = () => {

    const data = useLoaderData();
   

    return (
        <div className='grid md:grid-cols-3 gap-5'>
            <Helmet>
                <title> Our Service</title>
                <meta name="description" content="Nested component" />
            </Helmet>
            {
                data && data.map(item =><ServiceCard key={item.id} item={item}></ServiceCard>
                 )
            }
        </div>
    );
};

export default Service;