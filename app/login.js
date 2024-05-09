import EmailInputField from "@/components/EmailInputField";
import PasswordInputField from "@/components/PasswordInputField"
import LoginButton from "@/components/LoginButton"
import { useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice";


export default function LoginScreen () {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const dispatch = useDispatch();

    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

    const login = () => {
        axios.post('http://192.168.1.3:8000/api/login', {
            email       : email,
            password    : password
        })
        .then((response) => {
            console.log( response.data );
            dispatch( 
                setUser({
                    name        : response.data.name,
                    email       : response.data.password,
                    token       : response.data.token
                }) 
            )
            router.replace( '/' );
        });
    }

    return (
        <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: '#fff' }}>
            <View style={{ width: '90%', margin: 'auto' }}>
                <EmailInputField 
                    value={email}
                    onChangeText={(value)=> setEmail(value)}
                />
                <PasswordInputField
                    value={password}
                    onChangeText={(value) => setPassword( value )}
                />

                <LoginButton onPress={login} />
            </View>
        </View>
    )
}