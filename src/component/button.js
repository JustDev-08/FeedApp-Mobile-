import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ButtonWait({ wait, pressFunc }) {
    if (wait) {
        return (
            <Button
                icon={
                    <Icon
                        name="send"
                        size={15}
                        color="white"
                    />
                }
                title="  Feed"
                loading
                disabled={true}
                onPress={pressFunc}
            />
        )
    }
    else {
        return (
            <Button
                icon={
                    <Icon
                        name="send"
                        size={15}
                        color="white"
                    />
                }
                title="  Feed"

                onPress={pressFunc}
            />)
    }
} 