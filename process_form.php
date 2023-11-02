<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Define the file path where you want to store the data (index.php in this example)
    $file_path = 'index.php';

    // Construct the data to be saved
    $data_to_store = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message\n\n";

    // Append the data to the file (You can modify this to store the data in a database)
    file_put_contents($file_path, $data_to_store, FILE_APPEND);

    // Redirect the user to a thank you page or any other page you want
    header('Location: thank_you.php'); // Create a thank_you.php file with your thank you message
    exit();
}
?>
