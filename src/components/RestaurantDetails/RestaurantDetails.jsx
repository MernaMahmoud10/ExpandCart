import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MediaContext } from '../../MediaContext';
import style from './RestaurantDetails.module.css';
import firstItem from '../../images/item_pizza1.jpg';
import secondItem from '../../images/item_pizza2.jpg';
import thirdItem from '../../images/item_pizza3.jpg'




const Restaurantdetails = () => {
    let arrayOfNeededRest = []
    let [restaurantNeeded, setRestaurantNeeded] = useState([]);
    let params = useParams()
    const { restaurants } = useContext(MediaContext);
    function getRestaurantDetails() {
        for (let i = 0; i < restaurants.length; i++) {
            if (restaurants[i].name == params.name) {
                arrayOfNeededRest.push(restaurants[i])

            }

        }

        setRestaurantNeeded(arrayOfNeededRest)



    }
    useEffect(() => {
        getRestaurantDetails()
    }, []);

    return (
        <>
            <div className="container">

                {restaurantNeeded.map((restaurant, index) =>
                (<>
                    <div className={`${style.restTitle} align-items-center py-4 row`} key={index}>
                        <div className="col-md-2">
                            <img className='w-100' src={restaurant.logo} />
                        </div>
                        <div className="col-md-10">
                            <h1>{restaurant.name} <span className={`${style.green} mb-4`}><i class="fa-solid fa-circle"></i>Order online</span></h1>
                            {restaurant.tags.map((tag, index) => <span key={index} className={`${style.tagSpan} `}>{`${tag.name}    `}</span>)}
                            <p className='text-muted pt-2'>{restaurant.description}</p>
                        </div>
                    </div>

                    <div className='container-fluid'>

                        <div className="row mt-5">
                            <div className="col-md-8 ">
                                {restaurant.items.map((item, index) =>

                                (<>

                                    <div className={`${style.items} mb-4 w-100 d-flex py-5`} key={index}>
                                        <div className="col-md-9 ps-3">
                                            <h2 className={`${style.itemTitle}`}>{item.name} </h2>
                                            <p className='text-muted py-2'>{item.description}</p>
                                            <h3 className={`${style.itemPrice}`}>{item.price}</h3>
                                        </div>
                                        <div className="col-md-2 me-3">
                                            <img className='w-100' src={secondItem} alt="image of item" />

                                        </div>
                                    </div>

                                </>))}
                            </div>
                            <div className='col-md-4'>
                                <div className={`${style.branches} ps-5 pt-4`}>
                                    {restaurant.branches.map((branch, index) =>

                                        <div className={`${style.branchesContent} mb-5`} key={index}>
                                            <h5 className={`${style.branch} mb-5`}>{branch.name}<i class="fa-solid fa-location-dot me-3"></i></h5>


                                        </div>)}
                                </div>
                            </div>




                        </div>
                    </div>
                </>)
                )}
            </div>

        </>
    );
}

export default Restaurantdetails;

