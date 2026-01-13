const fs = require('fs');
const path = require('path');

// Load the HTML file
const htmlPath = path.join(__dirname, '..', 'my_cards.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Basic smoke tests
console.log('🔍 Running smoke tests for my_cards.html...\n');

// 1. Check for unclosed script tags
const scriptOpens = (htmlContent.match(/<script[^>]*>/g) || []).length;
const scriptCloses = (htmlContent.match(/<\/script>/g) || []).length;
console.log(`Script tags: ${scriptOpens} opens, ${scriptCloses} closes ${scriptOpens === scriptCloses ? '✅' : '❌'}`);

// 2. Check for unclosed div tags (basic)
const divOpens = (htmlContent.match(/<div[^>]*>/g) || []).length;
const divCloses = (htmlContent.match(/<\/div>/g) || []).length;
console.log(`Div tags: ${divOpens} opens, ${divCloses} closes ${divOpens === divCloses ? '✅' : '❌'}`);

// 3. Check for new functions exist
const hasComputeSkillStats = htmlContent.includes('function computeSkillStats');
const hasSimulateSkillUse = htmlContent.includes('function simulateSkillUse');
console.log(`computeSkillStats function: ${hasComputeSkillStats ? '✅' : '❌'}`);
console.log(`simulateSkillUse function: ${hasSimulateSkillUse ? '✅' : '❌'}`);

// 4. Check for new UI elements
const hasGameplayBreakdown = htmlContent.includes('skill-gameplay-breakdown');
const hasSimulateButton = htmlContent.includes('Simulate Use');
console.log(`Gameplay Breakdown class: ${hasGameplayBreakdown ? '✅' : '❌'}`);
console.log(`Simulate Use button: ${hasSimulateButton ? '✅' : '❌'}`);

// 5. Check for cardTotals usage
const hasCardTotals = htmlContent.includes('cardTotals.totalPotency');
console.log(`Card totals aggregation: ${hasCardTotals ? '✅' : '❌'}`);

console.log('\n✅ Smoke tests completed. If all ✅, basic structure is sound.');