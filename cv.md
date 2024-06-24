# Zapekin Nikita
FRONTEND REACT/JS DEVELOPER
> Responsible and attentive to details. I am able to concentrate on tasks and 
focused on results. I strive to constantly improve my skills.

![me](/images/Frame%202.png)
## My contact info
* Github: [nikitazapekin](https://github.com/)
* Email: zapekin.nikita1@gmail.com
* Codewars: [nikitazapekin](https://www.codewars.com/users/nikitazapekin) 
* Linkedin: [Nikita Zapekin](https://www.linkedin.com/in/nikita-zapekin-309b42266/)
## Skills 
* HTML
* CSS/SCSS/SASS
* JavaScript
* TypeScript
* React
* Redux (toolkit, saga)
* REST API, GraphQl, Websockets
* GIT
* ThreeJs
* ExpressJs
* MongoDb PgSql
* Webpack
* Postman
* NextJs
* CI/CD
## Languages
* English (B1+)
* Russian (Native)
## Education
* Belarusian State University, applied informatics (2022-2026, unfinished).
## Location
* Minsk
## Work experience
* Participation in the event SPACE HACATON WITH GAME STREAM.
* Participation in an event to create innovative solutions from the Mogilev Technology Park.
## Courses and certificates
* Taking preparatory courses in Js (Sololearn)
* Courses on react-js development (Uilbi TV)
 ## Projects
 * **Chat application** <br> This project is a chat where users can correspond. The project uses microfrontend technology. A JWT token is used as authorization. Redux-toolkit is used as a state manager in conjunction with typescript. [Code on github](https://github.com/nikitazapekin/microfrontend-chat-app). An MVC pattern in golang is used as the server side. [Code on github](https://github.com/nikitazapekin/golang-chat-app).
 * **3D monitoring project for reserved seats in a restaurant** <br>  This project is a restaurant website where users can track booked tables in 3D in real time. The user can also book a table for a specific time and date. [Code on github](https://github.com/nikitazapekin/Restaurant-monitoring-React-and-Three.js-app). GraphQl is used to transfer data between the client and server. [Code on github](https://github.com/nikitazapekin/graphql-server-for-3d-restaurant).
 * **Storage project** <br>   This project is a repository of various information saved by the user. The paperless-ngx API was used as storage, the server of which is launched using docker. The data is displayed as table columns.  [Code on github](https://github.com/nikitazapekin/Cloud-storage-of-Belarusian-Russian-University).
 * **Job search site** <br>  This site is an application where the user can post his job offer. Also, the user's proposal may be changed. [Code on github](https://github.com/nikitazapekin/worklist-application). [Server code on github](https://github.com/nikitazapekin/golang-server-worklist).
  * **Application - database navigator from NASA** <br> This application allows users to explore the data provided by the NASA API. The user can view various articles about space objects and track satellites in earth orbit. [Code on github](https://github.com/nikitazapekin/NASA-APP). The user can also save the articles he likes in his personal account. MongoDb was used as storage.
[Code on github](https://github.com/nikitazapekin/NASA-APP/tree/main/server).
## Code examples
```
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import AboutPage from "./pages/aboutPage/aboutPage";
import RestaurantPage from "./pages/restaurantPage/restaurantPage";
import SignInPage from "./pages/signInPage/signInPage";
import PersonalPage from "./pages/personalPage/personalPage";
import PersonalFormOffersPage from "./pages/personalFormOffersPage";
import useHistoryTables from "./hooks/useHistoryTables";
import { useEffect, useState } from "react";
const App = () => {
  const {handleTest} = useHistoryTables()
  return (
    <main className='bg-slate-300/20'>
   <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/restaurant' element={<RestaurantPage />} />
                  <Route path='/sign_in' element={<SignInPage />} />
                  <Route path='/personal/:id' element={<PersonalPage />} />
                  <Route path='/yourOffers/:id' element={<PersonalFormOffersPage />} />
                </Routes>
              </>
            }
          />
        </Routes>
        </Router> 


       
    </main>
  );
};

export default App;
```
