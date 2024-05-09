import { TextInput } from "react-native";

export default function TextInputField({ value, onChangeText })
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
                paddingTop: 5, 
                paddingBottom: 5,
                paddingRight: 15,
                paddingLeft: 15,
                marginBottom: 10
            }}
        />
    )
}