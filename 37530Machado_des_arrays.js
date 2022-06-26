/ DESARROLLO DE UNA PLATAFORMA DE ALQUILER DE MOTOS.


// Solicitamos ciudad, cantidad de motos, casco extra y duración del alquiler.

const price = 150;
var bikeStock = [ "Yamaha", "Honda", "Aprilia", "Kawasaki", "Vespa"];
var bikes = parseInt(prompt("Seleccione la moto que desee. \n1. Yamaha \n2. Honda \n3. Aprilia \n 4. Kawasaki \n 5. Vespa"));
const rent_time = parseInt(prompt("Cuantas semanas desea alquilar?"));
const geo_loc = prompt("Ingrese la ciudad en la que desea alquilar.");
var extra_helmet = prompt("Desea un casco extra?.");
extra_helmet = extra_helmet.toLowerCase();

const eliminar = (bikes) => {
    let index = bikeStock.indexOf(bikes);
    if (index != -1){
        bikeStock.splice(index, 1);
        console.log(bikeStock);
    }
}

switch (bikes) {
    case 1 :
        bikes = "Yamaha";
        eliminar(bikes);
        console.log("El stock actual es: " + bikeStock.join(", "))
        break;
    case 2:
        bikes = "Honda";
        eliminar(bikes);
        console.log("El stock actual es: " + bikeStock.join(", "))        
        break;
    case 3:
        bikes = "Aprilia";
        eliminar(bikes);
        console.log("El stock actual es: " + bikeStock.join(", "))        
        break;
    case 4: 
        bikes = "Kawasaki";
        eliminar(bikes);
        console.log("El stock actual es: " + bikeStock.join(", "))        
        break;
    case 5:
        bikes = "Vespa";
        eliminar(bikes);
        console.log("El stock actual es: " + bikeStock.join(", "))        
        break;
}


if (extra_helmet === "si" ) {
    extra_helmet = 5;
}else{
    extra_helmet = 0;
}

// Calculamos el precio final del alquiler
function rented_bike_cost (price, rent_time, extra_helmet){
    const final_price = (price * rent_time) + extra_helmet
        return alert("El precio final del alquiler de la moto "+ bikes + " en la ciudad de " + geo_loc + " por " + rent_time + " semanas es: $" + final_price);
}

// Asignamos los parametros a la funcion
rented_bike_cost (price, rent_time, extra_helmet);

