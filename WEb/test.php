<html>
  <head>

    	<meta charset="utf-8">
      <link rel="stylesheet" media="all" href="https://cdn.shoplineapp.com/assets/common-f47625baea59b7f28766c213f44af5679a3f7198f77cf8bb89041274db97940a.css">
      <link rel="stylesheet" media="all" href="https://cdn.shoplineapp.com/assets/application-6f3b55f8b8d864ba63c7dfe842d4d69459c535d0e99fe9d00ab5fa8c5dffe250.css">
      <link rel="stylesheet" media="all" href="https://cdn.shoplineapp.com/assets/themes/slate-b6f9c73311a1041d6bd6386ce8911939cad346fdc954b1c089f947227c81ae99.css">
      <!--ICON-->
      <link rel="icon" type="image/png" href="https://aoaodelivery/image/icon.jpg">
      <script src="shopping_cart.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <link rel="stylesheet" type="text/css" href="footer.css">

      <title>付款</title>


      <meta name="description" content="付款">
      <script type="text/javascript">
        function here(){
          var ReciptNumber = Math.floor((Math.random() * 1000000) + 1);
          localStorage.setItem("Recipe",ReciptNumber);


          document.getElementById("qa").value = parseInt(localStorage.getItem("quantity_ribs"));
          document.getElementById("qb").value = parseInt(localStorage.getItem("quantity_chick"));
          document.getElementById("qc").value = parseInt(localStorage.getItem("quantity_lamb"));
          document.getElementById("qd").value = parseInt(localStorage.getItem("quantity_fillet"));
          document.getElementById("qe").value = parseInt(localStorage.getItem("quantity_sirloin"));
          document.getElementById("qf").value = parseInt(localStorage.getItem("quantity_cowtongue"));
          document.getElementById("qg").value = parseInt(localStorage.getItem("quantity_shrimprisotto"));
          document.getElementById("qh").value = parseInt(localStorage.getItem("quantity_tomatopasta"));
          document.getElementById("qi").value = parseInt(localStorage.getItem("quantity_mushpasta"));
          document.getElementById("qj").value = parseInt(localStorage.getItem("quantity_chickpasta"));
          document.getElementById("qk").value = parseInt(localStorage.getItem("quantity_cabonara"));
          document.getElementById("ql").value = parseInt(localStorage.getItem("quantity_caesar"));
          document.getElementById("qm").value = parseInt(localStorage.getItem("quantity_shrimpsalad"));
          document.getElementById("qn").value = parseInt(localStorage.getItem("quantity_avocado"));
          document.getElementById("qo").value = parseInt(localStorage.getItem("quantity_mixcombo"));
          document.getElementById("qp").value = parseInt(localStorage.getItem("quantity_tunapack"));
          document.getElementById("qq").value = parseInt(localStorage.getItem("quantity_toastnut"));
          document.getElementById("qr").value = parseInt(localStorage.getItem("quantity_lobster"));
          document.getElementById("qs").value = parseInt(localStorage.getItem("quantity_cabbage"));
          document.getElementById("qt").value = parseInt(localStorage.getItem("quantity_hol"));
          document.getElementById("qu").value = parseInt(localStorage.getItem("quantity_meatball"));

          document.getElementById("oa").value = parseInt(localStorage.getItem("ribs_ordered"));
          document.getElementById("ob").value = parseInt(localStorage.getItem("chick_ordered"));
          document.getElementById("oc").value = parseInt(localStorage.getItem("lamb_ordered"));
          document.getElementById("od").value = parseInt(localStorage.getItem("fillet_ordered"));
          document.getElementById("oe").value = parseInt(localStorage.getItem("sirloin_ordered"));
          document.getElementById("of").value = parseInt(localStorage.getItem("cowtongue_ordered"));
          document.getElementById("og").value = parseInt(localStorage.getItem("shrimprisotto_ordered"));
          document.getElementById("oh").value = parseInt(localStorage.getItem("tomatopasta_ordered"));
          document.getElementById("oi").value = parseInt(localStorage.getItem("mushpasta_ordered"));
          document.getElementById("oj").value = parseInt(localStorage.getItem("chickpasta_ordered"));
          document.getElementById("ok").value = parseInt(localStorage.getItem("cabonara_ordered"));
          document.getElementById("ol").value = parseInt(localStorage.getItem("caesar_ordered"));
          document.getElementById("om").value = parseInt(localStorage.getItem("shrimpsalad_ordered"));
          document.getElementById("on").value = parseInt(localStorage.getItem("avocado_ordered"));
          document.getElementById("oo").value = parseInt(localStorage.getItem("mixcombo_ordered"));
          document.getElementById("op").value = parseInt(localStorage.getItem("tunapack_ordered"));
          document.getElementById("oq").value = parseInt(localStorage.getItem("toastnut_ordered"));
          document.getElementById("or").value = parseInt(localStorage.getItem("lobster_ordered"));
          document.getElementById("os").value = parseInt(localStorage.getItem("cabbage_ordered"));
          document.getElementById("ot").value = parseInt(localStorage.getItem("hol_ordered"));
          document.getElementById("ou").value = parseInt(localStorage.getItem("meatball_ordered"));


          document.getElementById("ots").value = parseInt(localStorage.getItem("tiramisu_small_ordered"));
          document.getElementById("otl").value = parseInt(localStorage.getItem("tiramisu_large_ordered"));
          document.getElementById("oms").value = parseInt(localStorage.getItem("mocha_small_ordered"));
          document.getElementById("oml").value = parseInt(localStorage.getItem("mocha_large_ordered"));
          document.getElementById("ocs").value = parseInt(localStorage.getItem("choco_small_ordered"));
          document.getElementById("ocl").value = parseInt(localStorage.getItem("choco_large_ordered"));

          document.getElementById("qts").value = parseInt(localStorage.getItem("quantity_tiramisu_small"));
          document.getElementById("qtl").value = parseInt(localStorage.getItem("quantity_tiramisu_large"));
          document.getElementById("qms").value = parseInt(localStorage.getItem("quantity_mocha_small"));
          document.getElementById("qml").value = parseInt(localStorage.getItem("quantity_mocha_large"));
          document.getElementById("qcs").value = parseInt(localStorage.getItem("quantity_choco_small"));
          document.getElementById("qcl").value = parseInt(localStorage.getItem("quantity_choco_large"));

          document.getElementById("otwt").value = parseInt(localStorage.getItem("twt_ordered"));
          document.getElementById("omg").value = parseInt(localStorage.getItem("milkgreen_ordered"));
          document.getElementById("oog").value = parseInt(localStorage.getItem("orangegreen_ordered"));
          document.getElementById("olg").value = parseInt(localStorage.getItem("lemonginger_ordered"));
          document.getElementById("orb").value = parseInt(localStorage.getItem("redbean_ordered"));
          document.getElementById("ool").value = parseInt(localStorage.getItem("oolong_ordered"));

          document.getElementById("qts").value = parseInt(localStorage.getItem("quantity_twt"));
          document.getElementById("qtl").value = parseInt(localStorage.getItem("quantity_milkgreen"));
          document.getElementById("qms").value = parseInt(localStorage.getItem("quantity_orangegreen"));
          document.getElementById("qml").value = parseInt(localStorage.getItem("quantity_lemonginger"));
          document.getElementById("qcs").value = parseInt(localStorage.getItem("quantity_redbean"));
          document.getElementById("qcl").value = parseInt(localStorage.getItem("quantity_oolong"));

          document.getElementById("reciptnumber").value = parseInt(localStorage.getItem("Recipe"));

          document.getElementById("oss").value = parseInt(localStorage.getItem("smallset_ordered"));
          document.getElementById("qss").value = parseInt(localStorage.getItem("quantity_smallset"));

          document.getElementById("ols").value = parseInt(localStorage.getItem("largeset_ordered"));
          document.getElementById("qls").value = parseInt(localStorage.getItem("quantity_largeset"));

          document.getElementById("osss").value = parseInt(localStorage.getItem("superset_ordered"));
          document.getElementById("qsss").value = parseInt(localStorage.getItem("quantity_superset"));

          document.getElementById("ofs").value = parseInt(localStorage.getItem("friendset_ordered"));
          document.getElementById("qfs").value = parseInt(localStorage.getItem("quantity_friendset"));


          document.getElementById("saa").value = localStorage.getItem("saa");
          document.getElementById("sab").value = localStorage.getItem("sab");
          document.getElementById("sac").value = localStorage.getItem("sac");
          document.getElementById("spa").value = localStorage.getItem("spa");
          document.getElementById("sma").value = localStorage.getItem("sma");
          document.getElementById("smb").value = localStorage.getItem("smb");

          document.getElementById("laa").value = localStorage.getItem("laa");
          document.getElementById("lab").value = localStorage.getItem("lab");
          document.getElementById("lac").value = localStorage.getItem("lac");
          document.getElementById("lad").value = localStorage.getItem("lad");
          document.getElementById("lpa").value = localStorage.getItem("lpa");
          document.getElementById("lpb").value = localStorage.getItem("lpb");
          document.getElementById("lma").value = localStorage.getItem("lma");
          document.getElementById("lmb").value = localStorage.getItem("lmb");
          document.getElementById("lmc").value = localStorage.getItem("lmc");

          document.getElementById("ssaa").value = localStorage.getItem("ssaa");
          document.getElementById("ssab").value = localStorage.getItem("ssab");
          document.getElementById("ssac").value = localStorage.getItem("ssac");
          document.getElementById("ssad").value = localStorage.getItem("ssad");
          document.getElementById("ssae").value = localStorage.getItem("ssae");
          document.getElementById("sspa").value = localStorage.getItem("sspa");
          document.getElementById("sspb").value = localStorage.getItem("sspb");
          document.getElementById("sspc").value = localStorage.getItem("sspc");
          document.getElementById("ssma").value = localStorage.getItem("ssma");
          document.getElementById("ssmb").value = localStorage.getItem("ssmb");
          document.getElementById("ssmc").value = localStorage.getItem("ssmc");
          document.getElementById("ssmd").value = localStorage.getItem("ssmd");

          document.getElementById("faa").value = localStorage.getItem("faa");
          document.getElementById("fab").value = localStorage.getItem("fab");
          document.getElementById("fpa").value = localStorage.getItem("fpa");
          document.getElementById("fma").value = localStorage.getItem("fma");

          document.getElementById("osl").value = localStorage.getItem("single_lobster_ordered");
          document.getElementById("qsl").value = localStorage.getItem("quantity_single_lobster");
          document.getElementById("osh").value = localStorage.getItem("single_hol_ordered");
          document.getElementById("qsh").value = localStorage.getItem("quantity_single_hol");
          document.getElementById("osc").value = localStorage.getItem("single_cabbage_ordered");
          document.getElementById("qsc").value = localStorage.getItem("quantity_single_cabbage");
          document.getElementById("osm").value = localStorage.getItem("single_meatball_ordered");
          document.getElementById("qsm").value = localStorage.getItem("quantity_single_meatball");


          document.getElementById("qstwt").value = localStorage.getItem("quantity_set_twt");
          document.getElementById("ostwt").value = localStorage.getItem("set_twt_ordered");
          document.getElementById("qsmg").value = localStorage.getItem("quantity_set_milkgreen");
          document.getElementById("osmg").value = localStorage.getItem("set_milkgreen_ordered");
          document.getElementById("qsog").value = localStorage.getItem("quantity_set_orangegreen");
          document.getElementById("osog").value = localStorage.getItem("set_orangegreen_ordered");
          document.getElementById("qslg").value = localStorage.getItem("quantity_set_lemonginger");
          document.getElementById("oslg").value = localStorage.getItem("set_lemonginger_ordered");
          document.getElementById("qsrb").value = localStorage.getItem("quantity_set_redbean");
          document.getElementById("osrb").value = localStorage.getItem("set_redbean_ordered");
          document.getElementById("qsol").value = localStorage.getItem("quantity_set_oolong");
          document.getElementById("osol").value = localStorage.getItem("set_oolong_ordered");

          document.getElementById("qsts").value = localStorage.getItem("quantity_set_tiramisu_small");
          document.getElementById("osts").value = localStorage.getItem("set_tiramisu_small_ordered");
          document.getElementById("qstl").value = localStorage.getItem("quantity_set_tiramisu_large");
          document.getElementById("ostl").value = localStorage.getItem("set_tiramisu_large_ordered");
          document.getElementById("qsms").value = localStorage.getItem("quantity_set_mocha_small");
          document.getElementById("osms").value = localStorage.getItem("set_mocha_small_ordered");
          document.getElementById("qsml").value = localStorage.getItem("quantity_set_mocha_large");
          document.getElementById("osml").value = localStorage.getItem("set_mocha_large_ordered");
          document.getElementById("qscs").value = localStorage.getItem("quantity_set_choco_small");
          document.getElementById("oscs").value = localStorage.getItem("set_choco_small_ordered");
          document.getElementById("qscl").value = localStorage.getItem("quantity_set_choco_large");
          document.getElementById("oscl").value = localStorage.getItem("set_choco_large_ordered");
          genCart();

        }


      </script>

      <style media="screen">
      .fixed-menu-wrapper{
        position: relative;
        margin-top: 0.5%;
        z-index: 3;
      }
      .cart-btn{
        right: 3px;
        font-size: 13px;
        border-radius: 3px;
        border: 1px solid #aaa;
        padding: 5px 8px;
        font-weight: 700;
        position: fixed;
      }
      .media-btn{
        margin-left: 0.1%;
        margin-right: 0.1%;
        z-index:5;
      }
      .media-wrapper{
        margin-left: 10%;
        width: 10%;
        position: fixed;
      }
      </style>
  </head>
  <body onload="here()">


    <div class="fixed-menu-wrapper" id="fixed-menu">
      <div class="mobile_btn_container" id="mobile_menu_btn" onclick="myFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <span class="media-wrapper">
        <a class="media-btn" href="https://www.facebook.com/wishao.hk/"><i class="fa fa-facebook-square"></i></a>
        <a class="media-btn" href="https://www.instagram.com/aoao.delivery/"><i class="fa fa-instagram"></i></a>
        <a class="media-btn" href="https://www.instagram.com/aoao.delivery/"><i class="fa fa-envelope"></i></a>
      </span>

      <img src="image/icon.png" id="img_mobile">

      <a class="cart-btn" onclick="OpenCart()">
          <span class="fa fa-shopping-cart"></span>
          <span>購物車</span>
          <span>
            <span>(</span>
            <span id="change-quantity">0</span>
            <span>)</span>
          </span>
      </a>
    </div>



    <!--scroll down menu start-->
    <div id="navbar_div">

        <a href="https://aoaodelivery.com/" id="scrolllink"><img src="image/icon.png">
        </a>
        <ul>
      <li link-highlight="/">
        <a link-highlight="/" href="https://aoaodelivery.com/" target="" ng-non-bindable="">首頁</a>
      </li>
    <!-- Has dropdown links -->
      <!-- doesn't have dropdown links -->
      <li link-highlight="categories/catering_set">
        <a link-highlight="categories/catering_set" href="categories/catering_set.html" target="" ng-non-bindable="">多人到會套餐</a>
      </li>
    <!-- Has dropdown links -->
      <li class="nav-dropdown" link-highlight="categories/alacarte">
        <a class="nav-dropdown-toggle" id="herepress" link-highlight="categories/alacarte" href="categories/alacarte.html" target="" ng-non-bindable="">單點到會美食 <span class="caret" id="dropp"></span></a>
        <ul class="nav-dropdown-menu" id="herecome">
              <li link-highlight="">
                <a link-highlight="" href="categories/salad.html" target="" ng-non-bindable="">沙律&nbsp/&nbsp小食</a>
              </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/meat.html" target="" ng-non-bindable="">肉類</a>
            </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/seafood.html" target="" ng-non-bindable="">海鮮</a>
            </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/pastas.html" target="" ng-non-bindable="">意粉</a>
            </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/risotto.html" target="" ng-non-bindable="">意大利飯</a>
            </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/dessert.html" target="" ng-non-bindable="">甜品</a>
            </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/drinks.html" target="" ng-non-bindable="">飲品</a>
            </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/tableware.html" target="" ng-non-bindable="">額外餐具</a>
            </li>
        </ul>
      </li>
      <li >
        <a  href="pages/delivery.html" target="" ng-non-bindable="">運送服務方式</a>
      </li>
      <li l>
        <a  href="pages/payment.html" target="" ng-non-bindable="">付款服務方式</a>
      </li>
      <li >
        <a  href="pages/QnA.html" target="" ng-non-bindable="">常見問題</a>
      </li>
      </ul>
    </div>
    <!--scroll down menu end-->

    <!--mobile menu start-->




    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <li link-highlight="/">
        <a link-highlight="/" href="https://aoaodelivery.com/" target="" ng-non-bindable="">首頁</a>
      </li>
    <!-- Has dropdown links -->
      <!-- doesn't have dropdown links -->
      <li link-highlight="categories/catering_set">
        <a link-highlight="categories/catering_set" href="categories/catering_set.html" target="" ng-non-bindable="">多人到會套餐</a>
      </li>
    <!-- Has dropdown links -->
      <li class="nav-dropdown" link-highlight="categories/alacarte">
        <a class="nav-dropdown-toggle" link-highlight="categories/alacarte" href="categories/alacarte.html" target="" ng-non-bindable="">單點到會美食 <span class="caret"></span></a>
        <ul class="nav-dropdown-menu">

                <li link-highlight="">
                  <a link-highlight="" href="categories/salad.html" target="" ng-non-bindable="">沙律&nbsp/&nbsp小食</a>
                </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/meat.html" target="" ng-non-bindable="">肉類</a>
            </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/seafood.html" target="" ng-non-bindable="">海鮮</a>
            </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/pastas.html" target="" ng-non-bindable="">意粉</a>
            </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/risotto.html" target="" ng-non-bindable="">意大利飯</a>
            </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/dessert.html" target="" ng-non-bindable="">甜品</a>
            </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/drinks.html" target="" ng-non-bindable="">飲品</a>
            </li>
            <li link-highlight="">
              <a link-highlight="" href="categories/tableware.html" target="" ng-non-bindable="">額外餐具</a>
            </li>
        </ul>
      </li>
      <li >
        <a  href="pages/delivery.html" target="" ng-non-bindable="">運送服務方式</a>
      </li>
      <li l>
        <a  href="pages/payment.html" target="" ng-non-bindable="">付款服務方式</a>
      </li>
      <li >
        <a  href="pages/QnA.html" target="" ng-non-bindable="">常見問題</a>
      </li>
      </ul>
    </div>
    <!--mobile menu end-->

    <style>
    .Cart-shadow{
      width: 100%;
      height: 100%;
      background: grey;
      z-index: 8;
      position: absolute;
      opacity: 0.7;
      display:none;
    }
    .Cart-Container{
      width: 70%;
      height: 80vh;
      background-color: #BF6B59;
      border-radius: 20px;
      box-shadow: 0px 25px 40px #1687d933;
      left: 15%;
      top: 2.5%;
      position: absolute;
      z-index: 10;
      display: none;
    }
    .scart-header{
      margin: auto;
      width: 90%;
      height: 15%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .scart-heading{
      font-size: 20px;
      font-family: ‘Open Sans’;
      font-weight: 700;
      color: #2F3841;
    }
    .scart-remove{
      font-size: 14px;
      font-family: ‘Open Sans’;
      font-weight: 600;
      color: #FFF9E3;
      cursor: pointer;
      border-bottom: 1px solid #FFFFFF;
    }
    .scart-items{
      width: 100%;
      margin: auto;
    }
    .scart-image{
      float: left;
      width: 15%;
      text-align: right;
      height:100px;
    }
    .scart-image>img{
      width: 100px;
      height: 100px;
      margin-right: 10px;
    }
    .scart-items-about{
      float: right;
      width: 85%;
      height: 100px;
    }
    .scart-items-title{
      font-size: 24px;
      font-weight: bold;

    }
    .scart-remove-item{
      text-align: left;
    }
    /*change css of delete links*/
    #scart-remove-item-link-ribs{
      font-weight: lighter;
      text-decoration: none;
      color: #E7DECC;
      cursor: pointer;
    }
    .scart-items-wrapper{
      position:absolute;
      width:100%;
    }
    </style>
    <!--popup window css end-->



    <!--popup window script start-->
    <!--popup window script end-->

    <!--popup window content start-->
      <div class="Cart-shadow" id="Cart-shadow-id" onclick="closeCart()" ></div>
      <div class="Cart-Container" id="Cart-Container-id" >
        <div class="scart-header">
          <h3 class="scart-heading">購物車</h3>
          <h5 class="scart-remove" onclick="clearAllItems()">清除所有</h5>
        </div>



        <!--variate part-->
        <div class="scart-items-wrapper" id="scart-item-wrap">
        </div>




        <div class="scart-checkout-wrapper" style="position:absolute;width:100%; bottom:2%;">
          <hr style="width: 66%;float: right;margin-right: 5%;">
          <div class=”scart-checkout” style="float:right;width:38%;margin-right:5%;">
            <div class=”scart-total” style="width: 100%; display: flex; justify-content: space-between;">
              <div>
                <div class=”scart-subtotal” style="font-size: 22px; font-family: ‘Open Sans’; font-weight: 700; color: #202020;">總數</div>
                <div class=”scart-items-total” style="font-size: 16px; font-family: ‘Open Sans’; font-weight: 500; color: #F0F0F0; line-height: 10px;">件數: <span class="scart-items-quantity" id="quantity-for-items"></span></div>
              </div>
              <div class=”scart-total-price” id="price-for-scart"style="font-size: 36px;font-family: ‘Open Sans’;font-weight: 900;color: #202020;"></div>
            </div>
            <button class=”scart-button” style="margin-top: 5px;width: 100%;height: 40px;border: none;background: linear-gradient(to bottom right, #B8D7FF, #8EB7EB);border-radius: 20px;cursor: pointer;font-size: 16px;font-family: ‘Open Sans’;font-weight: 600;color: #202020;" onclick="checkoutConfirm()">訂單結帳</button>
          </div>
        </div>

      </div>


      <nav class="nav-bar" id="nav_nav_wrap">

      <div class="navbar-wrapper" >
        <div class="navbar hidden-xs" role="navigation">
          <div class="navbar-header-wrapper">
            <div class="container">
              <div class="navbar-header">
                <a href="https://aoaodelivery.com/">
                  <img src="image/icon.png" class="logo-image sl-lazy-image" data-resizing-segment="140" data-size="x280">
                </a>
              </div>
            </div> <!--container-->
          </div>
          <div class="navbar-menu-wrapper">
            <div class="container">
              <div class="navbar-menu hidden-xs">
                <ul class="text-primary-color">
      <!-- Has dropdown links -->
        <!-- doesn't have dropdown links -->
        <li link-highlight="/">
          <a link-highlight="/" href="https://aoaodelivery.com/" target="" ng-non-bindable="">首頁</a>
        </li>
      <!-- Has dropdown links -->
        <!-- doesn't have dropdown links -->
        <li link-highlight="categories/catering_set">
          <a link-highlight="categories/catering_set" href="categories/catering_set.html" target="" ng-non-bindable="">多人到會套餐</a>
        </li>
      <!-- Has dropdown links -->
        <li class="nav-dropdown" link-highlight="categories/alacarte">
          <a class="nav-dropdown-toggle" link-highlight="categories/alacarte" href="categories/alacarte.html" target="" ng-non-bindable="">單點到會美食 <span class="caret"></span></a>
          <ul class="nav-dropdown-menu">

                  <li link-highlight="">
                    <a link-highlight="" href="categories/salad.html" target="" ng-non-bindable="">沙律&nbsp/&nbsp小食</a>
                  </li>
              <li link-highlight="">
                <a link-highlight="" href="categories/meat.html" target="" ng-non-bindable="">肉類</a>
              </li>
              <li link-highlight="">
                <a link-highlight="" href="categories/seafood.html" target="" ng-non-bindable="">海鮮</a>
              </li>
              <li link-highlight="">
                <a link-highlight="" href="categories/pastas.html" target="" ng-non-bindable="">意粉</a>
              </li>
              <li link-highlight="">
                <a link-highlight="" href="categories/risotto.html" target="" ng-non-bindable="">意大利飯</a>
              </li>
              <li link-highlight="">
                <a link-highlight="" href="categories/dessert.html" target="" ng-non-bindable="">甜品</a>
              </li>
              <li link-highlight="">
                <a link-highlight="" href="categories/drinks.html" target="" ng-non-bindable="">飲品</a>
              </li>
              <li link-highlight="">
                <a link-highlight="" href="categories/tableware.html" target="" ng-non-bindable="">額外餐具</a>
              </li>
          </ul>
        </li>
        <li >
          <a  href="pages/delivery.html" target="" ng-non-bindable="">運送服務方式</a>
        </li>
        <li l>
          <a  href="pages/payment.html" target="" ng-non-bindable="">付款服務方式</a>
        </li>
        <li >
          <a  href="pages/QnA.html" target="" ng-non-bindable="">常見問題</a>
        </li>
      </ul>
              </div>
            </div> <!--container-->
          </div>
        </div><!--navbar-->
      </div><!--navbar-wrapper-->
  </nav>

