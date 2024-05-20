import { gql } from '@apollo/client';

export const LOG_IN_MUTATION = gql`
	mutation Authenticate($credentials: AuthenticateInput) {
		authenticate(credentials: $credentials) {
			accessToken
			expiresAt
		}
	}
`;
