var pN = 0 ;		//	photoNo

var $OL_Text ;

function showCaption()
{
	$OL_Text = document.getElementById( "overlay_text" ) ;

	if ( !captionText[pN]?.trim() ) 	//  ! important
	{
		$OL_Text.style.visibility = "hidden"	;
	}
	else 
	{	
	$OL_Text.style.visibility = "visible"	;
	
	$OL_Text.style.setProperty( "--top",  `${ captionPosTop[pN]  }%` ) ;
	$OL_Text.style.setProperty( "--left", `${ captionPosLeft[pN] }%` ) ;

	$OL_Text.style.setProperty( "--fontColor", `${ captionColor[pN] }` ) ;
	$OL_Text.style.setProperty( "--fontSize",  `${ captionSize[pN] }px` ) ;
	
	$OL_Text.innerHTML = captionText[pN]	;
	}
}

// [EOF]
