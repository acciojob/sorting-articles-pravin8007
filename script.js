const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        // Function to strip off "a," "an," and "the" from the beginning of the band names
        const stripArticles = (bandName) => {
            return bandName.replace(/^(a|an)\s+/i, '');
        };

        // Sort the bands without considering "a," "an," and "the"
        const sortedBands = bands.sort((a, b) => stripArticles(a) > stripArticles(b) ? 1 : -1);

        // Display the sorted bands on the webpage
        const bandList = document.getElementById('bands');
        sortedBands.forEach((band, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = stripArticles(band);
            bandList.appendChild(listItem);
        });