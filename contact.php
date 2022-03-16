<?php
if(isset($_POST['btn']))
{
	if(!empty($_POST['mail']) AND !empty($_POST['message']))
	{
		$header="MIME-Version: 1.0\r\n";
		$header.='From:"world-of-office.com"<support@world-of-office.com>'."\n";
		$header.='Content-Type:text/html; charset="uft-8"'."\n";
		$header.='Content-Transfer-Encoding: 8bit';

		$message='
		<html>
			<body>
				<div align="center">
					<br />
					<u>Mail de l\'expéditeur :</u>'.$_POST['mail'].'<br />
					<br />
					'.nl2br($_POST['message']).'
					<br />
				</div>
			</body>
		</html>
		';

		mail("adressetestjessy@gmail.com", $message, $header);
		$msg="Votre message a bien été envoyé !";
	}
	else
	{
		$msg="Tous les champs doivent être complétés !";
	}
}
?>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="css/contact.css"/>
</head>
<section>
	<aside>
		<p>Adresse : 645 rue du fun</p>
		<p>Ville : Paris</p>
		<p>Code postal : 75000</p>
		<p>Numéro : 01 34 54 67 87  </p>
	</aside>
	<img class="logo-hdc" src="img/logo_du_parc/logo_gamezone.png" alt="Logo de GameZone">
</section>

<div class="form_div">
	<form method="POST" action="">
	<h2>Formulaire de contact</h2>
		<label for="mail">Votre email</label>
		<input type="email" name="mail" placeholder="Votre email" value="<?php if(isset($_POST['mail'])) { echo $_POST['mail']; } ?>" /><br /><br />
		<label for="message">Corps du mail</label>
		<textarea name="message" placeholder="Votre message"><?php if(isset($_POST['message'])) { echo $_POST['message']; } ?></textarea><br /><br />
		<input type="submit" value="Envoyer !" name="btn" id="btn"/>
	</form>
</div>
<?php
if(isset($msg))
{ ?>
  <script>
     alert('<?php echo $msg;?>')
  </script>
<?php
}
?>
