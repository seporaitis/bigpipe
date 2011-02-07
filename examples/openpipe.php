<?php 
header("Cache-Control:private, no-cache, no-store, must-revalidate", true);
header("Pragma: no-cache", true);
header("Content-Type: text/html; charset=utf-8", true);
function full_flush() {
    ob_flush();
    flush();
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
       "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <title>OpenPipe test</title>
        <script src="../build/OpenPipe-min.js"></script>
    </head>
    <body>
        <h1>OpenPipe test</h1>
        <div id="left_pagelet">empty</div>
        <div id="right_pagelet">empty</div>
        <div id="bottom_pagelet">empty</div>
        
        <script>var pipe = new OpenPipe();</script>  
    
        <?php full_flush(); ?>

        <?php 
            sleep(1);
            $pagelet = array(
                'id' => "left_pagelet",
                "html" => "<p>Some content for the left pagelet</p>",
                "css" => "#left_pagelet { font-size: 32px; float: left; width: 50%; }",
                "js" => ""
            );
        ?>
        <script>pipe.onPageletArrive(<?php echo json_encode($pagelet); ?>);</script>
        <?php full_flush(); ?>
    
        <?php 
            sleep(2);
            $pagelet = array(
                'id' => "right_pagelet",
                "html" => "<p>Some content for the right pagelet</p>",
                "css" => "#right_pagelet { color: red; float:left; width: 50%; }",
                "js" => "document.getElementById('bottom_pagelet').innerHTML = '<p>Prepare for the last pagelet!</p>';"
            );
        ?>
        <script>pipe.onPageletArrive(<?php echo json_encode($pagelet); ?>);</script>
        <?php full_flush(); ?>
    
        <?php 
            sleep(2);
            $pagelet = array(
                'id' => "bottom_pagelet",
                "html" => "<p>Some content for the bottom pagelet</p>",
                "css" => "#bottom_pagelet { position: absolute; bottom: 0px; left: 0px; }",
                "js" => "document.getElementById('bottom_pagelet').innerHTML = '<p>This is the last pagelet.</p>';"
            );
        ?>
        <script>pipe.onPageletArrive(<?php echo json_encode($pagelet); ?>);</script>
        <?php full_flush(); ?>
    
        <script>
            pipe.close();
        </script>
    </body>
</html>