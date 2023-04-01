import { 
  IonContent,  
  IonPage
   } from '@ionic/react';
import './Dashboard.css';
import { Pie } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; import Chart from 'chart.js/auto'; Chart.register(CategoryScale);

const Dashboard: React.FC = () => {
  const checked : number = Math.random() * (100 - 1) + 1;
  let newDate = new Date();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  //Set Data for Doughnut Chart. In Realtime you may bing this using the data coming from API or service. 
  const doughnutChartData = {
    labels: ['Skontrolované', 'Neskontrolované'],
    datasets: [
      {
        label: 'Skontrolované vs. neskontrolované',
        backgroundColor: ['green', 'red'],
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [ checked, 100 - checked]
      }
    ]
  };

  return (
    <>
      <IonPage>
        <IonContent className="ion-padding">
          <h1 style={{textAlign: "center", paddingTop: "40px"}}>{`${month + 1}/${year}`}</h1>
          <p>
            <Pie data={doughnutChartData} options={{ maintainAspectRatio: true}}  />
          </p>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Dashboard;
