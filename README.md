# Football app  - Frontend

## Introduction
This is the frontend application for **Football app**, developed by using **Angular**. It provides a user-friendly interface for managing and accessing the different fields for football such as teams, results, tournaments etc.

## Actors
- **Admin**: Manages system users and existed locations.
- **Manager**: Manages his team (training, lineup, results..) and sees the upcoming matches.
- **Player**: Sees his stats, if he is in the lineup and consults the contracts and transfer offers.
- **Supporter**: Books and tracks matches tickets and he can also see thee results.
- **Organizer**: Manages the tournaments and the matches.
- **Builder**: Manages the stadium's building.
- **Referee**: Manages his own matches information and see the upcoming ones.
- **Team**: Manages his own players, trainings and matches.

## File Descriptions
- `src/app`: Contains the main Angular components, services, and modules.
  - `components`: Holds all UI components for various views.
  - `services`: Contains service files for API communication.
  - `assets`: Stores static files like images and configurations.
  - `environments`: Contains environment-specific configuration files.
 
## Technologies
- NodeJS: v18.16.0
- Angular: v17.2.2
- Bootstrap: v5.3
- HTML/CSS/Typescript
- Keycloak
- Docker
Make sure that you have those technologies in your pc.
 <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a>
 <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
 <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a>
 <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a>

## How to Upload and Run It (Do not forget to run the containers that are in the docker-compose.yaml file in the backend)

1. **Clone this repository**:
   ```bash
   git clone https://github.com/kerfaiyass54/football-app-frontend.git

2. **Install dependencies**:
   ```bash
   npm install

3. **Run the application**:
   ```bash
   ng serve

4. **Access the application**:à
   ```bash
   localhost:4200

