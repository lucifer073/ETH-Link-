export const CONTRACT_ADDRESS = "0x042c38f95036982A9FaD2Ef22F2f8123d6e3431C";
export const TICKET_ABI = 
	[
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_ticketId",
                    "type": "uint256"
                }
            ],
            "name": "approveTicket",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_dataHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_designation",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "tenure",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_issuer",
                    "type": "address"
                }
            ],
            "name": "createTicket",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_ticketId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_reason",
                    "type": "string"
                }
            ],
            "name": "rejectTicket",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "ticketId",
                    "type": "uint256"
                }
            ],
            "name": "TicketApproved",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "ticketId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "dataHash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "designation",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tenure",
                    "type": "uint256"
                }
            ],
            "name": "TicketCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "ticketId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "reason",
                    "type": "string"
                }
            ],
            "name": "TicketRejected",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "ticketId",
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
            "name": "tickets",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "dataHash",
                    "type": "bytes32"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "designation",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "tenure",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "internalType": "enum VerificationTicket.Status",
                    "name": "status",
                    "type": "uint8"
                },
                {
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
