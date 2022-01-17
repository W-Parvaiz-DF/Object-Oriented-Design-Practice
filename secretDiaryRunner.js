const SecretDiary = require(`./SecretDiary`);
const diaryTests = require(`./tests/secretDiary.spec`);

diaryTests.testDiaryStartsOffLocked();
diaryTests.testNoEntriesWhilstLocked();
diaryTests.testNoGettingEntriesWhilstLocked();
diaryTests.testUnlockDiary();
diaryTests.testLockTheDiaryAfterUnlock();
diaryTests.testAddEntryAfterUnlock();
diaryTests.testGetEntriesAfterUnlock();






//const x = console.log('hi');
//const y = console.log('hi');
//console.log(x === y);


//console.log(['Hi'] === ['Hi']);

/*const diary1 = new SecretDiary();
diary1.unlock();
diary1.addEntry('Hi');
diary1.getEntries();
console.log(diary1.entries[0]);
*/


