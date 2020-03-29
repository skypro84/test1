const checkPermissionRole = (role) => role.permissions.has('ADMINISTRATOR') ||role.permissions.has('KICK_MEMBERS') || role.permissions.has('BAN_MEMBERS') || role.permissions.has('MANAGE_GUILD') || role.permissions.has('MANAGE_CHANNELS');

module.exports = {
    run: async(client, message, args) => {
        if(!message.member.hasPermission('KICK_MEMBERS'))
                message.channel.send("You don't have permission to use that command.");
        else {
            let member = message.guild.members.cache.get(args);
            if(member) {
                try {
                    await member.kick();
                    console.log('A member was kicked.');
                }
                catch(err) {
                    console.log(err);
                }
            }
        }
    },
    aliases: ["kick"],
    description: 'Kicks a user'
}