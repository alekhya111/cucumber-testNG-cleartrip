Feature: Booking A Flight ticket

Background: Launching browser

Given user launch browser
When Enter open url 

@SanityTesting
Scenario Outline: Book A Flight ticket for roundtrip in India

And Click on roundTrip
And Enter from adress as "<FromAdress>" 
And Enter To address as "<ToAdress>"

And Enter DepartureDate as "<Departuredate>"

And Enter RetirnDate As "<ReturnDate>"

And Select Adultsas "<Adults>" and  Children as "<Children>" and Infants as "<Infants>"

And click on SearchFlights button

And close Browser

Examples:

|                     FromAdress                       |                       ToAdress                     | Departuredate      |     ReturnDate       | Adults | Children | Infants | 
| Hyderabad, IN - Rajiv Gandhi International (HYD)     |   Mexicali, MX - Rodolfg Sachez Taboada (MXL)      |Mon, 25 Nov, 2019   |     Sun, 1 Dec, 2019 |  2     |     1    | 0				|
|Bangalore, IN - Kempegowda International Airport (BLR)|   Hyderabad, IN - Rajiv Gandhi International (HYD) |Wed, 11 Dec, 2019   |     Sat, 11 Jan, 2020|  1     |     1    | 1       |
|Pune, IN - Lohegaon (PNQ)                             |   Kolhapur, IN - Kolhapur (KLH)                    |Tue, 3 Dec, 2019    |     Sat, 11 Jan, 2020|  1     |     1    | 1       |



