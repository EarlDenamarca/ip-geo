import { Button, Text, TouchableOpacity, TouchableOpacityComponent } from "react-native";

export default function LoginButton({ onPress })
{
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={{
                backgroundColor: '#459ec4',
                borderRadius: 20,
                height: 40,
                paddingTop: 9,
            }}
        >
            <Text style={{ color: '#fff', textAlign: 'center' }} >
                Login
            </Text>
        </TouchableOpacity>
    )
}