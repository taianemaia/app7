import React from 'react';

import { StyleSheet, TextInput } from 'react-native';

export default props => (
    <TextInput 
        style={styles.numero} 
        value={props.num}
        onChangeText={(valorAtualizado) => props.atualizaValor(props.nome, valorAtualizado ) }    
    />
);

const styles = StyleSheet.create({
    numero: {
        width: 140,
        height: 80,
        fontSize: 20
    }
});
