/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, RefreshControl } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    cell: {
        borderWidth: 0.5,
    },
    text: {
        fontSize: 20,
        marginBottom: 3,
        marginTop: 3,
        marginLeft: 8,

    },
});

export const ListHello = () => {

    const [items, setItem] = useState([
        { key: 1, name: 'Christo' },
        { key: 2, name: 'Abhinav' },
        { key: 3, name: 'Bittu' },
        { key: 4, name: 'Ayaan' },
        { key: 5, name: 'Nannu' },
    ]);

    const [refresh, setRefresh] = useState(false);

    const onRefresh = () => {
        setRefresh(true);
        setItem([...items, { key: 6, name: 'Mamma' }]);
        setRefresh(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={() => { onRefresh() }}
                    />
                }
            >
                {
                    items.map((item) => {
                        return (
                            <View style={styles.cell} key={item.key}>
                                <Text style={styles.text}>{item.name}</Text>
                            </View>
                        )
                    })
                }

            </ScrollView>
        </SafeAreaView>

    );
};
