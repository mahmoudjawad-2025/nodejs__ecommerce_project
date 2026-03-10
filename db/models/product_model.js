import { Schema, model, mongoose, Types } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 50,
  },
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    default: 1
  },
  price: {
    type: Number,
    required: true
  },
  priceAfterDiscount: {
    type: Number
  },
  discount: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: 'active',
    enum: ['active', 'not_active'],
  },
  mainImage: {
    type: Object,
    required: true
  },
  subImages: [
    {
      type: Object,
      required: true
    },
  ],
  createdBy: {
    type: Types.ObjectId,
    ref: 'User',
  },
  updatedBy: {
    type: Types.ObjectId,
    ref: 'User',
  },
  categoryId: {
    type: Types.ObjectId,
    ref: 'Category',
  },
  colors: [
    {
      type: String,
    }
  ],
  sizes: [
    {
      type: String,
      enum: ['S', 'M', 'L', 'XL', 'XXL'],
    }
  ]

}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

productSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'productId'
});

const ProductModel = mongoose.models.Product || model('Product', productSchema);

export default ProductModel;