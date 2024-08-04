import { CREATE_REVIEW } from '../../graphql/mutations';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { Alert } from 'react-native';

import ReviewForm from './ReviewForm';

const CreateReview = () => {
	const navigate = useNavigate();
	const [mutate] = useMutation(CREATE_REVIEW);

	const onSubmit = async (values) => {
		try {
			const { owner, rating, repository, review } = values;
			const { data } = await mutate({
				variables: {
					review: {
						repositoryName: repository,
						rating: Number(rating),
						ownerName: owner,
						text: review
					}
				}
			});

			navigate(`/repository/${data.createReview.repositoryId}`);
		} catch (error) {
			Alert.alert('Error', error.message);
		}
	};

	return <ReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;
