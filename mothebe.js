// Get references to the form and file-list container
const uploadForm = document.getElementById('upload-form');
const fileUploadInput = document.getElementById('file-upload');
const uploadStatus = document.getElementById('upload-status');
const fileListContainer = document.getElementById('file-list');

// Handle the file upload
uploadForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const files = fileUploadInput.files; // Get selected files

    if (files.length === 0) {
        uploadStatus.textContent = 'Please choose files to upload.';
        return;
    }

    uploadStatus.textContent = ''; // Clear previous status
    const fileList = document.createElement('ul'); // Create an unordered list for the files

    // Loop through the files and display their names
    Array.from(files).forEach(file => {
        const fileItem = document.createElement('li');
        fileItem.textContent = `${file.name} - ${file.size} bytes`; // Display file name and size
        fileList.appendChild(fileItem); // Append the list item to the list
    });

    fileListContainer.innerHTML = ''; // Clear the current file list
    fileListContainer.appendChild(fileList); // Append the new file list

    // Optional: Simulate a successful upload status
    uploadStatus.textContent = 'Files uploaded successfully!';
    uploadStatus.style.color = 'green';
});
