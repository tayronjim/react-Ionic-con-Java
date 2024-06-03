import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRouterLink, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './CustomerList.css'
import { addCircle, checkmark, pencil, trash } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomer, saveCustomer, searchCustomer, searchCustomerById } from './CustomerApi';
import Customer from './Customer';
const CustomerEdit: React.FC = () => {

  const { id } = useParams<{ id: string; }>();
  const history = useHistory()
  const router = useIonRouter();

  const [cliente, setCliente] = useState<Customer>({})

  useEffect(()=>{
    setCliente({})
    if(id !== 'new'){
        search()
    }
    
  },[history])

  const search = async ()=>{
    let res = await searchCustomerById(id)
    setCliente(res)
  }

  const saveMe = async ()=>{
    //if(id === 'new'){
        //cliente.id = Math.trunc( Math.random()*1000000 ).toString()
        await saveCustomer(cliente)
        router.push('/page/customers')
    //}
    //else{
    //    saveCustomer(cliente)
    //    router.push('/page/customers')
    //}
    
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{(id==="new")?"Agregar Cliente":"Editar Cliente"}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonItem>
          <IonButton onClick={()=>saveMe()}>
            <IonIcon icon={checkmark}></IonIcon>
            Guardar Cliente
          </IonButton>
        </IonItem>
        
        <IonCard>
          
            <IonList>
                <IonItem>
                    
                    <IonInput 
                    label="Nombre"
                    labelPlacement="stacked"
                    clearInput={true}
                    placeholder="Nombre"
                    value={cliente.nombre}
                    onIonChange={(e)=>cliente.nombre = String(e.detail.value)}
                    ></IonInput>
                </IonItem>

                <IonItem>
                    <IonInput
                    label="Telefono"
                    labelPlacement="stacked"
                    clearInput={true}
                    placeholder="Telefono"
                    value={cliente.telefono}
                    onIonChange={(e)=>cliente.telefono = String(e.detail.value)}
                    ></IonInput>
                </IonItem>

                <IonItem>
                    <IonInput
                    label="Direccion"
                    labelPlacement="stacked"
                    clearInput={true}
                    placeholder="Direccion"
                    value={cliente.direccion}
                    onIonChange={(e)=>cliente.direccion = String(e.detail.value)}
                    ></IonInput>
                </IonItem>

            </IonList>

        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;