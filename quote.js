const quoteElement = document.getElementById('quote');
const generateButton = document.getElementById('generate-btn');
const numberInput = document.getElementById('number-input');

// Event listener for the button click
generateButton.addEventListener('click', generateNumberQuotes);

// Function to generate and display quotes based on the entered number
async function generateNumberQuotes() {
    const number = numberInput.value;
    if (!number || isNaN(number)) {
        quoteElement.textContent = 'Please enter a valid number.';
        return;
    }

    try {
        const response = await fetch(`http://numbersapi.com/${number}/10`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        quoteElement.textContent = data;
    } catch (error) {
        console.error('Error fetching and displaying quotes:', error);
        quoteElement.textContent = 'Failed to fetch quotes. Please try again later.';
    }
}

// Initial quote generation on page load
generateNumberQuotes();
const dateTimeElement = document.getElementById('date-time');

function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric',
        // timeZoneName: 'short'
    };

    const dateTimeString = now.toLocaleDateString('en-US', options);
    dateTimeElement.textContent = dateTimeString;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Call once to initialize
updateDateTime();
