export const CONTACT_ADDRESS = '0xe37a4eA16E9952066B181BEC60B4756309AeFc87';

export const CONTACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "station_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "station_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "remaining_distance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price_per_unit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "count_of_waiting_cars",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "fast_charging",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "other_charging_station",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "rating",
				"type": "uint256"
			}
		],
		"name": "addChargingStation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_range",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_preference",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_fastChargingNeeded",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_other_brand_charging_station",
				"type": "bool"
			}
		],
		"name": "suggestChargingStation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "taskID",
				"type": "uint256"
			}
		],
		"name": "SuggestChargingStation",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "evOwnerRequests",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getChargingStationDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "station_id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "station_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "remaining_distance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price_per_unit",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "count_of_waiting_cars",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "fast_charging",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "other_company_station",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "rating",
						"type": "uint256"
					}
				],
				"internalType": "struct EVContract.charging_station",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCurrentRequestData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "username",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "range",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "preference",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "fastChargingNeeded",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "otherBrandChargingStation",
						"type": "bool"
					},
					{
						"internalType": "uint256[]",
						"name": "allotedChargingStations",
						"type": "uint256[]"
					}
				],
				"internalType": "struct EVContract.EVCarOwner",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_range",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_fast_charging_support",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_other_brand_charging_station",
				"type": "bool"
			}
		],
		"name": "getFilteredChargingStations",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "station_id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "station_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "remaining_distance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price_per_unit",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "count_of_waiting_cars",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "fast_charging",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "other_company_station",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "rating",
						"type": "uint256"
					}
				],
				"internalType": "struct EVContract.charging_station[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getInfoCS",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "station_id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "station_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "remaining_distance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price_per_unit",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "count_of_waiting_cars",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "fast_charging",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "other_company_station",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "rating",
						"type": "uint256"
					}
				],
				"internalType": "struct EVContract.charging_station[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserRequests",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "username",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "range",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "preference",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "fastChargingNeeded",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "otherBrandChargingStation",
						"type": "bool"
					},
					{
						"internalType": "uint256[]",
						"name": "allotedChargingStations",
						"type": "uint256[]"
					}
				],
				"internalType": "struct EVContract.EVCarOwner[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "station_id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "station_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "remaining_distance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price_per_unit",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "count_of_waiting_cars",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "fast_charging",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "other_company_station",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "rating",
						"type": "uint256"
					}
				],
				"internalType": "struct EVContract.charging_station[]",
				"name": "cs",
				"type": "tuple[]"
			}
		],
		"name": "sortByPrice",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "station_id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "station_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "remaining_distance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price_per_unit",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "count_of_waiting_cars",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "fast_charging",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "other_company_station",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "rating",
						"type": "uint256"
					}
				],
				"internalType": "struct EVContract.charging_station[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "station_id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "station_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "remaining_distance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price_per_unit",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "count_of_waiting_cars",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "fast_charging",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "other_company_station",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "rating",
						"type": "uint256"
					}
				],
				"internalType": "struct EVContract.charging_station[]",
				"name": "cs",
				"type": "tuple[]"
			}
		],
		"name": "sortByRemaingDistance",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "station_id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "station_name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "remaining_distance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price_per_unit",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "count_of_waiting_cars",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "fast_charging",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "other_company_station",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "rating",
						"type": "uint256"
					}
				],
				"internalType": "struct EVContract.charging_station[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]