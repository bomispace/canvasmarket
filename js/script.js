var header =  new EzenScrollClass("header",{
    baseline:150, 
}); 

const swiper1 = new Swiper('#banner_wrap', {
    // Optional parameters
    wrapperClass: 'rolling_text',
    slideClass: "text",
    direction: 'vertical',
    loop: true,
 
    autoplay: {
        delay: 2000,
    }
  });

var text = [
    "봄의 여정, 캔버스마켓에서<a href='#'>→</a>",
    "새로운 출발, 20%할인 이벤트<a href='#'>→</a>",
    "공식 온라인 리뉴얼 기념 타임세일!&nbsp&nbsp&nbsp&nbsp&nbsp<a href='#'>→</a>"
]


var main_view = new Swiper('#main_visual .inner', {  
    wrapperClass: 'article_wrap',
    slideClass: "main_visual_wrap",
    effect: 'fade',
    loop: true,
    speed: 800,
    autoplay: {
        delay: 2000,
    },  
    pagination: {
        el: "#visual_info",
        clickable: true,
        bulletActiveClass: "active",
        renderBullet: function (index, className) {
          return '<p class="' + className + '">' + text[index] + "</p>";
        },
    },

});

var artist = new Swiper("#art_info", {
    wrapperClass: 'art_swiper',
    slideClass: "art_box", 
    loop: true,

    navigation: {
      nextEl: ".art_right",
      prevEl: ".art_left",
    },
  });

var product = new Swiper("#product_wrap", {
    wrapperClass: 'product_swiper',
    slideClass: "product_list", 
    loop: true,
    effect: "fade",

});

artist.controller.control=product;
product.controller.control=artist;


var style = new EzenScrollClass("#style_wrap",{
	class:"show",
    markers:true,
    baseline:"middle",
    add:0.2, //화면 높이에 20%만큼 기준이 내려옴
});

var style = new EzenScrollClass("#community",{
	class:"show",
    markers:true,
    baseline:"middle",
    add:0.2, //화면 높이에 20%만큼 기준이 내려옴
});
