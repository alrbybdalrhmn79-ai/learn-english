// Shot Maker JavaScript Tools

// Hashtag Generator
function generateHashtags() {
    const input = document.getElementById('hashtag-input').value.trim();
    const output = document.getElementById('hashtag-output');

    if (!input) {
        output.innerHTML = '<p style="color: #dc3545;">Please enter a topic first!</p>';
        return;
    }

    // Predefined hashtag categories
    const hashtagCategories = {
        travel: ['#Travel', '#Adventure', '#Wanderlust', '#Explore', '#Vacation', '#TravelGram', '#Nature', '#Photography', '#Tourism'],
        food: ['#Foodie', '#Food', '#Cooking', '#Recipe', '#Yummy', '#Delicious', '#FoodLover', '#Chef', '#Eat'],
        tech: ['#Tech', '#Technology', '#Gadgets', '#Innovation', '#Coding', '#Programming', '#AI', '#Future', '#Digital'],
        fitness: ['#Fitness', '#Workout', '#Health', '#Gym', '#Exercise', '#Healthy', '#Motivation', '#Strength', '#Wellness'],
        gaming: ['#Gaming', '#Gamer', '#Game', '#PlayStation', '#Xbox', '#Nintendo', '#Esports', '#GamingCommunity', '#VideoGames'],
        fashion: ['#Fashion', '#Style', '#Outfit', '#Beauty', '#Model', '#Designer', '#Trendy', '#FashionNova', '#Clothing'],
        business: ['#Business', '#Entrepreneur', '#Success', '#Marketing', '#Money', '#Finance', '#Startup', '#CEO', '#Leadership'],
        art: ['#Art', '#Artist', '#Creative', '#Design', '#Drawing', '#Painting', '#DigitalArt', '#Illustration', '#Artwork'],
        music: ['#Music', '#Musician', '#Song', '#Singer', '#Band', '#Playlist', '#Concert', '#SoundCloud', '#Spotify'],
        photography: ['#Photography', '#Photo', '#Camera', '#PhotoOfTheDay', '#Instagram', '#Canon', '#Nikon', '#PhotoShoot', '#Landscape']
    };

    // Find matching category or use general hashtags
    let hashtags = [];
    const lowerInput = input.toLowerCase();

    for (const [category, tags] of Object.entries(hashtagCategories)) {
        if (lowerInput.includes(category)) {
            hashtags = tags;
            break;
        }
    }

    // If no category match, use general hashtags
    if (hashtags.length === 0) {
        hashtags = ['#ContentCreator', '#YouTube', '#Viral', '#Trending', '#SocialMedia', '#Content', '#Creator', '#DigitalContent', '#Online'];
    }

    // Shuffle and select random hashtags
    const shuffled = hashtags.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 8);

    output.innerHTML = `
        <p><strong>Generated hashtags for "${input}":</strong></p>
        <p style="background: #e9ecef; padding: 10px; border-radius: 5px; font-family: monospace;">${selected.join(' ')}</p>
        <button onclick="copyToClipboard('${selected.join(' ')}')" style="margin-top: 10px; background: #28a745; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">Copy Hashtags</button>
    `;
}

// Title Ideas Generator
function generateTitles() {
    const input = document.getElementById('title-input').value.trim();
    const output = document.getElementById('title-output');

    if (!input) {
        output.innerHTML = '<p style="color: #dc3545;">Please enter a video topic first!</p>';
        return;
    }

    // Title templates
    const titleTemplates = [
        `The Ultimate Guide to ${input}`,
        `${input}: What You Need to Know`,
        `Top 10 ${input} Tips & Tricks`,
        `How to Master ${input} in 2024`,
        `${input} Secrets Revealed`,
        `Beginner's Guide to ${input}`,
        `Why ${input} is Changing Everything`,
        `${input}: Myths vs Reality`,
        `The Truth About ${input}`,
        `${input} Hacks You Need to Try`,
        `Master ${input} Like a Pro`,
        `${input} Made Simple`,
        `Everything You Need to Know About ${input}`,
        `${input}: The Complete Tutorial`,
        `Avoid These ${input} Mistakes`
    ];

    // Shuffle and select 5 random titles
    const shuffled = titleTemplates.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    let html = `<p><strong>Title ideas for "${input}":</strong></p><ul style="text-align: left;">`;
    selected.forEach(title => {
        html += `<li style="margin-bottom: 8px;">${title}</li>`;
    });
    html += '</ul>';

    output.innerHTML = html;
}

