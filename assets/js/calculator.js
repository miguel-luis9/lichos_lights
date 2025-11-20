// Quote Calculator Logic
document.addEventListener('DOMContentLoaded', function() {
    const calculatorForm = document.getElementById('quote-calculator');
    const quoteResult = document.getElementById('quote-result');
    const estimatedPrice = document.getElementById('estimated-price');

    if (calculatorForm) {
        calculatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            calculateQuote();
        });

        // Also calculate on input changes for real-time updates
        const inputs = calculatorForm.querySelectorAll('input, select');
        inputs.forEach(input => {
            input.addEventListener('change', calculateQuote);
        });
    }

    function calculateQuote() {
        // Get form values
        const propertyType = document.getElementById('property-type').value;
        const linearFeet = parseFloat(document.getElementById('linear-feet').value) || 0;
        const complexity = document.getElementById('complexity').value;
        const featureTrees = document.getElementById('feature-trees').checked;
        const featureAnimated = document.getElementById('feature-animated').checked;
        const featureTakedown = document.getElementById('feature-takedown').checked;

        // Base pricing (per linear foot)
        let basePricePerFoot = propertyType === 'commercial' ? 8 : 6;
        
        // Complexity multipliers
        const complexityMultipliers = {
            'simple': 1.0,
            'moderate': 1.3,
            'complex': 1.7
        };
        
        const complexityMultiplier = complexityMultipliers[complexity] || 1.0;

        // Calculate base cost
        let totalCost = linearFeet * basePricePerFoot * complexityMultiplier;

        // Add minimum base fee
        const minimumBase = propertyType === 'commercial' ? 500 : 300;
        if (totalCost < minimumBase) {
            totalCost = minimumBase;
        }

        // Additional features
        if (featureTrees) {
            totalCost += propertyType === 'commercial' ? 150 : 100;
        }
        
        if (featureAnimated) {
            totalCost += propertyType === 'commercial' ? 800 : 500;
        }
        
        if (featureTakedown) {
            totalCost += totalCost * 0.3; // 30% of installation cost
        }

        // Round to nearest dollar
        totalCost = Math.round(totalCost);

        // Display result
        estimatedPrice.textContent = `$${totalCost.toLocaleString()}`;
        quoteResult.classList.remove('hidden');
        quoteResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

