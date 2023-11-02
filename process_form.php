<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Define the file path where you want to store the data (form_data.txt in this example)
    $file_path = 'form_data.txt';

    // Construct the data to be saved
    $data_to_store = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message\n\n";

    // Append the data to the file
    if (file_put_contents($file_path, $data_to_store, FILE_APPEND) !== false) {
        // Redirect the user to a thank you page
        header('Location: thank_you.php');
        exit();
    } else {
        echo "Error: Unable to save the data to the file.";
    }
}
?>
