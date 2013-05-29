var _modes;
var _imageColorsMode;
var _imageCrossheadMode;
var _imageAccelerometerMode;
var _imageVoiceMode;

function init()
{
	_imageColorsMode= 				document.getElementById('ColorsMode');
	_imageCrossheadMode= 			document.getElementById('CrossheadMode');
	_imageAccelerometerMode= 		document.getElementById('AccelerometerMode');
	_imageVoiceMode= 				document.getElementById('VoiceMode');

	_modes= new Array(true, false, false, false);
}

function updateForegroundModes()
{
	if( _modes[0] )
		_imageColorsMode.src= "images/icon_colorsSelected.png";
	else
		_imageColorsMode.src= "images/icon_colorsUnselected.png";
		
	if( _modes[1] )
		_imageCrossheadMode.src= "images/icon_arrowsSelected.png";
	else
		_imageCrossheadMode.src= "images/icon_arrowsUnselected.png";
		
	if( _modes[2] )
		_imageAccelerometerMode.src= "images/icon_accelerometerSelected.png";
	else
		_imageAccelerometerMode.src= "images/icon_accelerometerUnselected.png";
		
	if( _modes[3] )
		_imageVoiceMode.src= "images/icon_voiceSelected.png";
	else
		_imageVoiceMode.src= "images/icon_voiceUnselected.png";
}


function modeSelected(mode)
{
	if( !_modes[mode] )
	{
		for(var i=0; i<_modes.length; ++i)
			_modes[i]= false;
			
		_modes[mode]= true;
		
		updateForegroundModes();
	}
}