import React from 'react';
import {View} from 'react-native';
import Machine from "./Machine";

class Arduino extends Machine {

    state = {
        id: '',
        model: '',
        dailyCost: 0,
        owner: '',
        isBooked: false,
        inventoryQuantity: 0,
    }



    render() {
        return (
            <View>

            </View>
        );
    }
}

export default Arduino