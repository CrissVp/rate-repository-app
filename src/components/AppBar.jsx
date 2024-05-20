import useAuthenticatedUser from '../hooks/useAuthenticatedUser';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
		backgroundColor: theme.colors.barBackground,
		paddingVertical: 10,
		paddingHorizontal: 15
	},
	scrollView: {
		flexDirection: 'row'
	},
	scrollViewChildren: {
		gap: 15
	},
	text: {
		color: '#fff'
	}
});

const AppBar = () => {
	const { user, loading, singOut } = useAuthenticatedUser();

	return (
		<View style={styles.container}>
			<ScrollView
				horizontal
				style={styles.scrollView}
				contentContainerStyle={styles.scrollViewChildren}
			>
				<Link to={'/'}>
					<Text style={styles.text} fontSize={'subheading'} fontWeight={'bold'}>
						Repositories
					</Text>
				</Link>
				{!loading &&
					(user ? (
						<Pressable onPress={singOut}>
							<Text style={styles.text} fontSize={'subheading'} fontWeight={'bold'}>
								Sign Out
							</Text>
						</Pressable>
					) : (
						<Link to={'sign-in'}>
							<Text style={styles.text} fontSize={'subheading'} fontWeight={'bold'}>
								Sign In
							</Text>
						</Link>
					))}
			</ScrollView>
		</View>
	);
};

export default AppBar;
