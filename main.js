// Menu categories dropdown

var dropdown = document.getElementsByClassName("dropbtn-categories");
var i;

for (i = 0; i < dropdown.length; i++) 
{
  dropdown[i].addEventListener("click", function() 
  {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") 
    {
      dropdownContent.style.display = "none";
    } else 
    {
      dropdownContent.style.display = "flex";
    }
  });
}

// menu mobile
var btn_menu = document.getElementById("btnmenu");
btn_menu.addEventListener("click", function () {
  var item_menu = document.getElementById("menutop");
  if (item_menu.style.display === "block") {
    item_menu.style.display = "none";
  } else {
    item_menu.style.display = "block";
  }
})

//Modal box
var modal = document.getElementById("myModal");
var grCart = document.getElementById("grCart");
var addBtn = document.getElementById("addCart");
var btnClose = document.getElementById("close");
var btnReturn = document.getElementById("btn-returnBack");

grCart.onclick = function()
{
  modal.style.display = "block";
}

addBtn.onclick = function()
 {
    modal.style.display = "block";
 }

 btnClose.onclick = function()
 {
    modal.style.display = "none";
 }

 btnReturn.onclick = function()
 {
    modal.style.display = "none";
 }

 window.onclick = function(event)
 {
    if (event.target == modal)
    {
      modal.style.display = "none";
    }
 }


//Tăng giảm số lượng
var minusBtn = document.getElementById("minus-btn");
var plusBtn = document.getElementById("plus-btn");
var number = document.getElementById("number-pds").value;

plusBtn.onclick = function()
{
  document.getElementById("number-pds").value = parseInt(number) + 1;
}

minusBtn.onclick = function()
{
  if(number > 1)
  {
    document.getElementById("number-pds").value = parseInt(number) + -1;
  }

}



 // xóa cart
var remove_cart = document.getElementsByClassName("btn-delete-item");
var content_cart = document.getElementsByClassName("cart-content-row");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {
    var button_remove = event.target
    for (var j = 0; j < content_cart.length; j++)
    {
      button_remove.parentElement.parentElement.parentElement.remove()
    }

  })
}

//Update cart
function updateCart() 
{
  var cart_item = document.getElementsByClassName("cart-content-items-in")[0];
  var cart_rows = cart_item.getElementsByClassName("cart-content-row");
  var cart_row_total = cart_item.getElementsByClassName("total-price");
  var total = 0;
  for (var i = 0; i < cart_rows.length; i++) {
    var cart_row = cart_rows[i]
    var price_item = cart_row.getElementsByClassName("cart-price")[0]
    var quantity_item = cart_row.getElementsByClassName("quantity-info-item")[0]
    var price = Double.parseDouble(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
    var quantity = quantity_item.value // lấy giá trị trong thẻ input
    cart_row_total.innerText = (price * quantity);
  }
  document.getElementById("cost-final").innerText = total + 'VNĐ'
  // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
}



// Sticky menu

var navbar = document.getElementById("menu-sticky");
var sticky = navbar.offsetTop;

function mySticky()
{
  if (window.pageYOffset >= sticky)
  {
    navbar.classList.add("sticky");
  }
  else
  {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function()
{
  mySticky();
}

//Get API

var arrProducts = [];
var result = document.getElementById('info-list');
var overSearch = document.getElementById("myTargetScroll");
var btnSearch = document.getElementById("searching");

fetch('https://62ea4a75ad2954632588f3fb.mockapi.io/products')
  .then((response) => 
  {
    return (response.json());
  })
  .then((data) => 
  {
      arrProducts = data;


      loadProducts(arrProducts);

        function searchProducts()
        {
          
          var valueSearchInput = document.getElementById("searchMachine").value;
          var pdSearch = arrProducts.filter(value =>
            {
              return value.name.toUpperCase().includes(valueSearchInput.toUpperCase())
            })
            loadProducts(pdSearch);
        }

        document.getElementById("searchMachine").addEventListener("input", searchProducts);
      
  })
  .catch(error => console.error("Error: ", error));


  function loadProducts (array)
  {
    var template = ``;
    array.map((element) => {
      template += `
      <div  class="product-info-badge">
          <a href="#" class="img-info-pdList"><img src="${element.avatar}" /></a>
          <div class="pdList-name"><a href="#">${element.name}</a></div>
          <div class="price-n-btnAdd">
              <div class="price-for-pdList">${element.price}$</div>
              <div id="addCart" class="btn-addCart"><button>ADD CART</button></div>
          </div>
        </div>`;
    });

      result.innerHTML = template;
  }

  btnSearch.addEventListener("click", smoothScroll);

  function smoothScroll() 
  {
    overSearch.scrollIntoView();
  }

//   window.smoothScroll = function(target) 
// {
//     var scrollContainer = target;
//     do { //find scroll container
//         scrollContainer = scrollContainer.parentNode;
//         if (!scrollContainer) return;
//         scrollContainer.scrollTop += 1;
//     } while (scrollContainer.scrollTop == 0);
    
//     var targetY = 0;
//     do { //find the top of target relatively to the container
//         if (target == scrollContainer) break;
//         targetY += target.offsetTop;
//     } while (target = target.offsetParent);
    
//     scroll = function(c, a, b, i) {
//         i++; if (i > 30) return;
//         c.scrollTop = a + (b - a) / 30 * i;
//         setTimeout(function(){ scroll(c, a, b, i); }, 20);
//     }
//     // start scrolling
//     scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
// }

var btnSortApha = document.getElementById("sort-Ascen-Apha");

btnSortApha.addEventListener("click", sortList);

function sortList()
{
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("info-list");
  switching = true;

  while(switching)
  {
    switching = false;
    var getName = arrProducts.map((name) =>
    {
       return arrProducts.name;
    })

    var nameLength = getName.length;

    for (i = 0; i < (nameLength - 1); i++)
    {
      shouldSwitch = false;
      if(getName[i].innerHTML.toLowerCase() > getName[i + 1].innerHTML.toLowerCase())
      {
        shouldSwitch = true;
        break;
      }
    }

    if(shouldSwitch)
    {
      getName[i].parentNode.insertBefore(getName[i + 1], getName[i]);
      switching = true;
    }
  }
  loadProducts(list);
}