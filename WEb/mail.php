<?php

$target = [];
$target[0] = "aobanagroup@gmail.com";
$target[1] = $_POST["customer_mail"];


$to = implode(", ", $target);
$subject = "AoAodelivery 訂單確認通知 #".$_POST["reciptnumber"];
$line_one = "你好 ";
$line_one.= $_POST["customer_name"];


$oa = $_POST["oa"];
$ob = $_POST["ob"];
$oc = $_POST["oc"];
$od = $_POST["od"];
$oe = $_POST["oe"];
$of = $_POST["of"];
$og = $_POST["og"];
$oh = $_POST["oh"];
$oi = $_POST["oi"];
$oj = $_POST["oj"];
$ok = $_POST["ok"];
$ol = $_POST["ol"];
$om = $_POST["om"];
$on = $_POST["on"];
$oo = $_POST["oo"];
$op = $_POST["op"];
$oq = $_POST["oq"];
$or = $_POST["or"];
$os = $_POST["os"];
$ot = $_POST["ot"];
$ou = $_POST["ou"];

$qa = $_POST["qa"];
$qb = $_POST["qb"];
$qc = $_POST["qc"];
$qd = $_POST["qd"];
$qe = $_POST["qe"];
$qf = $_POST["qf"];
$qg = $_POST["qg"];
$qh = $_POST["qh"];
$qi = $_POST["qi"];
$qj = $_POST["qj"];
$qk = $_POST["qk"];
$ql = $_POST["ql"];
$qm = $_POST["qm"];
$qn = $_POST["qn"];
$qo = $_POST["qo"];
$qp = $_POST["qp"];
$qq = $_POST["qq"];
$qr = $_POST["qr"];
$qs = $_POST["qs"];
$qt = $_POST["qt"];
$qu = $_POST["qu"];


$ots = $_POST["ots"];
$otl = $_POST["otl"];
$oms = $_POST["oms"];
$oml = $_POST["oml"];
$ocs = $_POST["ocs"];
$ocl = $_POST["ocl"];

$qts = $_POST["qts"];
$qtl = $_POST["qtl"];
$qms = $_POST["qms"];
$qml = $_POST["qml"];
$qcs = $_POST["qcs"];
$qcl = $_POST["qcl"];

$otwt = $_POST["otwt"];
$omg = $_POST["omg"];
$oog = $_POST["oog"];
$olg = $_POST["olg"];
$orb = $_POST["orb"];
$ool = $_POST["ool"];

$qtwt = $_POST["qtwt"];
$qmg = $_POST["qmg"];
$qog = $_POST["qog"];
$qlg = $_POST["qlg"];
$qrb = $_POST["qrb"];
$qol = $_POST["qol"];



$oss = $_POST["oss"];
$qss = $_POST["qss"];

$ols = $_POST["ols"];
$qls = $_POST["qls"];

$osss = $_POST["osss"];
$qsss = $_POST["qsss"];

$ofs = $_POST["ofs"];
$qfs = $_POST["qfs"];


$saa = $_POST["saa"];
$sab = $_POST["sab"];
$sac = $_POST["sac"];
$spa = $_POST["spa"];
$sma = $_POST["sma"];
$smb = $_POST["smb"];


$laa = $_POST["laa"];
$lab = $_POST["lab"];
$lac = $_POST["lac"];
$lad = $_POST["lad"];
$lpa = $_POST["lpa"];
$lpb = $_POST["lpb"];
$lma = $_POST["lma"];
$lmb = $_POST["lmb"];
$lmc = $_POST["lmc"];

$ssaa = $_POST["ssaa"];
$ssab = $_POST["ssab"];
$ssac = $_POST["ssac"];
$ssad = $_POST["ssad"];
$ssae = $_POST["ssae"];
$sspa = $_POST["sspa"];
$sspb = $_POST["sspb"];
$sspc = $_POST["sspc"];
$ssma = $_POST["ssma"];
$ssmb = $_POST["ssmb"];
$ssmc = $_POST["ssmc"];
$ssmd = $_POST["ssmd"];

$faa = $_POST["faa"];
$fab = $_POST["fab"];
$fpa = $_POST["fpa"];
$fma = $_POST["fma"];


$osl = $_POST["osl"];
$qsl = $_POST["qsl"];
$osh = $_POST["osh"];
$qsh = $_POST["qsh"];
$osc = $_POST["osc"];
$qsc = $_POST["qsc"];
$osm = $_POST["osm"];
$qsm = $_POST["qsm"];

