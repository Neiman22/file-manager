import { stdin, stdout } from 'process';

const args = process.argv.slice(2);
const USER_NAME = String(args).split('=')[1];

const currentDir = () => {
  const cwd = process.cwd();
  stdout.write(`You are currently in ${cwd}\n`);
}

const workFinished = () => {
  stdout.write(`Thank you for using File Manager, ${USER_NAME}, goodbye!\n`);
  process.exit(0);
}

const commandHandler = (command) => {
  switch (command.trim()) {
    case '.exit':
        workFinished();
        break;
    default: stdout.write('Unknown Command, please enter correct command or .exit: ');
 }
}

const app = () => {
  console.log(`Welcome to the File Manager, ${USER_NAME}!`);
  currentDir();

  stdout.write(`Please enter your command or .exit: `)
  stdin.on('data', data => {
    commandHandler(data.toString());
  });

  process.on('SIGINT', () => {
    stdout.write('\n');
    workFinished();
  });
}  
app();