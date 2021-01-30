import React from 'react';
import Approval from './';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import { AVALANCHE } from '../../../constants/network';

const mockStore = configureMockStore();

describe('Approval', () => {
	it('should render correctly', () => {
		const initialState = {
			transaction: {
				value: '',
				data: '',
				from: '0x1',
				gas: '',
				gasPrice: '',
				to: '0x2',
				selectedAsset: { symbol: 'AVAXs' },
				assetType: undefined
			},
			engine: {
				backgroundState: {
					TransactionController: {
						transactions: []
					},
					AddressBookController: {
						addressBook: {}
					},
					NetworkController: {
						provider: {
							type: AVALANCHE
						}
					}
				}
			}
		};

		const wrapper = shallow(<Approval />, {
			context: { store: mockStore(initialState) }
		});
		expect(wrapper.dive()).toMatchSnapshot();
	});
});
