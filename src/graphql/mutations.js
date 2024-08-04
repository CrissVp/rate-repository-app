import { gql } from '@apollo/client';
import { USER_FIELDS } from './fragments';

export const LOG_IN_MUTATION = gql`
	mutation Authenticate($credentials: AuthenticateInput) {
		authenticate(credentials: $credentials) {
			accessToken
			expiresAt
		}
	}
`;

export const CREATE_USER = gql`
	mutation CreateUser($user: CreateUserInput) {
		createUser(user: $user) {
			...UserFields
		}
	}
	${USER_FIELDS}
`;

export const CREATE_REVIEW = gql`
	mutation CreateReview($review: CreateReviewInput) {
		createReview(review: $review) {
			repositoryId
		}
	}
`;

export const DELETE_REVIEW = gql`
	mutation DeleteReview($deleteReviewId: ID!) {
		deleteReview(id: $deleteReviewId)
	}
`;
