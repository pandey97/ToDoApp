import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
	GOOGLE_WEB_CLIENT_ID
} from '@env';

GoogleSignin.configure({
	webClientId: GOOGLE_WEB_CLIENT_ID,
	scopes: ['profile', 'email'],
});