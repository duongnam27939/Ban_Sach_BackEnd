import Auth from "../model/auth";
import bcrypt  from "bcryptjs"

import jwt from "jsonwebtoken"
import { signinSchema, signupSchema } from "../schema/auth";

export const signup = async (req, res) => {
    try {
      await signupSchema.validate(req.body, { abortEarly: false });
      const { name, email, password, phone, address } = req.body;
      const authExist = await Auth.findOne({ email: email });
      if (authExist) {
        return res.json({
          message: "Tài khoản đã tồn tại !",
        });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const auth = await Auth.create({
        email: email,
        name: name,
        password: hashedPassword,
        phone,
        address,
      });
  
      const token = await jwt.sign({ _id: auth._id }, "12345", {
        expiresIn: "7d",
      });
      return res.json({
        message: "Đăng ký thành công",
        data: auth,
        accsetToken: token,
      });
    } catch ({ errors }) {
      return res.json({
        message: errors,
      });
    }
  };


export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { error } = signinSchema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.json({
                message: error.details.map((err) => err.message),
            });
        }

        const auth = await Auth.findOne({ email });
        if (!auth) {
            return res.json({
                message: "Email không tồn tại",
            });
        }


        const isMatch = await bcrypt.compare(password, auth.password);
        if (!isMatch) {
            return res.json({
                message: "Mật khẩu không đúng",
            });
        }

        const token = jwt.sign({ id: auth._id }, "123456", { expiresIn: "1d" });

        auth.password = undefined;

        return res.json({
            message: "Đăng nhập thành công",
            accessToken: token,
            auth,
        });
    } catch (error) {
        return res.json({
            message: error,
        });
    }
};


