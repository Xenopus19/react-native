import { StyleSheet, View } from "react-native"
import Text from "../Text"
import theme from "../../theme"

const styles = StyleSheet.create({
    container:{
        height: 50,
        width: 50,
        borderColor: theme.colors.primary,
        borderWidth: theme.border.borderWidth,
        borderRadius: 25,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    text: {
        color: theme.colors.primary
    }
})

const Rating = ({rating}) => {
    return(
        <View style={styles.container}>
            <Text fontWeight='bold' style={styles.text}>{rating}</Text>
        </View>
    )
}

export default Rating