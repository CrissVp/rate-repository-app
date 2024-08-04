import { gql } from '@apollo/client';

export const REPOSITORY_FIELDS = gql`
	fragment RepositoryFields on Repository {
		id
		name
		fullName
		language
		createdAt
		ownerName
		forksCount
		reviewCount
		description
		ratingAverage
		ownerAvatarUrl
		stargazersCount
	}
`;

export const USER_FIELDS = gql`
	fragment UserFields on User {
		id
		username
	}
`;

export const REVIEW_FIELDS = gql`
	fragment ReviewFields on Review {
		id
		text
		rating
		createdAt
		repositoryId
		repository {
			name
		}
		user {
			...UserFields
		}
	}
	${USER_FIELDS}
`;
