<!DOCTYPE html>
<html>
    <head>
        <title>Site Explorer</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.min.css">
        <link rel="stylesheet" href="style.css">

        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script type="text/javascript">
            $(document).ready(function() {
                $('.postBtn').click(function() {
                    console.log("posted");
                });
            });
        </script>

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div class="container">
            <?php
                $objectAarray = [];
                $globArray = glob("src/*", GLOB_ONLYDIR);
                foreach($globArray as $x) {
                    if(file_exists($x . '/index.html')) {
                        $path=$x . '/index.html';
                    } elseif (file_exists($x . '/index.php')) {
                        $path=$x . '/index.php';
                    } else {
                        throw new Exception('Cannot find index file.');
                    }
                    $objectAarray[] = (object) array(
                        'name'=>$x,
                        'path'=>$path
                    );
                }
                if(empty($objectAarray)) { ?>
                    <h1>No Websites</h1>
                <?php } else if(count($objectAarray) == 1) { ?>
                    <h1>1 Website:</h1>
                <?php } else { ?>
                    <h1><?php echo count($objectAarray); ?> Websites:</h1>
                <?php }
                foreach($objectAarray as $y) { ?>
                    <div class="site">
                        <h3><?php echo(str_replace("src/","",$y->name)) ?></h3>
                        <p>
                            <a href="<?php echo $y->path; ?>">Index Page</a>
                            <br>
                            <a href="javascript:void(0);" class="postBtn">Explore Files</a>
                            <?php print_r(glob($y->name )); ?>
                        </p>
                    </div>
                <?php }
            ?>
        </div>

        
    </body>
</html>