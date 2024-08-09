
document.querySelectorAll('.seat.available').forEach(function(seat) {
    seat.addEventListener('click', function() {
        const seatNumber = this.getAttribute('data-seat-number');
        
        if (this.classList.contains('selected')) {
            this.classList.remove('selected');
            console.log(`Seat ${seatNumber} deselected`);
        } else {
            this.classList.add('selected');
            console.log(`Seat ${seatNumber} selected`);
        }

        // Optionally, you can display the seat number in an alert or any other UI element
        alert(`You clicked on seat ${seatNumber}`);
    });
});
