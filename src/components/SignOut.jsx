import { Pressable } from "react-native"
import Text from "./Text"
import useSignOut from "../hooks/useSignOut"

const SignOut = () => {
    const signOut = useSignOut()
    return(
        <Pressable onPress={signOut}>
            <Text color="textSecondary">Sign Out</Text>
        </Pressable>
    )
}

export default SignOut