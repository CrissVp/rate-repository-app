import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import theme from '../../theme';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		padding: 10,
		flex: 0
	},
	input_container: {
		gap: 10,
		borderRadius: 999,
		paddingVertical: 5,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 15,
		backgroundColor: theme.colors.pageBackground
	},
	input: {
		flex: 1
	}
});

const SearchBar = ({ value, setValue }) => {
	const resetInput = () => {
		setValue('');
	};

	return (
		<View style={styles.container}>
			<View style={styles.input_container}>
				<Ionicons name='search' size={20} />
				<TextInput
					value={value}
					style={styles.input}
					placeholder='Filter'
					onChangeText={(text) => setValue(text)}
				/>
				{value && (
					<TouchableOpacity onPress={resetInput}>
						<Ionicons name='close-sharp' size={24} />
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default SearchBar;
