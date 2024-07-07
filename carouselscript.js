document.addEventListener('DOMContentLoaded', function () {
  let marginValue = 0;
  const sliderContainer = document.querySelector('.myslider');
  const moveLeftBtn = document.getElementById('prev');
  const moveRightBtn = document.getElementById('next');
  const slideWidth = 100;

  function moveSlider(direction) {
    const sliderWidth = sliderContainer.scrollWidth;

    if (direction === 'left' && marginValue < 0) {
      marginValue += slideWidth;
    } else if (direction === 'right' && marginValue > -(sliderWidth - window.innerWidth)) {
      marginValue -= slideWidth;
    }

    sliderContainer.style.marginLeft = `${marginValue}px`;
    
  }

  moveLeftBtn.addEventListener('click', function () {
    moveSlider('left');
  });

  moveRightBtn.addEventListener('click', function (){
    moveSlider('right');
  });
});
