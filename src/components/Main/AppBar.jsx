import useAuthenticatedUser from '../../hooks/useAuthenticatedUser';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import Constants from 'expo-constants';

import Text from '../UI/Text';
import theme from '../../theme';

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
	const navigate = useNavigate();
	const { user, loading, signOut } = useAuthenticatedUser();

	const handleSignOut = () => {
		navigate('/');
		signOut();
	};

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
						<>
							<Link to={'/review'}>
								<Text style={styles.text} fontSize={'subheading'} fontWeight={'bold'}>
									Create a review
								</Text>
							</Link>
							<Link to={'/my-reviews'}>
								<Text style={styles.text} fontSize={'subheading'} fontWeight={'bold'}>
									My reviews
								</Text>
							</Link>
							<Pressable onPress={handleSignOut}>
								<Text style={styles.text} fontSize={'subheading'} fontWeight={'bold'}>
									Sign Out
								</Text>
							</Pressable>
						</>
					) : (
						<>
							<Link to={'/sign-in'}>
								<Text style={styles.text} fontSize={'subheading'} fontWeight={'bold'}>
									Sign In
								</Text>
							</Link>
							<Link to={'/sign-up'}>
								<Text style={styles.text} fontSize={'subheading'} fontWeight={'bold'}>
									Sign Up
								</Text>
							</Link>
						</>
					))}
			</ScrollView>
		</View>
	);
};

export default AppBar;
