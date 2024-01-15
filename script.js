const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        // Function to strip off "a," "an," and "the" from the beginning of the band names for sorting
        const stripArticlesForSorting = (bandName) => {
            return bandName.replace(/^(a|an|the)\s+/i, '');
        };

        // Function to strip off "a," "an," and "the" from the beginning of the band names for display
        const stripArticlesForDisplay = (bandName) => {
            return bandName.replace(/^()\s+/i, '');
        };

        // Sort the bands without considering "a," "an," and "the"
        const sortedBands = bands.sort((a, b) => stripArticlesForSorting(a) > stripArticlesForSorting(b) ? 1 : -1);

        // Display the sorted bands on the webpage
        const bandList = document.getElementById('bands');
        sortedBands.forEach(band => {
            const listItem = document.createElement('li');
            listItem.textContent = stripArticlesForDisplay(band);
            bandList.appendChild(listItem);
        });