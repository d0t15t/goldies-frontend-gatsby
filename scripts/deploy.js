/* eslint-disable no-console */
const fs = require('fs-extra');
const { spawn } = require('child_process');
const path = require('path');
const ps = require('ps-node');

const doDeploy = () => {
  const deploy = spawn('gatsby', ['build']).on('error', (err) => {
    console.error('error:', err);
    throw err;
  });

  deploy.stderr.on('data', (data) => {
    console.error('Build error:', data.toString('ascii'));
  });

  deploy.stdout
    .on('data', (data) => {
      const output = data.toString('ascii');

      console.log(output);

      if (output.indexOf('Error: ') != -1) {
        console.error('Build error:', output);
      }
    })
    .on('error', (err) => {
      console.error('error:', err);
      throw err;
    });

  deploy.on('close', (code) => {
    switch (code) {
      case 0:
        console.log('./public is ready.');
        // try {
        //   fs.copySync(path.join(__dirname, 'public'), path.join(__dirname, 'public_dist'));
        //   console.log('Success! public_dist was synced.');
        // } catch (err) {
        //   console.error('Error: There was an error syncing public_dist:', err);
        // }
        break;

      default:
        console.log(`Error code: ${code}`);
    }
  });
};

ps.lookup(
  {
    command: 'node',
    arguments: 'deploy.js',
  },
  (err, resultList) => {
    if (err) {
      throw new Error(err);
    }
    if (resultList.length > 1) {
      console.error('Frontend is currently building, try back later.');
    } else {
      doDeploy();
    }
  }
);
