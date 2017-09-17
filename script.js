$(document).ready(

	function()
	{
		$(".myHeader").hover(
	
			function()
			{
				$(".col").hide();
			}, 
			
			function()
			{
				$(".col").show();
			}
		);
	}
);