import dotenv from "dotenv";
import Product from "../models/product";
import { productSchema } from "../schemas/product";
dotenv.config();

export const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json({
            message: "Hiện thị danh sách sản phẩm thành công",
            products
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};

export const get = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.json({
            message: "Hiện thị sản phẩm thành công",
            product
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};
export const create = async (req, res) => {
    try {

        const { error } = productSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details.map((err) => err.message),
            });
        }
        const product = await Product.create(req.body);
        return res.status(201).json({
            message: "Thêm sản phẩm thành công",
            product
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const update = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        return res.json({
            message: "Cập nhật sản phẩm thành công",
            product
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.json({
            message: "Xóa sản phẩm thành công",
            product
        });
    } catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }
};
