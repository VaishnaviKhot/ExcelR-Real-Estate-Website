import React from 'react';
import './Home.css';
import "flickity/css/flickity.css";
import { Link } from 'react-router-dom';
import PropertyFilter from '../Filter/Filter';
const Flickity = require('react-flickity-component');

const flickityOptions = {
  initialIndex: 1
}

function Home() {
 
    const cities = ["City 1", "City 2", "City 3"];
  
    const handleSearch = (filters) => {
      console.log("Search filters:", filters);
    };
  return (
    <>
    <div id='userDashboard'>
        <Link to="/dashboard">
        <button>USER DASHBOARD</button>
        </Link>
      </div>
      <div class="listing">
        <div class="item">
          <Link to='/Banglow'>
            <img src="https://cdn-icons-png.flaticon.com/128/5448/5448555.png" alt="banglow" id="iteming" />
            <p>Banglow</p>
          </Link>
        </div>
        <div class="item">
          <Link to='/Appartment'>
            <img src="https://cdn-icons-png.flaticon.com/128/1018/1018525.png" alt="apartment" id="iteming"></img>
            <p>Apartment</p>
          </Link>
        </div>
        <div class="item">
          <Link to='/Cabin'>
            <img src="https://cdn-icons-png.flaticon.com/128/6173/6173957.png" alt="cabin" id="iteming"></img>
            <p>Office Cabin</p>
          </Link>
        </div>
        <div class="item">
          <Link to='/Villas'>
            <img src="https://cdn-icons-png.flaticon.com/128/4565/4565530.png" alt="villas" id="iteming"></img>
            <p>Villas Home</p>
          </Link>
        </div>
      </div>
      

      <Flickity
        className={'carousel'}
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
        data-flickity='{ "autoPlay": true }'
      >
        <img style={{ marginLeft: 5, marginRight: 5, height: 350 }} src="https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=600" alt="img1"></img>
        <img style={{ marginLeft: 5, marginRight: 5, height: 350 }} src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img4"></img>
        <img style={{ marginLeft: 5, marginRight: 5, height: 350 }} src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img3"></img>
        <img style={{ marginLeft: 5, marginRight: 5, height: 350 }} src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img4"></img>
        <img style={{ marginLeft: 5, marginRight: 5, height: 350 }} src="https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img4"></img>
        <img style={{ marginLeft: 5, marginRight: 5, height: 350 }} src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img4"></img>
        <img style={{ marginLeft: 5, marginRight: 5, height: 350 }} src="https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img4"></img>
        <img style={{ marginLeft: 5, marginRight: 5, height: 350 }} src="https://images.pexels.com/photos/8293694/pexels-photo-8293694.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img4"></img>
        <img style={{ marginLeft: 5, marginRight: 5, height: 350 }} src="https://images.pexels.com/photos/2443590/pexels-photo-2443590.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img2"></img>
        {/* <img style={{ marginLeft: 5, marginRight: 5 }} src={bestwishesimg} alt='bestwishes'></img> */}
      </Flickity>

      <PropertyFilter cities={cities} onSearch={handleSearch} />
    </>

  )
}

export default Home