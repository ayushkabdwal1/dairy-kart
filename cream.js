const product = [
    {
        id: 0,
        image: 'https://www.comunicaffe.com/wp-content/uploads/2017/02/milk.jpg',
        title: 'Fresh Tooned Milk',
        price: 28,
        quantity:'500ml',
    },
    {
        id: 1,
        image: 'https://www.comunicaffe.com/wp-content/uploads/2017/02/milk.jpg',
        title: 'Full Cream Milk',
        price: 35,
        quantity:'500ml',
    },
    {
        id: 2,
        image: 'https://www.comunicaffe.com/wp-content/uploads/2017/02/milk.jpg',
        title: 'Fresh Tooned Milk',
        price: 56,
        quantity:'1l',
    },
    {
        id: 3,
        image: 'https://www.comunicaffe.com/wp-content/uploads/2017/02/milk.jpg',
        title: 'Full Cream Milk',
        price: 70,
        quantity:'1l',
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price,quantity} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ${price}.00</h2>
        <h2> ${quantity}</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = 0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML =total+".00";
            document.getElementById("buynow").innerHTML ="Proceed to Pay" + total +".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'> ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}