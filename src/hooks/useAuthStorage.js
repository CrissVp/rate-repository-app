import AuthStorageContext from '../contexts/AuthStorageContext';
import { useContext } from 'react';

const useAuthStorage = () => {
	return useContext(AuthStorageContext);
};

export default useAuthStorage;
