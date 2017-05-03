// ==UserScript==
// @name 		Skip Amazon Video Countdown
// @include		*://amazon.*/*
// @require		https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// ==/UserScript==

var skiptimer = function ()
{
	if (document.getElementsByClassName("playIconWrapper").length == 0)
	{
		setTimeout(function ()
		{
			skiptimer()
		}, 3e3)
	}
	else if (document.getElementsByClassName("playIconWrapper").length > 0)
	{
		document.getElementsByClassName("playIconWrapper")[0].click();
		setTimeout(function ()
		{
			skiptimer()
		}, 3e3);
		
	}
}
