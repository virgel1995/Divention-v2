const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super(
      'avatar', //command name
      'utils', // command category 
      [], // aliases
      false, // nsfwOnly
      false, //owner only
      5, // coolDown
      [] // options 
    );
  }

  run(client, message, args, lang) {

    const Discord = require('discord.js');
    const user = message.mentions.users.first() || message.author;
    const avatar = user.displayAvatarURL({ dynamic: true, size: 1024 });
    const png = user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 });
    const jpg = user.displayAvatarURL({ dynamic: true, format: 'jpg', size: 1024 });
    const embed = new Discord.MessageEmbed()
      .setTitle(`${user.username}'s Avatar`)
      .setFooter(message.author.username)
      .setDescription(`
          __[wepg](${avatar})__ | __[png](${png})__ | __[jpg](${jpg})__ `)
      .setImage(`${avatar}`)
      .setColor("BLUE")
      .setTimestamp();
    message.channel.send(embed);
  }
}