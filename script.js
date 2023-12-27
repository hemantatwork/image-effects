function downloadImage(image) {
    // Create a link element
    var downloadLink = document.createElement('a');

    // Set the href attribute to the image source
    downloadLink.href = image.src;

    // Generate a random string
    var randomString = Math.random().toString(36).substring(7);

    // Get the current timestamp
    var timestamp = new Date();
    var year = timestamp.getFullYear();
    var month = ('0' + (timestamp.getMonth() + 1)).slice(-2);
    var day = ('0' + timestamp.getDate()).slice(-2);
    var hour = ('0' + timestamp.getHours()).slice(-2);
    var minute = ('0' + timestamp.getMinutes()).slice(-2);
    var second = ('0' + timestamp.getSeconds()).slice(-2);

    // Set the download attribute with a filename including timestamp and random string
    downloadLink.download = `${year}${month}${day}_${hour}${minute}${second}_${randomString}.png`;

    // Append the link to the document
    document.body.appendChild(downloadLink);

    // Trigger a click on the link to start the download
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
}
