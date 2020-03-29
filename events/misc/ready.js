const { createStream } = require('table');
const tableConfig = require('../../utils/tableConfig');
const { commandStatus, eventStatus } = require('../../utils/registry');

module.exports = async (client) => {
    console.log(`${client.user.tag} has logged in.`);
    let statuses = [
        `Ark Survival Evolved`,
        "!help",
        `🌓◀🦚𝐂hat™▶`
    ]
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "WATCHING"});

    }, 5000)
    await loadTable(commandStatus, 50);
    console.log("\n");
    await loadTable(eventStatus, 50);
    // database.then(() => console.log("Connected to DB.")).catch(err => console.log(err));
}
function loadTable(arr, interval) {
    let fn, i = 0, stream = createStream(tableConfig);
    return new Promise((resolve, reject) => {
        fn = setInterval(() => {
            if(i === arr.length)
            {
                clearInterval(fn);
                resolve();
            }
            else {
                stream.write(arr[i]);
                i++;
            }
        }, interval); 
    })
}