$osts = $_POST["osts"];
$ostl = $_POST["ostl"];
$osms = $_POST["osms"];
$osml = $_POST["osml"];
$oscs = $_POST["oscs"];
$oscl = $_POST["oscl"];

$qsts = $_POST["qsts"];
$qstl = $_POST["qstl"];
$qsms = $_POST["qsms"];
$qsml = $_POST["qsml"];
$qscs = $_POST["qscs"];
$qscl = $_POST["qscl"];

$ostwt = $_POST["ostwt"];
$osmg = $_POST["osmg"];
$osog = $_POST["osog"];
$oslg = $_POST["oslg"];
$osrb = $_POST["osrb"];
$osol = $_POST["osol"];

$qstwt = $_POST["qstwt"];
$qsmg = $_POST["qsmg"];
$qsog = $_POST["qsog"];
$qslg = $_POST["qslg"];
$qsrb = $_POST["qsrb"];
$qsol = $_POST["qsol"];


$price = $_POST["finalprice"];


$message = "
<html>
<head>
<title>Confirm email</title>
</head>";
$message .=$line_one;
$message .="
<body>
<p>多謝惠顧本店！我們已收到您的訂單，請於24小時內經由轉數快或Payme繳交相關款項並截圖WhatsApp至9887 7619。收到有關款項後，我們會盡快處理你的訂單。</p>
<p>FPS轉數快 ID：167196757 </p>";
$message .="
<p>Payme: "."<a href='https://qr.payme.hsbc.com.hk/2/B594nGKjZiTTX5YYh13oqS'/><img src='https://aoaodelivery.com/image/payme.jpeg'/></a></p>";

$message .="
<table>
<tbody>
<tr>
<th>訂單明細</th>
</tr>
<tr>";
$message .="<td> 訂單編號： ".$_POST["reciptnumber"]."</td>";
$message .="</tr>";
$message .="<tr> <td>訂單金額（內含運費）： HKD$".$price.".00（HKD$".$_POST["del_fee"].".00）</td></tr>";
$message .="<tr> <td>顧客名稱 | 電話： ".$_POST["customer_name"]." | ".$_POST["customer_tel"]."</td></tr>";
$message .="<tr> <td>收貨方式： ".$_POST["customer_del"]."</td></tr>";
$message .="<tr> <td>收貨姓名： ".$_POST["deliver_name"]."</td></tr>";
$message .="<tr> <td>收貨電話： ".$_POST["deliver_tel"]."</td></tr>";
if ($_POST["customer_del"] == "送貨"){
  if($_POST["deliver_region"] == "新界"){
    $message .="<tr> <td>收貨地址： ".$_POST["deliver_region"].$_POST["deliver_region_nt"].$_POST["deliver_address"]."</td></tr>";
  }
  if($_POST["deliver_region"] == "九龍"){
    $message .="<tr> <td>收貨地址： ".$_POST["deliver_region"].$_POST["deliver_region_kl"].$_POST["deliver_address"]."</td></tr>";
  }
  if($_POST["deliver_region"] == "香港島"){
    $message .="<tr> <td>收貨地址： ".$_POST["deliver_region"].$_POST["deliver_region_hki"].$_POST["deliver_address"]."</td></tr>";
  }
  $message .="<tr> <td>收貨時間： ".$_POST["deliver_time"]."</td></tr>";
} else {
  $message .="<tr> <td>門市自取地址： 尖沙咀金馬倫道48號中國保險大廈1樓A及B號舖 </td><tr>";
  $message .="<tr> <td>自取時間： ".$_POST["self_time"]."</td></tr>";
}
$message .="<tr> <td>收貨日期： ".$_POST["deliver_day"]."</td></tr>";
$message .="<tr> <td>優惠碼： ".$_POST["promo_code"]."</td></tr>";
$message .="<tr> <td>訂單備註： ".$_POST["special_request"]."</td></tr>";



$message .="
<br><br><br>
<tr><th>訂單項目</th></tr>";

