var cdopen = "yes";
function myFunction(btn) {
  document.getElementById("mySidenav").style.width = "250px";

  btn.classList.toggle("change");
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}





function scrolltop(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar_div").style.top = "0";
    document.getElementById("nav_nav_wrap").style.display="none";
  } else {
    document.getElementById("navbar_div").style.top = "-130px";
    document.getElementById("nav_nav_wrap").style.display="block";
  }
}






var Shop_Cart_Open;


//1 --> ordered
//0 --> not ordered
var ribs_ordered =0;
var chick_ordered =0;
var lamb_ordered =0;
var fillet_ordered =0;
var sirloin_ordered =0;
var cowtongue_ordered =0;
var mushpasta_ordered =0;
var tomatopasta_ordered =0;
var mushpasta_ordered =0;
var chickpasta_ordered =0;
var caesar_ordered =0;
var shrimpsalad_ordered =0;
var avocado_ordered =0;
var mixcombo_ordered =0;
var tunapack_ordered =0;
var toastnut_ordered =0;
var cabonara_ordered =0;
var lobster_ordered =0;
var cabbage_ordered =0;
var hol_ordered =0;
var meatball_ordered =0;
var smallset_ordered =0;
var largeset_ordered =0;
var single_lobster_ordered =0;
var single_hol_ordered =0;
var single_cabbage_ordered =0;
var single_meatball_ordered =0;



//quantity of items
var quantity_ribs =0;
var quantity_chick =0;
var quantity_lamb =0;
var quantity_fillet =0;
var quantity_sirloin =0;
var quantity_cowtongue =0;
var quantity_shrimprisotto =0;
var quantity_tomatopasta =0;
var quantity_mushpasta =0;
var quantity_chickpasta =0;
var quantity_caesar =0;
var quantity_shrimpsalad =0;
var quantity_avocado =0;
var quantity_mixcombo =0;
var quantity_tunapack =0;
var quantity_toastnut =0;
var quantity_cabonara =0;
var quantity_lobster =0;
var quantity_cabbage =0;
var quantity_hol =0;
var quantity_meatball =0;
var quantity_smallset=0;
var quantity_largeset =0;
var quantity_single_lobster =0;
var quantity_single_hol =0;
var quantity_single_meatball =0;
var quantity_single_cabbage =0;


//function of counting price
function total_price(){
  var real_time_price;
  real_time_price = localStorage.getItem("quantity_ribs")*428 + localStorage.getItem("quantity_chick")*398 + localStorage.getItem("quantity_lamb")*468 + localStorage.getItem("quantity_fillet")*408 + localStorage.getItem("quantity_sirloin")*478 + localStorage.getItem("quantity_cowtongue")*338 + localStorage.getItem("quantity_shrimprisotto")*348 + localStorage.getItem("quantity_tomatopasta")*298 + localStorage.getItem("quantity_mushpasta")*328 + localStorage.getItem("quantity_chickpasta")*318 + localStorage.getItem("quantity_cabonara")*328 + localStorage.getItem("quantity_caesar")*188 + localStorage.getItem("quantity_shrimpsalad")*198 + localStorage.getItem("quantity_avocado")*208 + localStorage.getItem("quantity_mixcombo")*238 + localStorage.getItem("quantity_tunapack")*198 + localStorage.getItem("quantity_toastnut")*238 +  localStorage.getItem("quantity_smallset")*1188 + localStorage.getItem("quantity_largeset")*1788 + localStorage.getItem("quantity_lobster")*168 + localStorage.getItem("quantity_cabbage")*298 +localStorage.getItem("quantity_hol")*218+ localStorage.getItem("quantity_meatball")*128+ localStorage.getItem("quantity_single_lobster")*208+ localStorage.getItem("quantity_single_hol")*240+ localStorage.getItem("quantity_single_cabbage")*368+ localStorage.getItem("quantity_single_meatball")*148 + localStorage.getItem("quantity_lemonginger")*23 + localStorage.getItem("quantity_milkgreen")*28 + localStorage.getItem("quantity_oolong")*23 + localStorage.getItem("quantity_redbean")*26 + localStorage.getItem("quantity_orangegreen")*23 + localStorage.getItem("quantity_twt")*28 +localStorage.getItem("quantity_ware")*10 +localStorage.getItem("quantity_tiramisu_small")*168 +localStorage.getItem("quantity_tiramisu_large")*218 +localStorage.getItem("quantity_mocha_small")*172 +localStorage.getItem("quantity_mocha_large")*238 +localStorage.getItem("quantity_choco_small")*158 +localStorage.getItem("quantity_choco_large")*208;
  real_time_price = real_time_price + localStorage.getItem("quantity_set_lemonginger")*23 + localStorage.getItem("quantity_set_milkgreen")*28 + localStorage.getItem("quantity_set_oolong")*23 + localStorage.getItem("quantity_set_redbean")*26 + localStorage.getItem("quantity_set_orangegreen")*23 + localStorage.getItem("quantity_set_twt")*28 +localStorage.getItem("quantity_set_tiramisu_small")*98 +localStorage.getItem("quantity_set_tiramisu_large")*138 +localStorage.getItem("quantity_set_mocha_small")*72 +localStorage.getItem("quantity_set_mocha_large")*138 +localStorage.getItem("quantity_set_choco_small")*58 +localStorage.getItem("quantity_set_choco_large")*108;
  real_time_price = real_time_price + localStorage.getItem("addmoneycountapp")*22 + localStorage.getItem("addmoneycountpas")*33 + localStorage.getItem("addmoneycountmai")*36;
  real_time_price = real_time_price + localStorage.getItem("quantity_superset")*2688 + localStorage.getItem("quantity_friendset")*688;
  real_time_price = real_time_price + localStorage.getItem("addmoneycountappf")*15 + localStorage.getItem("addmoneycountpasf")*22 + localStorage.getItem("addmoneycountmaif")*28;
  return real_time_price;
}

//function of counting quantity
function total_quantity(){

  var real_time_quantity;
  real_time_quantity = localStorage.getItem("quantity_ribs")*1 + localStorage.getItem("quantity_chick")*1 + localStorage.getItem("quantity_lamb")*1 + localStorage.getItem("quantity_fillet")*1 + localStorage.getItem("quantity_sirloin")*1 + localStorage.getItem("quantity_cowtongue")*1 + localStorage.getItem("quantity_shrimprisotto")*1 + localStorage.getItem("quantity_tomatopasta")*1 + localStorage.getItem("quantity_mushpasta")*1 + localStorage.getItem("quantity_chickpasta")*1 + localStorage.getItem("quantity_caesar")*1 + localStorage.getItem("quantity_shrimpsalad")*1 + localStorage.getItem("quantity_avocado")*1 + localStorage.getItem("quantity_mixcombo")*1 + localStorage.getItem("quantity_tunapack")*1 + localStorage.getItem("quantity_toastnut")*1 + localStorage.getItem("quantity_cabonara")*1  + localStorage.getItem("quantity_smallset")*1 + localStorage.getItem("quantity_largeset")*1 +localStorage.getItem("quantity_lobster")*1 + localStorage.getItem("quantity_cabbage")*1 +localStorage.getItem("quantity_hol")*1 + localStorage.getItem("quantity_meatball")*1+ localStorage.getItem("quantity_single_lobster")*1+ localStorage.getItem("quantity_single_hol")*1+ localStorage.getItem("quantity_single_cabbage")*1+ localStorage.getItem("quantity_single_meatball")*1+ localStorage.getItem("quantity_lemonginger")*1 + localStorage.getItem("quantity_milkgreen")*1 + localStorage.getItem("quantity_oolong")*1 + localStorage.getItem("quantity_redbean")*1 + localStorage.getItem("quantity_orangegreen")*1 + localStorage.getItem("quantity_twt")*1 +localStorage.getItem("quantity_ware")*1 +localStorage.getItem("quantity_tiramisu_small")*1 +localStorage.getItem("quantity_tiramisu_large")*1 +localStorage.getItem("quantity_mocha_small")*1 +localStorage.getItem("quantity_mocha_large")*1 +localStorage.getItem("quantity_choco_small")*1 +localStorage.getItem("quantity_choco_large")*1;
  real_time_quantity = real_time_quantity + localStorage.getItem("quantity_set_lemonginger")*1 + localStorage.getItem("quantity_set_milkgreen")*1 + localStorage.getItem("quantity_set_oolong")*1 + localStorage.getItem("quantity_set_redbean")*1 + localStorage.getItem("quantity_set_orangegreen")*1 + localStorage.getItem("quantity_set_twt")*1 +localStorage.getItem("quantity_set_tiramisu_small")*1 +localStorage.getItem("quantity_set_tiramisu_large")*1 +localStorage.getItem("quantity_set_mocha_small")*1 +localStorage.getItem("quantity_set_mocha_large")*1 +localStorage.getItem("quantity_set_choco_small")*1 +localStorage.getItem("quantity_set_choco_large")*1;
  real_time_quantity = real_time_quantity + localStorage.getItem("quantity_superset")*1 + localStorage.getItem("quantity_friendset")*1;
  return real_time_quantity;
}

//clear all
function clearAllItems(){
  document.getElementById("scart-item-wrap").innerHTML="";
  quantity_ribs =0;
  quantity_chick =0;
  quantity_lamb =0;
  quantity_fillet =0;
  quantity_sirloin =0;
  quantity_cowtongue =0;
  quantity_shrimprisotto =0;
  quantity_tomatopasta =0;
  quantity_mushpasta =0;
  quantity_chickpasta =0;
  quantity_caesar =0;
  quantity_shrimpsalad =0;
  quantity_avocado =0;
  quantity_mixcombo =0;
  quantity_tunapack =0;
  quantity_toastnut =0;
  quantity_cabonara =0;
  quantity_lobster =0;
  quantity_cabbage =0;
  quantity_hol =0;
  quantity_meatball =0;
  quantity_smallset =0
  quantity_largeset =0;
  ribs_ordered =0;
  chick_ordered =0;
  lamb_ordered =0;
  fillet_ordered =0;
  sirloin_ordered =0;
  cowtongue_ordered =0;
  shrimprisotto_ordered =0;
  tomatopasta_ordered =0;
  mushpasta_ordered =0;
  chickpasta_ordered =0;
  caesar_ordered =0;
  shrimpsalad_ordered =0;
  avocado_ordered =0;
  mixcombo_ordered =0;
  tunapack_ordered =0;
  toastnut_ordered =0;
  cabonara_ordered =0;
  lobster_ordered =0;
  cabbage_ordered =0;
  hol_ordered =0;
  meatball_ordered =0;
  smallset_ordered =0;
  largeset_ordered =0;
  localStorage.setItem("ribs_ordered",0);
  localStorage.setItem("chick_ordered",0);
  localStorage.setItem("lamb_ordered",0);
  localStorage.setItem("fillet_ordered",0);
  localStorage.setItem("sirloin_ordered",0);
  localStorage.setItem("cowtongue_ordered",0);
  localStorage.setItem("shrimprisotto_ordered",0);
  localStorage.setItem("tomatopasta_ordered",0);
  localStorage.setItem("mushpasta_ordered",0);
  localStorage.setItem("chickpasta_ordered",0);
  localStorage.setItem("caesar_ordered",0);
  localStorage.setItem("shrimpsalad_ordered",0);
  localStorage.setItem("avocado_ordered",0);
  localStorage.setItem("mixcombo_ordered",0);
  localStorage.setItem("tunapack_ordered",0);
  localStorage.setItem("toastnut_ordered",0);
  localStorage.setItem("cabonara_ordered",0);
  localStorage.setItem("lobster_ordered",0);
  localStorage.setItem("cabbage_ordered",0);
  localStorage.setItem("hol_ordered",0);
  localStorage.setItem("meatball_ordered",0);
  localStorage.setItem("largeset_ordered",0);
  localStorage.setItem("smallset_ordered",0);
  localStorage.setItem("single_lobster_ordered",0);
  localStorage.setItem("single_hol_ordered",0);
  localStorage.setItem("single_cabbage_ordered",0);
  localStorage.setItem("single_meatball_ordered",0);
  localStorage.setItem("lemonginger_ordered",0);
  localStorage.setItem("milkgreen_ordered",0);
  localStorage.setItem("oolong_ordered",0);
  localStorage.setItem("redbean_ordered",0);
  localStorage.setItem("orangegreen_ordered",0);
  localStorage.setItem("twt_ordered",0);
  localStorage.setItem("ware_ordered",0);
  localStorage.setItem("tiramisu_small_ordered",0);
  localStorage.setItem("tiramisu_large_ordered",0);
  localStorage.setItem("mocha_small_ordered",0);
  localStorage.setItem("mocha_large_ordered",0);
  localStorage.setItem("choco_small_ordered",0);
  localStorage.setItem("choco_large_ordered",0);

  localStorage.setItem("set_tiramisu_small_ordered",0);
  localStorage.setItem("set_tiramisu_large_ordered",0);
  localStorage.setItem("set_mocha_small_ordered",0);
  localStorage.setItem("set_mocha_large_ordered",0);
  localStorage.setItem("set_choco_small_ordered",0);
  localStorage.setItem("set_choco_large_ordered",0);
  localStorage.setItem("set_lemonginger_ordered",0);
  localStorage.setItem("set_milkgreen_ordered",0);
  localStorage.setItem("set_oolong_ordered",0);
  localStorage.setItem("set_redbean_ordered",0);
  localStorage.setItem("set_orangegreen_ordered",0);
  localStorage.setItem("set_twt_ordered",0);

  localStorage.setItem("superset_ordered",0);
  localStorage.setItem("friendset_ordered",0);

  localStorage.setItem("quantity_ribs",0);
  localStorage.setItem("quantity_chick",0);
  localStorage.setItem("quantity_lamb",0);
  localStorage.setItem("quantity_fillet",0);
  localStorage.setItem("quantity_sirloin",0);
  localStorage.setItem("quantity_cowtongue",0);
  localStorage.setItem("quantity_shrimprisotto",0);
  localStorage.setItem("quantity_tomatopasta",0);
  localStorage.setItem("quantity_mushpasta",0);
  localStorage.setItem("quantity_chickpasta",0);
  localStorage.setItem("quantity_caesar",0);
  localStorage.setItem("quantity_shrimpsalad",0);
  localStorage.setItem("quantity_avocado",0);
  localStorage.setItem("quantity_mixcombo",0);
  localStorage.setItem("quantity_tunapack",0);
  localStorage.setItem("quantity_toastnut",0);
  localStorage.setItem("quantity_cabonara",0);
  localStorage.setItem("quantity_lobster",0);
  localStorage.setItem("quantity_cabbage",0);
  localStorage.setItem("quantity_hol",0);
  localStorage.setItem("quantity_meatball",0);
  localStorage.setItem("quantity_smallset",0);
  localStorage.setItem("quantity_largeset",0);
  localStorage.setItem("quantity_single_lobster",0);
  localStorage.setItem("quantity_single_hol",0);
  localStorage.setItem("quantity_single_cabbage",0);
  localStorage.setItem("quantity_single_meatball",0);
  localStorage.setItem("quantity_lemonginger",0);
  localStorage.setItem("quantity_milkgreen",0);
  localStorage.setItem("quantity_oolong",0);
  localStorage.setItem("quantity_redbean",0);
  localStorage.setItem("quantity_orangegreen",0);
  localStorage.setItem("quantity_twt",0);
  localStorage.setItem("quantity_ware",0);
  localStorage.setItem("quantity_tiramisu_small",0);
  localStorage.setItem("quantity_tiramisu_large",0);
  localStorage.setItem("quantity_mocha_small",0);
  localStorage.setItem("quantity_mocha_large",0);
  localStorage.setItem("quantity_choco_small",0);
  localStorage.setItem("quantity_choco_large",0);

  localStorage.setItem("quantity_set_tiramisu_small",0);
  localStorage.setItem("quantity_set_tiramisu_large",0);
  localStorage.setItem("quantity_set_mocha_small",0);
  localStorage.setItem("quantity_set_mocha_large",0);
  localStorage.setItem("quantity_set_choco_small",0);
  localStorage.setItem("quantity_set_choco_large",0);
  localStorage.setItem("quantity_set_lemonginger",0);
  localStorage.setItem("quantity_set_milkgreen",0);
  localStorage.setItem("quantity_set_oolong",0);
  localStorage.setItem("quantity_set_redbean",0);
  localStorage.setItem("quantity_set_orangegreen",0);
  localStorage.setItem("quantity_set_twt",0);

  localStorage.setItem("quantity_superset",0);
  localStorage.setItem("quantity_friendset",0);

  localStorage.setItem("addmoneycountapp",0);
  localStorage.setItem("addmoneycountpas",0);
  localStorage.setItem("addmoneycountmai",0);
  localStorage.setItem("addmoneycountappf",0);
  localStorage.setItem("addmoneycountpasf",0);
  localStorage.setItem("addmoneycountmaif",0);


  document.getElementById("change-quantity").innerHTML=total_quantity();

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
}


//delete single lobster

