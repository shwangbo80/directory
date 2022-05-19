const express = require("express")
const router = express.Router()

const Member = require("../../models/Member")

router.get("/test", (req, res) => res.send("member route testing!"))

router.get("/", (req, res) => {
    Member.find()
        .then((members) => res.json(members))
        .catch((err) =>
            res.status(404).json({nomembersfound: "No members found"})
        )
})

router.get("/:id", (req, res) => {
    Member.findById(req.params.id)
        .then((member) => res.json(member))
        .catch((err) =>
            res.status(404).json({nomemberfound: "No Member found"})
        )
})

router.post("/", (req, res) => {
    Member.create(req.body)
        .then((member) => res.json({msg: "Member added successfully"}))
        .catch((err) =>
            res.status(400).json({error: "Unable to add this member"})
        )
})

router.put("/:id", (req, res) => {
    Member.findByIdAndUpdate(req.params.id, req.body)
        .then((member) => res.json({msg: "Updated successfully"}))
        .catch((err) =>
            res.status(400).json({error: "Unable to update the Database"})
        )
})

router.delete("/:id", (req, res) => {
    Member.findByIdAndRemove(req.params.id, req.body)
        .then((member) => res.json({mgs: "Member entry deleted successfully"}))
        .catch((err) => res.status(404).json({error: "No such member"}))
})

module.exports = router
