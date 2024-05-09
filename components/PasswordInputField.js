import { TextInput } from "react-native";


export default function PasswordInputField({ value, onChangeText })
{
    return (
        <TextInput 
            value={value} 
            onChangeText={onChangeText}
            style={{ 
                borderStyle: 'solid', 
                borderWidth: 3, 
                borderColor: '#dbdbdb', 
                borderRadius: 20, 
                paddingTop: 3, 
                paddingBottom: 3,
                paddingRight: 15,
                paddingLeft: 15,
                marginBottom: 10
            }}
            secureTextEntry={true}
        />
    )
}