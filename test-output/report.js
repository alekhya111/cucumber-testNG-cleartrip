$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./FeatureFile/Flights.feature");
formatter.feature({
  "line": 1,
  "name": "Booking A Flight ticket",
  "description": "",
  "id": "booking-a-flight-ticket",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Book A Flight ticket for roundtrip in India",
  "description": "",
  "id": "booking-a-flight-ticket;book-a-flight-ticket-for-roundtrip-in-india",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@SanityTesting"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Click on roundTrip",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter from adress as \"\u003cFromAdress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter To address as \"\u003cToAdress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter DepartureDate as \"\u003cDeparturedate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter RetirnDate As \"\u003cReturnDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select Adultsas \"\u003cAdults\u003e\" and  Children as \"\u003cChildren\u003e\" and Infants as \"\u003cInfants\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on SearchFlights button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "close Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "booking-a-flight-ticket;book-a-flight-ticket-for-roundtrip-in-india;",
  "rows": [
    {
      "cells": [
        "FromAdress",
        "ToAdress",
        "Departuredate",
        "ReturnDate",
        "Adults",
        "Children",
        "Infants"
      ],
      "line": 27,
      "id": "booking-a-flight-ticket;book-a-flight-ticket-for-roundtrip-in-india;;1"
    },
    {
      "cells": [
        "Hyderabad, IN - Rajiv Gandhi International (HYD)",
        "Mexicali, MX - Rodolfg Sachez Taboada (MXL)",
        "Mon, 25 Nov, 2019",
        "Sun, 1 Dec, 2019",
        "2",
        "1",
        "0"
      ],
      "line": 28,
      "id": "booking-a-flight-ticket;book-a-flight-ticket-for-roundtrip-in-india;;2"
    },
    {
      "cells": [
        "Bangalore, IN - Kempegowda International Airport (BLR)",
        "Hyderabad, IN - Rajiv Gandhi International (HYD)",
        "Wed, 11 Dec, 2019",
        "Sat, 11 Jan, 2020",
        "1",
        "1",
        "1"
      ],
      "line": 29,
      "id": "booking-a-flight-ticket;book-a-flight-ticket-for-roundtrip-in-india;;3"
    },
    {
      "cells": [
        "Pune, IN - Lohegaon (PNQ)",
        "Kolhapur, IN - Kolhapur (KLH)",
        "Tue, 3 Dec, 2019",
        "Sat, 11 Jan, 2020",
        "1",
        "1",
        "1"
      ],
      "line": 30,
      "id": "booking-a-flight-ticket;book-a-flight-ticket-for-roundtrip-in-india;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Launching browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter open url",
  "keyword": "When "
});
formatter.match({
  "location": "FlightsPageStepDefinition.user_launch_browser()"
});
formatter.result({
  "duration": 10089997400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsPageStepDefinition.enter_open_url()"
});
formatter.result({
  "duration": 2901798000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Book A Flight ticket for roundtrip in India",
  "description": "",
  "id": "booking-a-flight-ticket;book-a-flight-ticket-for-roundtrip-in-india;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@SanityTesting"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Click on roundTrip",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter from adress as \"Hyderabad, IN - Rajiv Gandhi International (HYD)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter To address as \"Mexicali, MX - Rodolfg Sachez Taboada (MXL)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter DepartureDate as \"Mon, 25 Nov, 2019\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter RetirnDate As \"Sun, 1 Dec, 2019\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select Adultsas \"2\" and  Children as \"1\" and Infants as \"0\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on SearchFlights button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "FlightsPageStepDefinition.click_on_roundTrip()"
});
formatter.result({
  "duration": 193135000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyderabad, IN - Rajiv Gandhi International (HYD)",
      "offset": 22
    }
  ],
  "location": "FlightsPageStepDefinition.enter_from_adress_as(String)"
});
formatter.result({
  "duration": 397661600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mexicali, MX - Rodolfg Sachez Taboada (MXL)",
      "offset": 21
    }
  ],
  "location": "FlightsPageStepDefinition.enter_To_address_as(String)"
});
formatter.result({
  "duration": 249286800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mon, 25 Nov, 2019",
      "offset": 24
    }
  ],
  "location": "FlightsPageStepDefinition.enter_DepartureDate_as(String)"
});
formatter.result({
  "duration": 349541200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sun, 1 Dec, 2019",
      "offset": 21
    }
  ],
  "location": "FlightsPageStepDefinition.enter_RetirnDate_As(String)"
});
formatter.result({
  "duration": 153009100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    },
    {
      "val": "1",
      "offset": 38
    },
    {
      "val": "0",
      "offset": 57
    }
  ],
  "location": "FlightsPageStepDefinition.select_Adultsas_and_Children_as_and_Infants_as(String,String,String)"
});
formatter.result({
  "duration": 144281200,
  "status": "passed"
});
formatter.match({
  "location": "FlightsPageStepDefinition.click_on_SearchFlights_button()"
});
formatter.result({
  "duration": 400273400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsPageStepDefinition.close_Browser()"
});
formatter.result({
  "duration": 4194618500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launching browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter open url",
  "keyword": "When "
});
formatter.match({
  "location": "FlightsPageStepDefinition.user_launch_browser()"
});
formatter.result({
  "duration": 9543263200,
  "status": "passed"
});
formatter.match({
  "location": "FlightsPageStepDefinition.enter_open_url()"
});
formatter.result({
  "duration": 3963090800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Book A Flight ticket for roundtrip in India",
  "description": "",
  "id": "booking-a-flight-ticket;book-a-flight-ticket-for-roundtrip-in-india;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@SanityTesting"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Click on roundTrip",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter from adress as \"Bangalore, IN - Kempegowda International Airport (BLR)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter To address as \"Hyderabad, IN - Rajiv Gandhi International (HYD)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter DepartureDate as \"Wed, 11 Dec, 2019\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter RetirnDate As \"Sat, 11 Jan, 2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select Adultsas \"1\" and  Children as \"1\" and Infants as \"1\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on SearchFlights button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "FlightsPageStepDefinition.click_on_roundTrip()"
});
formatter.result({
  "duration": 587434200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangalore, IN - Kempegowda International Airport (BLR)",
      "offset": 22
    }
  ],
  "location": "FlightsPageStepDefinition.enter_from_adress_as(String)"
});
formatter.result({
  "duration": 350814500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyderabad, IN - Rajiv Gandhi International (HYD)",
      "offset": 21
    }
  ],
  "location": "FlightsPageStepDefinition.enter_To_address_as(String)"
});
formatter.result({
  "duration": 317693500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wed, 11 Dec, 2019",
      "offset": 24
    }
  ],
  "location": "FlightsPageStepDefinition.enter_DepartureDate_as(String)"
});
formatter.result({
  "duration": 471660700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sat, 11 Jan, 2020",
      "offset": 21
    }
  ],
  "location": "FlightsPageStepDefinition.enter_RetirnDate_As(String)"
});
formatter.result({
  "duration": 145424400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    },
    {
      "val": "1",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "FlightsPageStepDefinition.select_Adultsas_and_Children_as_and_Infants_as(String,String,String)"
});
formatter.result({
  "duration": 167486700,
  "status": "passed"
});
formatter.match({
  "location": "FlightsPageStepDefinition.click_on_SearchFlights_button()"
});
formatter.result({
  "duration": 10201461700,
  "status": "passed"
});
formatter.match({
  "location": "FlightsPageStepDefinition.close_Browser()"
});
formatter.result({
  "duration": 100698700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launching browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter open url",
  "keyword": "When "
});
formatter.match({
  "location": "FlightsPageStepDefinition.user_launch_browser()"
});
formatter.result({
  "duration": 9425027700,
  "status": "passed"
});
formatter.match({
  "location": "FlightsPageStepDefinition.enter_open_url()"
});
formatter.result({
  "duration": 3201091400,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Book A Flight ticket for roundtrip in India",
  "description": "",
  "id": "booking-a-flight-ticket;book-a-flight-ticket-for-roundtrip-in-india;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@SanityTesting"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Click on roundTrip",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter from adress as \"Pune, IN - Lohegaon (PNQ)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter To address as \"Kolhapur, IN - Kolhapur (KLH)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter DepartureDate as \"Tue, 3 Dec, 2019\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter RetirnDate As \"Sat, 11 Jan, 2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select Adultsas \"1\" and  Children as \"1\" and Infants as \"1\"",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click on SearchFlights button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "FlightsPageStepDefinition.click_on_roundTrip()"
});
formatter.result({
  "duration": 123759700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pune, IN - Lohegaon (PNQ)",
      "offset": 22
    }
  ],
  "location": "FlightsPageStepDefinition.enter_from_adress_as(String)"
});
formatter.result({
  "duration": 333844600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kolhapur, IN - Kolhapur (KLH)",
      "offset": 21
    }
  ],
  "location": "FlightsPageStepDefinition.enter_To_address_as(String)"
});
formatter.result({
  "duration": 237357700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tue, 3 Dec, 2019",
      "offset": 24
    }
  ],
  "location": "FlightsPageStepDefinition.enter_DepartureDate_as(String)"
});
formatter.result({
  "duration": 342589300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sat, 11 Jan, 2020",
      "offset": 21
    }
  ],
  "location": "FlightsPageStepDefinition.enter_RetirnDate_As(String)"
});
formatter.result({
  "duration": 168005400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    },
    {
      "val": "1",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "FlightsPageStepDefinition.select_Adultsas_and_Children_as_and_Infants_as(String,String,String)"
});
formatter.result({
  "duration": 151870900,
  "status": "passed"
});
formatter.match({
  "location": "FlightsPageStepDefinition.click_on_SearchFlights_button()"
});
formatter.result({
  "duration": 432628800,
  "status": "passed"
});
formatter.match({
  "location": "FlightsPageStepDefinition.close_Browser()"
});
formatter.result({
  "duration": 261214100,
  "status": "passed"
});
});