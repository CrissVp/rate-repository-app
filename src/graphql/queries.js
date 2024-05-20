import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
	query Repositories {
		repositories {
			edges {
				node {
					id
					fullName
					language
					forksCount
					reviewCount
					description
					ratingAverage
					ownerAvatarUrl
					stargazersCount
				}
			}
		}
	}
`;

export const GET_AUTHENTICATED_USER = gql`
	query Me {
		me {
			id
			username
		}
	}
`;
