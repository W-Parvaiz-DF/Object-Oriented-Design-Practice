const SecretDiary = require(`../SecretDiary`);
const { assertEquals } = require(`./tests-frameworks`);

const testDiaryStartsOffLocked = () => {

    //Identity

    console.log(`testDiaryStartsOffLocked  \n ========== \n`);

    //Arrange
    input = new SecretDiary();
    expected = true;

    //Act
    actual = input.locked;

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testDiaryStartsOffLocked result : ${result}`);

};


const testNoEntriesWhilstLocked = () => {

    //Identity

    console.log(`testNoEntriesWhilstLocked  \n ========== \n`);

    //Arrange
    input = new SecretDiary();
    expected = undefined;

    //Act
    input.addEntry();
    actual = input.entries[0];

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testNoEntriesWhilstLocked result : ${result}`);

};


const testNoGettingEntriesWhilstLocked = () => {

    //Identity

    console.log(`testNoGettingEntriesWhilstLocked  \n ========== \n`);

    //Arrange
    input = new SecretDiary();
    expected = console.log('The diary is locked!');

    //Act
    actual = input.getEntries();

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testNoGettingEntriesWhilstLocked result : ${result}`);

};

const testUnlockDiary = () => {

    //Identity

    console.log(`testUnlockDiary  \n ========== \n`);

    //Arrange
    input = new SecretDiary();
    expected = false;

    //Act
    input.unlock();
    actual = input.locked;

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testUnlockDiary result : ${result}`);

};


const testLockTheDiaryAfterUnlock = () => {

    //Identity

    console.log(`testLockTheDiaryAfterUnlock  \n ========== \n`);

    //Arrange
    input = new SecretDiary();
    expected = true;

    //Act
    input.unlock();
    input.lock();
    actual = input.locked;

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testLockTheDiaryAfterUnlock result : ${result}`);


};

const testAddEntryAfterUnlock = () => {

    //Identity

    console.log(`testAddEntryAfterUnlock  \n ========== \n`);

    //Arrange
    input = new SecretDiary();
    expected = 'Hi';

    //Act
    input.unlock();
    input.addEntry('Hi');
    actual = input.entries[0];

    //Assert
    result = assertEquals(actual, expected);

    //Report
    console.log(`testAddEntryAfterUnlock result : ${result}`);


};

const testGetEntriesAfterUnlock = () => {

    //Identity

    console.log(`testGetEntriesAfterUnlock  \n ========== \n`);

    //Arrange
    input = new SecretDiary();
    expected = 'Hi';

    //Act
    input.unlock();
    input.addEntry('Hi');
    console.log(input);
    actual = input.getEntries()[0];
    console.log(actual);
    //Assert
    result = assertEquals(actual, expected);

    //Report

    console.log(`testGetEntriesAfterUnlock result : ${result}`);


};








const diaryTests = {
    testDiaryStartsOffLocked,
    testNoEntriesWhilstLocked,
    testNoGettingEntriesWhilstLocked,
    testUnlockDiary,
    testLockTheDiaryAfterUnlock,
    testAddEntryAfterUnlock,
    testGetEntriesAfterUnlock
};

module.exports = diaryTests;