if($oa == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/ribs.jpg'/>BBQ汁燒豬肋骨配青蘋果甜酸醬，炸薯角，黑糖芥末醬</p><p>".$qa." x $428 </p></tr>";
}
if($ob == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/chick.jpg'/>檸檬香草烤香雞配炸薯角炒雜菜</p><p>".$qb." x $398 </p></tr>";
}
if($oc == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/lamb.jpg'/>炭燒香草紐西蘭羊架配炸薯角，炒雜菜</p><p>".$qc." x $468 </p></tr>";
}
if($od == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/fillet.jpg'/>日式西京燒龍脷柳配炸薯角，炒雜菜</p><p>".$qd." x $408 </p></tr>";
}
if($oe == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/sirloin.jpg'/>炭燒泰式西冷牛扒配炸薯角，炒雜菜</p><p>".$qe." x $478 </p></tr>";
}
if($of == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/cowtongue.jpg'/>牛肝菌牛舌忌廉長通粉</p><p>".$qf." x $338 </p></tr>";
}
if($og == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/shrimprisotto.jpg'/>意大利香草醬帶子海蝦粒意大利飯</p><p>".$qg." x $348 </p></tr>";
}
if($oh == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/tomatopasta.jpg'/>蕃茄韮菜花意大利粉配烤大菇</p><p>".$qh." x $298 </p></tr>";
}
if($oi == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/mushpasta.jpg'/>黑松露野菌意大利粉</p><p>".$qi." x $328 </p></tr>";
}
if($oj == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/chickpasta.jpg'/>蕃茄雞絲薑蔥意大利粉</p><p>".$qj." x $318 </p></tr>";
}
if($ok == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/cabonara.jpg'/>腐乳卡邦尼</p><p>".$qk." x $328 </p></tr>";
}
if($ol == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/caesar.jpg'/>煙三文魚黑魚子凱撒沙律</p><p>".$ql." x $188 </p></tr>";
}
if($om == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/shrimpsalad.jpg'/>泰式汁芫荽柚子大蝦蟹籽沙律</p><p>".$qm." x $198 </p></tr>";
}
if($on == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/avocado.jpg'/>日本松葉蟹芒果牛油果沙律</p><p>".$qn." x $208 </p></tr>";
}
if($oo == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/mixcombo.jpg'/>小食拼盤(芝士焗薯角，黑松露墨魚滑炸雲吞，蜜糖柚子雞中翼6隻)</p><p>".$qo." x $238 </p></tr>";
}
if($op == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/tunapack.jpg'/>日本呑拿魚腩蓉福袋</p><p>".$qp." x $198 </p></tr>";
}
if($oq == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/toastnut.jpg'/>砵酒鵝肝多士配無花果</p><p>".$qq." x $238 </p></tr>";
}
if($or == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/lobster.jpg'/>蒜蓉牛油保雲酥焗龍蝦(加購)</p><p>".$qr." x $168 </p></tr>";
}
if($os == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/cabbage.jpg'/>蜜糖德國鹹豬手配青蘋果甜酸醬，酸椰菜，黑糖芥末醬（加購）</p><p>".$qs." x $298 </p></tr>";
}
if($ot == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/hol.jpg'/>花雕酒浸漫煮鮑魚（加購）</p><p>".$qt." x $218 </p></tr>";
}
if($ou == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/meatball.jpg'/>芝士蕃茄薯蓉配肉丸（加購）</p><p>".$qu." x $128 </p></tr>";
}
if($osl == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/lobster.jpg'/>蒜蓉牛油保雲酥焗龍蝦(1隻 已開邊)</p><p>".$qsl." x $208 </p></tr>";
}
if($osh == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/cabbage.jpg'/>蜜糖德國鹹豬手配青蘋果甜酸醬，酸椰菜，黑糖芥末醬(1隻 已切件）</p><p>".$qsh." x $368 </p></tr>";
}
if($osc == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/hol.jpg'/>花雕酒浸漫煮鮑魚(8隻）</p><p>".$qsc." x $240 </p></tr>";
}
if($osm == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/meatball.jpg'/>芝士蕃茄薯蓉配肉丸(1盆）</p><p>".$qsm." x $148 </p></tr>";
}
if($ots == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/tiramisu.jpg'/>蕃薯糖水tiramisu (皇牌)（1磅）</p><p>".$qsm." x $168 </p></tr>";
}
if($otl == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/tiramisu.jpg'/>蕃薯糖水tiramisu (皇牌)（2磅）</p><p>".$qsm." x $218 </p></tr>";
}
if($oms == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/mocha.jpg'/>抹茶牛乳巴斯克（65g）(3件)</p><p>".$qsm." x $172 </p></tr>";
}
if($oml == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/mocha.jpg'/>抹茶牛乳巴斯克（65g）(6件)</p><p>".$qsm." x $238 </p></tr>";
}
if($ocs == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/choco.jpg'/>朱古力果仁布朗尼（90g）(3件)</p><p>".$qsm." x $158 </p></tr>";
}
if($ocl == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/choco.jpg'/>朱古力果仁布朗尼（90g）(6件)</p><p>".$qsm." x $208 </p></tr>";
}
if($otwt == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/twt.jpg'/>台式水果茶（500ml）</p><p>".$qsm." x $28 </p></tr>";
}
if($omg == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/milkgreen.jpg'/>芋泥鮮奶綠茶（500ml）</p><p>".$qsm." x $28 </p></tr>";
}
if($oog == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/orangegreen.jpg'/>香橙綠茶（500ml）</p><p>".$qsm." x $23 </p></tr>";
}
if($olg == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/lemonginger.jpg'/>檸檬生薑柚子茶（500ml）</p><p>".$qsm." x $23 </p></tr>";
}
if($orb == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/redbean.jpg'/>紅豆鮮奶抹茶（500ml）</p><p>".$qsm." x $26 </p></tr>";
}
if($ool == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/oolong.jpg'/>陳皮荔枝白桃烏龍冷泡茶（500ml）</p><p>".$qsm." x $23 </p></tr>";
}
if($osts == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/tiramisu.jpg'/>蕃薯糖水tiramisu (皇牌)（1磅）（加購）</p><p>".$qsm." x $98 </p></tr>";
}
if($ostl == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/tiramisu.jpg'/>蕃薯糖水tiramisu (皇牌)（2磅）（加購）</p><p>".$qsm." x $138 </p></tr>";
}
if($osms == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/mocha.jpg'/>抹茶牛乳巴斯克（65g）(3件)（加購）</p><p>".$qsm." x $72 </p></tr>";
}
if($osml == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/mocha.jpg'/>抹茶牛乳巴斯克（65g）(6件)（加購）</p><p>".$qsm." x $138 </p></tr>";
}
if($oscs == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/choco.jpg'/>朱古力果仁布朗尼（90g）(3件)（加購）</p><p>".$qsm." x $58 </p></tr>";
}
if($oscl == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/choco.jpg'/>朱古力果仁布朗尼（90g）(6件)（加購）</p><p>".$qsm." x $108 </p></tr>";
}
if($ostwt == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/twt.jpg'/>台式水果茶（500ml）（加購）</p><p>".$qsm." x $28 </p></tr>";
}
if($osmg == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/milkgreen.jpg'/>芋泥鮮奶綠茶（500ml）（加購）</p><p>".$qsm." x $28 </p></tr>";
}
if($osog == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/orangegreen.jpg'/>香橙綠茶（500ml）（加購）</p><p>".$qsm." x $23 </p></tr>";
}
if($oslg == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/lemonginger.jpg'/>檸檬生薑柚子茶（500ml）（加購）</p><p>".$qsm." x $23 </p></tr>";
}
if($osrb == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/redbean.jpg'/>紅豆鮮奶抹茶（500ml）（加購）</p><p>".$qsm." x $26 </p></tr>";
}
if($osol == 1 ){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/oolong.jpg'/>陳皮荔枝白桃烏龍冷泡茶（500ml）（加購）</p><p>".$qsm." x $23 </p></tr>";
}