// Keyword Finder
function findKeywords() {
    const input = document.getElementById('keyword-input').value.trim();
    const output = document.getElementById('keyword-output');

    if (!input) {
        output.innerHTML = '<p style="color: #dc3545;">Please enter a niche first!</p>';
        return;
    }

    // Predefined keywords by niche
    const keywordDatabase = {
        cooking: [
            'easy recipes', 'quick meals', 'healthy cooking', 'baking tips', 'kitchen hacks',
            'meal prep', 'cooking tutorials', 'food recipes', 'cooking techniques', 'chef tips'
        ],
        gaming: [
            'game reviews', 'gaming tips', 'game walkthrough', 'gaming news', 'esports',
            'game strategies', 'gaming community', 'video game reviews', 'gaming tutorials', 'game guides'
        ],
        tech: [
            'technology news', 'gadgets review', 'tech tutorials', 'programming tips', 'coding',
            'software reviews', 'tech hacks', 'digital tools', 'tech news', 'programming languages'
        ],
        fitness: [
            'workout routines', 'fitness tips', 'exercise guides', 'healthy lifestyle', 'gym workouts',
            'home workouts', 'fitness motivation', 'strength training', 'cardio exercises', 'fitness nutrition'
        ],
        business: [
            'business tips', 'entrepreneurship', 'startup advice', 'business strategies', 'marketing',
            'business growth', 'small business', 'business management', 'entrepreneur success', 'business ideas'
        ],
        travel: [
            'travel tips', 'travel destinations', 'travel guides', 'budget travel', 'travel photography',
            'adventure travel', 'travel planning', 'vacation ideas', 'travel hacks', 'wanderlust'
        ],
        fashion: [
            'fashion tips', 'style guides', 'outfit ideas', 'fashion trends', 'beauty tips',
            'fashion styling', 'wardrobe essentials', 'fashion advice', 'style inspiration', 'beauty hacks'
        ],
        education: [
            'study tips', 'learning methods', 'online courses', 'educational content', 'study hacks',
            'learning techniques', 'educational videos', 'study motivation', 'academic success', 'learning skills'
        ]
    };

    // Find matching niche or use general keywords
    let keywords = [];
    const lowerInput = input.toLowerCase();

    for (const [niche, words] of Object.entries(keywordDatabase)) {
        if (lowerInput.includes(niche)) {
            keywords = words;
            break;
        }
    }

    // If no niche match, use general keywords
    if (keywords.length === 0) {
        keywords = [
            'how to', 'tips and tricks', 'beginners guide', 'tutorial', 'ultimate guide',
            'top 10', 'secrets revealed', 'made simple', 'complete guide', 'master class'
        ];
    }

    // Shuffle and select random keywords
    const shuffled = keywords.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);

    let html = `<p><strong>Popular keywords for "${input}":</strong></p><div style="display: flex; flex-wrap: wrap; gap: 8px;">`;
    selected.forEach(keyword => {
        html += `<span style="background: #e9ecef; padding: 5px 10px; border-radius: 15px; font-size: 0.9em;">${keyword}</span>`;
    });
    html += '</div>';

    output.innerHTML = html;
}

// Content Planner Download
function downloadTemplate() {
    // In a real application, this would download an actual PDF
    // For now, we'll show a message
    alert('Content Planner Template Download\n\nThis would normally download a PDF template.\n\nIn the future, you can:\n1. Create a PDF template\n2. Host it on your server\n3. Link to the download URL');

    // Alternative: Open a new tab with planning template content
    const templateContent = `
Content Planning Template
========================

Week: ________

Goals for this week:
- 

Content Ideas:
1. 
2. 
3. 
4. 
5. 

Posting Schedule:
Monday: 
Tuesday: 
Wednesday: 
Thursday: 
Friday: 
Saturday: 
Sunday: 

Notes:
`;

    const blob = new Blob([templateContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content-planner-template.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Utility function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Hashtags copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Hashtags copied to clipboard!');
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
