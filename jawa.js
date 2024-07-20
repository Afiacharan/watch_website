const slides = [
    {
        src: 'sec1-1.jpeg',
        heading: '$399',
        text: 'Mens Classic watch.',
        button: 'By this one',
        buttonLink: '#'
    },
    {
        src: 'sec1-2.jpg',
        heading: '$399',
        text: 'Mens Classic watch.',
        button: 'By this one',
        buttonLink: '#'
    },
    {
        src: 'sec1-3.jpeg',
        heading: '$399',
        text: 'Mens Classic watch.',
        button: 'By this one',
        buttonLink: '#'
    },
    
   
];

let currentIndex = 0;

function showSlide(index) {
    const slideImg = document.getElementById('slide-img');
    const slideHeading = document.getElementById('slide-heading');
    const slideText = document.getElementById('slide-description');
    const slideButton = document.getElementById('slide-button');

    slideImg.src = slides[index].src;
    slideHeading.textContent = slides[index].heading;
    slideText.textContent = slides[index].text;
    slideButton.textContent = slides[index].button;
    slideButton.href = slides[index].buttonLink;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

document.getElementById('next').addEventListener('click', (e) => {
    e.preventDefault();
    nextSlide();
});

document.getElementById('prev').addEventListener('click', (e) => {
    e.preventDefault();
    prevSlide();
});

setInterval(nextSlide, 3000); // Change slide every 3 seconds

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});













document.addEventListener('DOMContentLoaded', function() {
    function updateCountdown() {
        // Set the end date to 2 days from the current date and time
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 2); // Adds 2 days
        endDate.setHours(23, 59, 59, 999); // Set the end time to 11:59:59 PM
        
        const now = new Date().getTime();
        const timeLeft = endDate.getTime() - now;

        if (timeLeft < 0) {
            document.getElementById('days').innerText = '0';
            document.getElementById('hours').innerText = '0';
            document.getElementById('minutes').innerText = '0';
            document.getElementById('seconds').innerText = '0';
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000); // Update the countdown every second
});
