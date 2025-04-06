const mongoose = require('mongoose');
const FeeTransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: Number,
  semester: String,
  status: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('FeeTransaction', FeeTransactionSchema);
