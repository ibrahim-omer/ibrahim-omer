
function display(){
// alert(`${c}`);
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
    const cars_array = [
        {
            name: "BMW M3 Competition",
            origin: "Germany",
            model_year: "2021",
            acceleration: "22.99"
        },
        {
            name: "Mercedes-AMG C63 S",
            origin: "Germany",
            model_year: "2020",
            acceleration: "24.76"
        },
        {
            name: "Audi RS5 Sportback",
            origin: "Germany",
            model_year: "2022",
            acceleration: "23.55"
        },
        {
            name: "Range Rover Sport P530",
            origin: "UK",
            model_year: "2023",
            acceleration: "18.93"
        }
    ];
    
const car = document.getElementById("car_options").value;
const  car_table= document.getElementById("car_details");
const car_image = document.getElementById("car_images");
if( car !=="nothing") {
    car_image.src = `car_images/${car}.jpg`
    car_table.innerHTML = ` 


    <tr>
        <th> Car Name </th>
        <th> Origin </th>
        <th> Model Year </th>
        <th> Acceleration </th>
    </tr>
    <tr> 
    <td>${car} </td>
    <td> origin </td>
    <td> origin </td>
    <td> origin </td>
    </tr>
   
`;
}else {
car_table.innerHTML =""
}

}