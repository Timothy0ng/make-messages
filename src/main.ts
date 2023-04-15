import axios from 'axios';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Truth or Dare
 */
rl.question('truth/dare?', function (tod_type) {
  if (['truth', 'dare'].includes(tod_type)) {
    const action_url = `https://api.truthordarebot.xyz/api/${tod_type}`;

    axios({
      method: 'get',
      url: action_url,
      responseType: 'json',
    }).then(function (response) {
      const { question } = response.data;
      console.log(question);
      rl.close();
    });
  } else {
    rl.close();
  }
});

rl.on('close', function () {
  console.log('\n L');
  process.exit(0);
});
