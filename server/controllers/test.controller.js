export const test = (req, res) => {
    res.status(200).json({
        "message":"Test route is created",
        "success": true
    })
}