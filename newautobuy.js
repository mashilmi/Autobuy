!function(){
  var t=document.createElement("SCRIPT");t.src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",
  t.type="text/javascript",t.onload=function(){
    var t=window.jQuery,e=!1,n=function(){window.location.href.indexOf("/cart/")>-1?t(".cart-page-footer__checkout-text").parent().click():window.location.href.indexOf("/checkout/")>-1?(t(".checkout-payment-setting__payment-methods-tab").eq(2).click(), t(".product-variation("Alfamart")").click(),t(".stardust-button").click()):e||(t("._2O0llP button.btn-solid-primary").click(),e=!0)
    },a=setInterval(function(){if("undefined"==typeof jQuery)return!1;clearTimeout(a),setInterval(n,500)},500)
      },document.getElementsByTagName("head")[0].appendChild(t)
      }();
