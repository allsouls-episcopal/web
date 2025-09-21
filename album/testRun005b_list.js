
//	data format:  (image file name)@(top %)^(left %)
//						^(font color)^(font size px)^(caption text) #

const photoListALL = 
"#101ya.jpg@#101ya.jpg@40^20^lightgreen^44^Draft version — not yet for public viewing#102yama.jpg@#20map.jpg@40^70^white^30^Lake Yamanaka#103kawag.jpg@#104kawa2.jpg@#20map.jpg@20^50^white^30^Lake Kawaguchi#105w.jpg@#106west.jpg@#20map.jpg@25^33^white^30^West Lake#107sho.jpg@#108child-shojin.jpg@#108child-shojin.jpg@75^15^white^30^Child-holding Fuji#20map.jpg@10^20^pink^24^Lake Shoji#109moto2.jpg@#110moto.jpg@#20map.jpg@40^18^white^30^Lake Motosu#111dusk-sh.jpg@#112dusk-sho.jpg@#113dia-yama.jpg@#114di3-yama.jpg@#116di2-tanu.jpg@#117dia-tanu.jpg@#118tanu1.jpg@#118tanu1.jpg@78^70^white^36^Hidden Gem#121.jpg@#122.jpg@20^75^yellow^36^Mt Fuji#123.jpg@#124.jpg@#125.jpg@#126.jpg@#130.jpg@#131.webp@#132.webp@#133.webp@#134.webp@#135.jpg@#136.webp@#137.jpg@#140sunrise.jpg@#210.jpg@#220.jpg@#223.jpg@#224.jpg@#225.jpg@#226.jpg@#227.jpg@#228.jpg@#230.jpg@#232.jpg@#234.jpg@#236.jpg@#238.jpg@#240.jpg@#242.jpg@#244.jpg@#244.jpg@60^15^yellow^40^a decision was made#245decision.jpg@#248.jpg@10^20^yellow^30^Let&prime;s head down the path to the right#250.jpg@#252.jpg@#254.jpg@#256.jpg@#258.jpg@#260.jpg@#262.jpg@#264.jpg@#266.jpg@#268.jpg@#270.jpg@#272.jpg@#274.jpg@#276.jpg@#278.jpg@#280.jpg@#282.jpg@#284.jpg@#286.jpg@#290.jpg@#420arrival.jpg@#421.jpg@#421a.jpg@#422.jpg@#422c.jpg@#422e.jpg@#422off.jpg@#424.jpg@#425top.jpg@#426a.jpg@#427.jpg@#428down.jpg@#431down1.jpg@#440summary1.jpg@#442.jpg@#443.jpg@#444.jpg@#445.jpg@#446.jpg@#447.jpg@#448.jpg@#449.jpg@"  ;

var albumSize   = 0 ;

var filePath	= "image/" ; 

var photoList = [] ;

var photoFileN     = [] ;
var captionPosTop  = [] ;
var captionPosLeft = [] ;
var captionColor   = [] ;
var captionSize    = [] ;
var captionText    = [] ;


function prepPhotoList() 	//	from onLoad 
{
	photoList = photoListALL.split("#") ;

	getCaption(); 	
}


function getCaption()
{
	var i  ;
	var fileData00 = [] ;
	var fileData02 = [] ;

		albumSize = photoList.length ;
	
	for ( i=1; i < albumSize ; i++ )
	{
		fileData00 = photoList[i].split( "@" ) ;
		
		photoFileN[i]  = fileData00[0] ;
		
		if ( fileData00[1] !== ""  )
		{
			fileData02 = fileData00[1].split( "^" ) ;
						
			captionPosTop[i]  = fileData02[0] ;
			captionPosLeft[i] = fileData02[1] ;
			captionColor[i]   = fileData02[2] ;
			captionSize[i]    = fileData02[3] ;
			captionText[i]    = fileData02[4] ;
		}	;
	}	;	
}


//	[EOF]####