if($oss == 1){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/friendset.jpg'/>2-3人閏蜜套餐".$qss." x $688 </p>";
  $message .="<p>".$faa."</p>";
  $message .="<p>".$fab."</p>";
  $message .="<p>".$fpa."</p>";
  $message .="<p>".$fma."</p>";
  $message .="</tr>";
}
if($oss == 1){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/smallset.jpg'/>4-6人派對套餐".$qss." x $1188 </p>";
  $message .="<p>".$saa."</p>";
  $message .="<p>".$sab."</p>";
  $message .="<p>".$sac."</p>";
  $message .="<p>".$spa."</p>";
  $message .="<p>".$sma."</p>";
  $message .="<p>".$smb."</p>";
  $message .="</tr>";
}
if($ols == 1){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/largeset.jpg'/>8-10人歡聚套餐".$qls." x $1788 </p>";
  $message .="<p>".$laa."</p>";
  $message .="<p>".$lab."</p>";
  $message .="<p>".$lac."</p>";
  $message .="<p>".$lad."</p>";
  $message .="<p>".$lpa."</p>";
  $message .="<p>".$lpb."</p>";
  $message .="<p>".$lma."</p>";
  $message .="<p>".$lmb."</p>";
  $message .="<p>".$lmc."</p>";
  $message .="</tr>";
}

