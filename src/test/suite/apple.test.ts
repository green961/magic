import * as assert from 'assert'

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode'
// import * as myExtension from '../../extension';

suite('Apple Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.')

  test('apple test', () => {
    assert.strictEqual([1, 2, 3].indexOf(5), -1)
    // assert.strictEqual([1, 2, 3].indexOf(5), 1)
    assert.strictEqual([1, 2, 3].indexOf(0), -1)
  })
})
