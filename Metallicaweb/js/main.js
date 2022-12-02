document.querySelectorAll('.contenedor-modal .overlay').forEach((el) => {
	el.addEventListener('click', function (ev) {
		ev.stopPropagation();
		this.parentNode.classList.add('active');
	});
});

document.querySelectorAll('.contenedor-modal ').forEach((el) => {
	el.addEventListener('click', function (ev) {
		this.classList.remove('active');
	});
});

//Referenciamos a la clase carrito
let carrito = new Carrito([]);
//Llamamos a la funcion 
productos();

function productos(){
    let productsToShow = products;
    const categoryNode = document.getElementById("nombre__Categoria");
    /*productList*/
    const productList = document.getElementById("lista_productos")
    productList.innerHTML = "";
    productsToShow.forEach(product => {
        const {img, nombre, precio,id} = product
        const div = document.createElement("div");
        div.classList.add("productos");
        div.innerHTML = `<img src="${img}">
        <div class="informacion_productos">
            <div class="nombre_productos">
            ${nombre}
            </div>
            <br>
            <span class="precio_productos">
                Price:<b>$${precio} </b>
            </span> /      
        </div>
        <button class="addToList" onclick="addProduct('${id}')">
            Agregar al Carrito
        </button>
        `   
        productList.appendChild(div);
        
    })
}


function addProduct(idProducto) {
    //--->Funciones y Métodos ---> Clases N° 4-7
    const producto = products.find(element => element.id == idProducto);
    carrito.productos.push(producto);
    showCarrito();
}

function showCarrito() {

    const divLista = document.getElementById("productsInCart");
    divLista.innerHTML="";
    carrito.productos.forEach(product => {

        const nodo = document.createElement("div");
        nodo.classList.add("productInList");
        nodo.innerHTML = ` <div class="productImg">
                            <img src="${product.img}">
                            </div>
                            <div class="productName">
                                ${product.nombre}
                            </div>
                            <div class="producPrice">
                                <b>$${product.precio} </b>
                            </div>`
        const total = document.getElementById("total");
        const nodos = document.createElement("b");
        nodos.classList.add("totales");
        const totalAPagar = carrito.productos.reduce(
            //-->Calcular el total del carrito 
            (acumulador, precios) => acumulador + precios.precio,
            0
          );
        console.log(totalAPagar)
        
        total.innerHTML = `<b>Total: $${totalAPagar}</b>`        
                    
        divLista.appendChild(nodo);
                    
        total.appendChild(nodos);

    })

}
