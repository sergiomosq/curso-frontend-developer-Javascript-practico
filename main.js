const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleProductDetail);


function toggleDesktopMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');

    
    // SOLUCION MAS SIMPLE SIN UTILIZAR CONDICIONAL:

    // productDetail.classList.add('inactive');
    // mobileMenu.classList.add('inactive');
}



function toggleMobileMenu(){
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');


    

    // SOLUCION MAS SIMPLE SIN UTILIZAR CONDICIONAL:

    // productDetail.classList.add('inactive');
    // desktopMenu.classList.add('inactive');
}



function toggleProductDetail (){
    
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed || !isMobileMenuClosed) {
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');

    
    // SOLUCION MAS SIMPLE SIN UTILIZAR CONDICIONAL:

    // desktopMenu.classList.add('inactive');
    // mobileMenu.classList.add('inactive');
}



// MAQUETANDO DESDE JAVASCRIPT Y CREANDO UN ARRAY DE OBJETOS

const producList =[];

producList.push({
    name:'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

producList.push({
    name:'Tv',
    price: '320',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

producList.push({
    name:'Cellphone',
    price: '550',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});



for (product of producList){

    //aqui creamos creamos cada elemento del html

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imgProductCard = document.createElement('img')
    imgProductCard.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const detailProductInfo = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productFigure= document.createElement('figure');

    const imageFigure = document.createElement('img');
    imageFigure.setAttribute('src', "./icons/bt_add_to_cart.svg" );

    // ahora le decimos al html a que padre pertenece cada elemento

    productFigure.append(imageFigure);
    detailProductInfo.append(productPrice, productName);
    productInfo.append(productFigure, detailProductInfo);
    productCard.append(imgProductCard, productInfo);
    cardsContainer.append(productCard);

}


// todo esto que hicimos se puede incluir en una función con el fin de reutilizar codigo mas adelante, de esta manera:

// function renderProductList(array){
//     for (product of array){
  
//         const productCard = document.createElement('div');
//         productCard.classList.add('product-card');
    
//         const imgProductCard = document.createElement('img')
//         imgProductCard.setAttribute('src', product.image);
    
//         const productInfo = document.createElement('div');
//         productInfo.classList.add('product-info');
    
//         const detailProductInfo = document.createElement('div');
    
//         const productPrice = document.createElement('p');
//         productPrice.innerText = '$' + product.price;
        
//         const productName = document.createElement('p');
//         productName.innerText = product.name;
    
//         const productFigure= document.createElement('figure');
    
//         const imageFigure = document.createElement('img');
//         imageFigure.setAttribute('src', "./icons/bt_add_to_cart.svg" );
    
            
//         productFigure.append(imageFigure);
//         detailProductInfo.append(productPrice, productName);
//         productInfo.append(productFigure, detailProductInfo);
//         productCard.append(imgProductCard, productInfo);
//         cardsContainer.append(productCard);
    
//     }
    
// }
    
    // AQUI LLAMAMOS LA FUNCIÓN CON EL ARRAY DE PRODUCTOS

// renderProductList(producList);
    

