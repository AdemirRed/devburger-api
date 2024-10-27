import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    user: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    products: [
      {
        id: {
          type: Number, // Corrigido para "Number"
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number, // Corrigido para "Number"
          required: true,
        },
        category: {
          // Corrigido "Category" para "category" para seguir convenção de camelCase
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
        quantity: {
          type: String,
          required: true,
        },
      },
    ],
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Corrigido a posição do fechamento do objeto
  },
);

export default mongoose.model('Order', OrderSchema);
