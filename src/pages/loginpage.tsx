import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonLabel,
    IonPage,
    IonToolbar
  } from '@ionic/react';
  import { eye, person } from 'ionicons/icons';
  import React,{ useState } from 'react';
  
  import './loginpage.css';
  
  const LoginPage: React.FC = ({ history }: any) => {
    const goTo = (path: string) => {
      if (Validate()) {
        history.push(path);
      }
      else {
        console.log('Invalid input')
      }
    }
    let uName = 'venkatesh@123';
    let pass = 'Venkey@9550';
   
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
  
    const Validate = () => {
      if (username === uName && password === pass) {
        console.log("true")
        return true;
      } else {
        console.log("false")
        return false;
      }
    }
    return (
  
      <IonPage className='ion-hide-sm-{dir}'>
        <IonContent className='content'>
          <IonHeader>
            <IonToolbar>
              <IonLabel>Ionic</IonLabel>
            </IonToolbar>
          </IonHeader>
          <IonCard className="card">
            <IonCardHeader className='ion-text-center header'>
              <IonCardTitle className='title'>Administrator Login</IonCardTitle>
              <IonLabel className='subtitle'> Please enter your admin credentials to gain access</IonLabel>
            </IonCardHeader>
            <IonCardContent className='ion-text-center'>
              <IonInput className="input1 ion-text-left"
                type="text"
                placeholder='Username or email address'
                onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
              <span className="eye"><IonIcon size="small" icon={person}></IonIcon></span>
              <IonInput className="input2 ion-text-left"
                type="password"
                placeholder='Password'
                onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
              <span className="eye"><IonIcon size="small" icon={eye}></IonIcon></span>
              <IonButton className=' button ion-text-capitalize' color="purple" shape='round' onClick={e => goTo('/home')}><IonLabel className='login'>Login</IonLabel></IonButton>
              <br />
              {/* <IonItem routerLink="/home">
              <IonButton color="purple" shape='round'>Login</IonButton>
            </IonItem> */}
              <br />
              <IonLabel>Forgot password?</IonLabel>
              <br />
              {/* <IonButton color='primary' onClick={getData}>Get Data</IonButton> */}
              <br />
              <br />
              <IonLabel className='label'>New to Indigo? <a href="#">Register here</a></IonLabel>
            </IonCardContent>
          </IonCard>
          {/* <HomePage /> */}
        </IonContent>
      </IonPage>
    );
  };
  
  export default LoginPage