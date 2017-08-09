<?php
	require "db.php";
	if( R::count ('base',"login= ? ",array($_POST['login'])) < 1 ){
		echo ("false");
	}
	else if( R::count ('base',"password = ?",array($_POST['password'])) < 1 ){
		echo("false");
	}
	else{
		echo ("true");
		$_SESSION['logged_user']=$user;
	}

/*	$user= R::findOne('base','login = ?',array($_POST['login']));
	if ($user)
	{
		if(password_verify($_POST['password'],$user->password) ){
			echo("true");
			$_SESSION['logged_user']=$user;
		}
		else{
			echo("false");
		}
	}
	else{
		echo ("false");
	}
*/?>