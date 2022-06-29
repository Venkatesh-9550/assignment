import {
  IonTitle,
  IonToolbar,
  IonHeader,
  IonContent,
  IonPage,
  IonLabel,
  IonList,
  IonItem,
  IonCol,

} from '@ionic/react';
import React, { FC, useState } from 'react';
import axios from 'axios';
import './Home.css'; 
//import './loginpage';
const HomePage: React.FC = () => {
  
  const [ listItems, setListitems] = useState<any>([]);

  const getData = () => {
    let userData = axios.get('https://api.github.com/users/timmywheels/repos')
      .then(res => {
        console.log(res)
        return res.data;
      })
      return userData;
    }

  React.useEffect(() => {
  getData().then((data: any)=>{
    setListitems(data)
    // console.log(listItems)
  })
    }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle> List </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList color="primary" className='list'>
          {
            listItems.map((item: any) => {
              return (
                <IonItem className='list' key={item['id']} >
                  <IonCol size='3'>
                    <IonLabel>
                     id: {item['id']}
                    </IonLabel>
                  </IonCol>
                  <IonCol size='3'>
                    <IonLabel>
                      {item['name']}
                    </IonLabel>
                  </IonCol>
                  <IonCol size='3'>
                    <IonLabel>
                      {item['full_name']}
                    </IonLabel>
                  </IonCol>
                  <IonCol size='3'>
                    <IonLabel>
                     size: {item['size']}
                    </IonLabel>
                  </IonCol>
                </IonItem>
              )
            })
          }
        </IonList>
      </IonContent>
    </IonPage>
    );

}

export default HomePage;
