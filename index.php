<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/index.css">
    <title>GameZone</title>
</head>
<body>

<?php
require_once('header.php')

?>
<?php
if(!isset($_GET['page']) || !file_exists($_GET['page'].'.php') ){
    require_once('accueil.php');
}else{
    require_once($_GET['page'] .".php");

}
?>

<?php
require_once('footer.php')
?>

</body>
</html>
