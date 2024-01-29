var token = ''; // Your Telegram bot token
var chatId = ''; // The chat ID where you want to send the photo
var photoUrl = "";

// Building the URL to send the photo to Telegram
var apiUrl = `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${chatId}&photo=${photoUrl}`;

var delay = 5000; // Time interval between photo sending in milliseconds (e.g., 5000 milliseconds or 5 seconds)

// Function to send a photo to Telegram
function kirimGambar() {
    // Using fetch to send an HTTP POST request to the Telegram Bot API
    fetch(apiUrl, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            console.log('Pesan berhasil dikirim:', data);
        })
        .catch(error => {
            console.error('Terjadi kesalahan:', error);
        })
        .finally(() => {
            // Setting the time interval between photo sending
            // Example: sending every 5 seconds
            setTimeout(kirimGambar, delay);
        });
}

// Starting the photo sending
kirimGambar();
