$(document).ready(() => {

// AJAX Call for the slider background-images:
  const ajaxCall = $.ajax({
      dataType: 'json',
      url: '/../raw/slider.json'
  });

  ajaxCall.done((data) => {
    // store the JSON images in a variable
    const slideOne = data.dataImages[0].bgImage;
    const slideTwo = data.dataImages[0].rock;
    const slideThree = data.dataImages[0].imageRocket;

    // customize the image URL
    const urlOne = `url(${slideOne})`;
    const urlTwo = `url(${slideTwo})`;
    const urlThree = `url(${slideThree})`;

    // inject the images in the elements
    $('#slide-1').css('background-image', urlOne);
    $('#slide-2').css('background-image', urlTwo);
    $('#slide-3').css('background-image', urlThree);
  });


  // making sure the loading bar for the slider is at 0%
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
