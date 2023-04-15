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
    console.log(tod_type);
    rl.close();
  } else {
    rl.close();
  }
});

rl.on('close', function () {
  console.log('\n L');
  process.exit(0);
});
