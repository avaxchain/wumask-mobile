import Wallet from '../Wallet';
import NetworkSettings from '../NetworkSettings';
import SeedWords from '../SeedWords';
import SyncWithExtension from '../SyncWithExtension';
import Asset from '../Asset';
import AccountDetails from '../AccountDetails';
import AddAsset from '../AddAsset';
import AppConfigurations from '../AppConfigurations';
import Collectible from '../Collectible';
import SendScreen from '../SendScreen';
import RevealPrivateCredential from '../RevealPrivateCredential';
import { createStackNavigator } from 'react-navigation';

/**
 * Stack navigator component that wraps the content of the Wallet tab
 * including the viewsm that can be pushed on top of it
 */
export default createStackNavigator({
	Wallet: {
		screen: Wallet
	},
	AccountDetails: {
		screen: AccountDetails
	},
	NetworkSettings: {
		screen: NetworkSettings
	},
	RevealPrivateCredential: {
		screen: RevealPrivateCredential
	},
	SeedWords: {
		screen: SeedWords
	},
	SyncWithExtension: {
		screen: SyncWithExtension
	},
	Asset: {
		screen: Asset
	},
	AddAsset: {
		screen: AddAsset
	},
	AppConfigurations: {
		screen: AppConfigurations
	},
	Collectible: {
		screen: Collectible
	},
	SendScreen: {
		screen: SendScreen
	}
});
