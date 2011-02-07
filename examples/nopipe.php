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
        <style>
            #left_pagelet { font-size: 32px; float: left; width: 50%; }
            #right_pagelet { color: red; float:left; width: 50%; }
            #bottom_pagelet { position: absolute; bottom: 0px; left: 0px; }
        </style>
    </head>
    <body>
        <h1>OpenPipe test</h1>
        <div id="left_pagelet">
            <?php sleep(1); ?>
            <p>Some content for the left pagelet</p>
        </div>
        <div id="right_pagelet">
            <?php full_flush(); ?>
            <?php sleep(2); ?>
            <p>Some content for the right pagelet</p>
        </div>
        <div id="bottom_pagelet">
            <?php full_flush(); ?>
            <?php sleep(2); ?>
            <p>Some content for the bottom pagelet</p>
            <script>window.onload = function() { document.getElementById('bottom_pagelet').innerHTML = '<p>This is the last pagelet.</p>'; } </script>
        </div>
    </body>
</html>