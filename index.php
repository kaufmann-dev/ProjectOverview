<!DOCTYPE html>
<html>
    <head>
        <title>Site Explorer</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sus-amogus/sus-amogus.github.io/css/amogus.min.css">
        <link rel="stylesheet" href="style.css">

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div class="container">
            <fieldset id="searchWrapper">
                <legend>Search the site</legend>
                <input type="search" id="site-search" name="q" aria-label="Search through site content">
                <button class="mt">Search</button>
            </fieldset>

            <?php
                $objectAarray = [];
                $globArray = glob("src/*", GLOB_ONLYDIR);
                foreach($globArray as $x) {
                    $objectAarray[] = (object) array(
                        'name' => $x,
                        'github' => file_get_contents($x . '/github')
                    );
                }
                if(empty($objectAarray)) { ?>
                    <h1>No Websites</h1>
                <?php } else if(count($objectAarray) == 1) { ?>
                    <h1>1 Website:</h1>
                <?php } else { ?>
                    <h1><?php echo count($objectAarray); ?> Websites:</h1>
                <?php }
                
                foreach($objectAarray as $x) { ?>
                    <div class="site">
                        <h3><?php echo(str_replace("src/","",$x->name)) ?></h3>
                        <p>
                            <a href="<?php echo $x->name; ?>">Open in Browser</a>
                            <br>
                            <a href="<?php echo $x->github; ?>">View on GitHub</a>
                        </p>
                    </div>
                <?php }
            ?>
        </div>

        
    </body>
</html>