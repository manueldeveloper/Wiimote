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
	
	// Initialize the signal receivers
	document.addEventListener("deviceready", onDeviceReady, false);
	document.body.addEventListener('touchmove', function(e){e.preventDefault();}, false); // Scroll disable
}


// Method which indicates that the device is ready
function onDeviceReady()
{
	// Start listeners
	document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
	document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
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
		showMode(mode);
		
		// Close menu bar
		showModesBar();
	}
}


// Method which updates the foreground according with the mode selected
function showMode(mode)
{
	switch(mode)
	{
		case 0:	document.getElementById('ColorsModeView').style.display= 'block';
				document.getElementById('CrossheadModeView').style.display= 'none';
				document.getElementById('AccelerometerModeView').style.display= 'none';
				document.getElementById('VoiceModeView').style.display= 'none';
				break;
		
		case 1: document.getElementById('ColorsModeView').style.display= 'none';
				document.getElementById('CrossheadModeView').style.display= 'block';
				document.getElementById('AccelerometerModeView').style.display= 'none';
				document.getElementById('VoiceModeView').style.display= 'none';
				break;
				
		case 2: document.getElementById('ColorsModeView').style.display= 'none';
				document.getElementById('CrossheadModeView').style.display= 'none';
				document.getElementById('AccelerometerModeView').style.display= 'block';
				initAcelerometer();
				document.getElementById('VoiceModeView').style.display= 'none';
				break;
				
		case 3: document.getElementById('ColorsModeView').style.display= 'none';
				document.getElementById('CrossheadModeView').style.display= 'none';
				document.getElementById('AccelerometerModeView').style.display= 'none';
				document.getElementById('VoiceModeView').style.display= 'block';
				speech();
				break;
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
function showModesBar()
{
	if( document.getElementById('modesBar').style.display == 'none')
		document.getElementById('modesBar').style.display= 'block';
	else
		document.getElementById('modesBar').style.display= 'none';
}


// Method which receives the volume up key pressed signal
function onVolumeUpKeyDown()
{
	alert("MAS VOLUMEN!");
}


//Method which receives the volume down key pressed signal
function onVolumeDownKeyDown()
{
	alert("MENOS VOLUMEN!");
}


// Method which calls to the recognizer prompt
function onConversionSucess()
{
	  var requestCode = 12345;
	  var maxMatches = 1;
	  var promptString = "Habla ahora";
	  
	  window.plugins.speechrecognizer.startRecognize(onSuccessSpeech, onErrorSpeech, requestCode, maxMatches, promptString);
}


// Method which will be called when an recognition error appears
function onConversionFail()
{
	alert("Could not convert the speech to text:" + error);
}


// Method which will be called when an recognition is done
function onSuccessSpeech(data)
{	
	if (data)
	{
		var jsonObject = JSON.parse(data);
		
		// It will return the first matched text for the speech
	     var convertedText = jsonObject.speechMatches.speechMatch[0];
	     buttonPulsed( convertedText );
	}
}


// Method which will be called when an recognition error appears
function onErrorSpeech(error)
{
	alert("Conversion failed due to: " + error);
}


// Method which indicates the action executed
function buttonPulsed(button)
{
	alert(button);
}


// Method which starts up the recognition process
function speech()
{
	window.plugins.speechrecognizer.init(onConversionSucess, onConversionFail);
}