import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Truth or Dare
 */
rl.question('Truth or dare ', function (tod_type) {
  tod_type;
  rl.close();
});

rl.on('close', function () {
  console.log('\n L');
  process.exit(0);
});
