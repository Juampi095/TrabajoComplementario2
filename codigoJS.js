//ARRAYS DE AUTOS
const autos=[
    {
        marca:"Lamborghini",
        modelo:"Aventador",
        tamanio:"1/18",
        precio:"14999",
    },
    {
        marca:"Pagani",
        modelo:"Huayra BC",
        tamanio:"1/24",
        precio:"16499",
    },
    {
        marca:"Ferrari",
        modelo:"488 GT3",
        tamanio:"1/18",
        precio:"11999",
    }
];
console.table(autos);

for(const auto of autos){
    console.log("Marca "+auto.marca+" Precio $"+auto.precio);
}




