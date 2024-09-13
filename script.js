const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


const testimonials = document.querySelectorAll('.testimonial-card');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, idx) => {
        testimonial.classList.remove('active');
        if (idx === index) {
            testimonial.classList.add('active');
        }
    });
}
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
});

// Initialize the first testimonial as active
showTestimonial(currentIndex);
