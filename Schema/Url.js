import mongoose from "mongoose";
const UrLSchema = new mongoose.Schema(
    {
        LongUrL: String,
        ShortUrL: String,
    }
);

const Url = mongoose.model("Url", UrLSchema)

export default Url