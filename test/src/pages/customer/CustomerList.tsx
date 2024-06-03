import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './CustomerList.css'
import { addCircle, pencil, trash } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomer, searchCustomer } from './CustomerApi';
const CustomerList: React.FC = () => {

  const history = useHistory()
  const router = useIonRouter();

  const [clientes, setClientes] = useState<any[]>([])

  useEffect(()=>{
    search()
  },[router])

  const addCustomer = ()=>{
    router.push('/page/customer/new')
  }

  const editCustomer = (id:any)=>{
    router.push('/page/customer/'+id)
  }

  const search = async ()=>{
    const res = await searchCustomer()
    setClientes(res)
  }

  const remove = async (id:any)=>{
    await removeCustomer(id)
    search()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle> X</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Y</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem>
          <IonButton onClick={addCustomer} >
            <IonIcon icon={addCircle}></IonIcon>
            Agregar Cliente
          </IonButton>
        </IonItem>
        
        <IonCard>
          <IonGrid>
            <IonRow className='table_th'>
              <IonCol>Nombre</IonCol>
              <IonCol>Direccion</IonCol>
              <IonCol>Telefono</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>
          
            {clientes.map((cliente,i)=>{
              return(
                <IonRow className='table_td' key={i}>
                  <IonCol>{cliente.nombre}</IonCol>
                  <IonCol>{cliente.telefono}</IonCol>
                  <IonCol>{cliente.direccion}</IonCol>
                  <IonCol>
                    <IonButton color={'primary'} fill='clear' onClick={()=>editCustomer(cliente.id)}>
                      <IonIcon icon={pencil} slot='icon-only' />
                      </IonButton>
                    <IonButton color='danger' fill='clear' onClick={()=>remove(cliente.id)}>
                      <IonIcon icon={trash}  />
                      </IonButton>
                    
                  </IonCol>
                
                </IonRow>
              )
            })}
            
          </IonGrid>

        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
