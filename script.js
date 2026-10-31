// Interactive Booking Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    const bookingMessage = document.getElementById('booking-message');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const service = document.getElementById('service-select').value;
            const date = document.getElementById('date').value;

            if (name && service && date) {
                bookingMessage.style.color = '#27ae60';
                bookingMessage.textContent = `Thank you, ${name}! Your appointment for ${service} on ${date} has been successfully requested.`;
                bookingForm.reset();
            } else {
                bookingMessage.style.color = '#e74c3c';
                bookingMessage.textContent = 'Please fill out all fields.';
            }
        });
    }
});
