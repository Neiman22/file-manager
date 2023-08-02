const args = process.argv.slice(2);
const userName = String(args).split('=')[1];
console.log(`Welcome to the File Manager, ${userName}!`);