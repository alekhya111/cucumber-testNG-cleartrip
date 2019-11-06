package stepdefinitions;

import com.cleartrip.Pages.FlightsPage;
import com.cleartrip.funcionalLibrary.BaseLibrary;
import com.cleartrip.pageFactoryIntialization.FlightsPageIntialization;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class myStepDefinition extends BaseLibrary{
	
	
	@Given("^user launch browser$")
	public void user_launch_browser() throws Throwable {
	   
		openBrowser();
	}

	@When("^Enter open url$")
	public void enter_open_url() throws Throwable {
		navigateUrl();
	}

	@When("^Click on roundTrip$")
	public void click_on_roundTrip() throws Throwable {
		FlightsPageIntialization.flightsPageIntialization();
		FlightsPage.clickonroundTripButton();
	}

	@When("^Enter from adress as \"([^\"]*)\"$")
	public void enter_from_adress_as(String fromAddress) throws Throwable {
		FlightsPage.fromAddress(fromAddress);
	}

	@When("^Enter To address as \"([^\"]*)\"$")
	public void enter_To_address_as(String toAddress) throws Throwable {
		FlightsPage.toAddress(toAddress);
	}

	@When("^Enter DepartureDate as \"([^\"]*)\"$")
	public void enter_DepartureDate_as(String departureDate) throws Throwable {
		FlightsPage.departureDate(departureDate);
		
	}

	@When("^Enter RetirnDate As \"([^\"]*)\"$")
	public void enter_RetirnDate_As(String returnDate) throws Throwable {
		FlightsPage.returnDate(returnDate);
		
	}

	@When("^Select Adultsas \"([^\"]*)\" and  Children as \"([^\"]*)\" and Infants as \"([^\"]*)\"$")
	public void select_Adultsas_and_Children_as_and_Infants_as(String adults, String childrens, String infants) throws Throwable {
		FlightsPage.setNumberOfTickets(adults, childrens, infants);
		
	}

	@When("^click on SearchFlights button$")
	public void click_on_SearchFlights_button() throws Throwable {
		FlightsPage.clickOnSearchFlights();
	}

	@When("^close Browser$")
	public void close_Browser() throws Throwable {
	  closeBrowseer();
	}

}
