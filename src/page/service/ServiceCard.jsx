import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({ item }) => {
    AOS.init();
    return (
        <div data-aos="zoom-in" className="card bg-base-100  shadow-xl">
            <figure>
                <img
                    src={item.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.serviceName}</h2>
                <h2 className="card-title">Category : {item.category}</h2>
                <h2 className="card-title">Price : {item.price}</h2>
                <h2 className="card-title">Counselor : {item.counselor}</h2>

                <div className="card-actions justify-end">
                    <Link to={`/details/${item.id}`}>
                        <button className="btn md:btn-md btn-sm btn-primary">Learn More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;