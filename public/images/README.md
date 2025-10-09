# Images Folder Structure

## How to Add Team Photos

Place your team images in the `teams` folder with descriptive names:

### Recommended naming convention:
- `brazil-team.jpg`
- `usa-team.jpg`
- `italy-team.jpg`
- `poland-team.jpg`
- `russia-team.jpg`
- `serbia-team.jpg`

### Image Requirements:
- **Format**: JPG, PNG, or WebP
- **Recommended size**: 400x300px (for optimal loading)
- **Maximum size**: 2MB per image
- **Aspect ratio**: 4:3 recommended

## How to Add Player Photos

Place your player images in the `players` folder:

### Recommended naming convention:
- `wilfredo-leon.jpg`
- `giba.jpg`
- `earvin-ngapeth.jpg`
- `matthew-anderson.jpg`
- `bruno-rezende.jpg`
- `ivan-zaytsev.jpg`

### Image Requirements:
- **Format**: JPG, PNG, or WebP
- **Recommended size**: 400x400px (square)
- **Maximum size**: 2MB per image
- **Aspect ratio**: 1:1 (square) recommended

## How to Use in Code

To use these images in your React components:

```javascript
// For Teams page
<img src="/images/teams/brazil-team.jpg" alt="Brazil Team" />

// For Players page
<img src="/images/players/wilfredo-leon.jpg" alt="Wilfredo León" />
```

Or update the image URLs in the data arrays:

### Teams.js
```javascript
image: '/images/teams/brazil-team.jpg'
```

### Players.js
```javascript
image: '/images/players/wilfredo-leon.jpg'
```

## Current Setup

The site currently uses Unsplash placeholder images. To use your own images:

1. Add your photos to the appropriate folder
2. Update the `image` property in the data arrays in:
   - `src/pages/Teams.js`
   - `src/pages/Players.js`
3. Change from Unsplash URL to local path: `/images/teams/your-image.jpg`

## Tips for Best Quality

- Use high-resolution images
- Compress images before uploading (use tools like TinyPNG)
- Use WebP format for better performance
- Ensure proper lighting and focus in photos
- Use consistent dimensions for a uniform look
