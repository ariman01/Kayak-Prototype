
 const left_nav_config = {
  capacity:{},
  bags:{},
  cartype:{},
  rentalagency:{}
}
function setCapacity(capacity, config){
  if(capacity<=2){
    config.capacity['one_to_two']=true;
  }else if(capacity<6){
    config.capacity['three_to_five']=true;
  }else{
    config.capacity['six_or_more'] = true;
  }
}

function setNoOfBags(no_of_bags,config){
  if(no_of_bags<=2){
    config.bags['one_to_two']=true;
  }else if(no_of_bags<=5){
    config.bags['three_to_five']=true;
  }
}
export  function getleftNavConfigForCar(listofcars){
  var config = left_nav_config;
  listofcars.map((car)=>{
    setCapacity(car.capacity,config);
    setNoOfBags(car.no_of_bags,config);
    config.cartype[car.car_type] = true;
    config.rentalagency[car.rental_agency]=true;
  });
  console.log("config: ",config);
  return config;
}

function includeCarWithCapacity(capacity, config ){
  //console.log("capacity",capacity, "config",config.capacity['three_to_five']);
  if(capacity>0 && capacity <=2 && config.capacity['one_to_two']) return true;
  if(capacity>2 && capacity <=5 && config.capacity['three_to_five']) return true;
  if(capacity>=6 && config.capacity['six_or_more']) return true;
  return false;
}

function includeCarWithBags(no_of_bags, config){
  //console.log("no_of_bags",no_of_bags, "config",config.bags);
  if(no_of_bags> 0 && no_of_bags <=2 && config.bags['one_to_two']) return true;
  if(no_of_bags > 2 && no_of_bags <=5 && config.bags['three_to_five']) return true;
  return false;
}

export function filterCarbasedOnLeftNavBar(listofCars, config){
  console.log("listofCars, ",listofCars,"config : !!!", config)
  var result_cars = [];
  listofCars.map((car)=>{
    if(config.rentalagency[car.rental_agency] && config.cartype[car.car_type]&& includeCarWithCapacity(car.capacity,config)&&includeCarWithBags(car.no_of_bags,config)){
      result_cars.push(car)
    }
  });
  console.log("filtered :",result_cars);
  return result_cars;
}

export function getleftNavConfigForFlight(listofflights){
  var config = {duration:20,price:1000,carriers:{}};
  listofflights.map((flight)=>{
    config.carriers[flight.carrier_name]=true;
  });
  console.log("flight config: ",config);
  return config;
}

export function filterFlightbasedOnLeftNavBar(listofflights, config){
  console.log("listofflights, ",listofflights,"config : !!!", config)
  var result_flight = [];
  listofflights.map((flight)=>{
    //console.log("config.carriers[flight.carrier]",config.carriers[flight.carrier],"flight.flight_duration <= config.duration",(flight.flight_duration <= config.duration));
    if(config.carriers[flight.carrier_name] && flight.flight_duration <= config.duration && flight.price <= config.price){
      result_flight.push(flight)
    }
  });
  console.log("flight filtered :",result_flight);
  return result_flight;
}

export function getleftNavConfigForHotel(listofhotels){
  var config = {price:1000,stars:{}};
  listofhotels.map((hotel)=>{
    config.stars[hotel.hotel_stars]=true;
  });
  console.log("hotel config: ",config);
  return config;
}

export function filterHotelbasedOnLeftNavBar(listofhotels, config){
  console.log("listofhotels, ",listofhotels,"config : !!!", config)
  var result_hotel = [];
  listofhotels.map((hotel)=>{
    if(config.stars[hotel.hotel_stars] && hotel.hotel_price <= config.price){
      result_hotel.push(hotel)
    }
  });
  console.log("hotel filtered :",result_hotel);
  return result_hotel;
}
