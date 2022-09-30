const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");
const bodyParser = require("body-parser");

const app = express();

const contactsRouter = require("./app/routes/contact.routes")

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use("/api/contacts", contactsRouter);

// handle 404 response
app.use((req, res, next) => {
        //code ở đây sẽ chạy khi không có route được định nghĩa
        // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
        return next(new ApiError(404, "Resource not found"));
});

//difine error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
    //Middle xử lý lỗi tập trung.
    //trong các đoạn code xửu lý ở route, gọi next(error).
    // sẽ chuyển về middleware xử lý lỗi này.
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

app.get("/", (req, res) => {
    res.json({ message: "wellcome to contact book application." });
});

module.exports = app;