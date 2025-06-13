# CharityApp Voedselbank Registratie

## Probleemstelling

Veel voedselbanken werken vandaag nog met pen en papier of met losse Excel-bestanden om klantengegevens bij te houden en de uitgifte van voedselpakketten te registreren. Deze aanpak is:
- **Tijdrovend**
- **Foutgevoelig**
- **Onpraktisch** bij een groeiend aantal klanten

Elke uitdeelronde moet men lijsten afdrukken, manueel aanvinken, data overtypen of verwerken, wat leidt tot inefficiëntie, verlies van informatie en verhoogde kans op fouten.

## Doelstellingen

De belangrijkste doelstelling van dit project is het digitaliseren en vereenvoudigen van het beheer van voedselbank-klanten en hun afhalingen. Met de **CharityApp** kunnen medewerkers van een voedselbank:
- Personen digitaal registreren in het systeem (klantenbeheer)
- Snel en eenvoudig nieuwe klanten toevoegen
- Klanten opzoeken via naam of ID
- Afhalingen van voedselpakketten per klant registreren (per dag, met tijd en plaats)
- Automatisch voorkomen dat een klant op dezelfde dag meermaals een pakket ophaalt
- Overzichten/rapporten opvragen van afhalingen per maand, locatie, klant enzovoort
- Klantgegevens wijzigen of verwijderen
- Efficiënter werken, fouten voorkomen en een professioneel digitaal overzicht behouden

## Doelgroep

De applicatie richt zich op **non-profitorganisaties, sociale diensten, kerken, moskeeën en goede doelen** die een voedselbank runnen of voedselbedeling organiseren. Vaak ontbreekt het deze organisaties aan de middelen voor een goed softwarepakket. Met CharityApp krijgen ze een **gebruiksvriendelijk, veilig en schaalbaar systeem** dat hun werking efficiënter maakt en administratieve lasten verlaagt.

**Persona (voorbeeld):**  
Basharat is vrijwilliger bij een lokale voedselbank. Hij is niet heel technisch, maar wil snel kunnen zien wie er geregistreerd is en wie al geweest is voor een pakket. Hij wil niet langer lijsten bijhouden in Excel of op papier.

## Architectuur en werking

De applicatie bestaat uit drie grote delen:

### 1. Frontend (Angular)
- Moderne, intuïtieve webinterface
- Login- en registratiefunctionaliteit (Firebase Auth, enkel toegankelijke pagina’s voor ingelogde gebruikers)
- Klantenlijst met zoek- en filtermogelijkheden
- Klant toevoegen/wijzigen/verwijderen
- Afhaling registreren (op basis van klant-ID of naam zoeken)
- Rapporten: maandelijkse overzichten van afhalingen per locatie
- Responsive design geschikt voor PC en tablet

### 2. Backend (Java Spring Boot)
- REST API’s voor alle CRUD-operaties op klanten en afhalingen
- Beveiliging via Firebase token authenticatie
- Koppeling met de database voor permanente opslag
- Business logic zoals ‘een klant kan maar één keer per dag afhalen’

### 3. Database (PostgreSQL)
- Slaat klantgegevens en afhalingen persistent op
- Tabelrelaties tussen klanten en afhalingen (1:N)

### Schematisch overzicht

[Angular Frontend] <--REST API--> [Spring Boot Backend] <--JPA/Hibernate--> [PostgreSQL Database]



## Functionaliteiten (vereisten checklist)

- **Verbinding met een databank**  
  → Alle gegevens worden permanent opgeslagen in PostgreSQL.

- **Security**  
  → Authenticatie met Firebase, wachtwoorden in de cloud beveiligd, enkel ingelogde gebruikers kunnen de data beheren.

- **Nieuwe items aanmaken**  
  → Klanten en afhalingen kunnen eenvoudig worden toegevoegd via het formulier.

- **Opzoeken van items**  
  → Zoekfunctie op naam/ID, filteren van rapporten op datum en locatie.

- **Linken van items**  
  → Afhalingen zijn gekoppeld aan specifieke klanten (foreign key relatie in de database).

- **Overzicht via grafische interface**  
  → Tabelweergave van klanten, afhalingen, en rapportages.

- **Bulk delete/update**  
  → Mogelijkheid om klanten te wijzigen en te verwijderen; 

- **Extra feature**  
  → Automatische mailverificatie bij registratie; blokkeren van dubbele afhaling op dezelfde dag; rapportage per maand en per locatie.

## Gebruikte technologieën

- **Frontend:** [Angular 19+](https://angular.io/) + Angular Material  
- **Backend:** [Spring Boot 3+](https://spring.io/projects/spring-boot) (RESTful API)
- **Database:** PostgreSQL (relationeel)
- **Authenticatie:** [Firebase Auth](https://firebase.google.com/docs/auth) (Google)
- **Overige tools:** GitHub voor versiebeheer, AdobeXD voor wireframes, Visual Studio Code & IntelliJ IDEA als IDE’s

## User Story samenvatting

https://trello.com/invite/b/680fea2be9956cc37ef05684/ATTI41199b72eefa3d4238f3ace9e84993043E678E89/project-charity 

## Werking 

1. Medewerker logt in via beveiligde login (Firebase)
2. Komt iemand nieuw, dan wordt die snel toegevoegd via het inschrijfformulier
3. Komt een klant afhalen: naam of ID wordt ingegeven, medewerker klikt "registreren afhaling"
4. De backend slaat op wie wanneer en waar een pakket heeft opgehaald (en blokkeert dubbele registratie op dezelfde dag)
5. Manager kan maandelijks rapport trekken van alle afhalingen, per locatie en klant

---



### Wireframe/voorbeeldscherm
- Klantenlijst met acties (bewerken/verwijderen)
  ![image](https://github.com/user-attachments/assets/49f73671-f2b4-4780-ae81-bc41f0e205aa)

- Afhaling registreren (zoeken + bevestigen)
  ![image](https://github.com/user-attachments/assets/c627c329-b980-4391-aab9-078acee1807d)

- Rapport: dropdown voor maand, jaar, locatie → resultaat in tabel
  ![image](https://github.com/user-attachments/assets/8ac46081-8ed8-4b64-b83d-f929428d3e27)
- profielpagina:
  ![image](https://github.com/user-attachments/assets/8f096e24-559c-480c-aa8d-4c41f9fc8969)

- Nieuwe klant registreren:
  ![image](https://github.com/user-attachments/assets/9b9f6cf9-5942-4bc6-ac73-097ff45a2553)