function deleteItemSinglelobster(){
  var elem = document.getElementById("scart-single-lobster");
  elem.remove();
  quantity_single_lobster =0;
  single_lobster_ordered =0;

  localStorage.setItem("quantity_single_lobster",0);
  localStorage.setItem("single_lobster_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete single hol

function deleteItemSinglehol(){
  var elem = document.getElementById("scart-single-hol");
  elem.remove();
  quantity_single_hol =0;
  single_hol_ordered =0;

  localStorage.setItem("quantity_single_hol",0);
  localStorage.setItem("single_hol_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete single cabbage

function deleteItemSinglecabbage(){
  var elem = document.getElementById("scart-single-cabbage");
  elem.remove();
  quantity_single_cabbage =0;
  single_cabbage_ordered =0;

  localStorage.setItem("quantity_single_cabbage",0);
  localStorage.setItem("single_cabbage_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete single meatball

function deleteItemSinglemeatball(){
  var elem = document.getElementById("scart-single-meatball");
  elem.remove();
  quantity_single_meatball =0;
  single_meatball_ordered =0;

  localStorage.setItem("quantity_single_meatball",0);
  localStorage.setItem("single_meatball_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete small set lob

function deleteItemSetl(){
  var elem = document.getElementById("scart-setl");
  elem.remove();
  quantity_smallset_lob =0;
  small_lob_ordered =0;

  localStorage.setItem("quantity_lobster",0);
  localStorage.setItem("lobster_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//




//delete small set cabbage

function deleteItemSetc(){
  var elem = document.getElementById("scart-setc");
  elem.remove();
  quantity_cabbage =0;
  small_cabbage_ordered =0;

  localStorage.setItem("quantity_cabbage",0);
  localStorage.setItem("cabbage_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete small set hol

function deleteItemSeth(){
  var elem = document.getElementById("scart-seth");
  elem.remove();
  quantity_hol =0;
  small_hol_ordered =0;

  localStorage.setItem("quantity_hol",0);
  localStorage.setItem("hol_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}


//delete small set meatball

function deleteItemSetm(){
  var elem = document.getElementById("scart-setm");
  elem.remove();
  quantity_smallset_meat =0;
  small_meatball_ordered =0;

  localStorage.setItem("quantity_meatball",0);
  localStorage.setItem("meatball_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete small set tiramisu_small

function deleteItemSetts(){
  var elem = document.getElementById("scart-setts");
  elem.remove();

  localStorage.setItem("quantity_set_tiramisu_small",0);
  localStorage.setItem("set_tiramisu_small_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete small set tiramisu_large

function deleteItemSettl(){
  var elem = document.getElementById("scart-settl");
  elem.remove();

  localStorage.setItem("quantity_set_tiramisu_large",0);
  localStorage.setItem("set_tiramisu_large_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete small set mocha_small

function deleteItemSetms(){
  var elem = document.getElementById("scart-setms");
  elem.remove();

  localStorage.setItem("quantity_set_mocha_small",0);
  localStorage.setItem("set_mocha_small_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete small set mocha_large

function deleteItemSetml(){
  var elem = document.getElementById("scart-setml");
  elem.remove();

  localStorage.setItem("quantity_set_mocha_large",0);
  localStorage.setItem("set_mocha_large_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete small set choco_small

function deleteItemSetcs(){
  var elem = document.getElementById("scart-setcs");
  elem.remove();

  localStorage.setItem("quantity_set_choco_small",0);
  localStorage.setItem("set_choco_small_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete small set choco_large

function deleteItemSetcl(){
  var elem = document.getElementById("scart-setcl");
  elem.remove();

  localStorage.setItem("quantity_set_choco_large",0);
  localStorage.setItem("set_choco_large_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete small set twt

function deleteItemSettwt(){
  var elem = document.getElementById("scart-settwt");
  elem.remove();

  localStorage.setItem("quantity_set_twt",0);
  localStorage.setItem("set_twt_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete small set milkgreen

function deleteItemSetmilkgreen(){
  var elem = document.getElementById("scart-setmilkgreen");
  elem.remove();

  localStorage.setItem("quantity_set_milkgreen",0);
  localStorage.setItem("set_milkgreen_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete small set orangegreen

function deleteItemSetorangegreen(){
  var elem = document.getElementById("scart-setorangegreen");
  elem.remove();

  localStorage.setItem("quantity_set_orangegreen",0);
  localStorage.setItem("set_orangegreen_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete small set lemonginger

function deleteItemSetlemonginger(){
  var elem = document.getElementById("scart-setlemonginger");
  elem.remove();

  localStorage.setItem("quantity_set_lemonginger",0);
  localStorage.setItem("set_lemonginger_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete small set redbean

function deleteItemSetredbean(){
  var elem = document.getElementById("scart-setredbean");
  elem.remove();

  localStorage.setItem("quantity_set_redbean",0);
  localStorage.setItem("set_redbean_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete small set oolong

function deleteItemSetoolong(){
  var elem = document.getElementById("scart-setoolong");
  elem.remove();

  localStorage.setItem("quantity_set_oolong",0);
  localStorage.setItem("set_oolong_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete ribs

function deleteItemRibs(){
  var elem = document.getElementById("scart-ribs");
  elem.remove();
  quantity_ribs =0;
  ribs_ordered =0;

  localStorage.setItem("quantity_ribs",0);
  localStorage.setItem("ribs_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete chick

function deleteItemChick(){
  var elem = document.getElementById("scart-chick");
  elem.remove();
  quantity_chick =0;
  chick_ordered =0;

  localStorage.setItem("quantity_chick",0);
  localStorage.setItem("chick_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete lamb

function deleteItemLamb(){
  var elem = document.getElementById("scart-lamb");
  elem.remove();
  quantity_lamb =0;
  lamb_ordered =0;

  localStorage.setItem("quantity_lamb",0);
  localStorage.setItem("lamb_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete fillet

function deleteItemFillet(){
  var elem = document.getElementById("scart-fillet");
  elem.remove();
  quantity_fillet =0;
  fillet_ordered =0;

  localStorage.setItem("quantity_fillet",0);
  localStorage.setItem("fillet_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete sirloin

function deleteItemSirloin(){
  var elem = document.getElementById("scart-sirloin");
  elem.remove();
  quantity_sirloin =0;
  sirloin_ordered =0;

  localStorage.setItem("quantity_sirloin",0);
  localStorage.setItem("sirloin_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete caesar

function deleteItemCaesar(){
  var elem = document.getElementById("scart-caesar");
  elem.remove();
  quantity_caesar =0;
  caesar_ordered =0;

  localStorage.setItem("quantity_caesar",0);
  localStorage.setItem("caesar_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete shrimpsalad

function deleteItemShrimpsalad(){
  var elem = document.getElementById("scart-shrimpsalad");
  elem.remove();
  quantity_shrimpsalad =0;
  shrimpsalad_ordered =0;

  localStorage.setItem("quantity_shrimpsalad",0);
  localStorage.setItem("shrimpsalad_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete avocado

function deleteItemAvocado(){
  var elem = document.getElementById("scart-avocado");
  elem.remove();
  quantity_avocado =0;
  avocado_ordered =0;

  localStorage.setItem("quantity_avocado",0);
  localStorage.setItem("avocado_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete mixcombo

function deleteItemMixcombo(){
  var elem = document.getElementById("scart-mixcombo");
  elem.remove();
  quantity_mixcombo =0;
  mixcombo_ordered =0;

  localStorage.setItem("quantity_mixcombo",0);
  localStorage.setItem("mixcombo_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete tunapack

function deleteItemTunapack(){
  var elem = document.getElementById("scart-tunapack");
  elem.remove();
  quantity_tunapack =0;
  tunapack_ordered =0;

  localStorage.setItem("quantity_tunapack",0);
  localStorage.setItem("tunapack_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete toastnut

function deleteItemToastnut(){
  var elem = document.getElementById("scart-toastnut");
  elem.remove();
  quantity_toastnut =0;
  toastnut_ordered =0;

  localStorage.setItem("quantity_toastnut",0);
  localStorage.setItem("toastnut_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete cowtongue

function deleteItemCowtongue(){
  var elem = document.getElementById("scart-cowtongue");
  elem.remove();
  quantity_cowtongue =0;
  cowtongue_ordered =0;

  localStorage.setItem("quantity_cowtongue",0);
  localStorage.setItem("cowtongue_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete shrimprisotto

function deleteItemShrimprisotto(){
  var elem = document.getElementById("scart-shrimprisotto");
  elem.remove();
  quantity_shrimprisotto =0;
  shrimprisotto_ordered =0;

  localStorage.setItem("quantity_shrimprisotto",0);
  localStorage.setItem("shrimprisotto_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete tomatopasta

function deleteItemTomatopasta(){
  var elem = document.getElementById("scart-tomatopasta");
  elem.remove();
  quantity_tomatopasta =0;
  tomatopasta_ordered =0;

  localStorage.setItem("quantity_tomatopasta",0);
  localStorage.setItem("tomatopasta_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete mushpasta

function deleteItemMushpasta(){
  var elem = document.getElementById("scart-mushpasta");
  elem.remove();
  quantity_mushpasta =0;
  mushpasta_ordered =0;

  localStorage.setItem("quantity_mushpasta",0);
  localStorage.setItem("mushpasta_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete chickpasta

function deleteItemChickpasta(){
  var elem = document.getElementById("scart-chickpasta");
  elem.remove();
  quantity_chickpasta =0;
  chickpasta_ordered =0;

  localStorage.setItem("quantity_chickpasta",0);
  localStorage.setItem("chickpasta_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete cabonara

function deleteItemCabonara(){
  var elem = document.getElementById("scart-cabonara");
  elem.remove();
  quantity_cabonara =0;
  cabonara_ordered =0;

  localStorage.setItem("quantity_cabonara",0);
  localStorage.setItem("cabonara_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete smallset

function deleteItemSmallset(){
  var elem = document.getElementById("scart-smallset");
  elem.remove();
  quantity_smallset =0;
  smallset_ordered =0;

  localStorage.setItem("smallset_ordered",0);
  localStorage.setItem("quantity_smallset",0);


  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete largeset

function deleteItemLargeset(){
  var elem = document.getElementById("scart-largeset");
  elem.remove();
  quantity_largeset =0;
  largeset_ordered =0;

  localStorage.setItem("quantity_largeset",0);
  localStorage.setItem("largeset_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete superset

function deleteItemSuperset(){
  var elem = document.getElementById("scart-superset");
  elem.remove();
  quantity_superset =0;
  superset_ordered =0;

  localStorage.setItem("quantity_superset",0);
  localStorage.setItem("superset_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete friend

function deleteItemFriendset(){
  var elem = document.getElementById("scart-friendset");
  elem.remove();
  quantity_friendset =0;
  friendset_ordered =0;

  localStorage.setItem("quantity_friendset",0);
  localStorage.setItem("friendset_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete lemonginger

function deleteItemLemonginger(){
  var elem = document.getElementById("scart-lemonginger");
  elem.remove();
  quantity_lemonginger =0;
  lemonginger_ordered =0;

  localStorage.setItem("quantity_lemonginger",0);
  localStorage.setItem("lemonginger_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete milkgreen

function deleteItemMilkgreen(){
  var elem = document.getElementById("scart-milkgreen");
  elem.remove();
  quantity_milkgreen =0;
  milkgreen_ordered =0;

  localStorage.setItem("quantity_milkgreen",0);
  localStorage.setItem("milkgreen_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete oolong

function deleteItemOolong(){
  var elem = document.getElementById("scart-oolong");
  elem.remove();
  quantity_oolong =0;
  oolong_ordered =0;

  localStorage.setItem("quantity_oolong",0);
  localStorage.setItem("oolong_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete redbean

function deleteItemRedbean(){
  var elem = document.getElementById("scart-redbean");
  elem.remove();
  quantity_redbean =0;
  redbean_ordered =0;

  localStorage.setItem("quantity_redbean",0);
  localStorage.setItem("redbean_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete orangegreen

function deleteItemOrangegreen(){
  var elem = document.getElementById("scart-orangegreen");
  elem.remove();
  quantity_orangegreen =0;
  orangegreen_ordered =0;

  localStorage.setItem("quantity_orangegreen",0);
  localStorage.setItem("orangegreen_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete twt

function deleteItemTwt(){
  var elem = document.getElementById("scart-twt");
  elem.remove();

  localStorage.setItem("quantity_twt",0);
  localStorage.setItem("twt_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete ware

function deleteItemWare(){
  var elem = document.getElementById("scart-ware");
  elem.remove();

  localStorage.setItem("quantity_ware",0);
  localStorage.setItem("ware_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}

//delete tiramisu small

function deleteItemTiramisuSmall(){
  var elem = document.getElementById("scart-tiramisu_small");
  elem.remove();

  localStorage.setItem("quantity_tiramisu_small",0);
  localStorage.setItem("tiramisu_small_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete tiramisu large

function deleteItemTiramisuLarge(){
  var elem = document.getElementById("scart-tiramisu_large");
  elem.remove();

  localStorage.setItem("quantity_tiramisu_large",0);
  localStorage.setItem("tiramisu_large_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete mocha small

function deleteItemMochaSmall(){
  var elem = document.getElementById("scart-mocha_small");
  elem.remove();

  localStorage.setItem("quantity_mocha_small",0);
  localStorage.setItem("mocha_small_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete mocha large

function deleteItemMochaLarge(){
  var elem = document.getElementById("scart-mocha_large");
  elem.remove();

  localStorage.setItem("quantity_mocha_large",0);
  localStorage.setItem("mocha_large_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete choco small

function deleteItemChocoSmall(){
  var elem = document.getElementById("scart-choco_small");
  elem.remove();

  localStorage.setItem("quantity_choco_small",0);
  localStorage.setItem("choco_small_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//delete choco large

function deleteItemChocoLarge(){
  var elem = document.getElementById("scart-choco_large");
  elem.remove();

  localStorage.setItem("quantity_choco_large",0);
  localStorage.setItem("choco_large_ordered",0)

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";



    document.getElementById("change-quantity").innerHTML=total_quantity();
  return;
}
//important
//important
//important
//important
//important
//important
//important
//important
//important

//function clear cookies
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}


//function get cookies
function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
  return res
}


//function generate Cart
function genCart(){


  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById("nav_nav_wrap").style.display="none";
    document.getElementById("fixed-menu").classList.add("mobile_menu");
    document.getElementById("fixed-menu").classList.remove("fixed-menu-wrapper");
    document.getElementById("img_mobile").style.display="inline-block";
    document.getElementById("mobile_menu_btn").style.display="inline-block";
    document.getElementById("body-content").classList.add("mobile_body");
    document.getElementById("body-content").classList.remove("body-content-wrapper");


  } else{

    window.onscroll = function(){ scrolltop()};
    document.getElementById('id')
  }
  var link = window.location.href;
  if(document.getElementById("Cart_Place")){
      FullCart();
  }


  document.getElementById("change-quantity").innerHTML=total_quantity();

  if(localStorage.getItem('friendset_ordered')==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/friendset.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "2-3人閏蜜套餐";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_friendset");
      first_span.id="scart-quantity-friendset";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 688.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-friendset";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";

      var third_p = document.createElement("div");
      third_p.classList.add("scart-set-subitems");

      var sub_one_span = document.createElement("p");
      sub_one_span.innerHTML=localStorage.getItem("faa");
      var sub_two_span = document.createElement("p");
      sub_two_span.innerHTML=localStorage.getItem("fab");
      var sub_four_span = document.createElement("p");
      sub_four_span.innerHTML = localStorage.getItem("fpa");
      var sub_five_span = document.createElement("p");
      sub_five_span.innerHTML = localStorage.getItem("fma");


      var wrap_friendset = document.createElement("div");
      wrap_friendset.id="scart-friendset";



    //connection
      third_p.appendChild(sub_one_span);
      third_p.appendChild(sub_two_span);
      third_p.appendChild(sub_four_span);
      third_p.appendChild(sub_five_span);

      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);
      first_div.appendChild(third_p);


      wrap_friendset.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_friendset);



      //function add to delete

      document.getElementById("scart-remove-item-link-friendset").onclick = function() { deleteItemFriendset()};
      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";

  }
  if(localStorage.getItem('superset_ordered')==1){
  //creation
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/superset.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "12-16人狂野派對套餐";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_superset");
    first_span.id="scart-quantity-superset";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 2,688.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-superset";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


                                                                                    var third_p = document.createElement("div");
                                                                                    third_p.classList.add("scart-set-subitems");

                                                                                    var sub_one_span = document.createElement("p");
                                                                                    sub_one_span.innerHTML=localStorage.getItem("ssaa");
                                                                                    var sub_two_span = document.createElement("p");
                                                                                    sub_two_span.innerHTML=localStorage.getItem("ssab");
                                                                                    var sub_three_span = document.createElement("p");
                                                                                    sub_three_span.innerHTML=localStorage.getItem("ssac");
                                                                                    var sub_four_span = document.createElement("p");
                                                                                    sub_four_span.innerHTML = localStorage.getItem("sspa");
                                                                                    var sub_five_span = document.createElement("p");
                                                                                    sub_five_span.innerHTML = localStorage.getItem("ssma");
                                                                                    var sub_six_span = document.createElement("p");
                                                                                    sub_six_span.innerHTML = localStorage.getItem("ssmb");
                                                                                    var sub_sev_span = document.createElement("p");
                                                                                    sub_sev_span.innerHTML = localStorage.getItem("ssad");
                                                                                    var sub_eig_span = document.createElement("p");
                                                                                    sub_eig_span.innerHTML = localStorage.getItem("sspb");
                                                                                    var sub_nin_span = document.createElement("p");
                                                                                    sub_nin_span.innerHTML = localStorage.getItem("ssmc");
                                                                                    var sub_ten_span = document.createElement("p");
                                                                                    sub_ten_span.innerHTML=localStorage.getItem("ssae");
                                                                                    var sub_ele_span = document.createElement("p");
                                                                                    sub_ele_span.innerHTML=localStorage.getItem("sspc");
                                                                                    var sub_twe_span = document.createElement("p");
                                                                                    sub_twe_span.innerHTML=localStorage.getItem("ssmd");

    var wrap_superset = document.createElement("div");
    wrap_superset.id="scart-superset";



  //connection
    third_p.appendChild(sub_one_span);
    third_p.appendChild(sub_two_span);
    third_p.appendChild(sub_three_span);
    third_p.appendChild(sub_sev_span);
    third_p.appendChild(sub_ten_span);
    third_p.appendChild(sub_four_span);
    third_p.appendChild(sub_eig_span);
    third_p.appendChild(sub_ele_span);
    third_p.appendChild(sub_five_span);
    third_p.appendChild(sub_six_span);
    third_p.appendChild(sub_nin_span);
    third_p.appendChild(sub_twe_span);

    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);
    first_div.appendChild(third_p);


    wrap_superset.appendChild(first_div);

    document.getElementById('scart-item-wrap').appendChild(wrap_superset);



    //function add to delete

    document.getElementById("scart-remove-item-link-superset").onclick = function() { deleteItemSuperset()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }
  if(localStorage.getItem("set_tiramisu_small_ordered")==1){
    //creation
    var first_divts = document.createElement("div");
    first_divts.classList.add("scart-items");
    var sec_img_divts = document.createElement("div");
    sec_img_divts.classList.add("scart-image");
    var img_cartts = document.createElement("img");
    img_cartts.src="https://aoaodelivery.com/image/tiramisu.jpg";
    var third_divts = document.createElement("div");
    third_divts.classList.add("scart-items-about");
    //change name of the item
    var first_pts = document.createElement("p");
    first_pts.classList.add("scart-items-title");
    first_pts.innerHTML= "蕃薯糖水tiramisu (皇牌)（1磅）";

    var sec_pts = document.createElement("p");
    sec_pts.classList.add("scart-remove-item");
    //change the value of the item
    var first_spants = document.createElement("span");
    first_spants.classList.add("scart-items-count-num");
    first_spants.innerHTML=localStorage.getItem("quantity_set_tiramisu_small");
    first_spants.id="scart-quantity-setts";
    //change the price of the item
    var sec_spants = document.createElement("span");
    sec_spants.classList.add("scart-items-count-price");
    sec_spants.innerHTML="HK$ 98.00        ";
    //change delete link
    var a_linkts = document.createElement("span");
    a_linkts.id="scart-remove-item-link-setts";
    a_linkts.innerHTML="刪除";
    var third_spants = document.createElement("span");
    third_spants.innerHTML=" x ";


    var wrap_setts = document.createElement("div");
    wrap_setts.id="scart-setts";



    //connection
    sec_pts.appendChild(first_spants);
    sec_pts.appendChild(third_spants);
    sec_pts.appendChild(sec_spants);
    sec_pts.appendChild(a_linkts);

    third_divts.appendChild(first_pts);
    third_divts.appendChild(sec_pts);

    sec_img_divts.appendChild(img_cartts);

    first_divts.appendChild(sec_img_divts);
    first_divts.appendChild(third_divts);


    wrap_setts.appendChild(first_divts);

    document.getElementById('scart-item-wrap').appendChild(wrap_setts);



    //function add to delete

    document.getElementById("scart-remove-item-link-setts").onclick = function() { deleteItemSetts()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_tiramisu_large_ordered")==1){
    //creation
    var first_divtl = document.createElement("div");
    first_divtl.classList.add("scart-items");
    var sec_img_divtl = document.createElement("div");
    sec_img_divtl.classList.add("scart-image");
    var img_carttl = document.createElement("img");
    img_carttl.src="https://aoaodelivery.com/image/tiramisu.jpg";
    var third_divtl = document.createElement("div");
    third_divtl.classList.add("scart-items-about");
    //change name of the item
    var first_ptl = document.createElement("p");
    first_ptl.classList.add("scart-items-title");
    first_ptl.innerHTML= "蕃薯糖水tiramisu (皇牌)（2磅）";

    var sec_ptl = document.createElement("p");
    sec_ptl.classList.add("scart-remove-item");
    //change the value of the item
    var first_spantl = document.createElement("span");
    first_spantl.classList.add("scart-items-count-num");
    first_spantl.innerHTML=localStorage.getItem("quantity_set_tiramisu_large");
    first_spantl.id="scart-quantity-settl";
    //change the price of the item
    var sec_spantl = document.createElement("span");
    sec_spantl.classList.add("scart-items-count-price");
    sec_spantl.innerHTML="HK$ 138.00        ";
    //change delete link
    var a_linktl = document.createElement("span");
    a_linktl.id="scart-remove-item-link-settl";
    a_linktl.innerHTML="刪除";
    var third_spantl = document.createElement("span");
    third_spantl.innerHTML=" x ";


    var wrap_settl = document.createElement("div");
    wrap_settl.id="scart-settl";



    //connection
    sec_ptl.appendChild(first_spantl);
    sec_ptl.appendChild(third_spantl);
    sec_ptl.appendChild(sec_spantl);
    sec_ptl.appendChild(a_linktl);

    third_divtl.appendChild(first_ptl);
    third_divtl.appendChild(sec_ptl);

    sec_img_divtl.appendChild(img_carttl);

    first_divtl.appendChild(sec_img_divtl);
    first_divtl.appendChild(third_divtl);


    wrap_settl.appendChild(first_divtl);

    document.getElementById('scart-item-wrap').appendChild(wrap_settl);



    //function add to delete

    document.getElementById("scart-remove-item-link-settl").onclick = function() { deleteItemSettl()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_mocha_small_ordered")==1){
    //creation
    var first_divms = document.createElement("div");
    first_divms.classList.add("scart-items");
    var sec_img_divms = document.createElement("div");
    sec_img_divms.classList.add("scart-image");
    var img_cartms = document.createElement("img");
    img_cartms.src="https://aoaodelivery.com/image/mocha.jpg";
    var third_divms = document.createElement("div");
    third_divms.classList.add("scart-items-about");
    //change name of the item
    var first_pms = document.createElement("p");
    first_pms.classList.add("scart-items-title");
    first_pms.innerHTML= "抹茶牛乳巴斯克 (65g)（3件）";

    var sec_pms = document.createElement("p");
    sec_pms.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanms = document.createElement("span");
    first_spanms.classList.add("scart-items-count-num");
    first_spanms.innerHTML=localStorage.getItem("quantity_set_mocha_small");
    first_spanms.id="scart-quantity-setms";
    //change the price of the item
    var sec_spanms = document.createElement("span");
    sec_spanms.classList.add("scart-items-count-price");
    sec_spanms.innerHTML="HK$ 72.00        ";
    //change delete link
    var a_linkms = document.createElement("span");
    a_linkms.id="scart-remove-item-link-setms";
    a_linkms.innerHTML="刪除";
    var third_spanms = document.createElement("span");
    third_spanms.innerHTML=" x ";


    var wrap_setms = document.createElement("div");
    wrap_setms.id="scart-setms";



    //connection
    sec_pms.appendChild(first_spanms);
    sec_pms.appendChild(third_spanms);
    sec_pms.appendChild(sec_spanms);
    sec_pms.appendChild(a_linkms);

    third_divms.appendChild(first_pms);
    third_divms.appendChild(sec_pms);

    sec_img_divms.appendChild(img_cartms);

    first_divms.appendChild(sec_img_divms);
    first_divms.appendChild(third_divms);


    wrap_setms.appendChild(first_divms);

    document.getElementById('scart-item-wrap').appendChild(wrap_setms);



    //function add to delete

    document.getElementById("scart-remove-item-link-setms").onclick = function() { deleteItemSetms()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_mocha_large_ordered")==1){
    //creation
    var first_divml = document.createElement("div");
    first_divml.classList.add("scart-items");
    var sec_img_divml = document.createElement("div");
    sec_img_divml.classList.add("scart-image");
    var img_cartml = document.createElement("img");
    img_cartml.src="https://aoaodelivery.com/image/mocha.jpg";
    var third_divml = document.createElement("div");
    third_divml.classList.add("scart-items-about");
    //change name of the item
    var first_pml = document.createElement("p");
    first_pml.classList.add("scart-items-title");
    first_pml.innerHTML= "抹茶牛乳巴斯克 (65g)（6件）";

    var sec_pml = document.createElement("p");
    sec_pml.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanml = document.createElement("span");
    first_spanml.classList.add("scart-items-count-num");
    first_spanml.innerHTML=localStorage.getItem("quantity_set_mocha_large");
    first_spanml.id="scart-quantity-setml";
    //change the price of the item
    var sec_spanml = document.createElement("span");
    sec_spanml.classList.add("scart-items-count-price");
    sec_spanml.innerHTML="HK$ 138.00        ";
    //change delete link
    var a_linkml = document.createElement("span");
    a_linkml.id="scart-remove-item-link-setml";
    a_linkml.innerHTML="刪除";
    var third_spanml = document.createElement("span");
    third_spanml.innerHTML=" x ";


    var wrap_setml = document.createElement("div");
    wrap_setml.id="scart-setml";



    //connection
    sec_pml.appendChild(first_spanml);
    sec_pml.appendChild(third_spanml);
    sec_pml.appendChild(sec_spanml);
    sec_pml.appendChild(a_linkml);

    third_divml.appendChild(first_pml);
    third_divml.appendChild(sec_pml);

    sec_img_divml.appendChild(img_cartml);

    first_divml.appendChild(sec_img_divml);
    first_divml.appendChild(third_divml);


    wrap_setml.appendChild(first_divml);

    document.getElementById('scart-item-wrap').appendChild(wrap_setml);



    //function add to delete

    document.getElementById("scart-remove-item-link-setml").onclick = function() { deleteItemSetml()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_choco_small_ordered")==1){
    //creation
    var first_divcs = document.createElement("div");
    first_divcs.classList.add("scart-items");
    var sec_img_divcs = document.createElement("div");
    sec_img_divcs.classList.add("scart-image");
    var img_cartcs = document.createElement("img");
    img_cartcs.src="https://aoaodelivery.com/image/choco.jpg";
    var third_divcs = document.createElement("div");
    third_divcs.classList.add("scart-items-about");
    //change name of the item
    var first_pcs = document.createElement("p");
    first_pcs.classList.add("scart-items-title");
    first_pcs.innerHTML= "朱古力果仁布朗尼 (90g)（3件）";

    var sec_pcs = document.createElement("p");
    sec_pcs.classList.add("scart-remove-item");
    //change the value of the item
    var first_spancs = document.createElement("span");
    first_spancs.classList.add("scart-items-count-num");
    first_spancs.innerHTML=localStorage.getItem("quantity_set_choco_small");
    first_spancs.id="scart-quantity-setcs";
    //change the price of the item
    var sec_spancs = document.createElement("span");
    sec_spancs.classList.add("scart-items-count-price");
    sec_spancs.innerHTML="HK$ 58.00        ";
    //change delete link
    var a_linkcs = document.createElement("span");
    a_linkcs.id="scart-remove-item-link-setcs";
    a_linkcs.innerHTML="刪除";
    var third_spancs = document.createElement("span");
    third_spancs.innerHTML=" x ";


    var wrap_setcs = document.createElement("div");
    wrap_setcs.id="scart-setcs";



    //connection
    sec_pcs.appendChild(first_spancs);
    sec_pcs.appendChild(third_spancs);
    sec_pcs.appendChild(sec_spancs);
    sec_pcs.appendChild(a_linkcs);

    third_divcs.appendChild(first_pcs);
    third_divcs.appendChild(sec_pcs);

    sec_img_divcs.appendChild(img_cartcs);

    first_divcs.appendChild(sec_img_divcs);
    first_divcs.appendChild(third_divcs);


    wrap_setcs.appendChild(first_divcs);

    document.getElementById('scart-item-wrap').appendChild(wrap_setcs);



    //function add to delete

    document.getElementById("scart-remove-item-link-setcs").onclick = function() { deleteItemSetcs()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_choco_large_ordered")==1){
    //creation
    var first_divcl = document.createElement("div");
    first_divcl.classList.add("scart-items");
    var sec_img_divcl = document.createElement("div");
    sec_img_divcl.classList.add("scart-image");
    var img_cartcl = document.createElement("img");
    img_cartcl.src="https://aoaodelivery.com/image/choco.jpg";
    var third_divcl = document.createElement("div");
    third_divcl.classList.add("scart-items-about");
    //change name of the item
    var first_pcl = document.createElement("p");
    first_pcl.classList.add("scart-items-title");
    first_pcl.innerHTML= "朱古力果仁布朗尼 (90g)（6件）";

    var sec_pcl = document.createElement("p");
    sec_pcl.classList.add("scart-remove-item");
    //change the value of the item
    var first_spancl = document.createElement("span");
    first_spancl.classList.add("scart-items-count-num");
    first_spancl.innerHTML=localStorage.getItem("quantity_set_choco_large");
    first_spancl.id="scart-quantity-setcl";
    //change the price of the item
    var sec_spancl = document.createElement("span");
    sec_spancl.classList.add("scart-items-count-price");
    sec_spancl.innerHTML="HK$ 108.00        ";
    //change delete link
    var a_linkcl = document.createElement("span");
    a_linkcl.id="scart-remove-item-link-setcl";
    a_linkcl.innerHTML="刪除";
    var third_spancl = document.createElement("span");
    third_spancl.innerHTML=" x ";


    var wrap_setcl = document.createElement("div");
    wrap_setcl.id="scart-setcl";



    //connection
    sec_pcl.appendChild(first_spancl);
    sec_pcl.appendChild(third_spancl);
    sec_pcl.appendChild(sec_spancl);
    sec_pcl.appendChild(a_linkcl);

    third_divcl.appendChild(first_pcl);
    third_divcl.appendChild(sec_pcl);

    sec_img_divcl.appendChild(img_cartcl);

    first_divcl.appendChild(sec_img_divcl);
    first_divcl.appendChild(third_divcl);


    wrap_setcl.appendChild(first_divcl);

    document.getElementById('scart-item-wrap').appendChild(wrap_setcl);



    //function add to delete

    document.getElementById("scart-remove-item-link-setcl").onclick = function() { deleteItemSetcl()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_twt_ordered")==1){
    //creation
    var first_divtwt = document.createElement("div");
    first_divtwt.classList.add("scart-items");
    var sec_img_divtwt = document.createElement("div");
    sec_img_divtwt.classList.add("scart-image");
    var img_carttwt = document.createElement("img");
    img_carttwt.src="https://aoaodelivery.com/image/twt.jpg";
    var third_divtwt = document.createElement("div");
    third_divtwt.classList.add("scart-items-about");
    //change name of the item
    var first_ptwt = document.createElement("p");
    first_ptwt.classList.add("scart-items-title");
    first_ptwt.innerHTML= "台式水果茶 （500ml）";

    var sec_ptwt = document.createElement("p");
    sec_ptwt.classList.add("scart-remove-item");
    //change the value of the item
    var first_spantwt = document.createElement("span");
    first_spantwt.classList.add("scart-items-count-num");
    first_spantwt.innerHTML=localStorage.getItem("quantity_set_twt");
    first_spantwt.id="scart-quantity-settwt";
    //change the price of the item
    var sec_spantwt = document.createElement("span");
    sec_spantwt.classList.add("scart-items-count-price");
    sec_spantwt.innerHTML="HK$ 28.00        ";
    //change delete link
    var a_linktwt = document.createElement("span");
    a_linktwt.id="scart-remove-item-link-settwt";
    a_linktwt.innerHTML="刪除";
    var third_spantwt = document.createElement("span");
    third_spantwt.innerHTML=" x ";


    var wrap_settwt = document.createElement("div");
    wrap_settwt.id="scart-settwt";



    //connection
    sec_ptwt.appendChild(first_spantwt);
    sec_ptwt.appendChild(third_spantwt);
    sec_ptwt.appendChild(sec_spantwt);
    sec_ptwt.appendChild(a_linktwt);

    third_divtwt.appendChild(first_ptwt);
    third_divtwt.appendChild(sec_ptwt);

    sec_img_divtwt.appendChild(img_carttwt);

    first_divtwt.appendChild(sec_img_divtwt);
    first_divtwt.appendChild(third_divtwt);


    wrap_settwt.appendChild(first_divtwt);

    document.getElementById('scart-item-wrap').appendChild(wrap_settwt);



    //function add to delete

    document.getElementById("scart-remove-item-link-settwt").onclick = function() { deleteItemSettwt()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_milkgreen_ordered")==1){
    //creation
    var first_divmilkgreen = document.createElement("div");
    first_divmilkgreen.classList.add("scart-items");
    var sec_img_divmilkgreen = document.createElement("div");
    sec_img_divmilkgreen.classList.add("scart-image");
    var img_cartmilkgreen = document.createElement("img");
    img_cartmilkgreen.src="https://aoaodelivery.com/image/milkgreen.jpg";
    var third_divmilkgreen = document.createElement("div");
    third_divmilkgreen.classList.add("scart-items-about");
    //change name of the item
    var first_pmilkgreen = document.createElement("p");
    first_pmilkgreen.classList.add("scart-items-title");
    first_pmilkgreen.innerHTML= "芋泥鮮奶綠茶（500ml）";

    var sec_pmilkgreen = document.createElement("p");
    sec_pmilkgreen.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanmilkgreen = document.createElement("span");
    first_spanmilkgreen.classList.add("scart-items-count-num");
    first_spanmilkgreen.innerHTML=localStorage.getItem("quantity_set_milkgreen");
    first_spanmilkgreen.id="scart-quantity-setmilkgreen";
    //change the price of the item
    var sec_spanmilkgreen = document.createElement("span");
    sec_spanmilkgreen.classList.add("scart-items-count-price");
    sec_spanmilkgreen.innerHTML="HK$ 28.00        ";
    //change delete link
    var a_linkmilkgreen = document.createElement("span");
    a_linkmilkgreen.id="scart-remove-item-link-setmilkgreen";
    a_linkmilkgreen.innerHTML="刪除";
    var third_spanmilkgreen = document.createElement("span");
    third_spanmilkgreen.innerHTML=" x ";


    var wrap_setmilkgreen = document.createElement("div");
    wrap_setmilkgreen.id="scart-setmilkgreen";



    //connection
    sec_pmilkgreen.appendChild(first_spanmilkgreen);
    sec_pmilkgreen.appendChild(third_spanmilkgreen);
    sec_pmilkgreen.appendChild(sec_spanmilkgreen);
    sec_pmilkgreen.appendChild(a_linkmilkgreen);

    third_divmilkgreen.appendChild(first_pmilkgreen);
    third_divmilkgreen.appendChild(sec_pmilkgreen);

    sec_img_divmilkgreen.appendChild(img_cartmilkgreen);

    first_divmilkgreen.appendChild(sec_img_divmilkgreen);
    first_divmilkgreen.appendChild(third_divmilkgreen);


    wrap_setmilkgreen.appendChild(first_divmilkgreen);

    document.getElementById('scart-item-wrap').appendChild(wrap_setmilkgreen);



    //function add to delete

    document.getElementById("scart-remove-item-link-setmilkgreen").onclick = function() { deleteItemSetmilkgreen()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_orangegreen_ordered")==1){
    //creation
    var first_divorangegreen = document.createElement("div");
    first_divorangegreen.classList.add("scart-items");
    var sec_img_divorangegreen = document.createElement("div");
    sec_img_divorangegreen.classList.add("scart-image");
    var img_cartorangegreen = document.createElement("img");
    img_cartorangegreen.src="https://aoaodelivery.com/image/orangegreen.jpg";
    var third_divorangegreen = document.createElement("div");
    third_divorangegreen.classList.add("scart-items-about");
    //change name of the item
    var first_porangegreen = document.createElement("p");
    first_porangegreen.classList.add("scart-items-title");
    first_porangegreen.innerHTML= "香橙綠茶（500ml）";

    var sec_porangegreen = document.createElement("p");
    sec_porangegreen.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanorangegreen = document.createElement("span");
    first_spanorangegreen.classList.add("scart-items-count-num");
    first_spanorangegreen.innerHTML=localStorage.getItem("quantity_set_orangegreen");
    first_spanorangegreen.id="scart-quantity-setorangegreen";
    //change the price of the item
    var sec_spanorangegreen = document.createElement("span");
    sec_spanorangegreen.classList.add("scart-items-count-price");
    sec_spanorangegreen.innerHTML="HK$ 23.00        ";
    //change delete link
    var a_linkorangegreen = document.createElement("span");
    a_linkorangegreen.id="scart-remove-item-link-setorangegreen";
    a_linkorangegreen.innerHTML="刪除";
    var third_spanorangegreen = document.createElement("span");
    third_spanorangegreen.innerHTML=" x ";


    var wrap_setorangegreen = document.createElement("div");
    wrap_setorangegreen.id="scart-setorangegreen";



    //connection
    sec_porangegreen.appendChild(first_spanorangegreen);
    sec_porangegreen.appendChild(third_spanorangegreen);
    sec_porangegreen.appendChild(sec_spanorangegreen);
    sec_porangegreen.appendChild(a_linkorangegreen);

    third_divorangegreen.appendChild(first_porangegreen);
    third_divorangegreen.appendChild(sec_porangegreen);

    sec_img_divorangegreen.appendChild(img_cartorangegreen);

    first_divorangegreen.appendChild(sec_img_divorangegreen);
    first_divorangegreen.appendChild(third_divorangegreen);


    wrap_setorangegreen.appendChild(first_divorangegreen);

    document.getElementById('scart-item-wrap').appendChild(wrap_setorangegreen);



    //function add to delete

    document.getElementById("scart-remove-item-link-setorangegreen").onclick = function() { deleteItemSetorangegreen()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_lemonginger_ordered")==1){
    //creation
    var first_divlemonginger = document.createElement("div");
    first_divlemonginger.classList.add("scart-items");
    var sec_img_divlemonginger = document.createElement("div");
    sec_img_divlemonginger.classList.add("scart-image");
    var img_cartlemonginger = document.createElement("img");
    img_cartlemonginger.src="https://aoaodelivery.com/image/lemonginger.jpg";
    var third_divlemonginger = document.createElement("div");
    third_divlemonginger.classList.add("scart-items-about");
    //change name of the item
    var first_plemonginger = document.createElement("p");
    first_plemonginger.classList.add("scart-items-title");
    first_plemonginger.innerHTML= "檸檬生薑柚子茶（500ml）";

    var sec_plemonginger = document.createElement("p");
    sec_plemonginger.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanlemonginger = document.createElement("span");
    first_spanlemonginger.classList.add("scart-items-count-num");
    first_spanlemonginger.innerHTML=localStorage.getItem("quantity_set_lemonginger");
    first_spanlemonginger.id="scart-quantity-setlemonginger";
    //change the price of the item
    var sec_spanlemonginger = document.createElement("span");
    sec_spanlemonginger.classList.add("scart-items-count-price");
    sec_spanlemonginger.innerHTML="HK$ 23.00        ";
    //change delete link
    var a_linklemonginger = document.createElement("span");
    a_linklemonginger.id="scart-remove-item-link-setlemonginger";
    a_linklemonginger.innerHTML="刪除";
    var third_spanlemonginger = document.createElement("span");
    third_spanlemonginger.innerHTML=" x ";


    var wrap_setlemonginger = document.createElement("div");
    wrap_setlemonginger.id="scart-setlemonginger";



    //connection
    sec_plemonginger.appendChild(first_spanlemonginger);
    sec_plemonginger.appendChild(third_spanlemonginger);
    sec_plemonginger.appendChild(sec_spanlemonginger);
    sec_plemonginger.appendChild(a_linklemonginger);

    third_divlemonginger.appendChild(first_plemonginger);
    third_divlemonginger.appendChild(sec_plemonginger);

    sec_img_divlemonginger.appendChild(img_cartlemonginger);

    first_divlemonginger.appendChild(sec_img_divlemonginger);
    first_divlemonginger.appendChild(third_divlemonginger);


    wrap_setlemonginger.appendChild(first_divlemonginger);

    document.getElementById('scart-item-wrap').appendChild(wrap_setlemonginger);



    //function add to delete

    document.getElementById("scart-remove-item-link-setlemonginger").onclick = function() { deleteItemSetlemonginger()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_redbean_ordered")==1){
    //creation
    var first_divredbean = document.createElement("div");
    first_divredbean.classList.add("scart-items");
    var sec_img_divredbean = document.createElement("div");
    sec_img_divredbean.classList.add("scart-image");
    var img_cartredbean = document.createElement("img");
    img_cartredbean.src="https://aoaodelivery.com/image/redbean.jpg";
    var third_divredbean = document.createElement("div");
    third_divredbean.classList.add("scart-items-about");
    //change name of the item
    var first_predbean = document.createElement("p");
    first_predbean.classList.add("scart-items-title");
    first_predbean.innerHTML= "紅豆鮮奶抹茶（500ml）";

    var sec_predbean = document.createElement("p");
    sec_predbean.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanredbean = document.createElement("span");
    first_spanredbean.classList.add("scart-items-count-num");
    first_spanredbean.innerHTML=localStorage.getItem("quantity_set_redbean");
    first_spanredbean.id="scart-quantity-setredbean";
    //change the price of the item
    var sec_spanredbean = document.createElement("span");
    sec_spanredbean.classList.add("scart-items-count-price");
    sec_spanredbean.innerHTML="HK$ 26.00        ";
    //change delete link
    var a_linkredbean = document.createElement("span");
    a_linkredbean.id="scart-remove-item-link-setredbean";
    a_linkredbean.innerHTML="刪除";
    var third_spanredbean = document.createElement("span");
    third_spanredbean.innerHTML=" x ";


    var wrap_setredbean = document.createElement("div");
    wrap_setredbean.id="scart-setredbean";



    //connection
    sec_predbean.appendChild(first_spanredbean);
    sec_predbean.appendChild(third_spanredbean);
    sec_predbean.appendChild(sec_spanredbean);
    sec_predbean.appendChild(a_linkredbean);

    third_divredbean.appendChild(first_predbean);
    third_divredbean.appendChild(sec_predbean);

    sec_img_divredbean.appendChild(img_cartredbean);

    first_divredbean.appendChild(sec_img_divredbean);
    first_divredbean.appendChild(third_divredbean);


    wrap_setredbean.appendChild(first_divredbean);

    document.getElementById('scart-item-wrap').appendChild(wrap_setredbean);



    //function add to delete

    document.getElementById("scart-remove-item-link-setredbean").onclick = function() { deleteItemSetredbean()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_oolong_ordered")==1){
    //creation
    var first_divoolong = document.createElement("div");
    first_divoolong.classList.add("scart-items");
    var sec_img_divoolong = document.createElement("div");
    sec_img_divoolong.classList.add("scart-image");
    var img_cartoolong = document.createElement("img");
    img_cartoolong.src="https://aoaodelivery.com/image/oolong.jpg";
    var third_divoolong = document.createElement("div");
    third_divoolong.classList.add("scart-items-about");
    //change name of the item
    var first_poolong = document.createElement("p");
    first_poolong.classList.add("scart-items-title");
    first_poolong.innerHTML= "陳皮荔枝白桃烏龍冷泡茶（500ml）";

    var sec_poolong = document.createElement("p");
    sec_poolong.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanoolong = document.createElement("span");
    first_spanoolong.classList.add("scart-items-count-num");
    first_spanoolong.innerHTML=localStorage.getItem("quantity_set_oolong");
    first_spanoolong.id="scart-quantity-setoolong";
    //change the price of the item
    var sec_spanoolong = document.createElement("span");
    sec_spanoolong.classList.add("scart-items-count-price");
    sec_spanoolong.innerHTML="HK$ 23.00        ";
    //change delete link
    var a_linkoolong = document.createElement("span");
    a_linkoolong.id="scart-remove-item-link-setoolong";
    a_linkoolong.innerHTML="刪除";
    var third_spanoolong = document.createElement("span");
    third_spanoolong.innerHTML=" x ";


    var wrap_setoolong = document.createElement("div");
    wrap_setoolong.id="scart-setoolong";



    //connection
    sec_poolong.appendChild(first_spanoolong);
    sec_poolong.appendChild(third_spanoolong);
    sec_poolong.appendChild(sec_spanoolong);
    sec_poolong.appendChild(a_linkoolong);

    third_divoolong.appendChild(first_poolong);
    third_divoolong.appendChild(sec_poolong);

    sec_img_divoolong.appendChild(img_cartoolong);

    first_divoolong.appendChild(sec_img_divoolong);
    first_divoolong.appendChild(third_divoolong);


    wrap_setoolong.appendChild(first_divoolong);

    document.getElementById('scart-item-wrap').appendChild(wrap_setoolong);



    //function add to delete

    document.getElementById("scart-remove-item-link-setoolong").onclick = function() { deleteItemSetoolong()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }



  if(localStorage.getItem("mocha_small_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/mocha.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "抹茶牛乳巴斯克 (65g) (3件)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_mocha_small");
      first_span.id="scart-quantity-mocha_small";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 172.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-mocha_small";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_mocha_small = document.createElement("div");
      wrap_mocha_small.id="scart-mocha_small";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_mocha_small.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_mocha_small);



      //function add to delete

      document.getElementById("scart-remove-item-link-mocha_small").onclick = function() { deleteItemMochaSmall()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }
  if(localStorage.getItem("mocha_large_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/mocha.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "抹茶牛乳巴斯克 (65g) (6件)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_mocha_large");
      first_span.id="scart-quantity-mocha_large";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 238.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-mocha_large";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_mocha_large = document.createElement("div");
      wrap_mocha_large.id="scart-mocha_large";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_mocha_large.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_mocha_large);



      //function add to delete

      document.getElementById("scart-remove-item-link-mocha_large").onclick = function() { deleteItemMochaLarge()};

    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }
  if(localStorage.getItem("choco_small_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/choco.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "朱古力果仁布朗尼 (90g) (3件)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_choco_small");
      first_span.id="scart-quantity-choco_small";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 158.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-choco_small";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_choco_small = document.createElement("div");
      wrap_choco_small.id="scart-choco_small";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_choco_small.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_choco_small);



      //function add to delete

      document.getElementById("scart-remove-item-link-choco_small").onclick = function() { deleteItemChocoSmall()};

    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }
  if(localStorage.getItem("choco_large_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/choco.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "朱古力果仁布朗尼 (90g) (6件)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_choco_large");
      first_span.id="scart-quantity-choco_large";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 208.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-choco_large";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_choco_large = document.createElement("div");
      wrap_choco_large.id="scart-choco_large";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_choco_large.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_choco_large);



      //function add to delete

      document.getElementById("scart-remove-item-link-choco_large").onclick = function() { deleteItemChocoLarge()};

    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }
  if(localStorage.getItem("tiramisu_small_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/tiramisu.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "蕃薯糖水tiramisu (皇牌) (1磅)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_tiramisu_small");
      first_span.id="scart-quantity-tiramisu_small";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 168.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-tiramisu_small";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_tiramisu_small = document.createElement("div");
      wrap_tiramisu_small.id="scart-tiramisu_small";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_tiramisu_small.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_tiramisu_small);



      //function add to delete

      document.getElementById("scart-remove-item-link-tiramisu_small").onclick = function() { deleteItemTiramisuSmall()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();

  }
  if(localStorage.getItem("tiramisu_large_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/tiramisu.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "蕃薯糖水tiramisu (皇牌) (2磅)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_tiramisu_large");
      first_span.id="scart-quantity-tiramisu_large";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 218.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-tiramisu_large";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_tiramisu_large = document.createElement("div");
      wrap_tiramisu_large.id="scart-tiramisu_large";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_tiramisu_large.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_tiramisu_large);



      //function add to delete

      document.getElementById("scart-remove-item-link-tiramisu_large").onclick = function() { deleteItemTiramisuLarge()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }
  if(localStorage.getItem("ware_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/ware.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "餐具套裝（羹、叉、刀、碟）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_ware");
      first_span.id="scart-quantity-ware";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 10.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-ware";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_ware = document.createElement("div");
      wrap_ware.id="scart-ware";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_ware.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_ware);



      //function add to delete

      document.getElementById("scart-remove-item-link-ware").onclick = function() { deleteItemWare()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if(localStorage.getItem("lemonginger_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/lemonginger.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "檸檬生薑柚子茶（500ml）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_lemonginger");
      first_span.id="scart-quantity-lemonginger";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 23.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-lemonginger";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_lemonginger = document.createElement("div");
      wrap_lemonginger.id="scart-lemonginger";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_lemonginger.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_lemonginger);



      //function add to delete

      document.getElementById("scart-remove-item-link-lemonginger").onclick = function() { deleteItemLemonginger()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if(localStorage.getItem("milkgreen_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/milkgreen.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "芋泥鮮奶綠茶（500ml）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_milkgreen");
      first_span.id="scart-quantity-milkgreen";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 28.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-milkgreen";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_milkgreen = document.createElement("div");
      wrap_milkgreen.id="scart-milkgreen";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_milkgreen.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_milkgreen);



      //function add to delete

      document.getElementById("scart-remove-item-link-milkgreen").onclick = function() { deleteItemMilkgreen()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();

  }

  if(localStorage.getItem("oolong_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/oolong.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "陳皮荔枝白桃烏龍冷泡茶（500ml）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_oolong");
      first_span.id="scart-quantity-oolong";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 23.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-oolong";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_oolong = document.createElement("div");
      wrap_oolong.id="scart-oolong";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_oolong.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_oolong);



      //function add to delete

      document.getElementById("scart-remove-item-link-oolong").onclick = function() { deleteItemOolong()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();

  }

  if(localStorage.getItem("redbean_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/redbean.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "紅豆鮮奶抹茶（500ml）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_redbean");
      first_span.id="scart-quantity-redbean";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 26.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-redbean";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_redbean = document.createElement("div");
      wrap_redbean.id="scart-redbean";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_redbean.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_redbean);



      //function add to delete

      document.getElementById("scart-remove-item-link-redbean").onclick = function() { deleteItemRedbean()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if(localStorage.getItem("orangegreen_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/orangegreen.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "香橙綠茶（500ml）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_orangegreen");
      first_span.id="scart-quantity-orangegreen";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 23.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-orangegreen";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_orangegreen = document.createElement("div");
      wrap_orangegreen.id="scart-orangegreen";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_orangegreen.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_orangegreen);



      //function add to delete

      document.getElementById("scart-remove-item-link-orangegreen").onclick = function() { deleteItemOrangegreen()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if(localStorage.getItem("twt_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/twt.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "台式水果茶（500ml）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_twt");
      first_span.id="scart-quantity-twt";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 28.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-twt";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_twt = document.createElement("div");
      wrap_twt.id="scart-twt";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_twt.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_twt);



      //function add to delete

      document.getElementById("scart-remove-item-link-twt").onclick = function() { deleteItemTwt()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if(localStorage.getItem("single_lobster_ordered")==1){
  //creation
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/lobster.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "蒜蓉牛油保雲酥焗龍蝦 (1隻 已開邊)";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_single_lobster");
    first_span.id="scart-quantity-single-lobster";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 208.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-single-lobster";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_lobster = document.createElement("div");
    wrap_lobster.id="scart-single-lobster";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_lobster.appendChild(first_div);

    document.getElementById("scart-item-wrap").appendChild(wrap_lobster);



    //function add to delete

    document.getElementById("scart-remove-item-link-single-lobster").onclick = function() { deleteItemSinglelobster()};
      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
        document.getElementById("change-quantity").innerHTML=total_quantity();
    };


    if(localStorage.getItem("single_hol_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/hol.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "花雕酒浸慢煮鮑魚 (8隻)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_single_hol");
      first_span.id="scart-quantity-single-hol";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 240.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-single-hol";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_hol = document.createElement("div");
      wrap_hol.id="scart-single-hol";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_hol.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_hol);



      //function add to delete

      document.getElementById("scart-remove-item-link-single-hol").onclick = function() { deleteItemSinglehol()};
        var sum_price = total_price();
        var sum_quantity = total_quantity();
        //item price count
        document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

        //item count
        document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
          document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if(localStorage.getItem("single_cabbage_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/cabbage.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "蜜糖德國鹹豬手配青蘋果甜酸醬，酸椰菜，黑糖芥末醬 （1隻 已切件）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_single_cabbage");
      first_span.id="scart-quantity-single-cabbage";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 368.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-single-cabbage";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_cabbage = document.createElement("div");
      wrap_cabbage.id="scart-single-cabbage";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_cabbage.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_cabbage);



      //function add to delete

      document.getElementById("scart-remove-item-link-single-cabbage").onclick = function() { deleteItemSinglecabbage()};
        var sum_price = total_price();
        var sum_quantity = total_quantity();
        //item price count
        document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

        //item count
        document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
          document.getElementById("change-quantity").innerHTML=total_quantity();
    }


    if(localStorage.getItem("single_meatball_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/meatball.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "芝士蕃茄薯蓉配肉丸（1盆）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_single_meatball");
      first_span.id="scart-quantity-single-meatball";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 148.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-single-meatball";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_meatball = document.createElement("div");
      wrap_meatball.id="scart-single-meatball";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_meatball.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_meatball);



      //function add to delete

      document.getElementById("scart-remove-item-link-single-meatball").onclick = function() { deleteItemSinglemeatball()};
        var sum_price = total_price();
        var sum_quantity = total_quantity();
        //item price count
        document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

        //item count
        document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
          document.getElementById("change-quantity").innerHTML=total_quantity();
    }


  //smallset generate
  if(localStorage.getItem("smallset_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/smallset.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "4-6人歡聚套餐";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_smallset");
      first_span.id="scart-quantity-smallset";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 1,188.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-smallset";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";

      var third_p = document.createElement("div");
      third_p.classList.add("scart-set-subitems");

      var sub_one_span = document.createElement("p");
      sub_one_span.innerHTML=localStorage.getItem("saa");
      var sub_two_span = document.createElement("p");
      sub_two_span.innerHTML=localStorage.getItem("sab");
      var sub_three_span = document.createElement("p");
      sub_three_span.innerHTML=localStorage.getItem("sac");
      var sub_four_span = document.createElement("p");
      sub_four_span.innerHTML = localStorage.getItem("spa");
      var sub_five_span = document.createElement("p");
      sub_five_span.innerHTML = localStorage.getItem("sma");
      var sub_six_span = document.createElement("p");
      sub_six_span.innerHTML = localStorage.getItem("smb");


      var wrap_smallset = document.createElement("div");
      wrap_smallset.id="scart-smallset";



    //connection
      third_p.appendChild(sub_one_span);
      third_p.appendChild(sub_two_span);
      third_p.appendChild(sub_three_span);
      third_p.appendChild(sub_four_span);
      third_p.appendChild(sub_five_span);
      third_p.appendChild(sub_six_span);

      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);
      first_div.appendChild(third_p);


      wrap_smallset.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_smallset);



      //function add to delete

      document.getElementById("scart-remove-item-link-smallset").onclick = function() { deleteItemSmallset()};



    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";

        document.getElementById("change-quantity").innerHTML=total_quantity();
  }


  if (localStorage.getItem("largeset_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/largeset.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "8-10人派對套餐";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_largeset");
      first_span.id="scart-quantity-largeset";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 1,788.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-largeset";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


                                                                                      var third_p = document.createElement("div");
                                                                                      third_p.classList.add("scart-set-subitems");

                                                                                      var sub_one_span = document.createElement("p");
                                                                                      sub_one_span.innerHTML=localStorage.getItem("laa");
                                                                                      var sub_two_span = document.createElement("p");
                                                                                      sub_two_span.innerHTML=localStorage.getItem("lab");
                                                                                      var sub_three_span = document.createElement("p");
                                                                                      sub_three_span.innerHTML=localStorage.getItem("lac");
                                                                                      var sub_four_span = document.createElement("p");
                                                                                      sub_four_span.innerHTML = localStorage.getItem("lpa");
                                                                                      var sub_five_span = document.createElement("p");
                                                                                      sub_five_span.innerHTML = localStorage.getItem("lma");
                                                                                      var sub_six_span = document.createElement("p");
                                                                                      sub_six_span.innerHTML = localStorage.getItem("lmb");
                                                                                      var sub_sev_span = document.createElement("p");
                                                                                      sub_sev_span.innerHTML = localStorage.getItem("lad");
                                                                                      var sub_eig_span = document.createElement("p");
                                                                                      sub_eig_span.innerHTML = localStorage.getItem("lpb");
                                                                                      var sub_nin_span = document.createElement("p");
                                                                                      sub_nin_span.innerHTML = localStorage.getItem("lmc");

      var wrap_largeset = document.createElement("div");
      wrap_largeset.id="scart-largeset";



    //connection
      third_p.appendChild(sub_one_span);
      third_p.appendChild(sub_two_span);
      third_p.appendChild(sub_three_span);
      third_p.appendChild(sub_sev_span);
      third_p.appendChild(sub_four_span);
      third_p.appendChild(sub_eig_span);
      third_p.appendChild(sub_five_span);
      third_p.appendChild(sub_six_span);
      third_p.appendChild(sub_nin_span);

      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);
      first_div.appendChild(third_p);


      wrap_largeset.appendChild(first_div);

      document.getElementById('scart-item-wrap').appendChild(wrap_largeset);



      //function add to delete

      document.getElementById("scart-remove-item-link-largeset").onclick = function() { deleteItemLargeset()};

    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";

        document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("caesar_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/caesar.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "煙三文魚黑魚子凱撒沙律";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_caesar");
      first_span.id="scart-quantity-caesar";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 188.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-caesar";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_caesar = document.createElement("div");
      wrap_caesar.id="scart-caesar";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_caesar.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_caesar);



      //function add to delete

      document.getElementById("scart-remove-item-link-caesar").onclick = function() { deleteItemCaesar()};

        var sum_price = total_price();
        var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


          document.getElementById("change-quantity").innerHTML=total_quantity();
    }


    if (localStorage.getItem("shrimpsalad_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/shrimpsalad.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "泰式汁芫荽柚子大蝦蟹籽沙律";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_shrimpsalad");
      first_span.id="scart-quantity-shrimpsalad";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 198.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-shrimpsalad";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_shrimpsalad = document.createElement("div");
      wrap_shrimpsalad.id="scart-shrimpsalad";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_shrimpsalad.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_shrimpsalad);



      //function add to delete

      document.getElementById("scart-remove-item-link-shrimpsalad").onclick = function() { deleteItemShrimpsalad()};


      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


          document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if (localStorage.getItem("avocado_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/avocado.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "日本松葉蟹芒果牛油果沙律";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_avocado");
      first_span.id="scart-quantity-avocado";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 188.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-avocado";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_avocado = document.createElement("div");
      wrap_avocado.id="scart-avocado";



      //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_avocado.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_avocado);



      //function add to delete

      document.getElementById("scart-remove-item-link-avocado").onclick = function() { deleteItemAvocado()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


          document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if (localStorage.getItem("mixcombo_ordered")==1){
      //creation
        var first_div = document.createElement("div");
        first_div.classList.add("scart-items");
        var sec_img_div = document.createElement("div");
        sec_img_div.classList.add("scart-image");
        var img_cart = document.createElement("img");
        img_cart.src="https://aoaodelivery.com/image/mixcombo.jpg";
        var third_div = document.createElement("div");
        third_div.classList.add("scart-items-about");
        //change name of the item
        var first_p = document.createElement("p");
        first_p.classList.add("scart-items-title");
        first_p.innerHTML= "小食拼盤(芝士焗薯角，黑松露墨魚滑炸雲吞，蜜糖柚子雞中翼6隻)";

        var sec_p = document.createElement("p");
        sec_p.classList.add("scart-remove-item");
        //change the value of the item
        var first_span = document.createElement("span");
        first_span.classList.add("scart-items-count-num");
        first_span.innerHTML=localStorage.getItem("quantity_mixcombo");
        first_span.id="scart-quantity-mixcombo";
        //change the price of the item
        var sec_span = document.createElement("span");
        sec_span.classList.add("scart-items-count-price");
        sec_span.innerHTML="HK$ 238.00        ";
        //change delete link
        var a_link = document.createElement("span");
        a_link.id="scart-remove-item-link-mixcombo";
        a_link.innerHTML="刪除";
        var third_span = document.createElement("span");
        third_span.innerHTML=" x ";


        var wrap_mixcombo = document.createElement("div");
        wrap_mixcombo.id="scart-mixcombo";



      //connection
        sec_p.appendChild(first_span);
        sec_p.appendChild(third_span);
        sec_p.appendChild(sec_span);
        sec_p.appendChild(a_link);

        third_div.appendChild(first_p);
        third_div.appendChild(sec_p);

        sec_img_div.appendChild(img_cart);

        first_div.appendChild(sec_img_div);
        first_div.appendChild(third_div);


        wrap_mixcombo.appendChild(first_div);

        document.getElementById("scart-item-wrap").appendChild(wrap_mixcombo);



        //function add to delete

        document.getElementById("scart-remove-item-link-mixcombo").onclick = function() { deleteItemMixcombo()};

        var sum_price = total_price();
        var sum_quantity = total_quantity();
        //item price count
        document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

        //item count
        document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
        document.getElementById("change-quantity").innerHTML=total_quantity();

    }

    if (localStorage.getItem("tunapack_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/tunapack.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "日本呑拿魚腩蓉福袋";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_tunapack");
      first_span.id="scart-quantity-tunapack";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 198.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-tunapack";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_tunapack = document.createElement("div");
      wrap_tunapack.id="scart-tunapack";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_tunapack.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_tunapack);



      //function add to delete

      document.getElementById("scart-remove-item-link-tunapack").onclick = function() { deleteItemTunapack()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if (localStorage.getItem("toastnut_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/toastnut.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "砵酒鵝肝多士配無花果";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_toastnut");
      first_span.id="scart-quantity-toastnut";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 238.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-toastnut";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_toastnut = document.createElement("div");
      wrap_toastnut.id="scart-toastnut";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_toastnut.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_toastnut);



      //function add to delete

      document.getElementById("scart-remove-item-link-toastnut").onclick = function() { deleteItemToastnut()};


      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();

    }

    if (localStorage.getItem("cowtongue_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/cowtongue.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "牛肝菌牛舌忌廉長通粉";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_cowtongue");
      first_span.id="scart-quantity-cowtongue";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 338.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-cowtongue";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_cowtongue = document.createElement("div");
      wrap_cowtongue.id="scart-cowtongue";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_cowtongue.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_cowtongue);



      //function add to delete

      document.getElementById("scart-remove-item-link-cowtongue").onclick = function() { deleteItemCowtongue()};


      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if (localStorage.getItem("shrimprisotto_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/shrimprisotto.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "意大利香草醬帶子海蝦粒意大利飯";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_shrimprisotto");
      first_span.id="scart-quantity-shrimprisotto";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 348.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-shrimprisotto";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_shrimprisotto = document.createElement("div");
      wrap_shrimprisotto.id="scart-shrimprisotto";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_shrimprisotto.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_shrimprisotto);



      //function add to delete

      document.getElementById("scart-remove-item-link-shrimprisotto").onclick = function() { deleteItemShrimprisotto()};


      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if (localStorage.getItem("tomatopasta_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/tomatopasta.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "蕃茄韮菜花意大利粉配烤大菇";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_tomatopasta");
      first_span.id="scart-quantity-tomatopasta";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 298.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-tomatopasta";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_tomatopasta = document.createElement("div");
      wrap_tomatopasta.id="scart-tomatopasta";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_tomatopasta.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_tomatopasta);



      //function add to delete

      document.getElementById("scart-remove-item-link-tomatopasta").onclick = function() { deleteItemTomatopasta()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if (localStorage.getItem("mushpasta_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/mushpasta.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "黑松露野菌意大利粉";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_mushpasta");
      first_span.id="scart-quantity-mushpasta";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 328.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-mushpasta";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_mushpasta = document.createElement("div");
      wrap_mushpasta.id="scart-mushpasta";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_mushpasta.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_mushpasta);



      //function add to delete

      document.getElementById("scart-remove-item-link-mushpasta").onclick = function() { deleteItemMushpasta()};


      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if (localStorage.getItem("chickpasta_ordered")==1){

      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/chickpasta.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "蕃茄雞絲薑蔥意大利粉";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_chickpasta");
      first_span.id="scart-quantity-chickpasta";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 318.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-chickpasta";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_chickpasta = document.createElement("div");
      wrap_chickpasta.id="scart-chickpasta";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_chickpasta.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_chickpasta);



      //function add to delete

      document.getElementById("scart-remove-item-link-chickpasta").onclick = function() { deleteItemChickpasta()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if (localStorage.getItem("cabonara_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/cabonara.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "腐乳卡邦尼";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_cabonara");
      first_span.id="scart-quantity-cabonara";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 328.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-cabonara";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_cabonara = document.createElement("div");
      wrap_cabonara.id="scart-cabonara";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_cabonara.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_cabonara);



      //function add to delete

      document.getElementById("scart-remove-item-link-cabonara").onclick = function() { deleteItemCabonara()};


      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if (localStorage.getItem("ribs_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/ribs.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "BBQ汁燒豬肋骨配青蘋果甜酸醬，炸薯角，黑糖芥末醬";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_ribs");
      first_span.id="scart-quantity-ribs";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 428.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-ribs";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_ribs = document.createElement("div");
      wrap_ribs.id="scart-ribs";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_ribs.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_ribs);



      //function add to delete

      document.getElementById("scart-remove-item-link-ribs").onclick = function() { deleteItemRibs()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if (localStorage.getItem("chick_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/chick.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "檸檬香草烤香雞配炸薯角炒雜菜";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_chick");
      first_span.id="scart-quantity-chick";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 398.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-chick";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_chick = document.createElement("div");
      wrap_chick.id="scart-chick";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_chick.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_chick);



      //function add to delete

      document.getElementById("scart-remove-item-link-chick").onclick = function() { deleteItemChick()};


      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if (localStorage.getItem("lamb_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/lamb.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "炭燒香草紐西蘭羊架配炸薯角，炒雜菜";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_lamb");
      first_span.id="scart-quantity-lamb";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 468.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-lamb";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_lamb = document.createElement("div");
      wrap_lamb.id="scart-lamb";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_lamb.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_lamb);



      //function add to delete

      document.getElementById("scart-remove-item-link-lamb").onclick = function() { deleteItemLamb()};


      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if (localStorage.getItem("fillet_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/fillet.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "日式西京燒龍脷柳配炸薯角，炒雜菜";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_fillet");
      first_span.id="scart-quantity-fillet";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 408.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-fillet";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_fillet = document.createElement("div");
      wrap_fillet.id="scart-fillet";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_fillet.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_fillet);



      //function add to delete

      document.getElementById("scart-remove-item-link-fillet").onclick = function() { deleteItemFillet()};


      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    if (localStorage.getItem("sirloin_ordered")==1){
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/sirloin.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "炭燒泰式西冷牛扒配炸薯角，炒雜菜";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_sirloin");
      first_span.id="scart-quantity-sirloin";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 478.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-sirloin";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_sirloin = document.createElement("div");
      wrap_sirloin.id="scart-sirloin";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_sirloin.appendChild(first_div);

      document.getElementById("scart-item-wrap").appendChild(wrap_sirloin);



      //function add to delete

      document.getElementById("scart-remove-item-link-sirloin").onclick = function() { deleteItemSirloin()};


      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
    }

    //lobster
                              if(localStorage.getItem("lobster_ordered")==1){
                              //creation
                                var first_divl = document.createElement("div");
                                first_divl.classList.add("scart-items");
                                var sec_img_divl = document.createElement("div");
                                sec_img_divl.classList.add("scart-image");
                                var img_cartl = document.createElement("img");
                                img_cartl.src="https://aoaodelivery.com/image/lobster.jpg";
                                var third_divl = document.createElement("div");
                                third_divl.classList.add("scart-items-about");
                                //change name of the item
                                var first_pl = document.createElement("p");
                                first_pl.classList.add("scart-items-title");
                                first_pl.innerHTML= "蒜蓉牛油保雲酥焗龍蝦";

                                var sec_pl = document.createElement("p");
                                sec_pl.classList.add("scart-remove-item");
                                //change the value of the item
                                var first_spanl = document.createElement("span");
                                first_spanl.classList.add("scart-items-count-num");
                                first_spanl.innerHTML=localStorage.getItem("quantity_lobster");
                                first_spanl.id="scart-quantity-setl";
                                //change the price of the item
                                var sec_spanl = document.createElement("span");
                                sec_spanl.classList.add("scart-items-count-price");
                                sec_spanl.innerHTML="HK$ 168.00        ";
                                //change delete link
                                var a_linkl = document.createElement("span");
                                a_linkl.id="scart-remove-item-link-setl";
                                a_linkl.innerHTML="刪除";
                                var third_spanl = document.createElement("span");
                                third_spanl.innerHTML=" x ";


                                var wrap_setl = document.createElement("div");
                                wrap_setl.id="scart-setl";



                              //connection
                                sec_pl.appendChild(first_spanl);
                                sec_pl.appendChild(third_spanl);
                                sec_pl.appendChild(sec_spanl);
                                sec_pl.appendChild(a_linkl);

                                third_divl.appendChild(first_pl);
                                third_divl.appendChild(sec_pl);

                                sec_img_divl.appendChild(img_cartl);

                                first_divl.appendChild(sec_img_divl);
                                first_divl.appendChild(third_divl);


                                wrap_setl.appendChild(first_divl);

                                document.getElementById("scart-item-wrap").appendChild(wrap_setl);



                                //function add to delete

                                document.getElementById("scart-remove-item-link-setl").onclick = function() { deleteItemSetl()};
                              }


    //cabbage
                              if(localStorage.getItem("cabbage_ordered")==1){
                                //creation
                                var first_divc = document.createElement("div");
                                first_divc.classList.add("scart-items");
                                var sec_img_divc = document.createElement("div");
                                sec_img_divc.classList.add("scart-image");
                                var img_cartc = document.createElement("img");
                                img_cartc.src="https://aoaodelivery.com/image/cabbage.jpg";
                                var third_divc = document.createElement("div");
                                third_divc.classList.add("scart-items-about");
                                //change name of the item
                                var first_pc = document.createElement("p");
                                first_pc.classList.add("scart-items-title");
                                first_pc.innerHTML= "蜜糖德國鹹豬手配青蘋果甜酸醬，酸椰菜，黑糖芥末醬";

                                var sec_pc = document.createElement("p");
                                sec_pc.classList.add("scart-remove-item");
                                //change the value of the item
                                var first_spanc = document.createElement("span");
                                first_spanc.classList.add("scart-items-count-num");
                                first_spanc.innerHTML=localStorage.getItem("quantity_cabbage");
                                first_spanc.id="scart-quantity-setc";
                                //change the price of the item
                                var sec_spanc = document.createElement("span");
                                sec_spanc.classList.add("scart-items-count-price");
                                sec_spanc.innerHTML="HK$ 298.00        ";
                                //change delete link
                                var a_linkc = document.createElement("span");
                                a_linkc.id="scart-remove-item-link-setc";
                                a_linkc.innerHTML="刪除";
                                var third_spanc = document.createElement("span");
                                third_spanc.innerHTML=" x ";


                                var wrap_setc = document.createElement("div");
                                wrap_setc.id="scart-setc";



                                //connection
                                sec_pc.appendChild(first_spanc);
                                sec_pc.appendChild(third_spanc);
                                sec_pc.appendChild(sec_spanc);
                                sec_pc.appendChild(a_linkc);

                                third_divc.appendChild(first_pc);
                                third_divc.appendChild(sec_pc);

                                sec_img_divc.appendChild(img_cartc);

                                first_divc.appendChild(sec_img_divc);
                                first_divc.appendChild(third_divc);


                                wrap_setc.appendChild(first_divc);

                                document.getElementById("scart-item-wrap").appendChild(wrap_setc);



                                //function add to delete

                                document.getElementById("scart-remove-item-link-setc").onclick = function() { deleteItemSetc()};
                              }
    //hol
                              if(localStorage.getItem("hol_ordered")==1){
                                //creation
                                var first_divh = document.createElement("div");
                                first_divh.classList.add("scart-items");
                                var sec_img_divh = document.createElement("div");
                                sec_img_divh.classList.add("scart-image");
                                var img_carth = document.createElement("img");
                                img_carth.src="https://aoaodelivery.com/image/hol.jpg";
                                var third_divh = document.createElement("div");
                                third_divh.classList.add("scart-items-about");
                                //change name of the item
                                var first_ph = document.createElement("p");
                                first_ph.classList.add("scart-items-title");
                                first_ph.innerHTML= "花雕酒浸慢煮鮑魚";

                                var sec_ph = document.createElement("p");
                                sec_ph.classList.add("scart-remove-item");
                                //change the value of the item
                                var first_spanh = document.createElement("span");
                                first_spanh.classList.add("scart-items-count-num");
                                first_spanh.innerHTML=localStorage.getItem("quantity_hol");
                                first_spanh.id="scart-quantity-seth";
                                //change the price of the item
                                var sec_spanh = document.createElement("span");
                                sec_spanh.classList.add("scart-items-count-price");
                                sec_spanh.innerHTML="HK$ 218.00        ";
                                //change delete link
                                var a_linkh = document.createElement("span");
                                a_linkh.id="scart-remove-item-link-seth";
                                a_linkh.innerHTML="刪除";
                                var third_spanh = document.createElement("span");
                                third_spanh.innerHTML=" x ";


                                var wrap_seth = document.createElement("div");
                                wrap_seth.id="scart-seth";



                                //connection
                                sec_ph.appendChild(first_spanh);
                                sec_ph.appendChild(third_spanh);
                                sec_ph.appendChild(sec_spanh);
                                sec_ph.appendChild(a_linkh);

                                third_divh.appendChild(first_ph);
                                third_divh.appendChild(sec_ph);

                                sec_img_divh.appendChild(img_carth);

                                first_divh.appendChild(sec_img_divh);
                                first_divh.appendChild(third_divh);


                                wrap_seth.appendChild(first_divh);

                                document.getElementById("scart-item-wrap").appendChild(wrap_seth);



                                //function add to delete

                                document.getElementById("scart-remove-item-link-seth").onclick = function() { deleteItemSeth()};
                                }

                                //meatball
                                                          if(localStorage.getItem("meatball_ordered")==1){
                                                            //creation
                                                            var first_divm = document.createElement("div");
                                                            first_divm.classList.add("scart-items");
                                                            var sec_img_divm = document.createElement("div");
                                                            sec_img_divm.classList.add("scart-image");
                                                            var img_cartm = document.createElement("img");
                                                            img_cartm.src="https://aoaodelivery.com/image/meatball.jpg";
                                                            var third_divm = document.createElement("div");
                                                            third_divm.classList.add("scart-items-about");
                                                            //change name of the item
                                                            var first_pm = document.createElement("p");
                                                            first_pm.classList.add("scart-items-title");
                                                            first_pm.innerHTML= "芝士蕃茄薯蓉配肉丸";

                                                            var sec_pm = document.createElement("p");
                                                            sec_pm.classList.add("scart-remove-item");
                                                            //change the value of the item
                                                            var first_spanm = document.createElement("span");
                                                            first_spanm.classList.add("scart-items-count-num");
                                                            first_spanm.innerHTML=localStorage.getItem("quantity_meatball");
                                                            first_spanm.id="scart-quantity-setm";
                                                            //change the price of the item
                                                            var sec_spanm = document.createElement("span");
                                                            sec_spanm.classList.add("scart-items-count-price");
                                                            sec_spanm.innerHTML="HK$ 128.00        ";
                                                            //change delete link
                                                            var a_linkm = document.createElement("span");
                                                            a_linkm.id="scart-remove-item-link-setm";
                                                            a_linkm.innerHTML="刪除";
                                                            var third_spanm = document.createElement("span");
                                                            third_spanm.innerHTML=" x ";


                                                            var wrap_setm = document.createElement("div");
                                                            wrap_setm.id="scart-setm";



                                                            //connection
                                                            sec_pm.appendChild(first_spanm);
                                                            sec_pm.appendChild(third_spanm);
                                                            sec_pm.appendChild(sec_spanm);
                                                            sec_pm.appendChild(a_linkm);

                                                            third_divm.appendChild(first_pm);
                                                            third_divm.appendChild(sec_pm);

                                                            sec_img_divm.appendChild(img_cartm);

                                                            first_divm.appendChild(sec_img_divm);
                                                            first_divm.appendChild(third_divm);


                                                            wrap_setm.appendChild(first_divm);

                                                            document.getElementById("scart-item-wrap").appendChild(wrap_setm);



                                                            //function add to delete

                                                            document.getElementById("scart-remove-item-link-setm").onclick = function() { deleteItemSetm()};

                                                            }


  }




//divider
//divider
//divider
//divider
//divider
//divider
//divider
//divider
//divider
//divider
//divider
//divider
//divider
//divider
//divider
//divider
//divider
//divider
//divider
//divider

//open cart function
function OpenCart(){
  Shop_Cart_Open = true;
  document.getElementById("Cart-Container-id").style.display= "block";
  document.getElementById("Cart-shadow-id").style.display = "block";
  window.scrollTo(0,0);
}


//close cart function
  function closeCart(){
    if (Shop_Cart_Open){
      document.getElementById("Cart-Container-id").style.display= "none";
      document.getElementById("Cart-shadow-id").style.display= "none";
      Shop_Cart_Open=false;
    }
  }

var check=0

//checkout step one
function checkoutConfirm(){
  window.location.href="https://aoaodelivery.com/checkout_page.html";
}


function FullCart(){

  if(localStorage.getItem('friendset_ordered')==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/friendset.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "2-3人閏蜜套餐";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_friendset");
      first_span.id="scart-quantity-friendset";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 688.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-friendset";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";

      var third_p = document.createElement("div");
      third_p.classList.add("scart-set-subitems");

      var sub_one_span = document.createElement("p");
      sub_one_span.innerHTML=localStorage.getItem("faa");
      var sub_two_span = document.createElement("p");
      sub_two_span.innerHTML=localStorage.getItem("fab");
      var sub_four_span = document.createElement("p");
      sub_four_span.innerHTML = localStorage.getItem("fpa");
      var sub_five_span = document.createElement("p");
      sub_five_span.innerHTML = localStorage.getItem("fma");


      var wrap_friendset = document.createElement("div");
      wrap_friendset.id="scart-friendset";



    //connection
      third_p.appendChild(sub_one_span);
      third_p.appendChild(sub_two_span);
      third_p.appendChild(sub_four_span);
      third_p.appendChild(sub_five_span);

      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);
      first_div.appendChild(third_p);


      wrap_friendset.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_friendset);



      //function add to delete

      document.getElementById("scart-remove-item-link-friendset").onclick = function() { deleteItemFriendset()};
      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";

  }
  if(localStorage.getItem('superset_ordered')==1){
  //creation
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/superset.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "12-16人狂野派對套餐";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_superset");
    first_span.id="scart-quantity-superset";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 2,688.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-superset";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


                                                                                    var third_p = document.createElement("div");
                                                                                    third_p.classList.add("scart-set-subitems");

                                                                                    var sub_one_span = document.createElement("p");
                                                                                    sub_one_span.innerHTML=localStorage.getItem("ssaa");
                                                                                    var sub_two_span = document.createElement("p");
                                                                                    sub_two_span.innerHTML=localStorage.getItem("ssab");
                                                                                    var sub_three_span = document.createElement("p");
                                                                                    sub_three_span.innerHTML=localStorage.getItem("ssac");
                                                                                    var sub_four_span = document.createElement("p");
                                                                                    sub_four_span.innerHTML = localStorage.getItem("sspa");
                                                                                    var sub_five_span = document.createElement("p");
                                                                                    sub_five_span.innerHTML = localStorage.getItem("ssma");
                                                                                    var sub_six_span = document.createElement("p");
                                                                                    sub_six_span.innerHTML = localStorage.getItem("ssmb");
                                                                                    var sub_sev_span = document.createElement("p");
                                                                                    sub_sev_span.innerHTML = localStorage.getItem("ssad");
                                                                                    var sub_eig_span = document.createElement("p");
                                                                                    sub_eig_span.innerHTML = localStorage.getItem("sspb");
                                                                                    var sub_nin_span = document.createElement("p");
                                                                                    sub_nin_span.innerHTML = localStorage.getItem("ssmc");
                                                                                    var sub_ten_span = document.createElement("p");
                                                                                    sub_ten_span.innerHTML=localStorage.getItem("ssae");
                                                                                    var sub_ele_span = document.createElement("p");
                                                                                    sub_ele_span.innerHTML=localStorage.getItem("sspc");
                                                                                    var sub_twe_span = document.createElement("p");
                                                                                    sub_twe_span.innerHTML=localStorage.getItem("ssmd");

    var wrap_superset = document.createElement("div");
    wrap_superset.id="scart-superset";



  //connection
    third_p.appendChild(sub_one_span);
    third_p.appendChild(sub_two_span);
    third_p.appendChild(sub_three_span);
    third_p.appendChild(sub_sev_span);
    third_p.appendChild(sub_ten_span);
    third_p.appendChild(sub_four_span);
    third_p.appendChild(sub_eig_span);
    third_p.appendChild(sub_ele_span);
    third_p.appendChild(sub_five_span);
    third_p.appendChild(sub_six_span);
    third_p.appendChild(sub_nin_span);
    third_p.appendChild(sub_twe_span);

    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);
    first_div.appendChild(third_p);


    wrap_superset.appendChild(first_div);

    document.getElementById('Cart_Place').appendChild(wrap_superset);



    //function add to delete

    document.getElementById("scart-remove-item-link-superset").onclick = function() { deleteItemSuperset()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }
  if(localStorage.getItem("set_tiramisu_small_ordered")==1){
    //creation
    var first_divts = document.createElement("div");
    first_divts.classList.add("scart-items");
    var sec_img_divts = document.createElement("div");
    sec_img_divts.classList.add("scart-image");
    var img_cartts = document.createElement("img");
    img_cartts.src="https://aoaodelivery.com/image/tiramisu.jpg";
    var third_divts = document.createElement("div");
    third_divts.classList.add("scart-items-about");
    //change name of the item
    var first_pts = document.createElement("p");
    first_pts.classList.add("scart-items-title");
    first_pts.innerHTML= "蕃薯糖水tiramisu (皇牌)（1磅）";

    var sec_pts = document.createElement("p");
    sec_pts.classList.add("scart-remove-item");
    //change the value of the item
    var first_spants = document.createElement("span");
    first_spants.classList.add("scart-items-count-num");
    first_spants.innerHTML=localStorage.getItem("quantity_set_tiramisu_small");
    first_spants.id="scart-quantity-setts";
    //change the price of the item
    var sec_spants = document.createElement("span");
    sec_spants.classList.add("scart-items-count-price");
    sec_spants.innerHTML="HK$ 98.00        ";
    //change delete link
    var a_linkts = document.createElement("span");
    a_linkts.id="scart-remove-item-link-setts";
    a_linkts.innerHTML="刪除";
    var third_spants = document.createElement("span");
    third_spants.innerHTML=" x ";


    var wrap_setts = document.createElement("div");
    wrap_setts.id="scart-setts";



    //connection
    sec_pts.appendChild(first_spants);
    sec_pts.appendChild(third_spants);
    sec_pts.appendChild(sec_spants);
    sec_pts.appendChild(a_linkts);

    third_divts.appendChild(first_pts);
    third_divts.appendChild(sec_pts);

    sec_img_divts.appendChild(img_cartts);

    first_divts.appendChild(sec_img_divts);
    first_divts.appendChild(third_divts);


    wrap_setts.appendChild(first_divts);

    document.getElementById('Cart_Place').appendChild(wrap_setts);



    //function add to delete

    document.getElementById("scart-remove-item-link-setts").onclick = function() { deleteItemSetts()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_tiramisu_large_ordered")==1){
    //creation
    var first_divtl = document.createElement("div");
    first_divtl.classList.add("scart-items");
    var sec_img_divtl = document.createElement("div");
    sec_img_divtl.classList.add("scart-image");
    var img_carttl = document.createElement("img");
    img_carttl.src="https://aoaodelivery.com/image/tiramisu.jpg";
    var third_divtl = document.createElement("div");
    third_divtl.classList.add("scart-items-about");
    //change name of the item
    var first_ptl = document.createElement("p");
    first_ptl.classList.add("scart-items-title");
    first_ptl.innerHTML= "蕃薯糖水tiramisu (皇牌)（2磅）";

    var sec_ptl = document.createElement("p");
    sec_ptl.classList.add("scart-remove-item");
    //change the value of the item
    var first_spantl = document.createElement("span");
    first_spantl.classList.add("scart-items-count-num");
    first_spantl.innerHTML=localStorage.getItem("quantity_set_tiramisu_large");
    first_spantl.id="scart-quantity-settl";
    //change the price of the item
    var sec_spantl = document.createElement("span");
    sec_spantl.classList.add("scart-items-count-price");
    sec_spantl.innerHTML="HK$ 138.00        ";
    //change delete link
    var a_linktl = document.createElement("span");
    a_linktl.id="scart-remove-item-link-settl";
    a_linktl.innerHTML="刪除";
    var third_spantl = document.createElement("span");
    third_spantl.innerHTML=" x ";


    var wrap_settl = document.createElement("div");
    wrap_settl.id="scart-settl";



    //connection
    sec_ptl.appendChild(first_spantl);
    sec_ptl.appendChild(third_spantl);
    sec_ptl.appendChild(sec_spantl);
    sec_ptl.appendChild(a_linktl);

    third_divtl.appendChild(first_ptl);
    third_divtl.appendChild(sec_ptl);

    sec_img_divtl.appendChild(img_carttl);

    first_divtl.appendChild(sec_img_divtl);
    first_divtl.appendChild(third_divtl);


    wrap_settl.appendChild(first_divtl);

    document.getElementById('Cart_Place').appendChild(wrap_settl);



    //function add to delete

    document.getElementById("scart-remove-item-link-settl").onclick = function() { deleteItemSettl()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_mocha_small_ordered")==1){
    //creation
    var first_divms = document.createElement("div");
    first_divms.classList.add("scart-items");
    var sec_img_divms = document.createElement("div");
    sec_img_divms.classList.add("scart-image");
    var img_cartms = document.createElement("img");
    img_cartms.src="https://aoaodelivery.com/image/mocha.jpg";
    var third_divms = document.createElement("div");
    third_divms.classList.add("scart-items-about");
    //change name of the item
    var first_pms = document.createElement("p");
    first_pms.classList.add("scart-items-title");
    first_pms.innerHTML= "抹茶牛乳巴斯克 (65g)（3件）";

    var sec_pms = document.createElement("p");
    sec_pms.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanms = document.createElement("span");
    first_spanms.classList.add("scart-items-count-num");
    first_spanms.innerHTML=localStorage.getItem("quantity_set_mocha_small");
    first_spanms.id="scart-quantity-setms";
    //change the price of the item
    var sec_spanms = document.createElement("span");
    sec_spanms.classList.add("scart-items-count-price");
    sec_spanms.innerHTML="HK$ 72.00        ";
    //change delete link
    var a_linkms = document.createElement("span");
    a_linkms.id="scart-remove-item-link-setms";
    a_linkms.innerHTML="刪除";
    var third_spanms = document.createElement("span");
    third_spanms.innerHTML=" x ";


    var wrap_setms = document.createElement("div");
    wrap_setms.id="scart-setms";



    //connection
    sec_pms.appendChild(first_spanms);
    sec_pms.appendChild(third_spanms);
    sec_pms.appendChild(sec_spanms);
    sec_pms.appendChild(a_linkms);

    third_divms.appendChild(first_pms);
    third_divms.appendChild(sec_pms);

    sec_img_divms.appendChild(img_cartms);

    first_divms.appendChild(sec_img_divms);
    first_divms.appendChild(third_divms);


    wrap_setms.appendChild(first_divms);

    document.getElementById('Cart_Place').appendChild(wrap_setms);



    //function add to delete

    document.getElementById("scart-remove-item-link-setms").onclick = function() { deleteItemSetms()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_mocha_large_ordered")==1){
    //creation
    var first_divml = document.createElement("div");
    first_divml.classList.add("scart-items");
    var sec_img_divml = document.createElement("div");
    sec_img_divml.classList.add("scart-image");
    var img_cartml = document.createElement("img");
    img_cartml.src="https://aoaodelivery.com/image/mocha.jpg";
    var third_divml = document.createElement("div");
    third_divml.classList.add("scart-items-about");
    //change name of the item
    var first_pml = document.createElement("p");
    first_pml.classList.add("scart-items-title");
    first_pml.innerHTML= "抹茶牛乳巴斯克 (65g)（6件）";

    var sec_pml = document.createElement("p");
    sec_pml.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanml = document.createElement("span");
    first_spanml.classList.add("scart-items-count-num");
    first_spanml.innerHTML=localStorage.getItem("quantity_set_mocha_large");
    first_spanml.id="scart-quantity-setml";
    //change the price of the item
    var sec_spanml = document.createElement("span");
    sec_spanml.classList.add("scart-items-count-price");
    sec_spanml.innerHTML="HK$ 138.00        ";
    //change delete link
    var a_linkml = document.createElement("span");
    a_linkml.id="scart-remove-item-link-setml";
    a_linkml.innerHTML="刪除";
    var third_spanml = document.createElement("span");
    third_spanml.innerHTML=" x ";


    var wrap_setml = document.createElement("div");
    wrap_setml.id="scart-setml";



    //connection
    sec_pml.appendChild(first_spanml);
    sec_pml.appendChild(third_spanml);
    sec_pml.appendChild(sec_spanml);
    sec_pml.appendChild(a_linkml);

    third_divml.appendChild(first_pml);
    third_divml.appendChild(sec_pml);

    sec_img_divml.appendChild(img_cartml);

    first_divml.appendChild(sec_img_divml);
    first_divml.appendChild(third_divml);


    wrap_setml.appendChild(first_divml);

    document.getElementById('Cart_Place').appendChild(wrap_setml);



    //function add to delete

    document.getElementById("scart-remove-item-link-setml").onclick = function() { deleteItemSetml()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_choco_small_ordered")==1){
    //creation
    var first_divcs = document.createElement("div");
    first_divcs.classList.add("scart-items");
    var sec_img_divcs = document.createElement("div");
    sec_img_divcs.classList.add("scart-image");
    var img_cartcs = document.createElement("img");
    img_cartcs.src="https://aoaodelivery.com/image/choco.jpg";
    var third_divcs = document.createElement("div");
    third_divcs.classList.add("scart-items-about");
    //change name of the item
    var first_pcs = document.createElement("p");
    first_pcs.classList.add("scart-items-title");
    first_pcs.innerHTML= "朱古力果仁布朗尼 (90g)（3件）";

    var sec_pcs = document.createElement("p");
    sec_pcs.classList.add("scart-remove-item");
    //change the value of the item
    var first_spancs = document.createElement("span");
    first_spancs.classList.add("scart-items-count-num");
    first_spancs.innerHTML=localStorage.getItem("quantity_set_choco_small");
    first_spancs.id="scart-quantity-setcs";
    //change the price of the item
    var sec_spancs = document.createElement("span");
    sec_spancs.classList.add("scart-items-count-price");
    sec_spancs.innerHTML="HK$ 58.00        ";
    //change delete link
    var a_linkcs = document.createElement("span");
    a_linkcs.id="scart-remove-item-link-setcs";
    a_linkcs.innerHTML="刪除";
    var third_spancs = document.createElement("span");
    third_spancs.innerHTML=" x ";


    var wrap_setcs = document.createElement("div");
    wrap_setcs.id="scart-setcs";



    //connection
    sec_pcs.appendChild(first_spancs);
    sec_pcs.appendChild(third_spancs);
    sec_pcs.appendChild(sec_spancs);
    sec_pcs.appendChild(a_linkcs);

    third_divcs.appendChild(first_pcs);
    third_divcs.appendChild(sec_pcs);

    sec_img_divcs.appendChild(img_cartcs);

    first_divcs.appendChild(sec_img_divcs);
    first_divcs.appendChild(third_divcs);


    wrap_setcs.appendChild(first_divcs);

    document.getElementById('Cart_Place').appendChild(wrap_setcs);



    //function add to delete

    document.getElementById("scart-remove-item-link-setcs").onclick = function() { deleteItemSetcs()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_choco_large_ordered")==1){
    //creation
    var first_divcl = document.createElement("div");
    first_divcl.classList.add("scart-items");
    var sec_img_divcl = document.createElement("div");
    sec_img_divcl.classList.add("scart-image");
    var img_cartcl = document.createElement("img");
    img_cartcl.src="https://aoaodelivery.com/image/choco.jpg";
    var third_divcl = document.createElement("div");
    third_divcl.classList.add("scart-items-about");
    //change name of the item
    var first_pcl = document.createElement("p");
    first_pcl.classList.add("scart-items-title");
    first_pcl.innerHTML= "朱古力果仁布朗尼 (90g)（6件）";

    var sec_pcl = document.createElement("p");
    sec_pcl.classList.add("scart-remove-item");
    //change the value of the item
    var first_spancl = document.createElement("span");
    first_spancl.classList.add("scart-items-count-num");
    first_spancl.innerHTML=localStorage.getItem("quantity_set_choco_large");
    first_spancl.id="scart-quantity-setcl";
    //change the price of the item
    var sec_spancl = document.createElement("span");
    sec_spancl.classList.add("scart-items-count-price");
    sec_spancl.innerHTML="HK$ 108.00        ";
    //change delete link
    var a_linkcl = document.createElement("span");
    a_linkcl.id="scart-remove-item-link-setcl";
    a_linkcl.innerHTML="刪除";
    var third_spancl = document.createElement("span");
    third_spancl.innerHTML=" x ";


    var wrap_setcl = document.createElement("div");
    wrap_setcl.id="scart-setcl";



    //connection
    sec_pcl.appendChild(first_spancl);
    sec_pcl.appendChild(third_spancl);
    sec_pcl.appendChild(sec_spancl);
    sec_pcl.appendChild(a_linkcl);

    third_divcl.appendChild(first_pcl);
    third_divcl.appendChild(sec_pcl);

    sec_img_divcl.appendChild(img_cartcl);

    first_divcl.appendChild(sec_img_divcl);
    first_divcl.appendChild(third_divcl);


    wrap_setcl.appendChild(first_divcl);

    document.getElementById('Cart_Place').appendChild(wrap_setcl);



    //function add to delete

    document.getElementById("scart-remove-item-link-setcl").onclick = function() { deleteItemSetcl()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_twt_ordered")==1){
    //creation
    var first_divtwt = document.createElement("div");
    first_divtwt.classList.add("scart-items");
    var sec_img_divtwt = document.createElement("div");
    sec_img_divtwt.classList.add("scart-image");
    var img_carttwt = document.createElement("img");
    img_carttwt.src="https://aoaodelivery.com/image/twt.jpg";
    var third_divtwt = document.createElement("div");
    third_divtwt.classList.add("scart-items-about");
    //change name of the item
    var first_ptwt = document.createElement("p");
    first_ptwt.classList.add("scart-items-title");
    first_ptwt.innerHTML= "台式水果茶 （500ml）";

    var sec_ptwt = document.createElement("p");
    sec_ptwt.classList.add("scart-remove-item");
    //change the value of the item
    var first_spantwt = document.createElement("span");
    first_spantwt.classList.add("scart-items-count-num");
    first_spantwt.innerHTML=localStorage.getItem("quantity_set_twt");
    first_spantwt.id="scart-quantity-settwt";
    //change the price of the item
    var sec_spantwt = document.createElement("span");
    sec_spantwt.classList.add("scart-items-count-price");
    sec_spantwt.innerHTML="HK$ 28.00        ";
    //change delete link
    var a_linktwt = document.createElement("span");
    a_linktwt.id="scart-remove-item-link-settwt";
    a_linktwt.innerHTML="刪除";
    var third_spantwt = document.createElement("span");
    third_spantwt.innerHTML=" x ";


    var wrap_settwt = document.createElement("div");
    wrap_settwt.id="scart-settwt";



    //connection
    sec_ptwt.appendChild(first_spantwt);
    sec_ptwt.appendChild(third_spantwt);
    sec_ptwt.appendChild(sec_spantwt);
    sec_ptwt.appendChild(a_linktwt);

    third_divtwt.appendChild(first_ptwt);
    third_divtwt.appendChild(sec_ptwt);

    sec_img_divtwt.appendChild(img_carttwt);

    first_divtwt.appendChild(sec_img_divtwt);
    first_divtwt.appendChild(third_divtwt);


    wrap_settwt.appendChild(first_divtwt);

    document.getElementById('Cart_Place').appendChild(wrap_settwt);



    //function add to delete

    document.getElementById("scart-remove-item-link-settwt").onclick = function() { deleteItemSettwt()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_milkgreen_ordered")==1){
    //creation
    var first_divmilkgreen = document.createElement("div");
    first_divmilkgreen.classList.add("scart-items");
    var sec_img_divmilkgreen = document.createElement("div");
    sec_img_divmilkgreen.classList.add("scart-image");
    var img_cartmilkgreen = document.createElement("img");
    img_cartmilkgreen.src="https://aoaodelivery.com/image/milkgreen.jpg";
    var third_divmilkgreen = document.createElement("div");
    third_divmilkgreen.classList.add("scart-items-about");
    //change name of the item
    var first_pmilkgreen = document.createElement("p");
    first_pmilkgreen.classList.add("scart-items-title");
    first_pmilkgreen.innerHTML= "芋泥鮮奶綠茶（500ml）";

    var sec_pmilkgreen = document.createElement("p");
    sec_pmilkgreen.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanmilkgreen = document.createElement("span");
    first_spanmilkgreen.classList.add("scart-items-count-num");
    first_spanmilkgreen.innerHTML=localStorage.getItem("quantity_set_milkgreen");
    first_spanmilkgreen.id="scart-quantity-setmilkgreen";
    //change the price of the item
    var sec_spanmilkgreen = document.createElement("span");
    sec_spanmilkgreen.classList.add("scart-items-count-price");
    sec_spanmilkgreen.innerHTML="HK$ 28.00        ";
    //change delete link
    var a_linkmilkgreen = document.createElement("span");
    a_linkmilkgreen.id="scart-remove-item-link-setmilkgreen";
    a_linkmilkgreen.innerHTML="刪除";
    var third_spanmilkgreen = document.createElement("span");
    third_spanmilkgreen.innerHTML=" x ";


    var wrap_setmilkgreen = document.createElement("div");
    wrap_setmilkgreen.id="scart-setmilkgreen";



    //connection
    sec_pmilkgreen.appendChild(first_spanmilkgreen);
    sec_pmilkgreen.appendChild(third_spanmilkgreen);
    sec_pmilkgreen.appendChild(sec_spanmilkgreen);
    sec_pmilkgreen.appendChild(a_linkmilkgreen);

    third_divmilkgreen.appendChild(first_pmilkgreen);
    third_divmilkgreen.appendChild(sec_pmilkgreen);

    sec_img_divmilkgreen.appendChild(img_cartmilkgreen);

    first_divmilkgreen.appendChild(sec_img_divmilkgreen);
    first_divmilkgreen.appendChild(third_divmilkgreen);


    wrap_setmilkgreen.appendChild(first_divmilkgreen);

    document.getElementById('Cart_Place').appendChild(wrap_setmilkgreen);



    //function add to delete

    document.getElementById("scart-remove-item-link-setmilkgreen").onclick = function() { deleteItemSetmilkgreen()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_orangegreen_ordered")==1){
    //creation
    var first_divorangegreen = document.createElement("div");
    first_divorangegreen.classList.add("scart-items");
    var sec_img_divorangegreen = document.createElement("div");
    sec_img_divorangegreen.classList.add("scart-image");
    var img_cartorangegreen = document.createElement("img");
    img_cartorangegreen.src="https://aoaodelivery.com/image/orangegreen.jpg";
    var third_divorangegreen = document.createElement("div");
    third_divorangegreen.classList.add("scart-items-about");
    //change name of the item
    var first_porangegreen = document.createElement("p");
    first_porangegreen.classList.add("scart-items-title");
    first_porangegreen.innerHTML= "香橙綠茶（500ml）";

    var sec_porangegreen = document.createElement("p");
    sec_porangegreen.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanorangegreen = document.createElement("span");
    first_spanorangegreen.classList.add("scart-items-count-num");
    first_spanorangegreen.innerHTML=localStorage.getItem("quantity_set_orangegreen");
    first_spanorangegreen.id="scart-quantity-setorangegreen";
    //change the price of the item
    var sec_spanorangegreen = document.createElement("span");
    sec_spanorangegreen.classList.add("scart-items-count-price");
    sec_spanorangegreen.innerHTML="HK$ 23.00        ";
    //change delete link
    var a_linkorangegreen = document.createElement("span");
    a_linkorangegreen.id="scart-remove-item-link-setorangegreen";
    a_linkorangegreen.innerHTML="刪除";
    var third_spanorangegreen = document.createElement("span");
    third_spanorangegreen.innerHTML=" x ";


    var wrap_setorangegreen = document.createElement("div");
    wrap_setorangegreen.id="scart-setorangegreen";



    //connection
    sec_porangegreen.appendChild(first_spanorangegreen);
    sec_porangegreen.appendChild(third_spanorangegreen);
    sec_porangegreen.appendChild(sec_spanorangegreen);
    sec_porangegreen.appendChild(a_linkorangegreen);

    third_divorangegreen.appendChild(first_porangegreen);
    third_divorangegreen.appendChild(sec_porangegreen);

    sec_img_divorangegreen.appendChild(img_cartorangegreen);

    first_divorangegreen.appendChild(sec_img_divorangegreen);
    first_divorangegreen.appendChild(third_divorangegreen);


    wrap_setorangegreen.appendChild(first_divorangegreen);

    document.getElementById('Cart_Place').appendChild(wrap_setorangegreen);



    //function add to delete

    document.getElementById("scart-remove-item-link-setorangegreen").onclick = function() { deleteItemSetorangegreen()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_lemonginger_ordered")==1){
    //creation
    var first_divlemonginger = document.createElement("div");
    first_divlemonginger.classList.add("scart-items");
    var sec_img_divlemonginger = document.createElement("div");
    sec_img_divlemonginger.classList.add("scart-image");
    var img_cartlemonginger = document.createElement("img");
    img_cartlemonginger.src="https://aoaodelivery.com/image/lemonginger.jpg";
    var third_divlemonginger = document.createElement("div");
    third_divlemonginger.classList.add("scart-items-about");
    //change name of the item
    var first_plemonginger = document.createElement("p");
    first_plemonginger.classList.add("scart-items-title");
    first_plemonginger.innerHTML= "檸檬生薑柚子茶（500ml）";

    var sec_plemonginger = document.createElement("p");
    sec_plemonginger.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanlemonginger = document.createElement("span");
    first_spanlemonginger.classList.add("scart-items-count-num");
    first_spanlemonginger.innerHTML=localStorage.getItem("quantity_set_lemonginger");
    first_spanlemonginger.id="scart-quantity-setlemonginger";
    //change the price of the item
    var sec_spanlemonginger = document.createElement("span");
    sec_spanlemonginger.classList.add("scart-items-count-price");
    sec_spanlemonginger.innerHTML="HK$ 23.00        ";
    //change delete link
    var a_linklemonginger = document.createElement("span");
    a_linklemonginger.id="scart-remove-item-link-setlemonginger";
    a_linklemonginger.innerHTML="刪除";
    var third_spanlemonginger = document.createElement("span");
    third_spanlemonginger.innerHTML=" x ";


    var wrap_setlemonginger = document.createElement("div");
    wrap_setlemonginger.id="scart-setlemonginger";



    //connection
    sec_plemonginger.appendChild(first_spanlemonginger);
    sec_plemonginger.appendChild(third_spanlemonginger);
    sec_plemonginger.appendChild(sec_spanlemonginger);
    sec_plemonginger.appendChild(a_linklemonginger);

    third_divlemonginger.appendChild(first_plemonginger);
    third_divlemonginger.appendChild(sec_plemonginger);

    sec_img_divlemonginger.appendChild(img_cartlemonginger);

    first_divlemonginger.appendChild(sec_img_divlemonginger);
    first_divlemonginger.appendChild(third_divlemonginger);


    wrap_setlemonginger.appendChild(first_divlemonginger);

    document.getElementById('Cart_Place').appendChild(wrap_setlemonginger);



    //function add to delete

    document.getElementById("scart-remove-item-link-setlemonginger").onclick = function() { deleteItemSetlemonginger()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_redbean_ordered")==1){
    //creation
    var first_divredbean = document.createElement("div");
    first_divredbean.classList.add("scart-items");
    var sec_img_divredbean = document.createElement("div");
    sec_img_divredbean.classList.add("scart-image");
    var img_cartredbean = document.createElement("img");
    img_cartredbean.src="https://aoaodelivery.com/image/redbean.jpg";
    var third_divredbean = document.createElement("div");
    third_divredbean.classList.add("scart-items-about");
    //change name of the item
    var first_predbean = document.createElement("p");
    first_predbean.classList.add("scart-items-title");
    first_predbean.innerHTML= "紅豆鮮奶抹茶（500ml）";

    var sec_predbean = document.createElement("p");
    sec_predbean.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanredbean = document.createElement("span");
    first_spanredbean.classList.add("scart-items-count-num");
    first_spanredbean.innerHTML=localStorage.getItem("quantity_set_redbean");
    first_spanredbean.id="scart-quantity-setredbean";
    //change the price of the item
    var sec_spanredbean = document.createElement("span");
    sec_spanredbean.classList.add("scart-items-count-price");
    sec_spanredbean.innerHTML="HK$ 26.00        ";
    //change delete link
    var a_linkredbean = document.createElement("span");
    a_linkredbean.id="scart-remove-item-link-setredbean";
    a_linkredbean.innerHTML="刪除";
    var third_spanredbean = document.createElement("span");
    third_spanredbean.innerHTML=" x ";


    var wrap_setredbean = document.createElement("div");
    wrap_setredbean.id="scart-setredbean";



    //connection
    sec_predbean.appendChild(first_spanredbean);
    sec_predbean.appendChild(third_spanredbean);
    sec_predbean.appendChild(sec_spanredbean);
    sec_predbean.appendChild(a_linkredbean);

    third_divredbean.appendChild(first_predbean);
    third_divredbean.appendChild(sec_predbean);

    sec_img_divredbean.appendChild(img_cartredbean);

    first_divredbean.appendChild(sec_img_divredbean);
    first_divredbean.appendChild(third_divredbean);


    wrap_setredbean.appendChild(first_divredbean);

    document.getElementById('Cart_Place').appendChild(wrap_setredbean);



    //function add to delete

    document.getElementById("scart-remove-item-link-setredbean").onclick = function() { deleteItemSetredbean()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }

  if(localStorage.getItem("set_oolong_ordered")==1){
    //creation
    var first_divoolong = document.createElement("div");
    first_divoolong.classList.add("scart-items");
    var sec_img_divoolong = document.createElement("div");
    sec_img_divoolong.classList.add("scart-image");
    var img_cartoolong = document.createElement("img");
    img_cartoolong.src="https://aoaodelivery.com/image/oolong.jpg";
    var third_divoolong = document.createElement("div");
    third_divoolong.classList.add("scart-items-about");
    //change name of the item
    var first_poolong = document.createElement("p");
    first_poolong.classList.add("scart-items-title");
    first_poolong.innerHTML= "陳皮荔枝白桃烏龍冷泡茶（500ml）";

    var sec_poolong = document.createElement("p");
    sec_poolong.classList.add("scart-remove-item");
    //change the value of the item
    var first_spanoolong = document.createElement("span");
    first_spanoolong.classList.add("scart-items-count-num");
    first_spanoolong.innerHTML=localStorage.getItem("quantity_set_oolong");
    first_spanoolong.id="scart-quantity-setoolong";
    //change the price of the item
    var sec_spanoolong = document.createElement("span");
    sec_spanoolong.classList.add("scart-items-count-price");
    sec_spanoolong.innerHTML="HK$ 23.00        ";
    //change delete link
    var a_linkoolong = document.createElement("span");
    a_linkoolong.id="scart-remove-item-link-setoolong";
    a_linkoolong.innerHTML="刪除";
    var third_spanoolong = document.createElement("span");
    third_spanoolong.innerHTML=" x ";


    var wrap_setoolong = document.createElement("div");
    wrap_setoolong.id="scart-setoolong";



    //connection
    sec_poolong.appendChild(first_spanoolong);
    sec_poolong.appendChild(third_spanoolong);
    sec_poolong.appendChild(sec_spanoolong);
    sec_poolong.appendChild(a_linkoolong);

    third_divoolong.appendChild(first_poolong);
    third_divoolong.appendChild(sec_poolong);

    sec_img_divoolong.appendChild(img_cartoolong);

    first_divoolong.appendChild(sec_img_divoolong);
    first_divoolong.appendChild(third_divoolong);


    wrap_setoolong.appendChild(first_divoolong);

    document.getElementById('Cart_Place').appendChild(wrap_setoolong);



    //function add to delete

    document.getElementById("scart-remove-item-link-setoolong").onclick = function() { deleteItemSetoolong()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
  }



  if(localStorage.getItem("mocha_small_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/mocha.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "抹茶牛乳巴斯克 (65g) (3件)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_mocha_small");
      first_span.id="scart-quantity-mocha_small";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 172.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-mocha_small";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_mocha_small = document.createElement("div");
      wrap_mocha_small.id="scart-mocha_small";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_mocha_small.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_mocha_small);



      //function add to delete

      document.getElementById("scart-remove-item-link-mocha_small").onclick = function() { deleteItemMochaSmall()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }
  if(localStorage.getItem("mocha_large_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/mocha.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "抹茶牛乳巴斯克 (65g) (6件)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_mocha_large");
      first_span.id="scart-quantity-mocha_large";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 238.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-mocha_large";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_mocha_large = document.createElement("div");
      wrap_mocha_large.id="scart-mocha_large";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_mocha_large.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_mocha_large);



      //function add to delete

      document.getElementById("scart-remove-item-link-mocha_large").onclick = function() { deleteItemMochaLarge()};

    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }
  if(localStorage.getItem("choco_small_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/choco.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "朱古力果仁布朗尼 (90g) (3件)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_choco_small");
      first_span.id="scart-quantity-choco_small";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 158.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-choco_small";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_choco_small = document.createElement("div");
      wrap_choco_small.id="scart-choco_small";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_choco_small.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_choco_small);



      //function add to delete

      document.getElementById("scart-remove-item-link-choco_small").onclick = function() { deleteItemChocoSmall()};

    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }
  if(localStorage.getItem("choco_large_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/choco.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "朱古力果仁布朗尼 (90g) (6件)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_choco_large");
      first_span.id="scart-quantity-choco_large";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 208.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-choco_large";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_choco_large = document.createElement("div");
      wrap_choco_large.id="scart-choco_large";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_choco_large.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_choco_large);



      //function add to delete

      document.getElementById("scart-remove-item-link-choco_large").onclick = function() { deleteItemChocoLarge()};

    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }
  if(localStorage.getItem("tiramisu_small_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/tiramisu.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "蕃薯糖水tiramisu (皇牌) (1磅)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_tiramisu_small");
      first_span.id="scart-quantity-tiramisu_small";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 168.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-tiramisu_small";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_tiramisu_small = document.createElement("div");
      wrap_tiramisu_small.id="scart-tiramisu_small";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_tiramisu_small.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_tiramisu_small);



      //function add to delete

      document.getElementById("scart-remove-item-link-tiramisu_small").onclick = function() { deleteItemTiramisuSmall()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();

  }
  if(localStorage.getItem("tiramisu_large_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/tiramisu.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "蕃薯糖水tiramisu (皇牌) (2磅)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_tiramisu_large");
      first_span.id="scart-quantity-tiramisu_large";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 218.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-tiramisu_large";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_tiramisu_large = document.createElement("div");
      wrap_tiramisu_large.id="scart-tiramisu_large";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_tiramisu_large.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_tiramisu_large);



      //function add to delete

      document.getElementById("scart-remove-item-link-tiramisu_large").onclick = function() { deleteItemTiramisuLarge()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if(localStorage.getItem("ware_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/ware.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "餐具套裝（羹、叉、刀、碟）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_ware");
      first_span.id="scart-quantity-ware";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 10.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-ware";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_ware = document.createElement("div");
      wrap_ware.id="scart-ware";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_ware.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_ware);



      //function add to delete

      document.getElementById("scart-remove-item-link-ware").onclick = function() { deleteItemWare()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if(localStorage.getItem("lemonginger_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/lemonginger.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "檸檬生薑柚子茶（500ml）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_lemonginger");
      first_span.id="scart-quantity-lemonginger";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 23.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-lemonginger";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_lemonginger = document.createElement("div");
      wrap_lemonginger.id="scart-lemonginger";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_lemonginger.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_lemonginger);



      //function add to delete

      document.getElementById("scart-remove-item-link-lemonginger").onclick = function() { deleteItemLemonginger()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if(localStorage.getItem("milkgreen_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/milkgreen.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "芋泥鮮奶綠茶（500ml）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_milkgreen");
      first_span.id="scart-quantity-milkgreen";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 28.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-milkgreen";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_milkgreen = document.createElement("div");
      wrap_milkgreen.id="scart-milkgreen";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_milkgreen.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_milkgreen);



      //function add to delete

      document.getElementById("scart-remove-item-link-milkgreen").onclick = function() { deleteItemMilkgreen()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();

  }

  if(localStorage.getItem("oolong_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/oolong.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "陳皮荔枝白桃烏龍冷泡茶（500ml）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_oolong");
      first_span.id="scart-quantity-oolong";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 23.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-oolong";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_oolong = document.createElement("div");
      wrap_oolong.id="scart-oolong";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_oolong.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_oolong);



      //function add to delete

      document.getElementById("scart-remove-item-link-oolong").onclick = function() { deleteItemOolong()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();

  }

  if(localStorage.getItem("redbean_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/redbean.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "紅豆鮮奶抹茶（500ml）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_redbean");
      first_span.id="scart-quantity-redbean";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 26.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-redbean";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_redbean = document.createElement("div");
      wrap_redbean.id="scart-redbean";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_redbean.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_redbean);



      //function add to delete

      document.getElementById("scart-remove-item-link-redbean").onclick = function() { deleteItemRedbean()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if(localStorage.getItem("orangegreen_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/orangegreen.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "香橙綠茶（500ml）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_orangegreen");
      first_span.id="scart-quantity-orangegreen";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 23.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-orangegreen";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_orangegreen = document.createElement("div");
      wrap_orangegreen.id="scart-orangegreen";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_orangegreen.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_orangegreen);



      //function add to delete

      document.getElementById("scart-remove-item-link-orangegreen").onclick = function() { deleteItemOrangegreen()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if(localStorage.getItem("twt_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/twt.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "台式水果茶（500ml）";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_twt");
      first_span.id="scart-quantity-twt";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 28.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-twt";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_twt = document.createElement("div");
      wrap_twt.id="scart-twt";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_twt.appendChild(first_div);

      document.getElementById('Cart_Place').appendChild(wrap_twt);



      //function add to delete

      document.getElementById("scart-remove-item-link-twt").onclick = function() { deleteItemTwt()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById('price-for-scart').innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById('quantity-for-items').innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  }

//copy here
if(localStorage.getItem("single_lobster_ordered")==1){
//creation
  var first_div = document.createElement("div");
  first_div.classList.add("scart-items");
  var sec_img_div = document.createElement("div");
  sec_img_div.classList.add("scart-image");
  var img_cart = document.createElement("img");
  img_cart.src="https://aoaodelivery.com/image/lobster.jpg";
  var third_div = document.createElement("div");
  third_div.classList.add("scart-items-about");
  //change name of the item
  var first_p = document.createElement("p");
  first_p.classList.add("scart-items-title");
  first_p.innerHTML= "蒜蓉牛油保雲酥焗龍蝦 (1隻 已開邊)";

  var sec_p = document.createElement("p");
  sec_p.classList.add("scart-remove-item");
  //change the value of the item
  var first_span = document.createElement("span");
  first_span.classList.add("scart-items-count-num");
  first_span.innerHTML=localStorage.getItem("quantity_single_lobster");
  first_span.id="scart-quantity-single-lobster";
  //change the price of the item
  var sec_span = document.createElement("span");
  sec_span.classList.add("scart-items-count-price");
  sec_span.innerHTML="HK$ 208.00        ";
  //change delete link
  var a_link = document.createElement("span");
  a_link.id="scart-remove-item-link-single-lobster";
  a_link.innerHTML="刪除";
  var third_span = document.createElement("span");
  third_span.innerHTML=" x ";


  var wrap_lobster = document.createElement("div");
  wrap_lobster.id="scart-single-lobster";



//connection
  sec_p.appendChild(first_span);
  sec_p.appendChild(third_span);
  sec_p.appendChild(sec_span);
  sec_p.appendChild(a_link);

  third_div.appendChild(first_p);
  third_div.appendChild(sec_p);

  sec_img_div.appendChild(img_cart);

  first_div.appendChild(sec_img_div);
  first_div.appendChild(third_div);


  wrap_lobster.appendChild(first_div);
  document.getElementById("Cart_Place").appendChild(wrap_lobster);



  //function add to delete

  document.getElementById("scart-remove-item-link-single-lobster").onclick = function() { deleteItemSinglelobster()};
    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();
  };


  if(localStorage.getItem("single_hol_ordered")==1){
  //creation
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/hol.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "花雕酒浸慢煮鮑魚 (8隻)";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_single_hol");
    first_span.id="scart-quantity-single-hol";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 240.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-single-hol";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_hol = document.createElement("div");
    wrap_hol.id="scart-single-hol";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_hol.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_hol);



    //function add to delete

    document.getElementById("scart-remove-item-link-single-hol").onclick = function() { deleteItemSinglehol()};
      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
        document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if(localStorage.getItem("single_cabbage_ordered")==1){
  //creation
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/cabbage.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "蜜糖德國鹹豬手配青蘋果甜酸醬，酸椰菜，黑糖芥末醬 （1隻 已切件）";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_single_cabbage");
    first_span.id="scart-quantity-single-cabbage";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 368.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-single-cabbage";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_cabbage = document.createElement("div");
    wrap_cabbage.id="scart-single-cabbage";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_cabbage.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_cabbage);



    //function add to delete

    document.getElementById("scart-remove-item-link-single-cabbage").onclick = function() { deleteItemSinglecabbage()};
      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
        document.getElementById("change-quantity").innerHTML=total_quantity();
  }


  if(localStorage.getItem("single_meatball_ordered")==1){
  //creation
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/meatball.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "芝士蕃茄薯蓉配肉丸（1盆）";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_single_meatball");
    first_span.id="scart-quantity-single-meatball";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 148.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-single-meatball";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_meatball = document.createElement("div");
    wrap_meatball.id="scart-single-meatball";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_meatball.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_meatball);



    //function add to delete

    document.getElementById("scart-remove-item-link-single-meatball").onclick = function() { deleteItemSinglemeatball()};
      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
        document.getElementById("change-quantity").innerHTML=total_quantity();
  }


//smallset generate
if(localStorage.getItem("smallset_ordered")==1){
  var first_div = document.createElement("div");
  first_div.classList.add("scart-items");
  var sec_img_div = document.createElement("div");
  sec_img_div.classList.add("scart-image");
  var img_cart = document.createElement("img");
  img_cart.src="https://aoaodelivery.com/image/smallset.JPG";
  var third_div = document.createElement("div");
  third_div.classList.add("scart-items-about");
  //change name of the item
  var first_p = document.createElement("p");
  first_p.classList.add("scart-items-title");
  first_p.innerHTML= "4-6人歡聚套餐";

  var sec_p = document.createElement("p");
  sec_p.classList.add("scart-remove-item");
  //change the value of the item
  var first_span = document.createElement("span");
  first_span.classList.add("scart-items-count-num");
  first_span.innerHTML=localStorage.getItem("quantity_smallset");
  first_span.id="scart-quantity-smallset";
  //change the price of the item
  var sec_span = document.createElement("span");
  sec_span.classList.add("scart-items-count-price");
  sec_span.innerHTML="HK$ 1,188.00        ";
  //change delete link
  var a_link = document.createElement("span");
  a_link.id="scart-remove-item-link-smallset";
  a_link.innerHTML="刪除";
  var third_span = document.createElement("span");
  third_span.innerHTML=" x ";

  var third_p = document.createElement("div");
  third_p.classList.add("scart-set-subitems");

  var sub_one_span = document.createElement("p");
  sub_one_span.innerHTML=localStorage.getItem("saa");
  var sub_two_span = document.createElement("p");
  sub_two_span.innerHTML=localStorage.getItem("sab");
  var sub_three_span = document.createElement("p");
  sub_three_span.innerHTML=localStorage.getItem("sac");
  var sub_four_span = document.createElement("p");
  sub_four_span.innerHTML = localStorage.getItem("spa");
  var sub_five_span = document.createElement("p");
  sub_five_span.innerHTML = localStorage.getItem("sma");
  var sub_six_span = document.createElement("p");
  sub_six_span.innerHTML = localStorage.getItem("smb");

  var wrap_smallset = document.createElement("div");
  wrap_smallset.id="scart-smallset";



//connection
third_p.appendChild(sub_one_span);
third_p.appendChild(sub_two_span);
third_p.appendChild(sub_three_span);
third_p.appendChild(sub_four_span);
third_p.appendChild(sub_five_span);
third_p.appendChild(sub_six_span);

  sec_p.appendChild(first_span);
  sec_p.appendChild(third_span);
  sec_p.appendChild(sec_span);
  sec_p.appendChild(a_link);

  third_div.appendChild(first_p);
  third_div.appendChild(sec_p);

  sec_img_div.appendChild(img_cart);

  first_div.appendChild(sec_img_div);
  first_div.appendChild(third_div);
  first_div.appendChild(third_p);


  wrap_smallset.appendChild(first_div);

  document.getElementById("Cart_Place").appendChild(wrap_smallset);



  //function add to delete

  document.getElementById("scart-remove-item-link-smallset").onclick = function() { deleteItemSmallset()};



  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";

      document.getElementById("change-quantity").innerHTML=total_quantity();
}


if (localStorage.getItem("largeset_ordered")==1){
  var first_div = document.createElement("div");
  first_div.classList.add("scart-items");
  var sec_img_div = document.createElement("div");
  sec_img_div.classList.add("scart-image");
  var img_cart = document.createElement("img");
  img_cart.src="https://aoaodelivery.com/image/largeset.JPG";
  var third_div = document.createElement("div");
  third_div.classList.add("scart-items-about");
  //change name of the item
  var first_p = document.createElement("p");
  first_p.classList.add("scart-items-title");
  first_p.innerHTML= "8-10人派對套餐";

  var sec_p = document.createElement("p");
  sec_p.classList.add("scart-remove-item");
  //change the value of the item
  var first_span = document.createElement("span");
  first_span.classList.add("scart-items-count-num");
  first_span.innerHTML=localStorage.getItem("quantity_largeset");
  first_span.id="scart-quantity-largeset";
  //change the price of the item
  var sec_span = document.createElement("span");
  sec_span.classList.add("scart-items-count-price");
  sec_span.innerHTML="HK$ 1,788.00        ";
  //change delete link
  var a_link = document.createElement("span");
  a_link.id="scart-remove-item-link-largeset";
  a_link.innerHTML="刪除";
  var third_span = document.createElement("span");
  third_span.innerHTML=" x ";

  var third_p = document.createElement("div");
  third_p.classList.add("scart-set-subitems");

  var sub_one_span = document.createElement("p");
  sub_one_span.innerHTML=localStorage.getItem("laa");
  var sub_two_span = document.createElement("p");
  sub_two_span.innerHTML=localStorage.getItem("lab");
  var sub_three_span = document.createElement("p");
  sub_three_span.innerHTML=localStorage.getItem("lac");
  var sub_four_span = document.createElement("p");
  sub_four_span.innerHTML = localStorage.getItem("lpa");
  var sub_five_span = document.createElement("p");
  sub_five_span.innerHTML = localStorage.getItem("lma");
  var sub_six_span = document.createElement("p");
  sub_six_span.innerHTML = localStorage.getItem("lmb");
  var sub_sev_span = document.createElement("p");
  sub_sev_span.innerHTML = localStorage.getItem("lad");
  var sub_eig_span = document.createElement("p");
  sub_eig_span.innerHTML = localStorage.getItem("lpb");
  var sub_nin_span = document.createElement("p");
  sub_nin_span.innerHTML = localStorage.getItem("lmc");


  var wrap_largeset = document.createElement("div");
  wrap_largeset.id="scart-largeset";



//connection

  third_p.appendChild(sub_one_span);
  third_p.appendChild(sub_two_span);
  third_p.appendChild(sub_three_span);
  third_p.appendChild(sub_sev_span);
  third_p.appendChild(sub_four_span);
  third_p.appendChild(sub_eig_span);
  third_p.appendChild(sub_five_span);
  third_p.appendChild(sub_six_span);
  third_p.appendChild(sub_nin_span);

  sec_p.appendChild(first_span);
  sec_p.appendChild(third_span);
  sec_p.appendChild(sec_span);
  sec_p.appendChild(a_link);

  third_div.appendChild(first_p);
  third_div.appendChild(sec_p);

  sec_img_div.appendChild(img_cart);

  first_div.appendChild(sec_img_div);
  first_div.appendChild(third_div);
  first_div.appendChild(third_p);


  wrap_largeset.appendChild(first_div);

  document.getElementById("Cart_Place").appendChild(wrap_largeset);



  //function add to delete

  document.getElementById("scart-remove-item-link-largeset").onclick = function() { deleteItemLargeset()};

  var sum_price = total_price();
  var sum_quantity = total_quantity();
  //item price count
  document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

  //item count
  document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";

      document.getElementById("change-quantity").innerHTML=total_quantity();
}

if (localStorage.getItem("caesar_ordered")==1){
  //creation
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/caesar.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "煙三文魚黑魚子凱撒沙律";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_caesar");
    first_span.id="scart-quantity-caesar";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 188.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-caesar";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_caesar = document.createElement("div");
    wrap_caesar.id="scart-caesar";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_caesar.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_caesar);



    //function add to delete

    document.getElementById("scart-remove-item-link-caesar").onclick = function() { deleteItemCaesar()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


        document.getElementById("change-quantity").innerHTML=total_quantity();
  }


  if (localStorage.getItem("shrimpsalad_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/shrimpsalad.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "泰式汁芫荽柚子大蝦蟹籽沙律";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_shrimpsalad");
    first_span.id="scart-quantity-shrimpsalad";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 198.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-shrimpsalad";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_shrimpsalad = document.createElement("div");
    wrap_shrimpsalad.id="scart-shrimpsalad";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_shrimpsalad.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_shrimpsalad);



    //function add to delete

    document.getElementById("scart-remove-item-link-shrimpsalad").onclick = function() { deleteItemShrimpsalad()};


    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


        document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("avocado_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/avocado.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "日本松葉蟹芒果牛油果沙律";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_avocado");
    first_span.id="scart-quantity-avocado";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 188.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-avocado";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_avocado = document.createElement("div");
    wrap_avocado.id="scart-avocado";



    //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_avocado.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_avocado);



    //function add to delete

    document.getElementById("scart-remove-item-link-avocado").onclick = function() { deleteItemAvocado()};

    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";


        document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("mixcombo_ordered")==1){
    //creation
      var first_div = document.createElement("div");
      first_div.classList.add("scart-items");
      var sec_img_div = document.createElement("div");
      sec_img_div.classList.add("scart-image");
      var img_cart = document.createElement("img");
      img_cart.src="https://aoaodelivery.com/image/mixcombo.jpg";
      var third_div = document.createElement("div");
      third_div.classList.add("scart-items-about");
      //change name of the item
      var first_p = document.createElement("p");
      first_p.classList.add("scart-items-title");
      first_p.innerHTML= "小食拼盤(芝士焗薯角，黑松露墨魚滑炸雲吞，蜜糖柚子雞中翼6隻)";

      var sec_p = document.createElement("p");
      sec_p.classList.add("scart-remove-item");
      //change the value of the item
      var first_span = document.createElement("span");
      first_span.classList.add("scart-items-count-num");
      first_span.innerHTML=localStorage.getItem("quantity_mixcombo");
      first_span.id="scart-quantity-mixcombo";
      //change the price of the item
      var sec_span = document.createElement("span");
      sec_span.classList.add("scart-items-count-price");
      sec_span.innerHTML="HK$ 238.00        ";
      //change delete link
      var a_link = document.createElement("span");
      a_link.id="scart-remove-item-link-mixcombo";
      a_link.innerHTML="刪除";
      var third_span = document.createElement("span");
      third_span.innerHTML=" x ";


      var wrap_mixcombo = document.createElement("div");
      wrap_mixcombo.id="scart-mixcombo";



    //connection
      sec_p.appendChild(first_span);
      sec_p.appendChild(third_span);
      sec_p.appendChild(sec_span);
      sec_p.appendChild(a_link);

      third_div.appendChild(first_p);
      third_div.appendChild(sec_p);

      sec_img_div.appendChild(img_cart);

      first_div.appendChild(sec_img_div);
      first_div.appendChild(third_div);


      wrap_mixcombo.appendChild(first_div);

      document.getElementById("Cart_Place").appendChild(wrap_mixcombo);



      //function add to delete

      document.getElementById("scart-remove-item-link-mixcombo").onclick = function() { deleteItemMixcombo()};

      var sum_price = total_price();
      var sum_quantity = total_quantity();
      //item price count
      document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

      //item count
      document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
      document.getElementById("change-quantity").innerHTML=total_quantity();

  }

  if (localStorage.getItem("tunapack_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/tunapack.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "日本呑拿魚腩蓉福袋";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_tunapack");
    first_span.id="scart-quantity-tunapack";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 198.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-tunapack";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_tunapack = document.createElement("div");
    wrap_tunapack.id="scart-tunapack";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_tunapack.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_tunapack);



    //function add to delete

    document.getElementById("scart-remove-item-link-tunapack").onclick = function() { deleteItemTunapack()};

    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("toastnut_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/toastnut.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "砵酒鵝肝多士配無花果";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_toastnut");
    first_span.id="scart-quantity-toastnut";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 238.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-toastnut";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_toastnut = document.createElement("div");
    wrap_toastnut.id="scart-toastnut";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_toastnut.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_toastnut);



    //function add to delete

    document.getElementById("scart-remove-item-link-toastnut").onclick = function() { deleteItemToastnut()};


    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();

  }

  if (localStorage.getItem("cowtongue_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/cowtongue.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "牛肝菌牛舌忌廉長通粉";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_cowtongue");
    first_span.id="scart-quantity-cowtongue";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 338.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-cowtongue";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_cowtongue = document.createElement("div");
    wrap_cowtongue.id="scart-cowtongue";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_cowtongue.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_cowtongue);



    //function add to delete

    document.getElementById("scart-remove-item-link-cowtongue").onclick = function() { deleteItemCowtongue()};


    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("shrimprisotto_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/shrimprisotto.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "意大利香草醬帶子海蝦粒意大利飯";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_shrimprisotto");
    first_span.id="scart-quantity-shrimprisotto";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 348.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-shrimprisotto";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_shrimprisotto = document.createElement("div");
    wrap_shrimprisotto.id="scart-shrimprisotto";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_shrimprisotto.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_shrimprisotto);



    //function add to delete

    document.getElementById("scart-remove-item-link-shrimprisotto").onclick = function() { deleteItemShrimprisotto()};


    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("tomatopasta_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/tomatopasta.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "蕃茄韮菜花意大利粉配烤大菇";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_tomatopasta");
    first_span.id="scart-quantity-tomatopasta";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 298.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-tomatopasta";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_tomatopasta = document.createElement("div");
    wrap_tomatopasta.id="scart-tomatopasta";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_tomatopasta.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_tomatopasta);



    //function add to delete

    document.getElementById("scart-remove-item-link-tomatopasta").onclick = function() { deleteItemTomatopasta()};

    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("mushpasta_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/mushpasta.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "黑松露野菌意大利粉";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_mushpasta");
    first_span.id="scart-quantity-mushpasta";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 328.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-mushpasta";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_mushpasta = document.createElement("div");
    wrap_mushpasta.id="scart-mushpasta";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_mushpasta.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_mushpasta);



    //function add to delete

    document.getElementById("scart-remove-item-link-mushpasta").onclick = function() { deleteItemMushpasta()};


    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("chickpasta_ordered")==1){

    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/chickpasta.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "蕃茄雞絲薑蔥意大利粉";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_chickpasta");
    first_span.id="scart-quantity-chickpasta";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 318.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-chickpasta";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_chickpasta = document.createElement("div");
    wrap_chickpasta.id="scart-chickpasta";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_chickpasta.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_chickpasta);



    //function add to delete

    document.getElementById("scart-remove-item-link-chickpasta").onclick = function() { deleteItemChickpasta()};

    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("cabonara_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/cabonara.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "腐乳卡邦尼";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_cabonara");
    first_span.id="scart-quantity-cabonara";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 328.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-cabonara";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_cabonara = document.createElement("div");
    wrap_cabonara.id="scart-cabonara";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_cabonara.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_cabonara);



    //function add to delete

    document.getElementById("scart-remove-item-link-cabonara").onclick = function() { deleteItemCabonara()};


    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("ribs_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/ribs.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "BBQ汁燒豬肋骨配青蘋果甜酸醬，炸薯角，黑糖芥末醬";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_ribs");
    first_span.id="scart-quantity-ribs";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 428.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-ribs";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_ribs = document.createElement("div");
    wrap_ribs.id="scart-ribs";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_ribs.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_ribs);



    //function add to delete

    document.getElementById("scart-remove-item-link-ribs").onclick = function() { deleteItemRibs()};

    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("chick_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/chick.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "檸檬香草烤香雞配炸薯角炒雜菜";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_chick");
    first_span.id="scart-quantity-chick";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 398.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-chick";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_chick = document.createElement("div");
    wrap_chick.id="scart-chick";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_chick.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_chick);



    //function add to delete

    document.getElementById("scart-remove-item-link-chick").onclick = function() { deleteItemChick()};


    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("lamb_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/lamb.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "炭燒香草紐西蘭羊架配炸薯角，炒雜菜";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_lamb");
    first_span.id="scart-quantity-lamb";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 468.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-lamb";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_lamb = document.createElement("div");
    wrap_lamb.id="scart-lamb";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_lamb.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_lamb);



    //function add to delete

    document.getElementById("scart-remove-item-link-lamb").onclick = function() { deleteItemLamb()};


    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("fillet_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/fillet.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "日式西京燒龍脷柳配炸薯角，炒雜菜";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_fillet");
    first_span.id="scart-quantity-fillet";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 408.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-fillet";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_fillet = document.createElement("div");
    wrap_fillet.id="scart-fillet";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_fillet.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_fillet);



    //function add to delete

    document.getElementById("scart-remove-item-link-fillet").onclick = function() { deleteItemFillet()};


    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  if (localStorage.getItem("sirloin_ordered")==1){
    var first_div = document.createElement("div");
    first_div.classList.add("scart-items");
    var sec_img_div = document.createElement("div");
    sec_img_div.classList.add("scart-image");
    var img_cart = document.createElement("img");
    img_cart.src="https://aoaodelivery.com/image/sirloin.jpg";
    var third_div = document.createElement("div");
    third_div.classList.add("scart-items-about");
    //change name of the item
    var first_p = document.createElement("p");
    first_p.classList.add("scart-items-title");
    first_p.innerHTML= "炭燒泰式西冷牛扒配炸薯角，炒雜菜";

    var sec_p = document.createElement("p");
    sec_p.classList.add("scart-remove-item");
    //change the value of the item
    var first_span = document.createElement("span");
    first_span.classList.add("scart-items-count-num");
    first_span.innerHTML=localStorage.getItem("quantity_sirloin");
    first_span.id="scart-quantity-sirloin";
    //change the price of the item
    var sec_span = document.createElement("span");
    sec_span.classList.add("scart-items-count-price");
    sec_span.innerHTML="HK$ 478.00        ";
    //change delete link
    var a_link = document.createElement("span");
    a_link.id="scart-remove-item-link-sirloin";
    a_link.innerHTML="刪除";
    var third_span = document.createElement("span");
    third_span.innerHTML=" x ";


    var wrap_sirloin = document.createElement("div");
    wrap_sirloin.id="scart-sirloin";



  //connection
    sec_p.appendChild(first_span);
    sec_p.appendChild(third_span);
    sec_p.appendChild(sec_span);
    sec_p.appendChild(a_link);

    third_div.appendChild(first_p);
    third_div.appendChild(sec_p);

    sec_img_div.appendChild(img_cart);

    first_div.appendChild(sec_img_div);
    first_div.appendChild(third_div);


    wrap_sirloin.appendChild(first_div);

    document.getElementById("Cart_Place").appendChild(wrap_sirloin);



    //function add to delete

    document.getElementById("scart-remove-item-link-sirloin").onclick = function() { deleteItemSirloin()};


    var sum_price = total_price();
    var sum_quantity = total_quantity();
    //item price count
    document.getElementById("price-for-scart").innerHTML="HKD$ "+sum_price+".00";

    //item count
    document.getElementById("quantity-for-items").innerHTML=sum_quantity+" 件";
    document.getElementById("change-quantity").innerHTML=total_quantity();
  }

  //lobster
                            if(localStorage.getItem("lobster_ordered")==1){
                            //creation
                              var first_divl = document.createElement("div");
                              first_divl.classList.add("scart-items");
                              var sec_img_divl = document.createElement("div");
                              sec_img_divl.classList.add("scart-image");
                              var img_cartl = document.createElement("img");
                              img_cartl.src="https://aoaodelivery.com/image/lobster.jpg";
                              var third_divl = document.createElement("div");
                              third_divl.classList.add("scart-items-about");
                              //change name of the item
                              var first_pl = document.createElement("p");
                              first_pl.classList.add("scart-items-title");
                              first_pl.innerHTML= "蒜蓉牛油保雲酥焗龍蝦";

                              var sec_pl = document.createElement("p");
                              sec_pl.classList.add("scart-remove-item");
                              //change the value of the item
                              var first_spanl = document.createElement("span");
                              first_spanl.classList.add("scart-items-count-num");
                              first_spanl.innerHTML=localStorage.getItem("quantity_lobster");
                              first_spanl.id="scart-quantity-setl";
                              //change the price of the item
                              var sec_spanl = document.createElement("span");
                              sec_spanl.classList.add("scart-items-count-price");
                              sec_spanl.innerHTML="HK$ 168.00        ";
                              //change delete link
                              var a_linkl = document.createElement("span");
                              a_linkl.id="scart-remove-item-link-setl";
                              a_linkl.innerHTML="刪除";
                              var third_spanl = document.createElement("span");
                              third_spanl.innerHTML=" x ";


                              var wrap_setl = document.createElement("div");
                              wrap_setl.id="scart-setl";



                            //connection
                              sec_pl.appendChild(first_spanl);
                              sec_pl.appendChild(third_spanl);
                              sec_pl.appendChild(sec_spanl);
                              sec_pl.appendChild(a_linkl);

                              third_divl.appendChild(first_pl);
                              third_divl.appendChild(sec_pl);

                              sec_img_divl.appendChild(img_cartl);

                              first_divl.appendChild(sec_img_divl);
                              first_divl.appendChild(third_divl);


                              wrap_setl.appendChild(first_divl);

                              document.getElementById("Cart_Place").appendChild(wrap_setl);



                              //function add to delete

                              document.getElementById("scart-remove-item-link-setl").onclick = function() { deleteItemSetl()};
                            }


  //cabbage
                            if(localStorage.getItem("cabbage_ordered")==1){
                              //creation
                              var first_divc = document.createElement("div");
                              first_divc.classList.add("scart-items");
                              var sec_img_divc = document.createElement("div");
                              sec_img_divc.classList.add("scart-image");
                              var img_cartc = document.createElement("img");
                              img_cartc.src="https://aoaodelivery.com/image/cabbage.jpg";
                              var third_divc = document.createElement("div");
                              third_divc.classList.add("scart-items-about");
                              //change name of the item
                              var first_pc = document.createElement("p");
                              first_pc.classList.add("scart-items-title");
                              first_pc.innerHTML= "蜜糖德國鹹豬手配青蘋果甜酸醬，酸椰菜，黑糖芥末醬";

                              var sec_pc = document.createElement("p");
                              sec_pc.classList.add("scart-remove-item");
                              //change the value of the item
                              var first_spanc = document.createElement("span");
                              first_spanc.classList.add("scart-items-count-num");
                              first_spanc.innerHTML=localStorage.getItem("quantity_cabbage");
                              first_spanc.id="scart-quantity-setc";
                              //change the price of the item
                              var sec_spanc = document.createElement("span");
                              sec_spanc.classList.add("scart-items-count-price");
                              sec_spanc.innerHTML="HK$ 298.00        ";
                              //change delete link
                              var a_linkc = document.createElement("span");
                              a_linkc.id="scart-remove-item-link-setc";
                              a_linkc.innerHTML="刪除";
                              var third_spanc = document.createElement("span");
                              third_spanc.innerHTML=" x ";


                              var wrap_setc = document.createElement("div");
                              wrap_setc.id="scart-setc";



                              //connection
                              sec_pc.appendChild(first_spanc);
                              sec_pc.appendChild(third_spanc);
                              sec_pc.appendChild(sec_spanc);
                              sec_pc.appendChild(a_linkc);

                              third_divc.appendChild(first_pc);
                              third_divc.appendChild(sec_pc);

                              sec_img_divc.appendChild(img_cartc);

                              first_divc.appendChild(sec_img_divc);
                              first_divc.appendChild(third_divc);


                              wrap_setc.appendChild(first_divc);

                              document.getElementById("Cart_Place").appendChild(wrap_setc);



                              //function add to delete

                              document.getElementById("scart-remove-item-link-setc").onclick = function() { deleteItemSetc()};
                            }
  //hol
                            if(localStorage.getItem("hol_ordered")==1){
                              //creation
                              var first_divh = document.createElement("div");
                              first_divh.classList.add("scart-items");
                              var sec_img_divh = document.createElement("div");
                              sec_img_divh.classList.add("scart-image");
                              var img_carth = document.createElement("img");
                              img_carth.src="https://aoaodelivery.com/image/hol.jpg";
                              var third_divh = document.createElement("div");
                              third_divh.classList.add("scart-items-about");
                              //change name of the item
                              var first_ph = document.createElement("p");
                              first_ph.classList.add("scart-items-title");
                              first_ph.innerHTML= "花雕酒浸慢煮鮑魚";

                              var sec_ph = document.createElement("p");
                              sec_ph.classList.add("scart-remove-item");
                              //change the value of the item
                              var first_spanh = document.createElement("span");
                              first_spanh.classList.add("scart-items-count-num");
                              first_spanh.innerHTML=localStorage.getItem("quantity_hol");
                              first_spanh.id="scart-quantity-seth";
                              //change the price of the item
                              var sec_spanh = document.createElement("span");
                              sec_spanh.classList.add("scart-items-count-price");
                              sec_spanh.innerHTML="HK$ 218.00        ";
                              //change delete link
                              var a_linkh = document.createElement("span");
                              a_linkh.id="scart-remove-item-link-seth";
                              a_linkh.innerHTML="刪除";
                              var third_spanh = document.createElement("span");
                              third_spanh.innerHTML=" x ";


                              var wrap_seth = document.createElement("div");
                              wrap_seth.id="scart-seth";



                              //connection
                              sec_ph.appendChild(first_spanh);
                              sec_ph.appendChild(third_spanh);
                              sec_ph.appendChild(sec_spanh);
                              sec_ph.appendChild(a_linkh);

                              third_divh.appendChild(first_ph);
                              third_divh.appendChild(sec_ph);

                              sec_img_divh.appendChild(img_carth);

                              first_divh.appendChild(sec_img_divh);
                              first_divh.appendChild(third_divh);


                              wrap_seth.appendChild(first_divh);

                              document.getElementById("Cart_Place").appendChild(wrap_seth);



                              //function add to delete

                              document.getElementById("scart-remove-item-link-seth").onclick = function() { deleteItemSeth()};
                              }

                              //meatball
                                                        if(localStorage.getItem("meatball_ordered")==1){
                                                          //creation
                                                          var first_divm = document.createElement("div");
                                                          first_divm.classList.add("scart-items");
                                                          var sec_img_divm = document.createElement("div");
                                                          sec_img_divm.classList.add("scart-image");
                                                          var img_cartm = document.createElement("img");
                                                          img_cartm.src="https://aoaodelivery.com/image/meatball.jpg";
                                                          var third_divm = document.createElement("div");
                                                          third_divm.classList.add("scart-items-about");
                                                          //change name of the item
                                                          var first_pm = document.createElement("p");
                                                          first_pm.classList.add("scart-items-title");
                                                          first_pm.innerHTML= "芝士蕃茄薯蓉配肉丸";

                                                          var sec_pm = document.createElement("p");
                                                          sec_pm.classList.add("scart-remove-item");
                                                          //change the value of the item
                                                          var first_spanm = document.createElement("span");
                                                          first_spanm.classList.add("scart-items-count-num");
                                                          first_spanm.innerHTML=localStorage.getItem("quantity_meatball");
                                                          first_spanm.id="scart-quantity-setm";
                                                          //change the price of the item
                                                          var sec_spanm = document.createElement("span");
                                                          sec_spanm.classList.add("scart-items-count-price");
                                                          sec_spanm.innerHTML="HK$ 128.00        ";
                                                          //change delete link
                                                          var a_linkm = document.createElement("span");
                                                          a_linkm.id="scart-remove-item-link-setm";
                                                          a_linkm.innerHTML="刪除";
                                                          var third_spanm = document.createElement("span");
                                                          third_spanm.innerHTML=" x ";


                                                          var wrap_setm = document.createElement("div");
                                                          wrap_setm.id="scart-setm";



                                                          //connection
                                                          sec_pm.appendChild(first_spanm);
                                                          sec_pm.appendChild(third_spanm);
                                                          sec_pm.appendChild(sec_spanm);
                                                          sec_pm.appendChild(a_linkm);

                                                          third_divm.appendChild(first_pm);
                                                          third_divm.appendChild(sec_pm);

                                                          sec_img_divm.appendChild(img_cartm);

                                                          first_divm.appendChild(sec_img_divm);
                                                          first_divm.appendChild(third_divm);


                                                          wrap_setm.appendChild(first_divm);

                                                          document.getElementById("Cart_Place").appendChild(wrap_setm);



                                                          //function add to delete

                                                          document.getElementById("scart-remove-item-link-setm").onclick = function() { deleteItemSetm()};

                                                        }
                                                        document.getElementById("Price_Place").innerHTML=total_price();}


//real checkout
function realCheckout(){
  window.location.replace("realcheckout.php");
}

//confirmDetail
function confirmDetail(){

  localStorage.clear();
  genCart();

}





function dateCheck() {
  var data_day = document.getElementById("deliver_day").value.split("/");
  var today = new Date();
  var date = today.getFullYear()+"/"+(today.getMonth()+1)+"/"+today.getDate();

  var emergency = document.getElementById("deliver_day").value
  if(emergency == "2022/02/01" || emergency == "2022/02/02" || emergency == "2022-02-02" || emergency == "2022-02-01"){
    window.alert("抱歉，此日子暫停供應，請重新選擇");
    document.getElementById("submit_btn").style.display="none";
    return;
  }
  if(data_day[0]==today.getFullYear()){
    if(data_day[1]==(today.getMonth()+1)){
      if(data_day[2]==(today.getDate()+1)||data_day[2]==(today.getDate()+0)){
        document.getElementById("warning").style.display="block";
        document.getElementById("submit_btn").style.display="none";
        return;
      }
    }
  }
  if(data_day[0]<today.getFullYear()){
    document.getElementById("warning").style.display="block";
    document.getElementById("submit_btn").style.display="none";
    return;

  }

  if(data_day[0]==today.getFullYear()){
    if(data_day[1]<(today.getMonth()+1)){
      document.getElementById("warning").style.display="block";
      document.getElementById("submit_btn").style.display="none";
      return;
    }
  }

  if(data_day[0]==today.getFullYear()){
    if(data_day[1]==(today.getMonth()+1)){
      if(data_day[2]<(today.getDate())){
        document.getElementById("warning").style.display="block";
        document.getElementById("submit_btn").style.display="none";
        return;
      }
    }

  }
  if(data_day[0]>=today.getFullYear()){
    if(!(data_day[1]<(today.getMonth()+1))){
        document.getElementById("warning").style.display="none";
        document.getElementById("submit_btn").style.display="block";
        return;
    }

  }

}


//show localStorage
function allStorage() {
  var text="";
  for (i = 0; i < localStorage.length; i++) {
    x = localStorage.key(i);
    text += x + "<br>";
  }

  return text;
}



//tranDetail
function tranDetail(){
  if(document.getElementById("customer_same").checked){
    document.getElementById("deliver_name").value = document.getElementById("customer_name").value;
    document.getElementById("deliver_tel").value = document.getElementById("customer_tel").value;

  }
}
