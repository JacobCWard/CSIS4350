<!DOCTYPE html>
<html>
<head>
    <title>11-02</title>
</head>
<body>
    <p>This definitly works on OS X. Not tested on Windows or Linux</p>
    <p>I only have it looking in the local directory rather than the whole server because my computer has far to many images on it for the page to load efficiently. If one wanted to search the entire system, they would replace the '.' in the system command with a '/'. You could also put any other file path in that location to search from there.</p>
    <p>Any file paths with ' ' [space] characters in them should have the spaces replaced with '%20'.</p>
    <form action="#" method="post">
        <input type="text" name="filename" maxlength="300"/>
        <input type="submit" name="submit" value="Display" />
    </form>
    <?php
    if(PHP_OS == 'Darwin'){
        system("find . -type f -name '*.jpg'");
    }
    if(PHP_OS == 'Linux'){
        system("find . -type f -name '*.jpg'");
    }
    if(PHP_OS == 'WIN'){
        system("dir *.jpg/b/s");
    }

    if(isset($_POST['submit'])){
        $select = ($_POST['filename']);
        echo '<img style="max-width:100%" src="', $select, '"/>';
    }
    ?>
    <pre>
        if(PHP_OS == 'Darwin'){
            system("find . -type f -name '*.jpg'");
        }
        if(PHP_OS == 'Linux'){
            system("find . -type f -name '*.jpg'");
        }
        if(PHP_OS == 'WIN'){
            system("dir *.jpg/b/s");
        }

        if(isset($_POST['submit'])){
            $select = ($_POST['filename']);
            echo '&lt;img style="max-width:100%" src="', $select, '"/&gt;';
        }
    </pre>
</body>
</html>
