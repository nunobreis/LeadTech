$(document).ready(() => {
  $('#next').on('click', () => {
    const currentImg = $('.active');
    const nextImage = currentImg.next();

    if (nextImage.length === 1) {
      currentImg
        .removeClass('active')
        .css('z-index', -10);
      nextImage
        .addClass('active bounceInRight')
        .css('z-index', 10)
        .removeClass('bounceInLeft');
    }
  });

  $('#previous').on('click', () => {
    const currentImg = $('.active');
    const prevImage = currentImg.prev();

    if (prevImage.length === 1) {
      currentImg
        .removeClass('active')
        .css('z-index', -10);
      prevImage
        .addClass('active bounceInLeft')
        .css('z-index', 10)
        .removeClass('bounceInRight');
    }
  });
});
