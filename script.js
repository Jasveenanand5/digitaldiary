// Generate a random pay amount between 10 and 500
function generateRandomAmount() {
    const randomAmount = (Math.random() * (500 - 10) + 10).toFixed(2); // Random amount with 2 decimals
    document.getElementById('random-amount').textContent = randomAmount;
}

// Call the function to generate the amount when the page loads
generateRandomAmount();

// Handle the form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById('name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Here, you would typically send the data to a server using AJAX or fetch

    // For now, display the confirmation message
    const responseMessage = `Thank you for your purchase, ${name}! Your payment of £${document.getElementById('random-amount').textContent} has been processed.`;

    // Display the response message
    document.getElementById('response-message').textContent = responseMessage;
    document.getElementById('response-message').style.display = 'block'; // Show the message

    // Redirect to history.html after 2 seconds (allow time to see the response message)
    setTimeout(function() {
        window.location.href = 'history.html'; // Redirect to history.html page
    }, 2000); // 2000ms = 2 seconds delay
}


