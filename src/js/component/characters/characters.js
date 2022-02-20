import React, { useContext } from "react";
import './characters.css'

export const Characters = ()=>{
    return(
        <>
        <div className="flying-objects">
          <img
            id="flying-object-02"
            className=""
            src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/cloud-02.png"
          />
          <img
            id="flying-object-01"
            className=""
            src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/cloud-01.png"
          />
        </div>
        <div className="nav-container">
          <button id="burger" className="open-main-nav">
            <span id="burger-icon" className="burger" />
          </button>
          <nav className="main-nav" id="main-nav">
            <ul>
              <li>
                <a href="#" id="btn-droids">
                  Droids
                </a>
              </li>
              <li>
                <a href="#" id="btn-locations">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" id="btn-characters">
                  Characters
                </a>
              </li>
              <li>
                <a href="#" id="btn-spaceships">
                  Spacecrafts
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container">
          <div className="categories">
            <div id="weaponry" className="category">
              <h1>Weaponry</h1>
            </div>
            <div id="droids" className="category">
              <h1>Droids</h1>
              <div className="cards">
                <div className="card r2-d2 active">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/r2-d2.png"
                      alt="R2-D2"
                    />
                  </header>
                  <main>
                    <div className="level">Class 7</div>
                    <div className="name">R2-D2</div>
                    <p className="p-r2-d2">
                      A reliable and versatile astromech droid, R2-D2 has served Padmé
                      Amidala, Anakin Skywalker, and Luke Skywalker in turn, showing
                      great bravery in rescuing his masters and their friends from
                      many perils. A skilled starship mechanic and fighter pilot's
                      assistant.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">Affiliations</div>
                      <div className="content">
                        Rebel Alliance, Galactic Republic, The Resistance
                      </div>
                    </div>
                    <div className="middle">
                      <div className="title">Droid</div>
                      <div className="content">Astromech Droid</div>
                    </div>
                    <div className="right">
                      <div className="title">Dimensions</div>
                      <div className="content">Height: 1.09m</div>
                    </div>
                  </footer>
                </div>
                <div className="card c2-b5">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/c2-b5.png"
                      alt="C2-B5"
                    />
                  </header>
                  <main>
                    <div className="level">Class 5</div>
                    <div className="name">C2-B5</div>
                    <p className="p-c2-b5">
                      The Galactic Empire relies on astromech droids to maintain its
                      machinery, but unlike the Rebel Alliance, Imperial technicians
                      do not grant their droids independence and subject them to
                      frequent memory wipes to keep them subservient.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">Affiliations</div>
                      <div className="content">Galactic Empire</div>
                    </div>
                    <div className="middle">
                      <div className="title">Droid</div>
                      <div className="content">Astromech Droid</div>
                    </div>
                    <div className="right">
                      <div className="title">Dimensions</div>
                      <div className="content">Height: 1.07m</div>
                    </div>
                  </footer>
                </div>
                <div className="card c-3po">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/c-3po.png"
                      alt="C-3PO"
                    />
                  </header>
                  <main>
                    <div className="level">Class 7</div>
                    <div className="name">C-3PO</div>
                    <p className="p-c-3po">
                      C-3PO longs for more peaceful times, but his continued service
                      to the Resistance — and his knowledge of more than seven million
                      forms of communication — keeps the worry-prone droid in the
                      frontlines of galactic conflict.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">Affiliations</div>
                      <div className="content">Rebel Alliance, The Resistance</div>
                    </div>
                    <div className="middle">
                      <div className="title">Droid</div>
                      <div className="content">Protocol Droid</div>
                    </div>
                    <div className="right">
                      <div className="title">Dimensions</div>
                      <div className="content">Height: 1.75m</div>
                    </div>
                  </footer>
                </div>
                <div className="card battle-droid">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/battle-droid.png"
                      alt="Battle Droid"
                    />
                  </header>
                  <main>
                    <div className="level">Class 5</div>
                    <div className="name">Battle Droid</div>
                    <p className="p-battle-droid">
                      Rather than use flesh-and-blood warriors, the Separatists prefer
                      mindlessly loyal soldiers that are easily controlled. The
                      soulless ranks of their armies are dominated by tall, thin B1
                      battle droids built as mechanical imitations of their Geonosian
                      designers.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">Affiliations</div>
                      <div className="content">
                        Trade Federation, Confederacy of Independent Systems
                      </div>
                    </div>
                    <div className="middle">
                      <div className="title">Droid</div>
                      <div className="content">Battle Droid</div>
                    </div>
                    <div className="right">
                      <div className="title">Dimensions</div>
                      <div className="content">Height: 1.93m</div>
                    </div>
                  </footer>
                </div>
                <div className="card droideka">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/droideka.png"
                      alt="Droideka"
                    />
                  </header>
                  <main>
                    <div className="level">Class 7</div>
                    <div className="name">Droideka</div>
                    <p className="p-droideka">
                      Unlike the spindly battle droids, whose humanoid builds allow
                      them a degree of versatility, droidekas are designed with one
                      sole function in mind: the complete annihilation of their
                      targets.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">Affiliations</div>
                      <div className="content">
                        Trade Federation, Confederacy of Independent Systems
                      </div>
                    </div>
                    <div className="middle">
                      <div className="title">Droid</div>
                      <div className="content">Battle Droid</div>
                    </div>
                    <div className="right">
                      <div className="title">Dimensions</div>
                      <div className="content">Height: 1.83m</div>
                    </div>
                  </footer>
                </div>
                <div className="card bb-8">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/bb-8.png"
                      alt="BB-8"
                    />
                  </header>
                  <main>
                    <div className="level">Class 7</div>
                    <div className="name">BB-8</div>
                    <p className="p-bb-8">
                      A skittish but loyal astromech, BB-8 accompanied Poe Dameron on
                      many missions for the Resistance, helping to keep his X-wing in
                      working order. When Poe’s mission to Jakku ended with his
                      capture by the First Order, BB-8 fled into the desert with a
                      vital clue to the location of Luke Skywalker.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">Affiliations</div>
                      <div className="content">The Resistance</div>
                    </div>
                    <div className="middle">
                      <div className="title">Droid</div>
                      <div className="content">Astromech Droid</div>
                    </div>
                    <div className="right">
                      <div className="title">Dimensions</div>
                      <div className="content">Height: 0.67m</div>
                    </div>
                  </footer>
                </div>
                <div className="card k-2so">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/k-2so.png"
                      alt="K-2SO"
                    />
                  </header>
                  <main>
                    <div className="level">Class 7</div>
                    <div className="name">K-2SO</div>
                    <p className="p-k-2so">
                      A reprogrammed Imperial security droid now loyal to the
                      Alliance, K-2SO is an alarming sight standing within a secret
                      Rebel base. The pragmatic droid is an effective insertion agent,
                      as he can blend in perfectly at Imperial installations and
                      outposts.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">Affiliations</div>
                      <div className="content">Rebel Alliance</div>
                    </div>
                    <div className="middle">
                      <div className="title">Droid</div>
                      <div className="content">Imperial security droid</div>
                    </div>
                    <div className="right">
                      <div className="title">Dimensions</div>
                      <div className="content">Height: 2.31m</div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <div id="locations" className="category">
              <h1>Locations</h1>
              <div className="cards">
                <div className="card mustafar active">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/mustafar.png"
                      alt="Mustafar"
                    />
                  </header>
                  <main>
                    <div className="level">Class 3</div>
                    <div className="name">Mustafar</div>
                    <p className="p-mustafar">
                      A tiny, fiery planet in the Outer Rim, Mustafar maintains an
                      erratic orbit between two gas giants. Mustafar is rich in unique
                      and valuable minerals which have long been mined by the Tech
                      Union. Its lava pits and rivers make this planet a dangerous
                      habitat; its natives have burly, tough bodies that can withstand
                      extreme heat.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">Climate</div>
                      <div className="content">Hot</div>
                    </div>
                    <div className="middle">
                      <div className="title">Terrain</div>
                      <div className="content">Rivers, Volcanoes</div>
                    </div>
                    <div className="right">
                      <div className="title">Species</div>
                      <div className="content">Alazmec</div>
                    </div>
                  </footer>
                </div>
                <div className="card coruscant">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/coruscant.png"
                      alt="Coruscant"
                    />
                  </header>
                  <main>
                    <div className="level">Class 11</div>
                    <div className="name">Coruscant</div>
                    <p className="p-coruscant">
                      A city-covered planet, Coruscant is the vibrant heart and
                      capital of the galaxy, featuring a diverse mix of citizens and
                      culture. It features towering skyscrapers, streams of
                      speeder-filled air traffic, and inner levels that stretch far
                      below the world’s surface.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">Climate</div>
                      <div className="content">Artificial, Temperate</div>
                    </div>
                    <div className="middle">
                      <div className="title">Terrain</div>
                      <div className="content">Urban</div>
                    </div>
                    <div className="right">
                      <div className="title">Species</div>
                      <div className="content">
                        Bith, Gran, Balosar, Patrolian, Mikkian
                      </div>
                    </div>
                  </footer>
                </div>
                <div className="card tatooine">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/tatooine.png"
                      alt="Tatooine"
                    />
                  </header>
                  <main>
                    <div className="level">Class 4</div>
                    <div className="name">Tatooine</div>
                    <p className="p-tatooine">
                      Tatooine is harsh desert world orbiting twin suns in the
                      galaxy’s Outer Rim. In the days of the Republic, settlers
                      scratched out a living on moisture farms, while spaceport cities
                      such as Mos Eisley and Mos Espa served as home base for
                      smugglers, criminals, and other rogues.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">Climate</div>
                      <div className="content">Hot</div>
                    </div>
                    <div className="middle">
                      <div className="title">Terrain</div>
                      <div className="content">Canyons, Deserts, Mesas</div>
                    </div>
                    <div className="right">
                      <div className="title">Species</div>
                      <div className="content">
                        Jawa, Hutt, Bith, Klatooinian, Devaronian, Gran, Kubaz, Krayt
                        Dragon
                      </div>
                    </div>
                  </footer>
                </div>
                <div className="card utapau">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/utapau.png"
                      alt="Utapau"
                    />
                  </header>
                  <main>
                    <div className="level">Class 5</div>
                    <div className="name">Utapau</div>
                    <p className="p-utapau">
                      Ringed by numerous moons, the remote sanctuary of Utapau is a
                      planet pitted with enormous sinkholes. Its windswept surface is
                      dry and desert-like, but deep in the porous crust, at the bottom
                      of the sinkholes are pools of life-giving water.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">Climate</div>
                      <div className="content">Temperate</div>
                    </div>
                    <div className="middle">
                      <div className="title">Terrain</div>
                      <div className="content">Deserts, Plains</div>
                    </div>
                    <div className="right">
                      <div className="title">Species</div>
                      <div className="content">
                        Pau'an, Dactillion, Amani, Sugi, Utai
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <div id="spaceships" className="category">
              <h1>Spaceships</h1>
              <div className="cards">
                <div className="card millennium-falcon active">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/millennium-falcon.png"
                      alt="Millennium Falcon"
                    />
                  </header>
                  <main>
                    <div className="level">Class 10</div>
                    <div className="name">Millennium Falcon</div>
                    <p className="p-millenium-falcon">
                      An extensively modified Corellian light freighter, the
                      Millennium Falcon is a legend in smuggler circles and is coveted
                      by many for being the fastest hunk of junk in the galaxy.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">affiliations</div>
                      <div className="content">Rebel Alliance, The Resistance</div>
                    </div>
                    <div className="middle">
                      <div className="title">locations</div>
                      <div className="content">Corellia</div>
                    </div>
                    <div className="right">
                      <div className="title">dimensions</div>
                      <div className="content">Length: 34.75m</div>
                    </div>
                  </footer>
                </div>
                <div className="card x-wing">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/x-wing.png"
                      alt="X-Wing"
                    />
                  </header>
                  <main>
                    <div className="level">Class 6</div>
                    <div className="name">X-Wing</div>
                    <p className="p-x-wing">
                      The X-wing is a versatile Rebel Alliance starfighter that
                      balances speed with firepower. Armed with four laser cannons and
                      two proton torpedo launchers, the X-wing can take on anything
                      the Empire throws at it.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">affiliations</div>
                      <div className="content">Rebel Alliance, Rebel Pilots</div>
                    </div>
                    <div className="middle">
                      <div className="title">locations</div>
                      <div className="content">--</div>
                    </div>
                    <div className="right">
                      <div className="title">dimensions</div>
                      <div className="content">Length: 13.4m</div>
                    </div>
                  </footer>
                </div>
                <div className="card tie-fighter">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/tie-fighter.png"
                      alt="TIE-Fighter"
                    />
                  </header>
                  <main>
                    <div className="level">Class 6</div>
                    <div className="name">TIE Fighter</div>
                    <p className="p-tie-fighter">
                      The TIE fighter was the unforgettable symbol of the Imperial
                      fleet. Carried aboard Star Destroyers and battle stations, TIE
                      fighters were single-pilot vehicles designed for fast-paced
                      dogfights with Rebel X-wings and other starfighters.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">affiliations</div>
                      <div className="content">Galactic Empire, Imperial Pilots</div>
                    </div>
                    <div className="middle">
                      <div className="title">locations</div>
                      <div className="content">Lothal Imperial airfield</div>
                    </div>
                    <div className="right">
                      <div className="title">dimensions</div>
                      <div className="content">Length: 8.99m</div>
                    </div>
                  </footer>
                </div>
                <div className="card death-star">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/death-star.png"
                      alt="Death Star"
                    />
                  </header>
                  <main>
                    <div className="level">Class 20</div>
                    <div className="name">Death Star</div>
                    <p className="p-death-star">
                      The Death Star was the Empire’s ultimate weapon: a moon-sized
                      space station with the ability to destroy an entire planet. But
                      the Emperor and Imperial officers like Grand Moff Tarkin
                      underestimated the tenacity of the Rebel Alliance, who refused
                      to bow to this technological terror…
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">affiliations</div>
                      <div className="content">
                        Galactic Empire, Death Star Troopers
                      </div>
                    </div>
                    <div className="middle">
                      <div className="title">locations</div>
                      <div className="content">-- hidden</div>
                    </div>
                    <div className="right">
                      <div className="title">dimensions</div>
                      <div className="content">100 miles</div>
                    </div>
                  </footer>
                </div>
                <div className="card imperial-shuttle">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/imperial-shuttle.png"
                      alt="Imperial Shuttle"
                    />
                  </header>
                  <main>
                    <div className="level">Class 4</div>
                    <div className="name">Imperial Shuttle</div>
                    <p className="p-imperial-shuttle">
                      An elegant example that stands apart from typical brutish
                      Imperial engineering, the Lambda-class shuttle is a
                      multi-purpose transport used in the Imperial starfleet. When in
                      flight, the side wings fold out for greater stabilization.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">affiliations</div>
                      <div className="content">Galactic Empire</div>
                    </div>
                    <div className="middle">
                      <div className="title">locations</div>
                      <div className="content">--</div>
                    </div>
                    <div className="right">
                      <div className="title">dimensions</div>
                      <div className="content">Length: 15.84m</div>
                    </div>
                  </footer>
                </div>
                <div className="card nubian-yacht">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/h-type-nubian-yacht.png"
                      alt="h-type nubian Yacht"
                    />
                  </header>
                  <main>
                    <div className="level">Class 6</div>
                    <div className="name">H-Type Nubian Yacht</div>
                    <p className="p-nubian-yacht">
                      The H-Type Nubian yacht was a sleek luxury yacht and what it
                      lacked in weapons it made up for in style and a strong deflector
                      shield. The signature silver finish is a mark that the ship
                      belongs to a former member of Naboo’s monarchy.
                    </p>
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">affiliations</div>
                      <div className="content">Royal House of Naboo</div>
                    </div>
                    <div className="middle">
                      <div className="title">locations</div>
                      <div className="content">Naboo</div>
                    </div>
                    <div className="right">
                      <div className="title">dimensions</div>
                      <div className="content">Length: 47.90m</div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <div id="characters" className="category active">
              <h1>Characters</h1>
              <div className="cards">
                <div className="card solo active">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/han-solo.png"
                      alt="Han Solo"
                    />
                  </header>
                  <main>
                    <div className="level">Class 8</div>
                    <div className="name">Han Solo</div>
                    <p className="p-solo" />
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">locations</div>
                      <div className="content">Mos Eisley Spaceport</div>
                    </div>
                    <div className="middle">
                      <div className="title">weapons</div>
                      <div className="content">Blaster pistol Blaster rifle</div>
                    </div>
                    <div className="right">
                      <div className="title">vehicles</div>
                      <div className="content">Millenium Falcon</div>
                    </div>
                  </footer>
                </div>
                <div className="card rey">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/rey.png"
                      alt="Rey"
                    />
                  </header>
                  <main>
                    <div className="level">Class 10</div>
                    <div className="name">Rey</div>
                    <p className="p-rey" />
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">locations</div>
                      <div className="content">
                        Jakku, Goazon Badlands, Rey's Home
                      </div>
                    </div>
                    <div className="middle">
                      <div className="title">weapons</div>
                      <div className="content">Lightsaber, Blaster Pistol,</div>
                    </div>
                    <div className="right">
                      <div className="title">vehicles</div>
                      <div className="content">
                        Millennium Falcon, X-wing Starfighter, Rey's Speeder
                      </div>
                    </div>
                  </footer>
                </div>
                <div className="card chewie">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/chewie.png"
                      alt="Chewie"
                    />
                  </header>
                  <main>
                    <div className="level">Class 7</div>
                    <div className="name">Chewbacca</div>
                    <p className="p-chewie" />
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">locations</div>
                      <div className="content">Kashyyyk, Numidian</div>
                    </div>
                    <div className="middle">
                      <div className="title">weapons</div>
                      <div className="content">Bowcaster</div>
                    </div>
                    <div className="right">
                      <div className="title">vehicles</div>
                      <div className="content">Millenium Falcon</div>
                    </div>
                  </footer>
                </div>
                <div className="card jyn-erso">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/jyn-erso.png"
                      alt="Jyn Erso"
                    />
                  </header>
                  <main>
                    <div className="level">Class 7</div>
                    <div className="name">Jyn Erso</div>
                    <p className="p-jyn-erso" />
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">locations</div>
                      <div className="content">Lah'mu</div>
                    </div>
                    <div className="middle">
                      <div className="title">weapons</div>
                      <div className="content">Jyn Erso's BlasTech A-180 Blaster</div>
                    </div>
                    <div className="right">
                      <div className="title">vehicles</div>
                      <div className="content">-- </div>
                    </div>
                  </footer>
                </div>
                <div className="card boba-fett">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/boba-fett.png"
                      alt="Boba Fett"
                    />
                  </header>
                  <main>
                    <div className="level">Class 8</div>
                    <div className="name">Boba Fett</div>
                    <p className="p-boba-fett" />
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">locations</div>
                      <div className="content">Kamino</div>
                    </div>
                    <div className="middle">
                      <div className="title">weapons</div>
                      <div className="content">Blaster rifle Flame thrower</div>
                    </div>
                    <div className="right">
                      <div className="title">vehicles</div>
                      <div className="content">Slave I</div>
                    </div>
                  </footer>
                </div>
                <div className="card padme-amidala">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/padme-amidala.png"
                      alt="Padmé Amidala"
                    />
                  </header>
                  <main>
                    <div className="level">Class 7</div>
                    <div className="name">Padmé Amidala</div>
                    <p className="p-padme-amidala" />
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">locations</div>
                      <div className="content">Naboo</div>
                    </div>
                    <div className="middle">
                      <div className="title">weapons</div>
                      <div className="content">Blaster rifle Flame thrower</div>
                    </div>
                    <div className="right">
                      <div className="title">vehicles</div>
                      <div className="content">Naboo Royal Starship</div>
                    </div>
                  </footer>
                </div>
                <div className="card beckett">
                  <header className="bg-image">
                    <img
                      src="https://upsights.fra1.digitaloceanspaces.com/fwbmatch/starwars/beckett.png"
                      alt="Beckett"
                    />
                  </header>
                  <main>
                    <div className="level">Class 7</div>
                    <div className="name">Tobias Beckett</div>
                    <p className="p-beckett" />
                  </main>
                  <footer>
                    <div className="left">
                      <div className="title">locations</div>
                      <div className="content">Glee Anselm</div>
                    </div>
                    <div className="middle">
                      <div className="title">weapons</div>
                      <div className="content">
                        DG-29 heavy blaster pistol, RSKF-44 heavy blaster pistol
                      </div>
                    </div>
                    <div className="right">
                      <div className="title">vehicles</div>
                      <div className="content" />
                    </div>
                  </footer>
                </div>
              </div>
            </div>
            <btn className="previous">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-chevron-circle-left fa-w-16 fa-2x"
              >
                <path
                  fill="currentColor"
                  d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"
                  className=""
                />
              </svg>
            </btn>
            <btn className="next">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-chevron-circle-right fa-w-16 fa-2x"
              >
                <path
                  fill="currentColor"
                  d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"
                  className=""
                />
              </svg>
            </btn>
          </div>
          <div></div>
        </div>
      </>
      

    )
}