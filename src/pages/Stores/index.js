import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import { useDispatch } from 'react-redux';

import ContainerMain from '~/components/ContainerMain';
import Header from './components/Header/index';
import { Modal, StyleSheet } from 'react-native';
import { ListStoreButton, TextInfo } from './styles';

const Store = () => {
  const dispatch = useDispatch();
  const [stores, setStore] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  const [storeData, setstoreData] = useState({});
  const [contacts, setContacts] = useState([]);
  let names = []

  const fetchData = async () => {
    api.get("/establishments?name=&street&state=&city=")
      .then(resp => {
        setStore(resp.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [dispatch, stores, names]);

  const showStoreData = (index) => {
    setModalVisible(true)
    setstoreData(stores[index])
    setContacts(stores[index].contacts)
  }

  const title = 'Listagem de Estabelecimentos'
  
  const subTitle = 'Clique nos nomes para obter os detalhes!';

  return (
    <ContainerMain>
      <Header title={title} subTitle={subTitle}/>
      {
        stores.map((item, index) => (
          <ListStoreButton key={index} onPress={() => showStoreData(index)}>
            {item.name}
          </ListStoreButton>
        ))
      }
      <Modal
        style={style.modal}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        <TextInfo>Nome: { storeData.name }</TextInfo>
        <TextInfo>Estado: { storeData.state }</TextInfo>
        <TextInfo>Cidade: { storeData.city }</TextInfo>
        <TextInfo>CEP: { storeData.zip_code }</TextInfo>
        <TextInfo>Endereço: { storeData.street }</TextInfo>
        <TextInfo>Número: { storeData.number }</TextInfo>
        {
          contacts.map((item, index) => (
            <TextInfo key={index}>Número: { item.phone }</TextInfo>
          ))
        }
      </Modal>
    </ContainerMain>
  );
};

const style = StyleSheet.create({
  buttonList: {
    marginBottom: 2,
    width:100
  },
  modal: {
    backgroundColor: 'red'
  }
})

export default Store;
