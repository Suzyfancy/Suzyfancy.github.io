<?php
    if (isset($_POST['message'])) {
        $position_arobase = strpos($_POST['email'], '@');
        if ($position_arobase === false)
            echo '<p>Votre email doit comporter un arobase.</p>';
        else {
            $entete  = 'MIME-Version: 1.0' . "\r\n";
        $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
        $entete .= 'From: ' . $_POST['email'] . "\r\n";
            $message = 'Message envoyé depuis suzannelebastard.me
        <p><b>Nom : </b>' . $_POST['nom'] . '<br>
        <p><b>Prénom : </b>' . $_POST['prenom'] . '<br>
        <b>Email : </b>' . $_POST['email'] . '<br>
        <b>Message : </b>' . $_POST['message'] . '</p>';
            $retour = mail('suzanne.lb@hotmail.com', 'from suzannelebastard.me', $message);
        }
        if($retour)
              //  echo '<p>Votre message a été envoyé.</p>';
        header("Location:https://suzannelebastard.me");
        
    }
    ?>

        