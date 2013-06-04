package com.ipo.wiimote;

import android.os.Bundle;
import android.view.KeyEvent;

import org.apache.cordova.DroidGap;

public class Wiimote extends DroidGap {

	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/index.html");
	}
	
	public boolean onKeyDown(int keyCode, KeyEvent event)
	{
		if(keyCode == KeyEvent.KEYCODE_VOLUME_DOWN)
		{
			this.loadUrl("javascript:cordova.fireDocumentEvent('volumedownbutton');");
			return true;
		}
		else if(keyCode == KeyEvent.KEYCODE_VOLUME_UP)
		{
			this.loadUrl("javascript:cordova.fireDocumentEvent('volumeupbutton');");
			return true;
		}
		else
			return false;
	}
}
