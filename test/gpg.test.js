(async function() {
  try {
    const yargs = require('yargs');
    const exec = require('../utils').exec;
    
 

      console.log('[Test encrypting and decrypting with binary key]');
      await exec(`./bin/sop-openpgp encrypt test/testkey.pgp | ./bin/sop-openpgp decrypt test/testkey.sec.pgp`);
    

    console.log('[Test encrypting and decrypting with armored key... success.]');
    await exec('./bin/sop-openpgp encrypt test/testkey.asc | ./bin/sop-openpgp decrypt test/testkey.sec.asc');
  


    console.log('[Test encrypting and decrypting with armored key... success.]');
    await exec('./bin/sop-openpgp encrypt --with-password=123 | ./bin/sop-openpgp decrypt --with-password=123');
  
  

    console.log('[Test Signing]');
    await exec('./bin/sop-openpgp sign test/alice.sec');
  
  

    console.log('[Test encrypting and decrypting with armored key.]');
    await exec('./bin/sop-openpgp verify test/detached-sig.txt test/alice.asc < test/message.txt');
  
  

    console.log('[Test encrypting and decrypting with armored key..]');
    await exec('./bin/sop-openpgp generate-key ');
  } catch (error) {
    console.error(error);
}
})();