if($osss == 1){
  $message .="<tr> <p><img src='https://aoaodelivery.com/image/superset.jpg'/>12-16人狂野派對套餐".$qls." x $2688 </p>";
  $message .="<p>".$ssaa."</p>";
  $message .="<p>".$ssab."</p>";
  $message .="<p>".$ssac."</p>";
  $message .="<p>".$ssad."</p>";
  $message .="<p>".$ssae."</p>";
  $message .="<p>".$sspa."</p>";
  $message .="<p>".$sspb."</p>";
  $message .="<p>".$sspc."</p>";
  $message .="<p>".$ssma."</p>";
  $message .="<p>".$ssmb."</p>";
  $message .="<p>".$ssmc."</p>";
  $message .="<p>".$ssmd."</p>";
  $message .="</tr>";
}

$message .="
</tbody>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@aoaodelivery.com>' . "\r\n";

  if($_POST["customer_name"]){
    mail($to,$subject,$message,$headers);
  }

?>
<html>
  <head>

    	<meta charset="utf-8">
      <link rel="stylesheet" media="all" href="https://cdn.shoplineapp.com/assets/common-f47625baea59b7f28766c213f44af5679a3f7198f77cf8bb89041274db97940a.css">
      <link rel="stylesheet" media="all" href="https://cdn.shoplineapp.com/assets/application-6f3b55f8b8d864ba63c7dfe842d4d69459c535d0e99fe9d00ab5fa8c5dffe250.css">
      <link rel="stylesheet" media="all" href="https://cdn.shoplineapp.com/assets/themes/slate-b6f9c73311a1041d6bd6386ce8911939cad346fdc954b1c089f947227c81ae99.css">
      <!--ICON-->
      <link rel="icon" type="image/png" href="https://aoaodelivery/image/icon.jpg">
      <script src="shopping_cart.js"></script>
      <link rel="stylesheet" type="text/css" href="footer.css">

      <title>運送服務方式</title>


      <meta name="description" content="運送服務方式">


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
  <body onload="genCart()">


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
  .body-content-wrapper{
    margin-left: 130px;
    margin-right: 130px;
  }
  .wrapper{
    position: relative;
    width: 100%;
  }
  .wrapper>h2{
    text-align: center;
  }
  .wrapper-col{
    position: relative;
    width: 100%;
  }

  table{
    width: 100%;
  }
  .screenshot-container{
    text-align: center;
  }
  .screenshot-container > input{
    display: inline-block;
  }
</style>
<div class="body-content-wrapper" id="body-content">
  <div class="" style="margin-top:130px;">
    <div class="row">
      <h2>訂單已成功傳達！請完成付款程序</h2>
      <p>你的訂單編號為 ＃<span id="Recipe_Place_here">
        <?php echo$_POST["reciptnumber"];?></span></p>
      <p>訂單確認電郵已寄至貴 客人所填寫的電子郵箱，請檢查清楚，如有疑問，可Whatsapp至9887 7619. 謝謝．
    </div>
    <div class="wrapper">
      <h2>付款程序</h2>
      <div class="wrapper-col">
        <table>
          <td>
              <p>  <h3>轉數快</h3> </p>
              <p>客人可轉數快至</p>
              <p>FPS 轉數快 ID: 167196757 </p>
              <p>入數後請將交易成功的畫面於24小時內</p>
              <p>  WhatsApp到9887 7619，並提供你的訂單編號以作確認 </p>
          </td>
          <td>
            <p>  <h3>PAYME</h3> </p>
            <p>客人可PayMe至 </p>
            <p><a href="https://qr.payme.hsbc.com.hk/2/B594nGKjZiTTX5YYh13oqS"><img src="image/payme.jpeg" style="width:150px;"></a></p>
            <p>入數後請將交易成功的畫面於24小時內</p>
            <p>WhatsApp到9887 7619，並提供你的訂單編號以作確認 </p>
          </td>
        </table>

      </div>
    </div>
    <hr>
<?php

    $stack = array();
    foreach ($_POST as $key => $value) {
        $stack[$key] = $value;
    }


?>
    <hr>
  </div>

  <script type="text/javascript">


  </script>
</div>
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
