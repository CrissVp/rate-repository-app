import { fireEvent, render, screen } from '@testing-library/react-native';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

describe('Example', () => {
	it('works', () => {
		expect(1).toBe(1);
	});
});

const Greeting = ({ name }) => {
	return (
		<View>
			<Text>Hello {name}!</Text>
		</View>
	);
};

describe('Greeting', () => {
	it('renders a greeting message based on the name prop', () => {
		render(<Greeting name={'Criss'} />);

		screen.debug();

		expect(screen.getByText('Hello Criss!')).toBeDefined();
	});
});

const Form = ({ onSubmit }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = () => {
		onSubmit({ username, password });
	};

	return (
		<View>
			<View>
				<TextInput
					value={username}
					placeholder='Username'
					onChangeText={(text) => setUsername(text)}
				/>
			</View>
			<View>
				<TextInput
					value={password}
					placeholder='Password'
					onChangeText={(text) => setPassword(text)}
				/>
			</View>
			<View>
				<Pressable onPress={handleSubmit}>
					<Text>Submit</Text>
				</Pressable>
			</View>
		</View>
	);
};

describe('Form', () => {
	it('calls function provided by onSubmit prop after pressing the submit button', () => {
		const onSubmit = jest.fn();
		render(<Form onSubmit={onSubmit} />);

		fireEvent.changeText(screen.getByPlaceholderText('Username'), 'Criss');
		fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
		fireEvent.press(screen.getByText('Submit'));

		expect(onSubmit).toHaveBeenCalledTimes(1);
		expect(onSubmit.mock.calls[0][0]).toEqual({
			username: 'Criss',
			password: 'password'
		});
	});
});
