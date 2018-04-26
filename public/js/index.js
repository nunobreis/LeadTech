$(document).ready(() => {
  $('.bar').css('width', '0%');

  $('#next').on('click', () => {
    const currentImg = $('.active');
    const nextImage = currentImg.next();
    const progressBar = $('.bar');

    if (nextImage.length === 1) {
      currentImg
        .removeClass('active')
        .css('z-index', -10);
      nextImage
        .addClass('active bounceInRight')
        .css('z-index', 10)
        .removeClass('bounceInLeft');
      progressBar.css({ 'width' : progressBar.width() + 150 + 'px' });
    }
  });

  $('#previous').on('click', () => {
    const currentImg = $('.active');
    const prevImage = currentImg.prev();
    const progressBar = $('.bar');

    if (prevImage.length === 1) {
      currentImg
        .removeClass('active')
        .css('z-index', -10);
      prevImage
        .addClass('active bounceInLeft')
        .css('z-index', 10)
        .removeClass('bounceInRight');
      progressBar.css({ 'width' : (progressBar.width() - 150) + 'px' });
    }
  });
});
