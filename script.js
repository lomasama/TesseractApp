function performOCR() {
    const file = document.getElementById('imageInput').files[0];
    if (!file) {
        alert('Please select an image first!');
        return;
    }

    const reader = new FileReader();
    reader.onload = function () {
        Tesseract.recognize(
            reader.result, // image source
            'eng', // language
            {
                logger: info => console.log(info), // optional logger
            }
        ).then(({ data: { text } }) => {
            document.getElementById('output').innerText = text;
        }).catch(error => {
            console.error(error);
            alert('Error: ' + error.message);
        });
    };
    reader.readAsDataURL(file);
}