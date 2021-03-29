<p  align="center">
<img src="./assets/spring_onion_splash3.png" width="200" height="200" alt="Logo"></img>
<br />
<br />
<img  alt="Version"  src="https://img.shields.io/badge/contributors-5-brightgreen?style=for-the-badge"  />

<img  alt="Version"  src="https://img.shields.io/badge/Maintained%3F-no-brightgreen?style=for-the-badge"  />

<img  alt="Version"  src="https://img.shields.io/badge/last_commit-march-brightgreen?style=for-the-badge"  />

<img  alt="Version"  src="https://img.shields.io/badge/react_native-0.64-brightgreen?style=for-the-badge"  />

<img  alt="Version"  src="https://img.shields.io/badge/yarn-1.22.10-brightgreen?style=for-the-badge"  />


## About

Spring Onion is a mobile app on iOS and Android that allow users to calculate the carbon footprint of car journeys.  

All the user needs is their (UK) licence plate and the distance travelled, and the app returns the amount of CO<sub>2</sub> emitted. This is put into context, by providing an example of another activity that produces the same amount of CO<sub>2</sub>. To mitigate the effects of their journey, the user can buy carbon offsets by clicking through to a website for this.  

This was a team project in the final two weeks of the [Makers Academy](https://makers.tech) coding bootcamp. Having made only websites throughout the course, we challenged ourselves to make a mobile app, using new-to-us technology.

<b>No further development is planned for this app.</b>

## Technologies used

We chose [React Native](https://reactnative.dev/) as it is cross-platform, extremely well documented, and to practice JavaScript. As we only had two weeks, we simplified the project by using the [Expo](https://expo.io/) platform.

Area | Technology
---- | ----
Framework | React Native, Expo
Language | Javascript, JSX
Libraries | React Navigation, Axios
API | [DVLA Vehicle Enquiry Service](https://developer-portal.driver-vehicle-licensing.api.gov.uk/apis/vehicle-enquiry-service/vehicle-enquiry-service-description.html#vehicle-enquiry-service-api)
Emulators | Xcode, Android Studio

The logo was made by me using [Affinity Designer](https://affinity.serif.com/en-gb/designer/) and a [car vector](https://www.freepik.com/free-vector/electric-vehicle-use-abstract-concept-illustration-zero-emission-vehicle-urban-electromobile-service-modern-electric-car-industrial-use-eco-friendly-transportation_12145545.htm) created by vectorjuice from [Freepik](https://www.freepik.com).

## Cars and Carbon Emissions
 ```
 As an environmentally conscious user
 So I can see my effect on the environment
 I want to be able to calculate my carbon emissions
 ```
 ```
 As an avid driver
 So that I can help the environment
 I want to offset the carbon I release
 ```

It turns out that every model of car has a [CO<sub>2</sub> emissions](https://www.which.co.uk/reviews/new-and-used-cars/article/car-emissions/car-co2-emissions-aRVNW9t0zLu6) value associated with it, expressed in g/km. This is a lab-measured value based on how much CO<sub>2</sub> directly comes out of the car as it travels, known as the Tank-to-Wheel emissions (ie fuel Tank). This value doesn't take into account any emissions caused by generating the fuel. Fully electric cars have 0 g/km Tank-to-Wheel CO<sub>2</sub> emissions, while their Well-to-Wheel (ie oil Well) emissions will vary based on how the electricity was made. A small petrol car has around 180 g/km CO<sub>2</sub> emissions (Tank-to-Wheel), while a sports car's could be three times more.  

We used the [DVLA Vehicle Enquiry API](https://developer-portal.driver-vehicle-licensing.api.gov.uk/apis/vehicle-enquiry-service/vehicle-enquiry-service-description.html#vehicle-enquiry-service-api) to get details about a car based on the licence plate. These details include the CO<sub>2</sub> emissions. We multiplied this value by the distance given by the user in km to find out the direct CO<sub>2</sub> emissions for the journey.  

The best solution for reducing atmospheric carbon is to reduce carbon emissions. But if emissions are unavoidable, the effects can theoretically be mitigated by carbon offsetting: paying a company to invest in schemes to sequester carbon or reduce emissions elsewhere.


## Development Team - Smells Like Green Spirit

[Glykeria Stravodimou](https://github.com/GlykeriaStr)  
[Jonathan Dawson](https://github.com/KarstenFinlay)  
[Karsten Finlay](https://github.com/bullhornfixie)  
[Miranda Wilson](https://github.com/mscwilson)  
[Tom Twigden](https://github.com/twigz826)

## How To Run

1) Clone this repository
2) Navigate to the root directory of the project
3) Enter `yarn install` in your terminal to install dependencies
4) Open a simulator for iOS using `yarn ios` (you must have Xcode installed), for Android open using the simulator of your choice.
5) Follow the prompts on the home screen

## Learning

Check out our learning log [here](https://github.com/GlykeriaStr/SmellsLikeGreenSpirit/blob/main/Documenting-Learning.md).

Check out our team charter [here](https://docs.google.com/document/d/15LuIkztoejXSH3xnyBak-b4HoZsaHOXN011JJEcq4zk/edit).

## Things to Improve
This app works on iOS and Android, but is not currently supported on the web.  
Because we used a managed Expo workflow, we were limited in several ways. The native config files are hidden in this type of project, and many libraries are not supported. It's possible to "eject" from Expo, but we didn't have time during the project.
 * No automated E2E testing. We regularly followed a manual testing protocol instead.
 * No In-App Purchases. We wanted the user to be able to buy carbon offsets directly. As a temporary solution, we linked to a company's website.
 * No Automatic Licence Plate Recognition. It would have been very cool if the user could take a picture of their licence plate instead of typing it in.  

The app only works for UK number plates, because we're using a British API. It would be easy to add support for different countries in the future.  
At the moment, the user enters the distance for their journey. It would be great to include a map service in the app where they could plot their actual journey. This would also open the door for calculating equivalent carbon emissions for the same journey by other means of transport.   
As discussed above, each car's CO<sub>2</sub> emissions value represents only the direct emissions out of the car. To give the user a fuller idea of the cost of their journey, some estimation of the Well-to-Wheel emissions could be added.  
