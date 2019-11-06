package com.cleartrip.pageFactoryIntialization;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.cleartrip.Pages.FlightsPage;
import com.cleartrip.funcionalLibrary.BaseLibrary;

public class FlightsPageIntialization extends BaseLibrary {

	public static WebDriver flightsPageIntialization() {
		PageFactory.initElements(driver, FlightsPage.class);
		return driver;
	}

}
