// Array of questions and answers to show as pop-ups (using img1.jpg, img2.jpg, etc.)
const messages = [
    {
        question: "When was the Bank of England founded?",
        answer: "The Bank of England was founded in 1694 to act as the government’s banker and debt manager.",
        image: "images/img1.jpg"  // Image 1 for this message
    },
    {
        question: "What is cash?",
        answer: "Cash refers to physical money such as coins and paper notes that are used to make payments for goods and services.",
        image: "images/img2.jpg"  // Image 2 for this message
    },
    {
        question: "How does currency work?",
        answer: "Currency refers to the system of money used in a particular country or region. It allows people to trade goods and services and is typically issued by a central authority, such as a government or central bank.",
        image: "images/img3.jpg"  // Image 3 for this message
    },
    {
        question: "What are the main types of currency in the UK?",
        answer: "The main currency in the UK is the British Pound (£). It comes in coins (1p, 2p, 5p, 10p, 20p, 50p, £1, £2) and banknotes (£5, £10, £20, £50).",
        image: "images/img4.jpg"  // Image 4 for this message
    },
    {
        question: "How did the UK switch from the gold standard?",
        answer: "The UK left the gold standard in 1931 due to the economic pressures of the Great Depression. This allowed the Bank of England to print more money and control the economy more freely.",
        image: "images/img5.jpg"  // Image 5 for this message
    }
];

// Function to show multiple pop-ups at once
function showPopUps() {
    const popupContainer = document.getElementById('popup-container');
    const randomMessages = [];

    // Choose 2 or 3 random messages from the array
    while (randomMessages.length < 3) {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        if (!randomMessages.includes(randomMessage)) {
            randomMessages.push(randomMessage);
        }
    }

    randomMessages.forEach((message) => {
        const popup = document.createElement('div');
        popup.classList.add('popup');

        // Add image and text to the popup
        popup.innerHTML = `
            <img src="${message.image}" alt="Popup Image" style="width: 100%; height: auto; border-radius: 5px;">
            <strong>${message.question}</strong><br>${message.answer}
        `;

        // Append the pop-up to the container
        popupContainer.appendChild(popup);

        // Randomize the position of the pop-up
        const maxX = window.innerWidth - popup.offsetWidth;
        const maxY = window.innerHeight - popup.offsetHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        popup.style.left = `${randomX}px`;
        popup.style.top = `${randomY}px`;

        // Show the pop-up immediately
        popup.style.display = 'block';

        // Make the pop-up disappear after 5 seconds
        setTimeout(() => {
            popup.style.display = 'none';
        }, 5000); // 5000ms = 5 seconds
    });
}

// Call the showPopUps function every 2-4 seconds to display 2 or 3 pop-ups at once
setInterval(showPopUps, Math.floor(Math.random() * (4000 - 2000) + 2000));



