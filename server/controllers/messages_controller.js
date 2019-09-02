let messages = []
let id = 0


module.exports = {
    create: (req, res, next) => {
        const { text, time} = req.body;
        messages.push({ id, text, time}); id ++;
        res.status(200).send(messages)
    },
    read: (req, res, next) => {
        res.status(200).send(messages);
    },
    update: (req, res, next) => {
        const {text} = req.body;
        const newId = req.params.id;
        const postIndex = messages.findIndex(message => message.id == newId);
        let message = message[postIndex];

        messages[postIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).send(messages)

    },
    delete: (req, res, next) => {
        console.log(typeof messages[0].id)
        const deleteId = req.params.id;
        const postIndex = messages.findIndex(message => message.id === +deleteId);
        messages.splice(postIndex, 1);
        res.status(200).send(messages)
    }

}