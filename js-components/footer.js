const FOOTER = ` <footer class="footer">
<div class="footer__main footer__main_mod-a parallax-bg parallax-dark">
  <ul class="bg-slideshow">
    <li>
      <div style="background-image:url(assets/media/components/footer/bg.jpg)" class="bg-slide"></div>
    </li>
  </ul>
  <div class="parallax__inner">
    <div class="container">
      <div class="row">
        <div class="col-xs-12"><a href="index.html" class="footer__logo"><img src="assets/images/logo.png"
              alt="Logo" class="img-responsive center-block" /></a></div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="footer-main-section" style="text-align:center;">
            <div class="footer__contact footer__contact_lg">Tel: <a href="tel:+27825295911" style="color: #fff">+27 82 529 5911</a></div>
            <div class="footer__contact">Email: <a href="mailto:info@bossprotection.co.za" style="color: #ccc">info@bossprotection.co.za</a></div>
            <div class="footer__contact">HeadOffice: 20th Floor, Commercial City, 40 Dr AB Xuma Street (Commercial
              Road), Durban, Kwa-Zulu Natal</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <ul class="social-net list-inline">
            <li class="social-net__item"><a href="twitter.com" class="social-net__link"><i
                  class="icon fa fa-twitter"></i></a></li>
            <li class="social-net__item"><a href="facebook.com" class="social-net__link"><i
                  class="icon fa fa-facebook"></i></a></li>
            <li class="social-net__item"><a href="linkedin.com" class="social-net__link"><i
                  class="icon fa fa-linkedin"></i></a></li>
            <li class="social-net__item"><a href="vimeo.com" class="social-net__link"><i
                  class="icon fa fa-vimeo"></i></a></li>
            <li class="social-net__item"><a href="rss.com" class="social-net__link"><i
                  class="icon fa fa-rss"></i></a></li>
            <li class="social-net__item"><a href="plus.google.com" class="social-net__link"><i
                  class="icon fa fa-google-plus"></i></a></li>
          </ul>
          <!-- end social-list-->
        </div>
      </div>
    </div>
  </div>
</div>
<div class="copyright">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">Copyrights 2015<a href="index.html" class="copyright__link"> Blue Ocean Security
          Services</a> All rights reserved.</div>
    </div>
  </div>
</div>
</footer>
</div>
<!-- end layout-theme-->


<script src="assets/js/jquery.js"></script>
<script src="assets/js/custom.js"></script>
<script src="assets/js/bootstrap.min.js"></script>

<script src="assets/plugins/slider-pro/jquery.sliderPro.min.js"></script>
<script src="assets/plugins/owl-carousel/owl.carousel.min.js"></script>
<script src="assets/plugins/magnific-popup/jquery.magnific-popup.min.js"></script>
<script src="assets/plugins/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
<script src="assets/plugins/doubletaptogo.js"></script>
<script src="assets/plugins/waypoints.min.js"></script>
<script src="assets/plugins/flowplayer/flowplayer.min.js"></script>
<script src="assets/plugins/classie.js"></script>
<script src="assets/plugins/scrollreveal/scrollreveal.min.js"></script>
<script src="assets/plugins/switcher/js/dmss.js"></script>
<script src="assets/plugins/jarallax/jarallax.min.js"></script>
<script src="assets/plugins/rendro-easy-pie-chart/dist/jquery.easypiechart.min.js"></script>
</body>

</html>`

function renderFooter() {
    console.log("Footer")
    document.getElementById("footer-div").innerHTML = FOOTER;
}