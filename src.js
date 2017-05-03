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
skiptimer()
