import{test}from'node:test';import{strict as assert}from'node:assert';import{answer}from'./tour.mjs';test('answers from fixture',()=>assert.match(answer('What is the price?').reply,/2,300,000/));test('captures viewing intent',()=>assert.equal(answer('Schedule a viewing').state.viewingIntent,true));

test('answers common price wording',()=>assert.match(answer('How much is it?').reply,/2,300,000/));
