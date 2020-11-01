#!/usr/bin/env bash
echo 'Test encrypting and decrypting with armored key... success.' |
./sop-openpgp encrypt test/testkey.asc |
./sop-openpgp decrypt test/testkey.sec.asc

echo 'Test encrypting and decrypting with binary key... success.' |
./sop-openpgp encrypt test/testkey.pgp |
./sop-openpgp decrypt test/testkey.sec.pgp

echo 'Test encrypting and decrypting with password' |
./sop-openpgp encrypt --with-password=123 |
./sop-openpgp decrypt --with-password=123

echo 'Test signing' |
./sop-openpgp sign test/alice.sec

echo 'test verifyng message signature'
./sop-openpgp verify test/detached-sig.txt test/alice.asc < test/message.txt

echo 'test generating key'
./sop-openpgp generate-key 'alice <alice@alice.ch>'
