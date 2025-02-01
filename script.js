document.getElementById('poetryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the selected values from the form
    const lines = document.getElementById('lines').value;
    const tags = document.getElementById('tags').value;
    const recipient = document.getElementById('recipient').value;

    // Construct the URL with query parameters
    const url = `https://vpg2.vercel.app?lines=${encodeURIComponent(lines)}&tags=${encodeURIComponent(tags)}&recipient=${encodeURIComponent(recipient)}`;

    // Redirect to the new URL
    window.location.href = url;
});
