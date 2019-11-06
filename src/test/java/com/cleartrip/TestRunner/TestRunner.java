package com.cleartrip.TestRunner;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;


@CucumberOptions
			(                                
			features=".\\FeatureFile\\Flights.feature",
			glue = "com.cleartrip.stepDefinations",
			dryRun = false,
			monochrome=true,
			plugin= { "pretty", "html:test-output"},		
			tags= {"@SanityTesting"}
			
			)
public class TestRunner {
		
			private TestNGCucumberRunner testNGCucumberRunner;
			@BeforeClass(alwaysRun = true)
			public void setUp() {
				testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
			}
			
			@Test(dataProvider= "features")
			public void features(CucumberFeatureWrapper cucumberFeature) {
				testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
			}
			
			@DataProvider
			public Object[][] features() {
				return testNGCucumberRunner.provideFeatures();
				
			}
			
			@AfterClass(alwaysRun = true)
			public void tearDown() {
				testNGCucumberRunner.finish();
			}
}
