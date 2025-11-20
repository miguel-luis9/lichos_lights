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
        
        // If trees are selected, recommend contacting the business
        if (featureTrees) {
            showContactRecommendation();
            return;
        }
        
        // Base pricing (per linear foot)
        let basePricePerFoot = propertyType === 'commercial' ? 10 : 7;
        
        // Complexity multipliers
        const complexityMultipliers = {
            'simple': 1.0,
            'moderate': 1.1,
            'complex': 1.4
        };
        
        const complexityMultiplier = complexityMultipliers[complexity] || 1.0;

        // Calculate base cost
        let totalCost = linearFeet * basePricePerFoot * complexityMultiplier;

        // Add animated feature if selected
        if (featureAnimated) {
            totalCost += propertyType === 'commercial' ? 500 : 200;
        }

        // Round to nearest dollar
        totalCost = Math.round(totalCost);

        // Display result
        showPriceEstimate(totalCost);
    }

    function showContactRecommendation() {
        const resultDiv = quoteResult.querySelector('div');
        resultDiv.className = 'bg-slate-800 rounded-lg p-6 border border-yellow-600/30';
        resultDiv.innerHTML = `
            <h3 class="text-2xl font-bold mb-4 text-yellow-400">Custom Quote Required</h3>
            <p class="text-lg text-gray-300 mb-4">
                Tree and wreath lighting requires a custom quote based on the specific trees, 
                their size, and your design preferences. We'd love to discuss your vision!
            </p>
            <p class="text-gray-400 text-sm mb-6">
                Please contact us for a personalized estimate that takes into account your unique tree lighting needs.
            </p>
            <a href="contact.html" class="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition">
                Contact Us for Custom Quote
            </a>
        `;
        quoteResult.classList.remove('hidden');
        quoteResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function showPriceEstimate(totalCost) {
        const resultDiv = quoteResult.querySelector('div');
        resultDiv.className = 'bg-slate-800 rounded-lg p-6 border border-green-600/30';
        resultDiv.innerHTML = `
            <h3 class="text-2xl font-bold mb-4 text-green-400">Estimated Cost</h3>
            <div class="text-4xl font-bold mb-2 text-white" id="estimated-price">$${totalCost.toLocaleString()}</div>
            <p class="text-gray-400 text-sm mb-4">
                * This is an estimate only. Final pricing may vary based on site conditions and specific requirements.
            </p>
            <a href="contact.html" class="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-lg font-semibold transition">
                Contact Us for Accurate Quote
            </a>
        `;
        quoteResult.classList.remove('hidden');
        quoteResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

