import { Schema, model, mongoose, Types } from "mongoose";

const OrderSchema = new Schema(
    {
        userId: {
            type: Types.ObjectId,
            required: true,
            ref: 'User'
        },
        products: [
            {
                productName: {
                    type: String,
                    required: true,
                },
                productId: {
                    type: Types.ObjectId,
                    ref: 'Product',
                    required: true,
                },
                quantity: {
                    type: Number,
                    default: 1,
                    required: true,
                },
                unitPrice: {
                    type: Number,
                    required: true,
                },
                finalPrice: {
                    type: Number,
                    required: true,
                }
            }
        ],
        phoneNumber: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        couponName: {
            type: String,
        },
        finalPrice: {
            type: Number,
            required: true,
        },
        paymentType: {
            type: String,
            default: 'cash',
            enum: ['cash', 'card'],
        },
        status: {
            type: String,
            default: 'pending',
            enum: ['pending', 'cancelled', 'confirmed', 'onWay', 'delivered']
        },
        note: String,
        reasonRejected: String,
        updatedBy: {
            type: Types.ObjectId,
            ref: 'User',
        },
    },
    {
        timestamps: true,
    }
);

const OrderModel = mongoose.models.Order || model('Order', OrderSchema);

export default OrderModel;