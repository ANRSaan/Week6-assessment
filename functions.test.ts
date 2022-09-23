const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('This should test to see if the item returned is an array', () => {
        const arrTest = typeof shuffleArray([1,2,3,4,5])
        expect(arrTest).toBe("object")
    })

    test('This should test that all the same items are in the array', () => {
        const arr = [0,1,2,3,4]
        let tester = true

        if (arr !== shuffleArray(arr)){
            tester = false
        }
        expect(tester).toBeFalsy()
    })
})