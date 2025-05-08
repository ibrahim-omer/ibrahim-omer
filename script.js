
function display(){
document.getElementById("demo").innerHTML = "hooray"

}

function turn_on(){
document.getElementById("myImage").src="images/pic_bulbon_on.gif";
document.getElementById("dropdown_container").style= "display:show";

// changing element's style 1..
// document.getElementById("on_btn").style= "background-color:blue";

// changing element's style 2..
// document.getElementById("on_btn").style.backgroundColor = "blue";

// hidding elements..
// document.getElementById("on_btn").style = "display:none";


}

function turn_off(){
    document.getElementById("myImage").src = "images/pic_bulboff.gif";
    document.getElementById("dropdown_container").style= "display:none";

}

// car function for displaying the selected car's details
function car(){
    const cars_array = {
        BMW:{
            name: "BMW M3 Competition",
            origin: "Germany",
            model_year: "2021",
            acceleration: "22.99"
        },
        AMG:{
            name: "Mercedes-AMG C63 S",
            origin: "Germany",
            model_year: "2020",
            acceleration: "24.76"
        },
        AUDI:{
            name: "Audi RS5 Sportback",
            origin: "Germany",
            model_year: "2022",
            acceleration: "23.55"
        },
        RANGE:{
            name: "Range Rover Sport P530",
            origin: "UK",
            model_year: "2023",
            acceleration: "18.93"
        }
    };

 const car = document.getElementById("car_options").value;
const  car_table= document.getElementById("car_details");
const car_image = document.getElementById("car_images");
// if( car !=="nothing") {

    // looping through the object to extract the other details by using car's name 
    let car_name,car_origin, car_model_year,car_acceleration;
    for (let [key,value] of Object.entries(cars_array)){
        if (key == car){
            car_name= value.name;
            car_origin = value.origin;
            car_model_year= value.model_year;
            car_acceleration = value.acceleration;
        }
    }

    car_image.src = `car_images/${car}.jpg`
    car_table.innerHTML = ` 


    <tr>
        <th> NAME </th>
        <th> ORIGIN </th>
        <th> MODEL YEAR</th>
        <th> ACCELERATION </th>
    </tr>
    <tr> 
    <td>${car_name} </td>
    <td> ${car_origin} </td>
    <td> ${car_model_year} </td>
    <td> ${car_acceleration} </td>
    </tr>
   
`;
// }else {
// car_table.innerHTML =""
// }

}

// calling the car() function on load/refresh

// window.onload()