
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {

    const data = useLoaderData();
   

    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                data && data.map(item =><ServiceCard key={item.id} item={item}></ServiceCard>
                 )
            }
        </div>
    );
};

export default Service;