<!--main body start-->

<style media="screen">
  .wrapper{
    position: relative;
    margin-left: 130px;
    margin-right: 130px;
  }
  .lef-col{
    margin-left: 10%;
    float: left;
    width:50%;
    border-radius: 25px;
    border:0.7px solid;

    text-align: center;

  }
  .left-col>p{
    text-align: right;
  }
  .right-col{
    margin-left: 10%;
    text-align: center;
    float:right;
    width:50%;
    border-radius: 25px;
    border:0.7px solid;
  }
  #submit_btn{
    height:120px;
    border-radius: 25%;
    background: transparent;
  }
</style>

<form method="post" action="test2.php" onsubmit="confirmDetail()" class="forM" id="forM">
<div class="body-content-wrapper" id="body-content">
  <br>
  <div class="wrapper">
    <div class="lef-col">
      <br>
        <p>  <span>顧客資料</span> </p>
        <p><span>顧客名稱<br><input type="text" id="customer_name" name="customer_name" value="" required="required"></span></p>
        <p><span>電子郵箱<br><input type="text" id="customer_mail" name="customer_mail" value="" required="required"></span></p>
        <p><span>電話號碼<br><input type="text" id="customer_tel" name="customer_tel" value="" required="required"></span></p>
        <p><span>運送方式<br>

          <input type="radio" id="customer_del_self" name="customer_del" value="門市自取" required="required" onchange="delWay(this)">
          <label for="customer_del_self">門市自取（尖沙咀金馬倫道48號中國保險大廈1樓A及B號舖）</label><br>
          <input type="radio" id="customer_del_del" name="customer_del" value="送貨" required="required" onchange="delWay(this)">
          <label for="customer_del_del">送貨</label><br>
        </span>
        </p>


        <script type="text/javascript">
          function delWay(src){
            if(src.id=="customer_del_self"){
              document.getElementById("disappear").style.display="none";
              document.getElementById("deliver_address").required = "";
              document.getElementById("region").required = "";
              document.getElementById("disappear_self_time").style.display="block";
              document.getElementById("disappear_deliver_time").style.display="none";
              document.getElementById("disappear_deliver_time_remind").style.display="none";
              document.getElementById("self_time").required="required";
              document.getElementById("deliver_time").required="";
              fee=0;
              document.getElementById("price").innerHTML=total_price()+fee;
              var lll = parseInt(document.getElementById("price").innerHTML);
              document.getElementById("finalprice").value=lll;
              document.getElementById("fee").innerHTML=fee;
              document.getElementById("del_fee").value=parseInt(fee);
            }
            if(src.id=="customer_del_del"){
              document.getElementById("disappear").style.display="block";
              document.getElementById("deliver_address").required = "required";
              document.getElementById("region").required = "required";
              document.getElementById("disappear_self_time").style.display="none";
              document.getElementById("disappear_deliver_time").style.display="block";
              document.getElementById("disappear_deliver_time_remind").style.display="block";
              document.getElementById("self_time").required="";
              document.getElementById("deliver_time").required="required";
            }
          }

        </script>

    </div>
    <div class="right-col">
      <br>
        <p>  <span>送貨資料</span> </p>
        <input type="checkbox" name="" id="customer_same" value="" onclick="tranDetail()">與顧客資料相同</input>
        <p><span>收件人名稱<br><input type="text" id="deliver_name" name="deliver_name" value="" required="required"></span></p>
        <p><span>收件人電話號碼<br><input type="text" id="deliver_tel" name="deliver_tel" value="" required="required"></span></p>
        <p id="disappear" style="display:none;"><span>收件地址<br>
          <label for="region">區域</label>
          <select class="list" id="region" name="deliver_region" onchange="checkregion()" required="required">
            <option value="">請選擇</option>
            <option value="新界">新界</option>
            <option value="九龍">九龍</option>
            <option value="香港島">香港島</option>
          </select>

          <select class="list" id="nt" name="deliver_region_nt" onchange="checkdelprice()" style="display:none;">
            <option value="">請選擇</option>
            <option value="八鄉">八鄉</option>
            <option value="古洞">古洞</option>
            <option value="沙頭角">沙頭角</option>
            <option value="上水">上水</option>
            <option value="粉嶺">粉嶺</option>
            <option value="大埔">大埔</option>
            <option value="沙田">沙田</option>
            <option value="大圍">大圍</option>
            <option value="馬鞍山">馬鞍山</option>
            <option value="烏溪沙">烏溪沙</option>
            <option value="蠔涌">蠔涌</option>
            <option value="西貢">西貢</option>
            <option value="將軍澳">將軍澳</option>
            <option value="天水圍">天水圍</option>
            <option value="元朗">元朗</option>
            <option value="錦田">錦田</option>
            <option value="屯門">屯門</option>
            <option value="深井">深井</option>
            <option value="荃灣">荃灣</option>
            <option value="葵涌">葵涌</option>
            <option value="青衣">青衣</option>
            <option value="馬灣">馬灣</option>
            <option value="東涌">東涌</option>
            <option value="機場">機場</option>
          </select>


          <select class="list" id="kl" name="deliver_region_kl" onchange="checkdelprice()" style="display:none;">
            <option value="">請選擇</option>
            <option value="美孚">美孚</option>
            <option value="荔枝角">荔枝角</option>
            <option value="長沙灣">長沙灣</option>
            <option value="深水埗">深水埗</option>
            <option value="太子">太子</option>
            <option value="旺角">旺角</option>
            <option value="油麻地">油麻地</option>
            <option value="佐敦">佐敦</option>
            <option value="尖沙咀">尖沙咀</option>
            <option value="紅磡">紅磡</option>
            <option value="土瓜灣">土瓜灣</option>
            <option value="九龍城">九龍城</option>
            <option value="九龍塘">九龍塘</option>
            <option value="樂富">樂富</option>
            <option value="黃大仙">黃大仙</option>
            <option value="彩虹">彩虹</option>
            <option value="九龍灣">九龍灣</option>
            <option value="牛頭角">牛頭角</option>
            <option value="觀塘">觀塘</option>
            <option value="秀茂坪">秀茂坪</option>
            <option value="藍田">藍田</option>
            <option value="油塘">油塘</option>
          </select>


          <select class="list" id="hki" name="deliver_region_hki" onchange="checkdelprice()" style="display:none;">
            <option value="">請選擇</option>
            <option value="鴨脷洲">鴨脷洲</option>
            <option value="香港仔">香港仔</option>
            <option value="薄扶林">薄扶林</option>
            <option value="西環/西營盤">西環/西營盤</option>
            <option value="上環">上環</option>
            <option value="中環">中環</option>
            <option value="金鐘">金鐘</option>
            <option value="灣仔">灣仔</option>
            <option value="跑馬地">跑馬地</option>
            <option value="銅鑼灣">銅鑼灣</option>
            <option value="天后">天后</option>
            <option value="北角">北角</option>
            <option value="鰂魚涌">鰂魚涌</option>
            <option value="太古">太古</option>
            <option value="西灣河">西灣河</option>
            <option value="筲箕灣">筲箕灣</option>
            <option value="杏花邨">杏花邨</option>
            <option value="柴灣">柴灣</option>
            <option value="小西灣">小西灣</option>
          </select>
          <input type="text" id="deliver_address" name="deliver_address" value="" required="required"></span></p>
          <p id="warning_two" style="color:red;display:none;">因未達運費減免最低消費額，本次消費的運費為：<span id="deFee"></span></p>
        <p><span>收件日期<br><input type="date" id="deliver_day" name="deliver_day" value="" placeholder="yyyy/mm/dd" onfocusout="dateCheck()" required="required"></span></p>
        <p id="warning" style="color:red;display:none;">日期輸入不正確，請輸入至少一日後的日期</p>







      <!--Not done-->
      <p id="disappear_self_time" style="display:none;"><span>自取時間<br>
      <select class="" id="self_time" name="self_time" required="required" >
          <option value="">請選擇</option>
          <option value="11:30-12:00">11:30-12:00</option>
          <option value="12:00-12:30">12:00-12:30</option>
          <option value="12:30-13:00">12:30-13:00</option>
          <option value="13:00-13:30">13:00-13:30</option>
          <option value="13:30-14:00">13:30-14:00</option>
          <option value="14:00-14:30">14:00-14:30</option>
          <option value="14:30-15:00">14:30-15:00</option>
          <option value="15:00-15:30">15:00-15:30</option>
          <option value="15:30-16:00">15:30-16:00</option>
          <option value="16:00-16:30">16:00-16:30</option>
          <option value="16:30-17:00">16:30-17:00</option>
          <option value="17:00-17:30">17:00-17:30</option>
          <option value="17:30-18:00">17:30-18:00</option>
          <option value="18:00-18:30">18:00-18:30</option>
          <option value="18:30-19:00">18:30-19:00</option>
          <option value="19:00-19:30">19:00-19:30</option>
          <option value="19:30-20:00">19:30-20:00</option>
        </select></span></p>
      <p>
      <p id="disappear_deliver_time" style="display:none;"><span>收貨時段<br>
        <select class="" id="deliver_time" name="deliver_time" required="required">
            <option value="">請選擇</option>
            <option value="11:30-13:30">11:30-13:30</option>
            <option value="12:30-14:30">12:30-14:30</option>
            <option value="13:30-15:30">13:30-15:30</option>
            <option value="14:30-16:30">14:30-16:30</option>
            <option value="15:30-17:30">15:30-17:30</option>
            <option value="16:30-18:30">16:30-18:30</option>
            <option value="17:30-19:30">17:30-19:30</option>
            <option value="18:30-20:30">18:30-20:30</option>
          </select></span></p>
        <p id="disappear_deliver_time_remind" style="display:none;"><span>如需指定時間送貨，請聯絡客服（可能需要額外收費）</span></p>
    </div>
  </div>
  <div class="wrapper">
    <div class="lef-col">
      <br>
      <p><span>訂單備註</span></p>
      <textarea placeholder="請問有其他需要嗎？" name="special_request" style="width:80%; height:20%; overflow:scroll;"></textarea>
      <div style="display:none;">
      <input class="tophp" type="text" name="qa" id="qa" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qb" id="qb"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qc" id="qc"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qd" id="qd"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qe" id="qe"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qf" id="qf"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qg" id="qg"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qh" id="qh"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qi" id="qi"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qj" id="qj"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qk" id="qk"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="ql" id="ql"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qm" id="qm"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qn" id="qn"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qo" id="qo"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qp" id="qp"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qq" id="qq"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qr" id="qr"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qs" id="qs"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qt" id="qt"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qu" id="qu"value="" autocomplete="off"></input>

      <input class="tophp" type="text" name="oa" id="oa"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="ob" id="ob"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="oc" id="oc"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="od" id="od"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="oe" id="oe"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="of" id="of"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="og" id="og"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="oh" id="oh"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="oi" id="oi"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="oj" id="oj"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="ok" id="ok"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="ol" id="ol"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="om" id="om"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="on" id="on"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="oo" id="oo"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="op" id="op"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="oq" id="oq"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="or" id="or" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="os" id="os" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="ot" id="ot" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="ou" id="ou" value="" autocomplete="off"></input>

      <input type="text" id="oss" name="oss" value=""></input>
      <input type="text" id="qss" name="qss" value=""></input>

      <input type="text" id="ols" name="ols" value=""></input>
      <input type="text" id="qls" name="qls" value=""></input>

      <input type="text" id="osss" name="osss" value=""></input>
      <input type="text" id="qsss" name="qsss" value=""></input>

      <input type="text" id="ofs" name="ofs" value=""></input>
      <input type="text" id="qfs" name="qfs" value=""></input>


      <input type="text" id="saa" name="saa" value=""></input>
      <input type="text" id="sab" name="sab" value=""></input>
      <input type="text" id="sac" name="sac" value=""></input>
      <input type="text" id="spa" name="spa" value=""></input>
      <input type="text" id="sma" name="sma" value=""></input>
      <input type="text" id="smb" name="smb" value=""></input>


      <input type="text" id="laa" name="laa" value=""></input>
      <input type="text" id="lab" name="lab" value=""></input>
      <input type="text" id="lac" name="lac" value=""></input>
      <input type="text" id="lad" name="lad" value=""></input>
      <input type="text" id="lpa" name="lpa" value=""></input>
      <input type="text" id="lpb" name="lpb" value=""></input>
      <input type="text" id="lma" name="lma" value=""></input>
      <input type="text" id="lmb" name="lmb" value=""></input>
      <input type="text" id="lmc" name="lmc" value=""></input>

      <input type="text" id="ssaa" name="ssaa" value=""></input>
      <input type="text" id="ssab" name="ssab" value=""></input>
      <input type="text" id="ssac" name="ssac" value=""></input>
      <input type="text" id="ssad" name="ssad" value=""></input>
      <input type="text" id="ssae" name="ssae" value=""></input>
      <input type="text" id="sspa" name="sspa" value=""></input>
      <input type="text" id="sspb" name="sspb" value=""></input>
      <input type="text" id="sspc" name="sspc" value=""></input>
      <input type="text" id="ssma" name="ssma" value=""></input>
      <input type="text" id="ssmb" name="ssmb" value=""></input>
      <input type="text" id="ssmc" name="ssmc" value=""></input>
      <input type="text" id="ssmd" name="ssmd" value=""></input>

      <input type="text" id="faa" name="faa" value=""></input>
      <input type="text" id="fab" name="fab" value=""></input>
      <input type="text" id="fpa" name="fpa" value=""></input>
      <input type="text" id="fma" name="fma" value=""></input>

      <input type="text" id="osl" name="osl" value=""></input>
      <input type="text" id="qsl" name="qsl" value=""></input>
      <input type="text" id="osh" name="osh" value=""></input>
      <input type="text" id="qsh" name="qsh" value=""></input>
      <input type="text" id="osc" name="osc" value=""></input>
      <input type="text" id="qsc" name="qsc" value=""></input>
      <input type="text" id="osm" name="osm" value=""></input>
      <input type="text" id="qsm" name="qsm" value=""></input>


      <input class="tophp" type="text" name="otwt" id="otwt"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="omg" id="omg"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="oog" id="oog"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="olg" id="olg"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="orb" id="orb"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="ool" id="ool"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="ots" id="ots"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="otl" id="otl"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="oms" id="oms" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="oml" id="oml" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="ocs" id="ocs" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="ocl" id="ocl" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qtwt" id="qtwt"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qmg" id="qmg"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qog" id="qog"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qlg" id="qlg"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qrb" id="qrb"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qol" id="qol"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qts" id="qts"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qtl" id="qtl"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qms" id="qms" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qml" id="qml" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qcs" id="qcs" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qcl" id="qcl" value="" autocomplete="off"></input>

      <input class="tophp" type="text" name="ostwt" id="ostwt"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="osmg" id="osmg"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="osog" id="osog"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="oslg" id="oslg"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="osrb" id="osrb"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="osol" id="osol"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="osts" id="osts"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="ostl" id="ostl"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="osms" id="osms" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="osml" id="osml" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="oscs" id="oscs" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="oscl" id="oscl" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qstwt" id="qstwt"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qsmg" id="qsmg"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qsog" id="qsog"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qslg" id="qslg"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qsrb" id="qsrb"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qsol" id="qsol"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qsts" id="qsts"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qstl" id="qstl"value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qsms" id="qsms" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qsml" id="qsml" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qscs" id="qscs" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="qscl" id="qscl" value="" autocomplete="off"></input>


      <input class="tophp" type="text" name="reciptnumber" id="reciptnumber" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="finalprice" id="finalprice" value="" autocomplete="off"></input>
      <input class="tophp" type="text" name="del_fee" id="del_fee" value="" autocomplete="off"></input>
    </div>

      <br>
      <br>
      <Br>
    </div>
    <div class="right-col">

      <br>
      <span>你需支付： HK$ </span>
      <span id="price"></span><br>
      <span >（已含運費：HK$
      <span id="fee"></span>.00)</span>
      <br>
      <span>優惠碼：
      <input type="text" name="promo_code" value="" id="promo_code">
      </span>
      <br>
      <span>＊＊＊確認資料無誤了嗎？＊＊＊</span><br>
      <input type="submit" value="按此送出訂單" id="submit_btn" ></input>
    </div>


    <script type="text/javascript">

      var fee =0;
      function checkregion(){
        if(document.getElementById("region").value=="新界"){
          document.getElementById("nt").style.display="inline-block";
          document.getElementById("kl").style.display="none";
          document.getElementById("hki").style.display="none";
          document.getElementById("nt").required="required";
          document.getElementById("kl").required="";
          document.getElementById("hki").required="";
          document.getElementById("warning_two").style.display="none";
          fee=0;
        }
        if(document.getElementById("region").value=="九龍"){
          document.getElementById("nt").style.display="none";
          document.getElementById("kl").style.display="inline-block";
          document.getElementById("hki").style.display="none";
          document.getElementById("nt").required="";
          document.getElementById("kl").required="required";
          document.getElementById("hki").required="";
          document.getElementById("warning_two").style.display="none";
          fee=0;
        }
        if(document.getElementById("region").value=="香港島"){
          document.getElementById("nt").style.display="none";
          document.getElementById("kl").style.display="none";
          document.getElementById("hki").style.display="inline-block";
          document.getElementById("nt").required="";
          document.getElementById("kl").required="";
          document.getElementById("hki").required="required";
          document.getElementById("warning_two").style.display="none";
          fee=0;
        }
        document.getElementById("price").innerHTML=total_price()+fee;

      }

      function checkdelprice(){
        var price = parseInt(total_price());
        if(price<1000){
          if(document.getElementById("nt").value=="八鄉"){
            document.getElementById("deFee").innerHTML="HKD$120.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 120;
          }
          if(document.getElementById("nt").value=="古洞"){
            document.getElementById("deFee").innerHTML="HKD$120.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 120;
          }
          if(document.getElementById("nt").value=="沙頭角"){
            document.getElementById("deFee").innerHTML="HKD$120.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 120;
          }
          if(document.getElementById("nt").value=="上水"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("nt").value=="粉嶺"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("nt").value=="大埔"){
            document.getElementById("deFee").innerHTML="HKD$80.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 80;
          }
          if(document.getElementById("nt").value=="沙田"){
            document.getElementById("deFee").innerHTML="HKD$70.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 70;
          }
          if(document.getElementById("nt").value=="大圍"){
            document.getElementById("deFee").innerHTML="HKD$70.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 70;
          }
          if(document.getElementById("nt").value=="馬鞍山"){
            document.getElementById("deFee").innerHTML="HKD$70.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 70;
          }
          if(document.getElementById("nt").value=="烏溪沙"){
            document.getElementById("deFee").innerHTML="HKD$70.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 70;
          }
          if(document.getElementById("nt").value=="蠔涌"){
            document.getElementById("deFee").innerHTML="HKD$75.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 75;
          }
          if(document.getElementById("nt").value=="西貢"){
            document.getElementById("deFee").innerHTML="HKD$80.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 80;
          }
          if(document.getElementById("nt").value=="將軍澳"){
            document.getElementById("deFee").innerHTML="HKD$80.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 80;
          }
          if(document.getElementById("nt").value=="天水圍"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("nt").value=="元朗"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("nt").value=="錦田"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("nt").value=="屯門"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("nt").value=="深井"){
            document.getElementById("deFee").innerHTML="HKD$80.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 80;
          }
          if(document.getElementById("nt").value=="荃灣"){
            document.getElementById("deFee").innerHTML="HKD$65.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 65;
          }
          if(document.getElementById("nt").value=="葵涌"){
            document.getElementById("deFee").innerHTML="HKD$65.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 65;
          }
          if(document.getElementById("nt").value=="青衣"){
            document.getElementById("deFee").innerHTML="HKD$65.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 65;
          }
          if(document.getElementById("nt").value=="馬灣"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("nt").value=="東涌"){
            document.getElementById("deFee").innerHTML="HKD$110.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 110;
          }
          if(document.getElementById("nt").value=="機場"){
            document.getElementById("deFee").innerHTML="HKD$110.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 110;
          }

          //kowloon

          if(document.getElementById("kl").value=="美孚"){
            document.getElementById("deFee").innerHTML="HKD$55.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 55;
          }
          if(document.getElementById("kl").value=="荔枝角"){
            document.getElementById("deFee").innerHTML="HKD$55.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 55;
          }
          if(document.getElementById("kl").value=="長沙灣"){
            document.getElementById("deFee").innerHTML="HKD$55.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 55;
          }
          if(document.getElementById("kl").value=="深水埗"){
            document.getElementById("deFee").innerHTML="HKD$45.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 45;
          }
          if(document.getElementById("kl").value=="太子"){
            document.getElementById("deFee").innerHTML="HKD$35.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 35;
          }
          if(document.getElementById("kl").value=="旺角"){
            document.getElementById("deFee").innerHTML="HKD$35.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 35;
          }
          if(document.getElementById("kl").value=="油麻地"){
            document.getElementById("deFee").innerHTML="HKD$35.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 35;
          }
          if(document.getElementById("kl").value=="佐敦"){
            document.getElementById("deFee").innerHTML="HKD$35.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 35;
          }
          if(document.getElementById("kl").value=="尖沙咀"){
            document.getElementById("deFee").innerHTML="HKD$35.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 35;
          }
          if(document.getElementById("kl").value=="紅磡"){
            document.getElementById("deFee").innerHTML="HKD$45.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 45;
          }
          if(document.getElementById("kl").value=="土瓜灣"){
            document.getElementById("deFee").innerHTML="HKD$55.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 55;
          }
          if(document.getElementById("kl").value=="九龍城"){
            document.getElementById("deFee").innerHTML="HKD$55.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 55;
          }
          if(document.getElementById("kl").value=="九龍塘"){
            document.getElementById("deFee").innerHTML="HKD$55.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 55;
          }
          if(document.getElementById("kl").value=="樂富"){
            document.getElementById("deFee").innerHTML="HKD$55.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 55;
          }
          if(document.getElementById("kl").value=="黃大仙"){
            document.getElementById("deFee").innerHTML="HKD$55.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 55;
          }
          if(document.getElementById("kl").value=="彩虹"){
            document.getElementById("deFee").innerHTML="HKD$55.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 55;
          }
          if(document.getElementById("kl").value=="九龍灣"){
            document.getElementById("deFee").innerHTML="HKD$65.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 65;
          }
          if(document.getElementById("kl").value=="牛頭角"){
            document.getElementById("deFee").innerHTML="HKD$65.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 65;
          }
          if(document.getElementById("kl").value=="觀塘"){
            document.getElementById("deFee").innerHTML="HKD$65.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 65;
          }
          if(document.getElementById("kl").value=="秀茂坪"){
            document.getElementById("deFee").innerHTML="HKD$65.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 65;
          }
          if(document.getElementById("kl").value=="藍田"){
            document.getElementById("deFee").innerHTML="HKD$65.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 65;
          }
          if(document.getElementById("kl").value=="油塘"){
            document.getElementById("deFee").innerHTML="HKD$65.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 65;
          }
          if(document.getElementById("hki").value=="鴨脷洲"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("hki").value=="香港仔"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("hki").value=="薄扶林"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("hki").value=="西環/西營盤"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="上環"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="中環"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="金鐘"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="灣仔"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="跑馬地"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="銅鑼灣"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="天后"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="北角"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="鰂魚涌"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="太古"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="西灣河"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="筲箕灣"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="杏花邨"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="柴灣"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="小西灣"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
        }
        if(price>=1000 && price<1500){

          if(document.getElementById("nt").value=="八鄉"){
            document.getElementById("deFee").innerHTML="HKD$120.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 120;
          }
          if(document.getElementById("nt").value=="古洞"){
            document.getElementById("deFee").innerHTML="HKD$120.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 120;
          }
          if(document.getElementById("nt").value=="沙頭角"){
            document.getElementById("deFee").innerHTML="HKD$120.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 120;
          }
          if(document.getElementById("nt").value=="上水"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("nt").value=="粉嶺"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("nt").value=="大埔"){
            document.getElementById("deFee").innerHTML="HKD$80.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 80;
          }
          if(document.getElementById("nt").value=="沙田"){
            document.getElementById("deFee").innerHTML="HKD$70.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 70;
          }
          if(document.getElementById("nt").value=="大圍"){
            document.getElementById("deFee").innerHTML="HKD$70.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 70;
          }
          if(document.getElementById("nt").value=="馬鞍山"){
            document.getElementById("deFee").innerHTML="HKD$70.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 70;
          }
          if(document.getElementById("nt").value=="烏溪沙"){
            document.getElementById("deFee").innerHTML="HKD$70.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 70;
          }
          if(document.getElementById("nt").value=="蠔涌"){
            document.getElementById("deFee").innerHTML="HKD$75.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 75;
          }
          if(document.getElementById("nt").value=="西貢"){
            document.getElementById("deFee").innerHTML="HKD$80.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 80;
          }
          if(document.getElementById("nt").value=="將軍澳"){
            document.getElementById("deFee").innerHTML="HKD$80.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 80;
          }
          if(document.getElementById("nt").value=="天水圍"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("nt").value=="元朗"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("nt").value=="錦田"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("nt").value=="屯門"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("nt").value=="深井"){
            document.getElementById("deFee").innerHTML="HKD$80.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 80;
          }
          if(document.getElementById("nt").value=="荃灣"){
            document.getElementById("deFee").innerHTML="HKD$65.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 65;
          }
          if(document.getElementById("nt").value=="葵涌"){
            document.getElementById("deFee").innerHTML="HKD$65.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 65;
          }
          if(document.getElementById("nt").value=="青衣"){
            document.getElementById("deFee").innerHTML="HKD$65.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 65;
          }
          if(document.getElementById("nt").value=="馬灣"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("nt").value=="東涌"){
            document.getElementById("deFee").innerHTML="HKD$110.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 110;
          }
          if(document.getElementById("nt").value=="機場"){
            document.getElementById("deFee").innerHTML="HKD$110.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 110;
          }

          if (document.getElementById("region").value=="九龍") {
            document.getElementById("warning_two").style.display="none";
            fee=0;
          }
          if(document.getElementById("hki").value=="鴨脷洲"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("hki").value=="香港仔"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("hki").value=="薄扶林"){
            document.getElementById("deFee").innerHTML="HKD$100.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 100;
          }
          if(document.getElementById("hki").value=="西環/西營盤"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="上環"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="中環"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="金鐘"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="灣仔"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="跑馬地"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="銅鑼灣"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="天后"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="北角"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="鰂魚涌"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="太古"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="西灣河"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="筲箕灣"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="杏花邨"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="柴灣"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
          if(document.getElementById("hki").value=="小西灣"){
            document.getElementById("deFee").innerHTML="HKD$90.00";
            document.getElementById("warning_two").style.display="inline-block";
            fee = 90;
          }
        }
        document.getElementById("price").innerHTML=total_price()+fee;
        var lll = parseInt(document.getElementById("price").innerHTML);
        document.getElementById("finalprice").value=lll;
        document.getElementById("fee").innerHTML=fee;
        document.getElementById("del_fee").value=parseInt(fee);
      }





    </script>

  </div>

</div>
</form>



<form class="myForm" id="myForm" action="mail.php" method="post">

        <div class="noUse" style="display:none;">



        </div>
</form>

<script type="text/javascript">

</script>
<!--main body end-->

<!--footer start-->



<table  class="foot">
    <tr class="one_row">
      <td class="foot-lef-col">
          <h4><span style="font-size:24px;">顧客服務</span></h4>
          <p><a href="../pages/QnA.html" target="_self"><span>常見問題</span></a></p>
          <p>​<a href="../pages/delivery.html" target="_self"><span>運送服務方式</span></a></p>
          <p><a href="../pages/payment.html" target="_self"><span>付款服務方式</span></a></p>
        </td>
        <td class="foot-right-col">
          <h4><span style="font-size:24px;">聯絡我們</span></h4>
              <ul class="list-unstyled">
                <li>電話:9887 7619(可whatsapp）</li>
                <li>時間:12:00-22:00</li>
                <li>電郵:info@aoaodelivery.com</li>
              </ul>
        </td>
    </tr>
  </table>
  <br>
  <table class="foot">
    <tr class="warning-container">
      <td class="warning-wrapper">
          <p>* 圖片只供參考 *</p>
          <p>* 未經許可，網站上的圖片及文章不得轉載或引用 *</p>
          <p>即日外賣急單專線: 9887 7819 (可WhatsApp聯絡)</p>
          <p>電郵: info@aoaodelivery.com</p>
        </td>
    </tr>
    <tr>  <td class="image-footer">
            <img alt="HKICL | 轉數快" src="https://www.hkma.gov.hk/media/chi/img/smart-consumers/fps_c.png">
            <img alt="PAYME " src="https://static.wixstatic.com/media/576ba0_ab6e102b8afe49d59460133760e44e17~mv2.png/v1/fill/w_520,h_520,al_c,q_85,usm_0.66_1.00_0.01/logo_payme_en.webp">
          </td>
    </tr>
    <tr>
      <td>
      <p class="text-center"><a href="../pages/aboutus.html" style="background-color: rgb(255, 255, 255); font-size: 16px;" target="_self"><span>關於我們</span></a> | <a href="../pages/terms.html" target="_self"><span>條款及細則 </span></a>| 2022 © AOAODELIVERY</p>
    </td>
    </tr>

</table>
<!--footer end-->


  </body>
</html>
