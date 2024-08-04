import { Navigate, Route, Routes } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import theme from '../../theme';

import SingleRepository from '../SingleRepository';
import RepositoryList from '../RepositoryList';
import CreateReview from '../CreateReview';
import Reviews from '../Reviews';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import AppBar from './AppBar';

const Main = () => {
	return (
		<View style={styles.container}>
			<StatusBar style='light' backgroundColor={theme.colors.barBackground} />
			<AppBar />
			<Routes>
				<Route path='/' element={<RepositoryList />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='/review' element={<CreateReview />} />
				<Route path='//my-reviews' element={<Reviews />} />
				<Route path='/repository/:id' element={<SingleRepository />} />
				<Route path='*' element={<Navigate to={'/'} replace />} />
			</Routes>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 1,
		backgroundColor: theme.colors.pageBackground
	}
});

export default Main;
