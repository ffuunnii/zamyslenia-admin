import './Grid.css';
import React from 'react';
import { IonCol, IonGrid, IonRow, IonButton,
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar  } from '@ionic/react';

interface ContainerProps { }

const Grid: React.FC<ContainerProps> = () => {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Grid</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol>{`${date}. ${month}. ${year}`}</IonCol>
            <IonCol>...</IonCol>
            <IonCol>✔️</IonCol>
            <IonCol>❌</IonCol>
            <IonCol><IonButton>Upraviť</IonButton></IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol>{`${date + 1}. ${month}. ${year}`}</IonCol>
            <IonCol>...</IonCol>
            <IonCol>✔️</IonCol>
            <IonCol>❌</IonCol>
            <IonCol><IonButton>Upraviť</IonButton></IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol>{`${date + 2}. ${month}. ${year}`}</IonCol>
            <IonCol>...</IonCol>
            <IonCol>✔️</IonCol>
            <IonCol>❌</IonCol>
            <IonCol><IonButton>Upraviť</IonButton></IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol>{`${date + 3}. ${month}. ${year}`}</IonCol>
            <IonCol>...</IonCol>
            <IonCol>✔️</IonCol>
            <IonCol>❌</IonCol>
            <IonCol><IonButton>Upraviť</IonButton></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  </>
  );
};

export default Grid;
