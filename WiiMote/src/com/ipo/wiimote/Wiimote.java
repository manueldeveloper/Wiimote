package com.ipo.wiimote;

import android.os.Bundle;
import org.apache.cordova.DroidGap;

public class Wiimote extends DroidGap {

	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/index.html");
	}
}
