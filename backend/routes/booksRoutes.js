const router = require("express").Router();
const bookModel = require("../models/bookModles");

// Post request
router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(() => {
            res.status(200).json({ message: "Book Added Successfully" });
        });
    } catch (error) {
        console.log(error);
    }
});

router.get("/getb", async (req, res) => {
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({ books });
    } catch (error) {
        console.log(error);
    }
});

// Get request by id
router.get("/getb/:id", async (req, res) => {
    let book;
    const id = req.params.id;
    try {
        book = await bookModel.findById(id);
        res.status(200).json({ book });
    } catch (error) {
        console.log(error);
    }
});

// Update
router.put("/updateB/:id", async (req, res) => {
    const id = req.params.id;
    const { bookname, description, author, image, price } = req.body;
    let book;
    try {
        book = await bookModel.findByIdAndUpdate(
            id,
            {
                bookname,
                description,
                author,
                image,
                price,
            },
            { new: true }
        );
        await book.save().then(() => res.send({ message: "Update successful" }));
    } catch (error) {
        console.log(error);
    }
});

// Delete
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await bookModel.findByIdAndDelete(id).then(() =>
            res.status(201).json({ message: "Deleted" })
        );
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
