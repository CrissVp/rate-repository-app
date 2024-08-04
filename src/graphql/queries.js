import { REPOSITORY_FIELDS, REVIEW_FIELDS, USER_FIELDS } from './fragments';
import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
	query Repositories(
		$first: Int
		$after: String
		$searchKeyword: String
		$orderBy: AllRepositoriesOrderBy
		$orderDirection: OrderDirection
	) {
		repositories(
			after: $after
			first: $first
			orderBy: $orderBy
			searchKeyword: $searchKeyword
			orderDirection: $orderDirection
		) {
			edges {
				cursor
				node {
					...RepositoryFields
				}
			}
			pageInfo {
				endCursor
				startCursor
				hasNextPage
			}
		}
	}
	${REPOSITORY_FIELDS}
`;

export const GET_AUTHENTICATED_USER = gql`
	query Me($includeReviews: Boolean = false) {
		me {
			...UserFields
			reviews @include(if: $includeReviews) {
				edges {
					node {
						...ReviewFields
					}
				}
			}
		}
	}
	${USER_FIELDS}
	${REVIEW_FIELDS}
`;

export const GET_REPOSITORY = gql`
	query Repository($repositoryId: ID!, $first: Int, $after: String) {
		repository(id: $repositoryId) {
			url
			...RepositoryFields
			reviews(first: $first, after: $after) {
				totalCount
				edges {
					cursor
					node {
						...ReviewFields
					}
				}
				pageInfo {
					endCursor
					startCursor
					hasNextPage
				}
			}
		}
	}
	${REPOSITORY_FIELDS}
	${REVIEW_FIELDS}
`;
