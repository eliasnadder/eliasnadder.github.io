const allDestinations = [
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Immerse yourself in centuries of tradition and marvel at exquisite temples and gardens in Japan\'s cultural heart.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.9,
    categories: ['Culture', 'History', 'Nature'],
    region: 'Asia',
    priceLevel: 'Medium'
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    description: 'Experience the mesmerizing beauty of white-washed buildings, blue domes, and the most spectacular sunsets in the Mediterranean.',
    image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.8,
    categories: ['Beach', 'Romance', 'Food & Wine'],
    region: 'Europe',
    priceLevel: 'High'
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps',
    country: 'Switzerland',
    description: 'Discover breathtaking mountain scenery, charming alpine villages, and world-class outdoor activities year-round.',
    image: 'https://images.unsplash.com/photo-1527237175823-c2e1ba93d4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.9,
    categories: ['Nature', 'Adventure', 'Luxury'],
    region: 'Europe',
    priceLevel: 'High'
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Find your balance in this tropical paradise offering spiritual retreats, lush rice terraces, and vibrant cultural experiences.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2138&q=80',
    rating: 4.7,
    categories: ['Beach', 'Culture', 'Wellness'],
    region: 'Asia',
    priceLevel: 'Low'
  },
  {
    id: 'new-york',
    name: 'New York City',
    country: 'United States',
    description: 'Dive into the energy of the city that never sleeps with its iconic skyline, diverse neighborhoods, and endless entertainment.',
    image: 'https://images.unsplash.com/photo-1496442226666-41ed5f3a6e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.7,
    categories: ['Urban', 'Food & Wine', 'Arts'],
    region: 'North America',
    priceLevel: 'High'
  },
  {
    id: 'amalfi-coast',
    name: 'Amalfi Coast',
    country: 'Italy',
    description: 'Wind along dramatic coastal roads, stay in clifftop villages, and savor the finest Italian cuisine and hospitality.',
    image: 'https://images.unsplash.com/photo-1559300214-2ec76083d34f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    rating: 4.8,
    categories: ['Scenery', 'Food & Wine', 'Romance'],
    region: 'Europe',
    priceLevel: 'High'
  },
  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    description: 'Experience a unique blend of stunning landscapes, vibrant culture, and world-class wineries at the tip of Africa.',
    image: 'https://images.unsplash.com/photo-1576485375217-d6a95e34d043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.7,
    categories: ['Nature', 'Adventure', 'Food & Wine'],
    region: 'Africa',
    priceLevel: 'Medium'
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    description: 'Discover a captivating blend of ultra-modern and traditional in this dynamic metropolis known for its innovation and efficiency.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    rating: 4.8,
    categories: ['Urban', 'Food', 'Technology'],
    region: 'Asia',
    priceLevel: 'Medium'
  },
  {
    id: 'queenstown',
    name: 'Queenstown',
    country: 'New Zealand',
    description: 'The adventure capital of the world offering breathtaking landscapes and adrenaline-pumping activities year-round.',
    image: 'https://images.unsplash.com/photo-1589196728426-41ed5f3a6e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
    rating: 4.9,
    categories: ['Adventure', 'Nature', 'Luxury'],
    region: 'Oceania',
    priceLevel: 'Medium'
  }
];

document.addEventListener('DOMContentLoaded', () => {
    // Beach recommendations
    const beachDestinations = allDestinations.filter(d => d.categories.includes('Beach'));
    renderRecommendations('beach-cards', beachDestinations.slice(0, 2));

    // Temple recommendations (focusing on cultural destinations in Japan)
    const templeDestinations = allDestinations.filter(d => 
        d.country === 'Japan' && d.categories.includes('Culture')
    );
    renderRecommendations('temple-cards', templeDestinations.slice(0, 2));

    // Country-specific recommendations (showing diverse destinations from Japan)
    const countryDestinations = allDestinations.filter(d => d.country === 'Japan');
    renderRecommendations('country-cards', countryDestinations.slice(0, 2));

    // Set up search functionality
    const searchInput = document.getElementById('search-input');
    const searchTextInput = document.getElementById('search-text');
    const openSearchBtn = document.getElementById('open-search-btn');
    const closeModalBtn = document.getElementById('close-modal');
    const modal = document.getElementById('search-modal');
    const applyFiltersBtn = document.getElementById('apply-filters');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const searchResults = document.getElementById('search-results');

    // Open modal when clicking search input or button
    function openModal() {
        modal.classList.add('active');
        searchTextInput.focus();
        // Copy main search input text to modal search input
        searchTextInput.value = searchInput.value;
    }

    searchInput.addEventListener('click', openModal);
    openSearchBtn.addEventListener('click', openModal);

    // Close modal when clicking close button or outside modal
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Clear all filters
    clearFiltersBtn.addEventListener('click', () => {
        document.getElementById('search-text').value = '';
        document.getElementById('region-filter').value = '';
        document.getElementById('price-filter').value = '';
        document.getElementById('category-filter').value = '';
    });

    // Apply filters and search
    applyFiltersBtn.addEventListener('click', () => {
        const searchText = searchTextInput.value.toLowerCase();
        const region = document.getElementById('region-filter').value;
        const price = document.getElementById('price-filter').value;
        const category = document.getElementById('category-filter').value;

        const filteredDestinations = allDestinations.filter(dest => {
            const matchesText = searchText === '' || 
                dest.name.toLowerCase().includes(searchText) || 
                dest.description.toLowerCase().includes(searchText) ||
                dest.country.toLowerCase().includes(searchText);
            const matchesRegion = !region || dest.region === region;
            const matchesPrice = !price || dest.priceLevel === price;
            const matchesCategory = !category || dest.categories.includes(category);
            
            return matchesText && matchesRegion && matchesPrice && matchesCategory;
        });

        if (filteredDestinations.length > 0) {
            searchResults.classList.remove('hidden');
            renderRecommendations('results-cards', filteredDestinations);
            modal.classList.remove('active');
            searchInput.value = searchText; // Update main search input
            searchResults.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('No destinations found matching your criteria. Please try different filters.');
        }
    });

    // Set up contact form submission
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});

function renderRecommendations(containerId, destinations) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing content
    
    destinations.forEach(dest => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${dest.image}" alt="${dest.name}">
            <div class="card-content">
                <h3>${dest.name}, ${dest.country}</h3>
                <p>${dest.description}</p>
                <div class="destination-details">
                    <p>Rating: ${dest.rating}/5</p>
                    <p>Price Level: ${dest.priceLevel}</p>
                    <p>Region: ${dest.region}</p>
                    <p>Categories: ${dest.categories.join(', ')}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
}