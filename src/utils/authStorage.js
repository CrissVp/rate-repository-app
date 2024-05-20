import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
	constructor(namespace = 'RateRepositoriesAppAuth') {
		this.namespace = namespace;
	}

	async getAccessToken() {
		const token = await AsyncStorage.getItem(`${this.namespace}:token`);
		return token && JSON.parse(token);
	}

	async setAccessToken(accessToken) {
		const token = JSON.stringify(accessToken);
		await AsyncStorage.setItem(`${this.namespace}:token`, token);
	}

	async removeAccessToken() {
		await AsyncStorage.removeItem(`${this.namespace}:token`);
	}
}

export default AuthStorage;
