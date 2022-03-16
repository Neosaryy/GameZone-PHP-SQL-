<?php
session_start();
$bdd = new PDO('mysql:host=localhost;dbname=gamezone', 'root', '');
if(isset($_POST['formconnexion'])) {
   $mailconnect = htmlspecialchars($_POST['mailconnect']);
   $mdpconnect = $_POST['mdpconnect'];
   if(!empty($mailconnect) AND !empty($mdpconnect)) {
      $requser = $bdd->prepare("SELECT * FROM account WHERE email = ? AND password = ?");
      $requser->execute(array($mailconnect, sha1($mdpconnect)));
      $userexist = $requser->rowCount();
      if($userexist == 1) {
         $userinfo = $requser->fetch();
         $_SESSION['id_compte'] = $userinfo['id_compte'];
         $_SESSION['pseudo'] = $userinfo['pseudo'];
         $_SESSION['email'] = $userinfo['email'];
        header("Location: my_profil.php?id_compte=".$_SESSION['id_compte']);
        echo 'ok';
      } else {
         $erreur = "Mauvais mail ou mot de passe !";
      }
   } else {
      $erreur = "Tous les champs doivent être complétés !";
   }
}
?>
<div class="full-body">
   <head>
      <link rel="stylesheet" href="css/connexion.css"/>
   </head>
    <div>
        <br /><br />
        <form method="POST" action="">
            <h2>Connexion</h2>
            <label for="mailconnect">Email</label>
            <input type="email" name="mailconnect" placeholder="Email" />
            <label for="password">Mot de passe</label>
            <input type="password" name="mdpconnect" placeholder="Mot de passe" />
            <br /><br />
            <div class="div-btn">
                <input type="submit" class="sub" name="formconnexion" value="Connecter" />
            </div>
            <?php
            if(isset($erreur)) {
                echo '<font color="red">'.$erreur."</font>";
            }
            ?>
        </form>
    </div>


<!-- <main>
    <link rel="stylesheet" href="connexion.css"/>
    <section class="connexion">
        <form method="POST" action="recep.php">
            <h2>Connexion</h2>
            <label for="pseudo">pseudo</label>
            <input type="text" name="pseudo">

            <label for="password">Mot de passe</label>
            <input type="password" name="password">

            <input class="sub" type="submit" name="submit" placeholder="Envoyer">
           <p> Vous n'avez pas de compte <a href="index.php?page=inscription">s'inscrire</a></p>
        </form>
    </section>
    <script src="inscription.js"></script>
</main> -->

<?php

$erreur = "";

$bdd = new PDO('mysql:host=localhost;dbname=gamezone', 'root', '');


if(isset($_POST['submit'])) {
    $nom = ['nom'];
    $prenom = ['prenom'];
    $pseudo = ['pseudo'];
    $email = ['email'];
    $password = ['password'];
    $cpassword = ['cpassword'];
    

    // echo $error_mail;
    if(!empty(htmlspecialchars($_POST['nom'])) AND !empty(htmlspecialchars($_POST['prenom'])) AND !empty(htmlspecialchars($_POST['pseudo'])) AND !empty(htmlspecialchars($_POST['email'])) AND !empty(htmlspecialchars($_POST['password'])) AND !empty(htmlspecialchars($_POST['cpassword']))) {
        
        if($error_mail = true){
            if(htmlspecialchars($_POST['password']) == htmlspecialchars($_POST['cpassword'])){ 
            $password = htmlspecialchars($_POST['password']);
            $password = sha1($password);
            $req = $bdd->prepare('INSERT INTO account(id_compte, nom, prenom, pseudo, email, password) VALUES (:id_compte, :nom, :prenom, :pseudo, :email, :password)');
            $req->execute(array(
                'id_compte' => time(),
                'nom' => htmlspecialchars($_POST['nom']),
                'prenom' => htmlspecialchars($_POST['prenom']),
                'pseudo' => htmlspecialchars($_POST['pseudo']),
                'email' => htmlspecialchars($_POST['email']),
                'password' => $password
                ));
                //header("Location: index.php?page=connexion");
            }else{
            $erreur = "<p style='color : red'>  Les mots de passe ne sont pas identique</p>";
            }

        }else{
            $erreur = '<p style="color : red">Email est déjà est utilisé</p>';
        }
    } else{
        $erreur = "<p style='color : red'>Veuillez remplir tout les champs";
    }
}
?>
    <section>
        <form method="POST" action="">

             <h2>Inscription</h2>

            <label for="name">Nom</label>
            <input type="text" name="nom">

            <label for="prenom">Prénom</label>
            <input type="text" name="prenom">

            <label for="pseudo">Pseudo</label>
            <input type="text" name="pseudo">


            <label for="email">Email</label>
            <input type="email" name="email">

            <label for="password">Mot de passe</label>
            <input type="password" name="password" >

            <label for="cpassword">Confirmer le mot de passe</label>
            <input type="password" name="cpassword">

            <div class="check_texte">
                <input type="checkbox" name="check" id="check" checked="no">
                <label class for="check">J'accepte les conditions</label>
            </div>
            <div class="div-btn">
                <input class="sub" type="submit" name="submit" placeholder="Envoyer">
            </div>
            <?php
                echo "$erreur";
            
            ?>

        </form>
    </section>
</div>
