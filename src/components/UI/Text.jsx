import { Text as NativeText, Platform, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
	text: {
		fontFamily: Platform.select({
			android: theme.fonts.android,
			ios: theme.fonts.iOS,
			default: theme.fonts.default
		}),
		color: theme.colors.textPrimary,
		fontSize: theme.fontSizes.body,
		fontWeight: theme.fontWeights.normal
	},
	colorTextSecondary: {
		color: theme.colors.textSecondary
	},
	colorPrimary: {
		color: theme.colors.primary
	},
	fontSizeSmall: {
		fontSize: theme.fontSizes.small
	},
	fontSizeSubheading: {
		fontSize: theme.fontSizes.subheading
	},
	fontWeightBold: {
		fontWeight: theme.fontWeights.bold
	}
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
	const textStyle = [
		styles.text,
		color === 'textSecondary' && styles.colorTextSecondary,
		color === 'primary' && styles.colorPrimary,
		fontSize === 'subheading' && styles.fontSizeSubheading,
		fontSize === 'small' && styles.fontSizeSmall,
		fontWeight === 'bold' && styles.fontWeightBold,
		style
	];

	return <NativeText style={textStyle} {...props} />;
};

export default Text;
