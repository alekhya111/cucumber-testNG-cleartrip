
package com.cleartrip.Pages;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.cleartrip.funcionalLibrary.BaseLibrary;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class FlightsPage extends BaseLibrary{


	@FindBy(xpath = "//input[@id='RoundTrip']")
	static WebElement roundTrip;

	@FindBy(xpath = "//input[contains(@id,'FromT')]")
	static WebElement from;

	@FindBy(xpath = "//input[@id='ToTag']")
	static WebElement to;

	@FindBy(xpath = "//*[@id='DepartDate']")
	static WebElement departDate;

	@FindBy(xpath = "(//a[text()='25'])[1]")
	static WebElement departDateEnter;

	@FindBy(xpath = "//input[@id='ReturnDate'] ")
	static WebElement returnOn;

	@FindBy(xpath = "//select[@id='Adults']")
	static WebElement adult;

	@FindBy(xpath = "//select[@id='Childrens']")
	static WebElement children;

	@FindBy(xpath = "//select[@id=\"Infants\"]")
	static
	WebElement infant;

	@FindBy(xpath = "//input[@id='SearchBtn']")
	static WebElement searFlightsBtn;
	
	@FindBy(xpath = "//a[@id='MoreOptionsLink']")
	static WebElement moreLink;
	
	
	public static void clickonroundTripButton() {
		roundTrip.click();
	}
	
	public static void fromAddress(String departurePlace) {

	from.sendKeys(departurePlace);
	}
	
	public static void toAddress(String arrivalPlace) {
		to.sendKeys(arrivalPlace);
	}
	
	public static void departureDate(String departureDate) {
		departDate.sendKeys(departureDate);
	}
	
	public static void returnDate(String returnDate) {
		returnOn.sendKeys(returnDate);
	}
	
	public static void setNumberOfTickets(String adults, String childrens,String infants) {
		adult.sendKeys(adults);
		children.sendKeys(childrens);
		infant.sendKeys(infants);
	}
	
	public static void clickOnSearchFlights()  {
		moreLink.click();
		searFlightsBtn.click();
	}
}
