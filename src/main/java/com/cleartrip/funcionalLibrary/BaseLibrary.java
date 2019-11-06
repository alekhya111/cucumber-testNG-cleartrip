package com.cleartrip.funcionalLibrary;

import java.util.Properties;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import com.cleartrip.utilities.ConstantUtils;
import com.cleartrip.utilities.PropertyUtils;

import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseLibrary {
	
	
	public static WebDriver driver;

	public Logger logger;
	public Properties configproperties;



	public static WebDriver openBrowser() throws Exception {

		if (PropertyUtils.getValueFromKey("browser").equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", ConstantUtils.chromePath);
			//WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
			driver.manage().window().maximize();
		} else if (PropertyUtils.getValueFromKey("browser").equalsIgnoreCase("firefox")) {
			// System.setProperty("webdriver.gecko.driver", ConstantUtils.firefoxPath);
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
			driver.manage().window().maximize();
		} else if (PropertyUtils.getValueFromKey("browser").equalsIgnoreCase("IE")) {
			// System.setProperty("webdriver.ie.driver",
			// ConstantUtils.internetExplorerPath);
			WebDriverManager.iedriver().setup();
			driver = new InternetExplorerDriver();
		}

		return driver;
	}

	/* Navigate Application Url */
	public static void navigateUrl() throws Exception {
		driver.get(PropertyUtils.getValueFromKey("url"));
		driver.manage().window().maximize();
	}

	public static void closeBrowseer() {
		driver.close();
	}

}
