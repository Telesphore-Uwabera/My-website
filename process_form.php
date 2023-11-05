<?php
// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Perform validation (you should add more detailed validation as needed)
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "All fields are required.";
        // You may want to provide a link back to the form page
        exit;
    }

    // Establish a database connection (replace with your own database credentials)
    $conn = new mysqli("localhost", "telesphoreuwabera", "91073@Tecy", "tecy");

    // Check for connection errors
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert data into the database (replace 'your_table_name' with your table name)
    $sql = "INSERT INTO process_form (name, email, subject, message) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    // Bind the form data to the prepared statement
    $stmt->bind_param("ssss", $name, $email, $subject, $message);

    if ($stmt->execute()) {
        // Data inserted successfully
        echo "Form submitted successfully.";
    } else {
        // Handle the error
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $stmt->close();
    $conn->close();
} else {
    // Handle cases where the form was not submitted properly
    echo "Form submission error.";
}
?>