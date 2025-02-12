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

