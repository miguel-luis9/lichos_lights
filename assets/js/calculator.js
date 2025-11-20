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

        // Base pricing (per linear foot)
        let basePricePerFoot = propertyType === 'commercial' ? 10 : 7;
        
        // Complexity multipliers
        const complexityMultipliers = {
            'simple': 1.0,
            'moderate': 1.2,
            'complex': 1.5
        };
        
        const complexityMultiplier = complexityMultipliers[complexity] || 1.0;

        // Calculate base cost
        let totalCost = linearFeet * basePricePerFoot * complexityMultiplier;

        // Round to nearest dollar
        totalCost = Math.round(totalCost);

        // Display result
        estimatedPrice.textContent = `$${totalCost.toLocaleString()}`;
        quoteResult.classList.remove('hidden');
        quoteResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

