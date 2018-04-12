import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default Visor = props => (
    <TextInput style={styles.visor}
        placeholder='Resultado'
        value={props.resultado}
    />
);

const styles = StyleSheet.create({
    visor: {
        height: 100,
        fontSize: 30
    }
});