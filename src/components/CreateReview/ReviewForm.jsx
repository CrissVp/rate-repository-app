import { useFormik } from 'formik';
import * as yup from 'yup';

import Form, { FormButton, FormInput } from '../UI/Form';

const validationSchema = yup.object().shape({
	owner: yup.string().required(),
	repository: yup.string().required(),
	rating: yup.number().required().min(0).max(100),
	review: yup.string()
});

const ReviewForm = ({ onSubmit }) => {
	const reviewForm = useFormik({
		initialValues: {
			owner: '',
			rating: '',
			review: '',
			repository: ''
		},
		onSubmit,
		validationSchema
	});

	const isOwnerError = reviewForm.touched.owner && reviewForm.errors.owner;
	const isRatingError = reviewForm.touched.rating && reviewForm.errors.rating;
	const isReviewError = reviewForm.touched.review && reviewForm.errors.review;
	const isRepositoryError = reviewForm.touched.repository && reviewForm.errors.repository;

	return (
		<Form>
			<FormInput
				value={reviewForm.values.owner}
				placeholder={'Repository owner name'}
				handleChange={reviewForm.handleChange('owner')}
				error={isOwnerError && reviewForm.errors.owner}
			/>
			<FormInput
				placeholder={'Repository name'}
				value={reviewForm.values.repository}
				handleChange={reviewForm.handleChange('repository')}
				error={isRepositoryError && reviewForm.errors.repository}
			/>
			<FormInput
				placeholder={'Rating between 0 and 100'}
				value={reviewForm.values.rating.toString()}
				handleChange={reviewForm.handleChange('rating')}
				error={isRatingError && reviewForm.errors.rating}
			/>
			<FormInput
				multiline
				placeholder={'Review'}
				value={reviewForm.values.review}
				handleChange={reviewForm.handleChange('review')}
				error={isReviewError && reviewForm.errors.review}
			/>
			<FormButton text={'Create a review'} handleSubmit={reviewForm.handleSubmit} />
		</Form>
	);
};

export default ReviewForm;
