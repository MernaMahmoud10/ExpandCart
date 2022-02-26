import React, { useContext } from 'react';
import style from './Home.module.css';
import { Link } from 'react-router-dom';
import { MediaContext } from '../../MediaContext';

export default function Home() {
    const { restaurants, restAfterSearch, searchByTag, searchProduct } = useContext(MediaContext);

    let iteratedTags = [];
    let uniquetags = [];

    //get unique tags of the restaurants
    function getTagsUniques() {
        if (restaurants) {
            restaurants.map((restaurant, index) => {
                restaurant.tags.map((tag) => {
                    iteratedTags.push(tag);
                    uniquetags = [...new Set(iteratedTags.map(a => JSON.stringify(a)))].map(a => JSON.parse(a))
                    // console.log(uniquetags)
                }
                )
            }

            )
            return uniquetags
        }
    }


    return (
        <>
            {/* search input */}
            <section className={`${style.searchSection}`}>
                
                <div className={style.topDiv}>
                <h1 >Discover & Order the food you love.</h1>
                    <div className="container w-50 py-5">
                        <input placeholder="search by restaurant name" id="search" onKeyUp={searchProduct} className={`form-control ${style.searchInp}`} htmlFor='search' />
                    </div>
                </div>
            </section>

            {/* slider of the tags */}
            <div className="container">
                <div id="carouselExampleIndicators" className={`carousel ${style.slide} py-5`} data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className=" bg-dark" aria-label="Slide 2"></button>
                    </div>
                    {/* <!--/.Controls--> */}
                    <div className="carousel-inner">

                        <div className="carousel-item active" role="listbox">

                            {/* <!--First slide--> */}
                            <div className='row'>
                                {getTagsUniques().slice(0, 3).map((myTag, index) => (
                                    <div className={`col-md-4 text-center py-5 ${style.card}`} key={index} style={{ float: "left" }} >
                                        <div className='imageDiv h-75'>
                                            <img src={myTag.image} className="w-75 h-100 rounded" />
                                        </div>
                                        <h3 className={`${style.tagTitle} py-4`} onClick={searchByTag}>{myTag.name}</h3>
                                    </div>))
                                }
                            </div>
                        </div>
                        {/* <!--/.First slide--> */}

                        {/* <!--Second slide--> */}
                        <div className="carousel-item">
                            <div className='row'>
                                {getTagsUniques().slice(3, 6).map((myTag, index) => (
                                    <div className={`col-md-4 text-center py-5 ${style.card}`} key={index} style={{ float: "left" }}  >
                                        <div className='imageDiv h-75'>
                                            <img src={myTag.image} className="w-75 h-100 rounded" />
                                        </div>
                                        <h3 className={`${style.tagTitle} py-4`} onClick={searchByTag}>{myTag.name}</h3>
                                    </div>))
                                }
                            </div>
                        </div>
                    </div>
                    {/* <!--/.Second slide--> */}
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden text-dark">Next</span>
                    </button>
                    {/* <!--Indicators--> */}
                </div>
                {/* <!--/.Slides--> */}

                {/* restaurant List */}
                <section >
                    <h1 className={`${style.restTitle} mt-5 `}>Restaurants</h1>



                    {restAfterSearch.map((restaurant, index) => (
                        <>
                            <div className={`${style.restaurant} mb-4 py-3`} key={index}>
                                <Link to={`/restaurantdetails/${restaurant.name}`} className={`${style.nonDecoration}`}>
                                    <div className="row align-items-center h-100">
                                        <div className=' col-md-2 h-75 ms-5'>
                                            <img className="w-75 h-100" src={restaurant.logo} />
                                        </div>
                                        <div className={`${style.nonDecoration} col-md-7 pe-1`}>
                                            <h2 className='ps-3'>{restaurant.name}</h2>
                                            <p className='ps-3'>{restaurant.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                        </>))}


                </section>

            </div>
        </>
    )
}
