var _modes;
var _imageColorsMode;
var _imageCrossheadMode;
var _imageAccelerometerMode;
var _imageVoiceMode;


// Method which initializes all the application variables
function init()
{
	// Get the image of the modes
	_imageColorsMode= 				document.getElementById('ColorsMode');
	_imageCrossheadMode= 			document.getElementById('CrossheadMode');
	_imageAccelerometerMode= 		document.getElementById('AccelerometerMode');
	_imageVoiceMode= 				document.getElementById('VoiceMode');

	// Initialize the logic nedded to change the mode
	_modes= new Array(true, false, false, false);
}


// Method which updates the logic used to the modes
function modeSelected(mode)
{
	if( !_modes[mode] )
	{
		// Set all the modes like unselected
		for(var i=0; i<_modes.length; ++i)
			_modes[i]= false;
		
		// Set the selected mode
		_modes[mode]= true;
		
		// Update the foreground of the application
		updateForegroundModes();
	}
}


// Method which updates the foreground of the application
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


// Method which shows or hides the modes bar
function showModes()
{
	if( document.getElementById('modesBar').style.display == 'none')
		document.getElementById('modesBar').style.display= 'block';
	else
		document.getElementById('modesBar').style.display= 'none';
}