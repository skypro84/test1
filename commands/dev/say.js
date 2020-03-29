module.exports = {
    run: async(client, message, args) => {

        let announcement = message.content.substring(5);
        let announcementChannel = client.channels.cache.get('693539765727002633');
        if(announcementChannel) {
            announcementChannel.send(announcement);
        }
},
aliases: ['say'],
description: 'Announcment for owners...'
}
