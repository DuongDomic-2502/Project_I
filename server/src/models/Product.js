import mongoose from "mongoose";

const MedicalDeviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  brand: {
    type: String,
    required: true,
    trim: true,
  },

  device_type: {
    type: String,
    required: true,
    trim: true,
    // ví dụ: "máy đo huyết áp", "nhiệt kế", "máy xông khí dung"
  },

  category: {
    type: String,
    required: true,
    trim: true,
    // ví dụ: "chẩn đoán", "theo dõi sức khỏe", "trị liệu"
  },

  price: {
    type: Number,
    default: 500000,
    min: 0,
  },

  available: {
    type: Boolean,
    default: true,
  },

  bestseller: {
    type: Boolean,
    default: false,
  },

  specifications: {
    type: Object,
    required: true,
    // ví dụ: { voltage: "220V", accuracy: "±3mmHg", weight: "300g" }
  },

  stock_quantity: {
    type: Number,
    required: true,
    min: 0,
  },

  manufacture_date: {
    type: Date,
    default: Date.now,
  },

  expiry_date: {
    type: Date,
    // thiết bị y tế tiêu hao có hạn dùng
  },

  origin: {
    type: String,
    trim: true,
    // ví dụ: "Germany", "Japan", "Vietnam"
  },

  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },

  image_url: {
    type: String,
    default:
      "https://via.plac eholder.com/300x300.png?text=Medical+Device",
  },

  description: {
    type: String,
    default: "Thiết bị y tế chính hãng, phục vụ chăm sóc sức khỏe",
  },

  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100,
  },
});

const medicalDeviceModel =
  mongoose.models.medicalDevice ||
  mongoose.model("medicalDevice", MedicalDeviceSchema);

export default medicalDeviceModel;