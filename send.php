<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $navn = htmlspecialchars($_POST['navn']);
    $email = htmlspecialchars($_POST['email']);

    // Mail til dig
    $til = "dinemail@eksempel.dk";
    $emne = "Ny tilmelding til Werewolf Night";
    $besked = "Navn: $navn\nEmail: $email";
    $headers = "From: dinemail@eksempel.dk\r\n";
    $headers .= "Reply-To: $email\r\n";

    mail($til, $emne, $besked, $headers);

    // Bekræftelsesmail til bruger
    $til_bruger = $email;
    $emne_bruger = "Bekræftelse på tilmelding til Werewolf Night";
    $besked_bruger = "Hej $navn,\n\nTak for din tilmelding! Vi glæder os til at se dig.";
    $headers_bruger = "From: dinemail@eksempel.dk\r\n";

    mail($til_bruger, $emne_bruger, $besked_bruger, $headers_bruger);

    // Redirect tilbage til hovedsiden
    header("Location: index.html?success=1");
    exit;
}
?>
