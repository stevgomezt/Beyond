let nextBtn = document.querySelector('.next2')
let prevBtn = document.querySelector('.prev2')

let slider = document.querySelector('.slider2')
let sliderList = slider.querySelector('.slider2 .list2')
let thumbnail = document.querySelector('.slider2 .thumbnail2')
let thumbnailItems = thumbnail.querySelectorAll('.item2')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function () {
    moveSlider('next2')
}


// Function for prev button 
prevBtn.onclick = function () {
    moveSlider('prev2')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item2')
    let thumbnailItems = document.querySelectorAll('.thumbnail2 .item2')

    if (direction === 'next2') {
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next2')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev2')
    }


    slider.addEventListener('animationend', function () {
        if (direction === 'next2') {
            slider.classList.remove('next2')
        } else {
            slider.classList.remove('prev2')
        }
    }, { once: true }) // Remove the event listener after it's triggered once
}