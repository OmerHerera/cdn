function testNotEval() {
  console.log('console.log from other domain not in eval');
}
testNotEval();


const code = 'function testEval() { console.log(\'Another console.log from other domain using eval\');} testEval();';
eval(code);