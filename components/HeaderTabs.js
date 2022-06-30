import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    return (
        <View>
            <HeaderButton />
            <HeaderButton />
        </View>
    )
}




const HeaderButton = () =>
    <View>
        <TouchableOpacity>
            <Text>
                Delivery
            </Text>
        </TouchableOpacity>
    </View>