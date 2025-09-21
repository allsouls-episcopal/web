// button control

function displayPhoto()
{
	document.getElementById( "photo_A" ).src = filePath + photoFileN[pN] ;

	showCaption() ;
}

function nextPhoto()
{
	if ( pN < albumSize )
	{
		pN = pN + 1 ;
		displayPhoto() ;
	}	
	else 
	{	pN = 1 ;
		displayPhoto() ;
	}
}

function prevPhoto()
{
	if ( pN > 1 )
	{
		pN = pN-1 ;
		displayPhoto() ;
	}	
}


//	[EOF]
