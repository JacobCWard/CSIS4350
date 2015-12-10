<!DOCTYPE html>
<html>
<head>
    <title>09-02</title>
</head>
<body>

    <h3><a href="http://jacobcward.com/CSIS4350/week09/">Week 9 Home</a></h3>
    <h1>09-02</h1>
    <h2>Write the html and php that has a listbox with 5 choices and tells you which ones you selected.</h2>

    <p>How done are you with this semester?</p>
    <form action="#" method="post">
        <select id="done-yet" name="done-yet[]" multiple size="5">
            <option value="Done" selected>Done</option>
            <option value="Really Done">Really Done</option>
            <option value="Most Definitely DONE">Most Definitely DONE</option>
            <option value="Overwhelmingly Done">Overwhelmingly Done</option>
            <option value="You Have No Idea">You Have No Idea</option>
        </select>
        <input type="submit" name="submit" value="Get Selected Values" />
    </form>
    <br><br>
    <?php
    if(isset($_POST['submit'])){
        echo "You have selected: ";
        foreach ($_POST['done-yet'] as $select){
            echo $select, ", ";
        }
    }
        ?>
    </body>
    </html>
