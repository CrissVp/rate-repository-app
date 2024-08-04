import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import theme from '../../theme';
import Text from './Text';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		gap: 15,
		padding: 15,
		backgroundColor: '#fff'
	},
	textInput: {
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#acacac'
	},
	errorText: {
		color: theme.colors.error,
		fontSize: 12
	},
	errorBorder: {
		borderColor: theme.colors.error
	},
	button: {
		backgroundColor: theme.colors.primary,
		textAlign: 'center',
		borderRadius: 5,
		color: '#fff',
		padding: 10
	}
});

export const FormInput = ({ value, handleChange, placeholder, error, ...props }) => {
	return (
		<View>
			<TextInput
				{...props}
				value={value}
				placeholder={placeholder}
				onChangeText={handleChange}
				style={[styles.textInput, error && styles.errorBorder]}
			/>
			{error && <Text style={styles.errorText}>{error}</Text>}
		</View>
	);
};

export const FormButton = ({ text, handleSubmit }) => {
	return (
		<TouchableOpacity onPress={handleSubmit}>
			<Text fontSize={'subheading'} fontWeight={'bold'} style={styles.button}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

const Form = ({ children }) => {
	return <View style={styles.container}>{children}</View>;
};

export default Form;
