const btn = document.querySelectorAll("button")

btn.forEach(function (button, index) {


    button.addEventListener("click", function (event) {
        {

            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector("img").src
            var productName = product.querySelector("h1").innerText
            var productPrice = product.querySelector("span").innerText
            addcart(productPrice, productImg, productName)
        }
    })
})


function addcart(productPrice, productImg, productName) {

    var addTr = document.createElement("tr");

    var cartItem = document.querySelectorAll("tbody tr");

    for (var i = 0; i < cartItem.length; i++) {

        var productT = cartItem[i].querySelector(".title");

        if (productT.innerHTML == productName) {

            alert("Sản phẩm của bạn đã có trong giỏ hàng");
            return;
        }
    }

    var trContent =
        '<tr><td style="display: flex;align-items: center;"><img src="' +
        productImg +
        '" alt="" width="70px"><span class="title">' +
        productName +
        '</span></td><td><p><span class="price">' +
        productPrice +
        '</span><sup>d</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" ></td><td style="cursor: pointer;"> <span class="delete">Xóa</span></td></tr>';

    addTr.innerHTML = trContent;

    var cartTable = document.querySelector("tbody");

    cartTable.append(addTr);

    cartTotal();
    xoaCart();
    inputchange();
}


function cartTotal() {

    var cartItem = document.querySelectorAll("tbody tr");

    var totalC = 0;

    for (var i = 0; i < cartItem.length; i++) {

        var inputValue = cartItem[i].querySelector("input").value;

        var inputValues = parseInt(inputValue);

        var productPrice = cartItem[i].querySelector(".price").innerText;

        var productPrices = parseInt(productPrice);

        var totalA = inputValues * productPrices;

        totalC += totalA;
    }

    var cartTotalA = document.querySelector(".price-total span");

    var cartprice = document.querySelector(".cart-icon span")
    cartprice.innerHTML = totalC;
    cartTotalA.innerHTML = totalC;
}

// ----------------------delete-------------------------
function xoaCart() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".delete");
        productT[i].addEventListener("click", function (event) {
            var cartdelete = event.target
            var cartItemR = cartdelete.parentElement.parentElement
            cartItemR.remove()
            cartTotal();

        })
    }
}


function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr");
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input");
        inputValue.addEventListener("change", function () {
            cartTotal();
        })
    }
}

const cartbtn = document.querySelector(".fa-circle-xmark")
const cartshow = document.querySelector(".fa-cart-shopping")
cartshow.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "0"
})

cartbtn.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "-100%"
})