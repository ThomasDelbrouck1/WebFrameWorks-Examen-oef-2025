# World of Elves

Voor deze opdracht krijg je een starter project met een Next.js applicatie. Deze applicatie is een statische versie van een web applicatie om robot kerst elfen te beheren. Je kan deze applicatie volledig opstarten zonder database of backend server. 

## Belangrijke routes

Probeer de volgende routes in de applicatie uit:

- `/` - Gaat naar de login pagina of, als je al ingelogd bent, naar de `/factions` pagina.
- `/auth/login` - Login pagina voor gebruikers.
- `/auth/register` - Registratie pagina voor nieuwe gebruikers.
- `/factions` - Overzicht van alle elfen `factions`.
- `/factions/[id]` - Detail pagina voor een specifieke `faction` met elfen leden.
- `/party` - Overzicht van de kerst elfen in jouw party.

## De /factions pagina (Client component)

De kerst elfen zijn verdeeld in verschillende `factions` die te vinden zijn op de `/factions` pagina. Elke `faction` heeft een unieke set van elfen die je kan bekijken door op een `faction` te klikken.  

- Zorg ervoor dat je deze nu dynamisch inlaadt uit `https://raw.githubusercontent.com/similonap/json/refs/heads/master/elves/factions.json`. Deze moeten niet in een mongoDB opgeslagen worden en mogen rechtstreeks uiut de API ingeladen worden.
- Voorzie een loading indicator (gebruik hier de `LoadingIndicator` component) terwijl de data ingeladen wordt.
- Geef de juiste data door aan de `FactionCard` component zodat elke kaart de juiste `faction` informatie toont (de naam en de afbeelding).
- Zorg ervoor dat als je op een `faction` klikt, je naar de juiste `faction` pagina navigeert. Dit zal een url zijn zoals `/factions/ID` waarbij `ID` het id is van de `faction`.

Voor deze pagina mag je geen server component gebruiken om de data in te laden. Gebruik hier dus de technieken die je geleerd hebt om data in te laden in een **client component**.

## De /factions/[id] pagina

De `/factions/[id]` pagina toont de details van een specifieke `faction` en een lijst van alle elfen die lid zijn van deze `faction`. Momenteel worden de elfen statisch ingeladen uit een `dummy-data.ts` bestand.

- Toon de juiste `id` uit de url in de `FACTION_UNIT_MANIFEST` titel.
- Laad de elfen dynamisch in uit `https://raw.githubusercontent.com/similonap/json/refs/heads/master/elves/elves.json`. Zorg ervoor dat je enkel de elfen toont die lid zijn van de `faction` met het juiste `faction_id`. Deze moeten niet in een mongoDB opgeslagen worden en mogen rechtstreeks uiut de API ingeladen worden.
- Voorzie een loading indicator tijdens het inladen van de data (gebruik hier de `LoadingIndicator` component).
- Toon de tekst `No units found in this faction.` als er geen elfen zijn voor deze `faction`.

Voor deze pagina moet je een **server component** gebruiken om de data in te laden. Gebruik hier dus de technieken die je geleerd hebt om data in te laden in een **server component**.

## De /auth/register pagina

De `/auth/register` pagina toont een registratie formulier voor nieuwe gebruikers. De gebruiker kan inloggen met een Operator ID en een pin code (4 cijfers).

- Gebruik de `createOperator` functie uit `database/operator.ts` om een nieuwe operator aan te maken wanneer het formulier verzonden wordt. De `elfCollection` kan leeg gelaten worden bij registratie.
- Tijdens het verzenden moet de button de tekst `Registering...` tonen en uitgeschakeld zijn om dubbele inzendingen te voorkomen.
- De pin code mag **niet** worden gehashed voor deze opdracht en moet in plain text opgeslagen worden in de database.
- Zorg voor server side validatie van de data in het formulier:
  - De Operator ID mag niet leeg zijn. Toon "Operator ID is mandatory." als foutmelding.
  - De Operator ID mag nog niet bestaan in de database. Toon "Operator ID already exists." als foutmelding. Je kan hiervoor `findOperatorByOperatorId` uit `database/operator.ts` gebruiken.
  - De pin code moet exact 4 cijfers lang zijn. Toon "Pin code must be exactly 4 digits." als foutmelding.
  - De pin code en de bevestigings pin code moeten overeenkomen. Toon "Pin codes do not match." als foutmelding.
- Na een succesvolle registratie, redirect de gebruiker naar de `/auth/login` pagina.

## De /auth/login pagina

De `/auth/login` pagina toont een inlog formulier voor bestaande gebruikers. De gebruiker kan inloggen met een Operator ID en een pin code (4 cijfers).

- Zorg voor dat de gebruiker correct ingelogt wordt als de juiste Operator ID en pin code ingegeven worden. Gebruik hiervoor de `findOperatorByOperatorId` functie uit `database/operator.ts` om de juiste operator op te zoeken. Je hoeft de pin code niet te hashen of te vergelijken, een eenvoudige string vergelijking is voldoende voor deze opdracht.
- Als de inloggegevens incorrect zijn, toon de foutmelding "Invalid Operator ID or pin code.".
- Tijdens het verzenden moet de button de tekst `Logging in...` tonen en uitgeschakeld zijn om dubbele inzendingen te voorkomen.
- Gebruik een JWT Token om de ingelogde staat van de gebruiker te beheren. Sla deze token op in een HttpOnly cookie.
- Als de gebruiker is ingelogd, redirect deze dan naar de `/factions` pagina.
- Als de gebruiker niet is ingelogd en probeert de `/factions` of `/party` pagina te bezoeken, redirect deze dan naar de `/auth/login` pagina.

## De logout functionaliteit

- Voeg de logout functionaliteit toe aan de `LogoutButton` component. Wanneer een gebruiker op deze knop klikt, moet de JWT token cookie verwijderd worden en moet de gebruiker geredirect worden naar de `/auth/login` pagina.

## De party pagina

De operator (de gebruiker, jij zelf) heeft een collectie van elfen die hij/zij in zijn/haar party kan meenemen. Deze elfen zijn opgeslagen in de `elfCollection` array van de `Operator` in de database. 

- Zorg ervoor dat een gebruiker elfen kan toevoegen aan zijn of haar party door op de `Add to Party` knop te klikken op een `ElfCard` in de `/factions/[id]` pagina. De `serial_number` van de elf moet toegevoegd worden aan de `elfCollection` array van de ingelogde operator in de database. Gebruik `updateOperator` uit `database/operator.ts` om de operator bij te werken.
- Als een elf al in de party van de operator zit, moet de `ElfCard` een groene rand tonen en mag de `Add to Party` knop niet zichtbaar zijn.
- Zorg ervoor dat een gebruiker elfen kan verwijderen uit zijn of haar party door op de `Remove from Party` knop te klikken op een `ElfCard` in de `/party` pagina. 
- Zorg ervoor dat de `/party` pagina alle elfen toont die in de `elfCollection` van de ingelogde operator zitten. Je moet hier de elfen dynamisch inladen uit `https://raw.githubusercontent.com/similonap/json/refs/heads/master/elves/elves.json` op basis van de `serial_number` waardes in de `elfCollection` array van de ingelogde operator.
- Indien er geen elfen in de party zitten, toon dan de tekst: `No units assigned to party.`