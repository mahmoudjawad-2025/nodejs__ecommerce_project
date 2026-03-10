import { Schema, model, mongoose, Types } from "mongoose";

const categorySchema = new Schema({
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
  status: {
    type: String,
    default: 'active',
    enum: ['active', 'not_active'],
  },
  image: {
    type: Object,
  },
  createdBy: {
    type: Types.ObjectId,
    ref: 'User',
  },
  updatedBy: {
    type: Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true
});

const CategoryModel = mongoose.models.Category || model('Category', categorySchema);

export default CategoryModel;