// EmailJS Configuration
(function() {
    emailjs.init("ochiengevaristus79@gmail.com"); // Replace with your actual EmailJS user ID
})();

// Video Selection
document.getElementById('video-select').addEventListener('change', function() {
    const selectedVideo = this.value;
    const videoSource = document.getElementById('video-source');

    if (selectedVideo === 'impala') {
        videoSource.src = 'videos/impala.mp4';
    } else if (selectedVideo === 'safari') {
        videoSource.src = 'videos/safari.mp4';
    } else if (selectedVideo === 'birds') {
        videoSource.src = 'videos/birds.mp4';
    } else {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').textContent = 'Invalid selection.';
        return;
    }

    document.getElementById('error-message').style.display = 'none';
    document.getElementById('video-player').load();
});

// Play/Pause Video
document.getElementById('playPauseBtn').addEventListener('click', function() {
    const video = document.getElementById('video-player');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// Email Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this) // Replace with your EmailJS service ID and template ID
        .then(function() {
            alert('Your message has been sent successfully!');
            document.getElementById('contact-form').reset(); // Reset the form after successful submission
        }, function(error) {
            alert('There was an error sending your message: ' + JSON.stringify(error));
        });
});
