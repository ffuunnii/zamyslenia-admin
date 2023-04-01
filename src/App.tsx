import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact,
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons,
  IonMenu,
  IonMenuButton,
  IonList,
  IonItem } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Dashboard from './pages/Dashboard';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Grid from './components/Grid';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/grid">
          <Grid />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem href="/dashboard">Dashboard</IonItem>
          <IonItem href="/grid">Písmo</IonItem>
          <IonItem href="/grid">Komentár</IonItem>
          <IonItem href="/grid">Myšlienka</IonItem>
          <IonItem href="/grid">Žalm</IonItem>
          <IonItem href="/grid">Príbeh</IonItem>
          <IonItem href="/grid">Modlitba</IonItem>
          <IonItem href="/grid">Spytovanie svedomia</IonItem>
          <IonItem>Správa používateľov</IonItem>
          <IonItem>Profil</IonItem>
          <IonItem>Odhlásiť sa</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  </IonApp>
);

export default App;
