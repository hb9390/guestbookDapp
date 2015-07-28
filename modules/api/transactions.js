/*
	Crypti transactions API calls
 */

var private = {};
var library = null;
var modules = null;

function Transactions(cb, _library) {
	library = _library;
	cb(null, this);
}

Transactions.prototype.getTransactions = function (filter, cb) {
	var message = {
		call: "transactions#getTransactions",
		args: {
			blockId: filter.blockId,
			limit: filter.limit,
			type: filter.type,
			orderBy: filter.orderBy,
			offset: filter.offset,
			senderPublicKey: filter.senderPublicKey,
			ownerPublicKey: filter.ownerPublicKey,
			ownerAddress: filter.ownerAddress,
			senderId: filter.senderId,
			recipientId: filter.recipientId,
			senderUsername: filter.senderUsername,
			recipientUsername: filter.recipientUsername,
			amount: filter.amount,
			fee: filter.fee
		}
	};

	library.sandbox.sendMessage(message, cb);
}

Transactions.prototype.getTransaction = function (id, cb) {
	var message = {
		call: "transactions#getTransaction",
		args: {
			id: id
		}
	};

	library.sandbox.sendMessage(message, cb);
}

Transactions.prototype.getUnconfirmedTransaction = function (id, cb) {
	var message = {
		call: "transactions#getUnconfirmedTransaction",
		args: {
			id: id
		}
	};

	library.sandbox.sendMessage(message, cb);
}

Transactions.prototype.getUnconfirmedTransactions = function (filter, cb) {
	var message = {
		call: "transactions#getUnconfirmedTransactions",
		args: {
			secret: filter.secret,
			amount: filter.amount,
			recipientId: filter.recipientId,
			publicKey: filter.publicKey,
			secondSecret: filter.secondSecret
		}
	};

	library.sandbox.sendMessage(message, cb);
}

Transactions.prototype.addTransactions = function (secret, amount, recipientId, publicKey, secondSecret) {
	var message = {
		call: "transactions#addTransactions",
		args: {
			secret: secret,
			amount: amount,
			recipientId: recipientId,
			publicKey: publicKey,
			secondSecret: secondSecret
		}
	};

	library.sandbox.sendMessage(message, cb);
}

Transactions.prototype.onBind = function (_modules) {
	modules = _modules;
}

module.exports = Transactions;