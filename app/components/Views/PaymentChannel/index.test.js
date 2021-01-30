import React from 'react';
import { shallow } from 'enzyme';
import PaymentChannel from './';
import configureMockStore from 'redux-mock-store';
import { AVALANCHE } from '../../../constants/network';

const mockStore = configureMockStore();

describe('PaymentChannel', () => {
	it('should render correctly', () => {
		const initialState = {
			settings: {
				paymentChannelsEnabled: true
			},
			engine: {
				backgroundState: {
					NetworkController: {
						provider: {
							type: AVALANCHE,
							ticker: 'AVAX'
						}
					},
					TransactionController: {
						internalTransactions: [],
						transactions: []
					},
					CurrencyRateController: {
						currentCurrency: 'USD',
						nativeCurrency: 'AVAX',
						conversionRate: 100
					},
					PreferencesController: {
						selectedAddress: '0x1'
					},
					TokenRatesController: {
						contractExchangeRates: {}
					}
				}
			}
		};

		const wrapper = shallow(<PaymentChannel />, {
			context: { store: mockStore(initialState) }
		});
		expect(wrapper).toMatchSnapshot();
	});
});
