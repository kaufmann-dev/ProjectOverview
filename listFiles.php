<?php
    echo array_diff(scandir($_POST["name"]), array('.', '..'));
?>