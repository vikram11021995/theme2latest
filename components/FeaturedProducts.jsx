import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import PopularOffersoftheDayCard from "../components/PopularOffersoftheDayCard";
import Grid from "./AC-UI-Elements/Grid/Grid";
import styled from "styled-components";

import { toggleWishListAction } from "../redux/actions/wishlistActions";
import { Tabs, TabItem } from "./uiElements/Tabs";

// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';


function PopularOffersoftheDay({ shopby }) {
  console.log("shopbyshopby", shopby);
  const dispatch = useDispatch();

  const isMobileState = useSelector(
    state => state.mainReducer.isMobile,
    shallowEqual
  );

  const userLocationState = useSelector(
    state => state.userLocationReducer,
    shallowEqual
  );

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1600 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1600, min: 1360 },
      items: 4
    },
    mdDesktop: {
      breakpoint: { max: 1360, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 520 },
      items: 2
    },
    xsMobile: {
      breakpoint: { max: 520, min: 0 },
      items: 2
    }
  };

  const wishListState = useSelector(
    state => state.wishListReducer.wishlist,
    shallowEqual
  );

  const toggleWish = (e, id, title, desc, currency_sign, image, price, url) => {
    e.preventDefault();
    dispatch(
      toggleWishListAction(
        id,
        title,
        desc,
        currency_sign,
        image,
        price,
        url,
        wishListState
      )
    );
  };

  const renderPlaceholderCards = () => {
    return (
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={isMobileState ? false : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["mobile", "xsMobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {Array(4)
          .fill(0, 0, 4)
          .map((v, i) => (
            <Grid key={i} item className="item-card-item" xs={12}>
              <div
                className="placeholder-item-card-wrapper"
                style={{ boxShadow: "0px 0px 1px 0px #c8c8c8" }}
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    height: "400px"
                  }}
                ></div>
                <div>
                  <div
                    style={{
                      backgroundColor: "#f5f5f5",
                      height: "40px"
                    }}
                  ></div>
                </div>
              </div>
            </Grid>
          ))}
      </Carousel>
    );
  };
  console.info("wwww", shopby?.[1]?.items);
  return (
    <div className="popularowl">
      <div className="browseCat-container">
        {/* <div className="mainpopular"> */}
        {/* <button><Link href={`/shop/shop-by/`}><a>View More <MdKeyboardArrowRight /></a></Link></button> */}
        {/* </div> */}












        <div className="products-featured">
          <div className="hr-lines">Best in Store Name</div>
          <div className="prev-nexticons">
            <a href="#" className="previous9 previous8">
              &#8249;

            </a>
            <a href="#" className="next9 previous8">
              &#8250;
            </a>
          </div>
        </div>

        {/* <div className="container">
          <div className="tabs effect-1">
            <input
              type="radio"
              id="tab-1"
              name="tab-effect-1"
              checked="checked"
            />
            <span>New Arrivals</span>

            <input type="radio" id="tab-2" name="tab-effect-1" />
            <span>Best Selling Earpods</span>

            <input type="radio" id="tab-3" name="tab-effect-1" />
            <span>Smart Watches</span>

            <input type="radio" id="tab-4" name="tab-effect-1" />
            <span>Trending Wireless</span>

            <input type="radio" id="tab-5" name="tab-effect-1" />
            <span>Headphones</span>

            <div className="tab-content">
             
            </div>
          </div>
        </div> */}


<Tabs defaultIndex="1" onTabClick={console.log}>
    <TabItem label="New Arrivals" index="1">
    <div>
    {console.log("shopby", shopby)}
        {shopby && shopby?.[1]?.items?.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={20000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {console.log("eee", shopby.items)}
            {shopby &&
              shopby?.[1]?.items?.map(item => (
                <div key={item.id} className="owl-item popularProducts">
                  <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                </div>
              ))}
          </Carousel>
        ) : (
          renderPlaceholderCards()
        )}
        </div>
    </TabItem>
    <TabItem label="Best Selling Earpods" index="2">
    {console.log("shopby", shopby)}
        {shopby && shopby?.[1]?.items?.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={20000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {console.log("eee", shopby.items)}
            {shopby &&
              shopby?.[1]?.items?.map(item => (
                <div key={item.id} className="owl-item popularProducts">
                  <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                </div>
              ))}
          </Carousel>
        ) : (
          renderPlaceholderCards()
        )}
    </TabItem>
    <TabItem label="Smart Watches" index="3">
      
    {console.log("shopby", shopby)}
        {shopby && shopby?.[1]?.items?.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={20000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {console.log("eee", shopby.items)}
            {shopby &&
              shopby?.[1]?.items?.map(item => (
                <div key={item.id} className="owl-item popularProducts">
                  <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                </div>
              ))}
          </Carousel>
        ) : (
          renderPlaceholderCards()
        )}

    </TabItem>
    <TabItem label="Trending Wireless" index="4">
      
    {console.log("shopby", shopby)}
        {shopby && shopby?.[1]?.items?.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={20000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {console.log("eee", shopby.items)}
            {shopby &&
              shopby?.[1]?.items?.map(item => (
                <div key={item.id} className="owl-item popularProducts">
                  <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                </div>
              ))}
          </Carousel>
        ) : (
          renderPlaceholderCards()
        )}
    </TabItem>
    <TabItem label="Headphones" index="5">
      
    {console.log("shopby", shopby)}
        {shopby && shopby?.[1]?.items?.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={20000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {console.log("eee", shopby.items)}
            {shopby &&
              shopby?.[1]?.items?.map(item => (
                <div key={item.id} className="owl-item popularProducts">
                  <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                </div>
              ))}
          </Carousel>
        ) : (
          renderPlaceholderCards()
        )}
    </TabItem>
  </Tabs>

  {/* {console.log("shopby", shopby)}
        {shopby && shopby?.[1]?.items?.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={20000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {console.log("eee", shopby.items)}
            {shopby &&
              shopby?.[1]?.items?.map(item => (
                <div key={item.id} className="owl-item popularProducts">
                  <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                </div>
              ))}
          </Carousel>
        ) : (
          renderPlaceholderCards()
        )} */}


        {/* <div className="tabs">
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab1"
            checked
          />
          <label htmlFor="tab1" className="tabs__label tabs__labels">
          New Arrivals
          </label>
          <div className="tabs__content">
          {console.log("shopby", shopby)}
        {shopby && shopby?.[1]?.items?.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={20000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {console.log("eee", shopby.items)}
            {shopby &&
              shopby?.[1]?.items?.map(item => (
                <div key={item.id} className="owl-item popularProducts">
                  <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                </div>
              ))}
          </Carousel>
        ) : (
          renderPlaceholderCards()
        )}
          </div>
          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab2"
          />
          <label htmlFor="tab2" className="tabs__label tabs__labels">
          Best Selling Earpods
          </label>
          <div className="tabs__content">
            

          {console.log("shopby", shopby)}
        {shopby && shopby?.[1]?.items?.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={20000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {console.log("eee", shopby.items)}
            {shopby &&
              shopby?.[1]?.items?.map(item => (
                <div key={item.id} className="owl-item popularProducts">
                  <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                </div>
              ))}
          </Carousel>
        ) : (
          renderPlaceholderCards()
        )}
          </div>

          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab3"
          />
          <label htmlFor="tab3" className="tabs__label tabs__labels">
          Smart Watches
          </label>
          <div className="tabs__content">Reviews 3</div>

          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab4"
          />
          <label htmlFor="tab4" className="tabs__label tabs__labels">
          Trending Wireless
          </label>
          <div className="tabs__content">Other-content 1</div>

          <input
            type="radio"
            className="tabs__radio"
            name="tabs-example"
            id="tab5"
          />
          <label htmlFor="tab5" className="tabs__label tabs__labels">
          Headphones
          </label>
          <div className="tabs__content">Comments1</div>
        </div> */}





        

        {/* <div class="tabsH effect-1">
			<input type="radio" id="tab-01" name="tab-effect-1" checked="checked"/>
			<span>New Arrivals</span>

			<input type="radio" id="tab-02" name="tab-effect-1"/>
			<span>Best Selling Earpods</span>

			<input type="radio" id="tab-03" name="tab-effect-1"/>
			<span>Smart Watches</span>

			<input type="radio" id="tab-04" name="tab-effect-1"/>
			<span>Trending Wireless</span>
			
			<input type="radio" id="tab-05" name="tab-effect-1"/>
			<span>Headphones</span>

			<div class="tab-content">
				<section id="tab-item-1">

          {console.log("shopby", shopby)}
        {shopby && shopby?.[1]?.items?.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={20000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {console.log("eee", shopby.items)}
            {shopby &&
              shopby?.[1]?.items?.map(item => (
                <div key={item.id} className="owl-item popularProducts">
                  <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                </div>
              ))}
          </Carousel>
        ) : (
          renderPlaceholderCards()
        )}

				</section>
				<section id="tab-item-2">
					
        {console.log("shopby", shopby)}
        {shopby && shopby?.[1]?.items?.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={20000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {console.log("eee", shopby.items)}
            {shopby &&
              shopby?.[1]?.items?.map(item => (
                <div key={item.id} className="owl-item popularProducts">
                  <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                </div>
              ))}
          </Carousel>
        ) : (
          renderPlaceholderCards()
        )}
				</section>
				<section id="tab-item-3">
					
        {console.log("shopby", shopby)}
        {shopby && shopby?.[1]?.items?.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={20000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {console.log("eee", shopby.items)}
            {shopby &&
              shopby?.[1]?.items?.map(item => (
                <div key={item.id} className="owl-item popularProducts">
                  <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                </div>
              ))}
          </Carousel>
        ) : (
          renderPlaceholderCards()
        )}
				</section>
				<section id="tab-item-4">
					
        {console.log("shopby", shopby)}
        {shopby && shopby?.[1]?.items?.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={20000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {console.log("eee", shopby.items)}
            {shopby &&
              shopby?.[1]?.items?.map(item => (
                <div key={item.id} className="owl-item popularProducts">
                  <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                </div>
              ))}
          </Carousel>
        ) : (
          renderPlaceholderCards()
        )}
				</section>
				<section id="tab-item-5">

          {console.log("shopby", shopby)}
        {shopby && shopby?.[1]?.items?.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} 
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={20000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {console.log("eee", shopby.items)}
            {shopby &&
              shopby?.[1]?.items?.map(item => (
                <div key={item.id} className="owl-item popularProducts">
                  <PopularOffersoftheDayCard key={item.id} itemCard={item} />
                </div>
              ))}
          </Carousel>
        ) : (
          renderPlaceholderCards()
        )}
				</section>
			</div>
		</div> */}







      </div>
    </div>
  );
}

export default PopularOffersoftheDay;
