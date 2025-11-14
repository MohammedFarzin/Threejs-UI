# ASSET GUIDE - How to Add 3D Models & Images

This guide shows you exactly how to download and add real jewelry 3D models and photos to your hybrid showcase.

---

## 📦 OPTION 1: Download 3D Models (GLTF/GLB)

### Best Free Sources

#### 1. **Sketchfab** (Recommended - Best Quality)
🔗 https://sketchfab.com/

**Step-by-Step:**
1. Go to Sketchfab.com
2. Search: "diamond ring" or "jewelry" or "necklace"
3. Click **Filters** on the left
4. Check ✅ **Downloadable**
5. Browse results and click on a model you like
6. Click **Download 3D Model** button
7. Choose format: **glTF (.gltf/.glb)** ✅ (NOT .obj or .fbx)
8. Download will be a .zip file
9. Extract and find the `.glb` or `.gltf` file

**Recommended Searches:**
- "diamond ring downloadable"
- "gold necklace downloadable"
- "jewelry downloadable"
- "gemstone downloadable"
- "wedding ring downloadable"

**Example Models:**
- https://sketchfab.com/3d-models/diamond-ring-f3a0d9c7b8a44f0fb6f3f4c5e4d1c3a9
- https://sketchfab.com/3d-models/gold-necklace-a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
- Search "gemstone" for individual gems

#### 2. **CGTrader**
🔗 https://www.cgtrader.com/free-3d-models

**Free Jewelry Models:**
- Filter by: **Free** and **Jewelry**
- Download as **GLTF 2.0**

#### 3. **TurboSquid**
🔗 https://www.turbosquid.com/Search/3D-Models/free/jewelry

**Free Section:**
- Filter: **Free** + **Jewelry**
- Download format: **GLTF**

#### 4. **Poly Haven** (Limited Jewelry)
🔗 https://polyhaven.com/models

**Alternative for generic objects**

---

## 🖼️ OPTION 2: Use Real Jewelry Photos

### Best Free Photo Sources

#### 1. **Unsplash**
🔗 https://unsplash.com/s/photos/jewelry

**Step-by-Step:**
1. Search: "diamond ring", "gold necklace", "jewelry"
2. Click on photo you like
3. Click **Download free** button
4. Save as `.jpg` or `.png`

**Recommended Searches:**
- "luxury jewelry"
- "diamond ring"
- "gold necklace"
- "pearl earrings"
- "jewelry white background" (best for clean look)

#### 2. **Pexels**
🔗 https://www.pexels.com/search/jewelry/

**High-quality free photos**
- Search similar terms as Unsplash
- Download high-res versions

#### 3. **Pixabay**
🔗 https://pixabay.com/images/search/jewelry/

**Free to use**

#### 4. **Remove Background (Make PNG)**
If your image has a background, use:
- 🔗 https://remove.bg (free, automatic background removal)
- Upload your jewelry photo
- Download as PNG with transparent background

---

## 📁 FILE STRUCTURE SETUP

Create these folders in your project:

```
Threejs-UI/
├── hybrid-jewelry-showcase.html
├── models/                    ← Create this folder
│   ├── ring.glb              ← Your downloaded 3D models
│   ├── necklace.glb
│   ├── earrings.glb
│   └── emerald-ring.glb
├── images/                    ← Create this folder
│   ├── necklace.png          ← Your jewelry photos (PNG with transparent bg)
│   ├── bracelet.png
│   └── ruby-necklace.png
└── textures/                  ← Optional
    └── hdri/
        └── studio.hdr
```

---

## 🔧 HOW TO ADD YOUR MODELS/IMAGES

### Adding 3D Models

1. **Download model** from Sketchfab (as .glb)
2. **Rename** to match config:
   - `ring.glb` for diamond ring
   - `earrings.glb` for sapphire earrings
   - `emerald-ring.glb` for emerald ring

3. **Place in `models/` folder**

4. **The code automatically loads it!** No code changes needed.

**File naming:**
```javascript
// In the HTML, these names are used:
{ name: 'ring' }          → looks for models/ring.glb
{ name: 'earrings' }      → looks for models/earrings.glb
{ name: 'emerald-ring' }  → looks for models/emerald-ring.glb
```

### Adding Images

1. **Download photo** from Unsplash/Pexels
2. **Remove background** at remove.bg (if needed)
3. **Save as PNG** with transparent background
4. **Rename** to match config:
   - `necklace.png` for gold necklace
   - `bracelet.png` for pearl bracelet
   - `ruby-necklace.png` for ruby necklace

5. **Place in `images/` folder**

6. **The code automatically loads it!**

**File naming:**
```javascript
// In the HTML, these names are used:
{ name: 'necklace' }      → looks for images/necklace.png
{ name: 'bracelet' }      → looks for images/bracelet.png
{ name: 'ruby-necklace' } → looks for images/ruby-necklace.png
```

---

## ✅ QUICK START (5 Minutes)

### For Testing/Demo:

**Option A: Just run the HTML**
- The code has **built-in fallbacks**
- If models/images not found, it shows placeholders
- You'll see geometric shapes and placeholder images

**Option B: Add 1-2 models to test**
1. Go to Sketchfab
2. Search "diamond ring downloadable"
3. Download as GLB
4. Create `models/` folder
5. Rename to `ring.glb`
6. Refresh page → See real model!

**Option C: Add 1-2 photos**
1. Go to Unsplash
2. Search "gold necklace"
3. Download photo
4. Go to remove.bg → remove background
5. Save as `necklace.png` in `images/` folder
6. Refresh page → See real photo!

---

## 🎨 CUSTOMIZATION TIPS

### Adjusting 3D Model Size

If model is too big/small, edit the scale:

```javascript
// Find this in the code:
jewelry.scale.set(2, 2, 2);

// Change to:
jewelry.scale.set(1, 1, 1);    // Smaller
jewelry.scale.set(5, 5, 5);    // Bigger
```

### Adjusting Image Size

```javascript
// Find this:
const geometry = new THREE.PlaneGeometry(5, 5);

// Change to:
const geometry = new THREE.PlaneGeometry(8, 8);  // Bigger
const geometry = new THREE.PlaneGeometry(3, 3);  // Smaller
```

### Changing Positions

Edit `jewelryConfig` in the HTML:

```javascript
const jewelryConfig = [
    { pos: { x: 5, y: 2, z: -5 }, type: '3d', name: 'ring' },
    //         ↑    ↑    ↑
    //      left/  up/  forward/
    //      right  down backward
];
```

---

## 💡 RECOMMENDED MODELS TO DOWNLOAD

### For Diamond Ring (ring.glb):
Search Sketchfab: **"diamond engagement ring"**
- Look for: Platinum or white gold setting
- Check polygon count: < 50k triangles

### For Earrings (earrings.glb):
Search Sketchfab: **"diamond earrings"** or **"drop earrings"**

### For Emerald Ring (emerald-ring.glb):
Search Sketchfab: **"emerald ring"** or **"gemstone ring"**

---

## 🖼️ RECOMMENDED PHOTOS TO DOWNLOAD

### For Necklace (necklace.png):
Unsplash search: **"gold necklace white background"**
- Best: Clean product shots with no background

### For Bracelet (bracelet.png):
Unsplash search: **"pearl bracelet"** or **"diamond bracelet"**

### For Ruby Necklace (ruby-necklace.png):
Unsplash search: **"luxury necklace"** or **"red gemstone necklace"**

---

## 🚀 ADVANCED: Optimize Your Assets

### 3D Models:
**Reduce file size:**
1. Use **glTF** with **Draco compression** (the code supports it automatically)
2. Recommended size: 500KB - 2MB per model
3. Too big? Use online tool: https://gltf.report/ to compress

**Check model:**
- Use viewer: https://gltf-viewer.donmccurdy.com/
- Upload your .glb file
- Check if it looks good before adding

### Images:
**Optimize photos:**
1. Use **PNG** with transparency (not JPG)
2. Recommended size: 1024x1024px or 2048x2048px
3. Compress: Use https://tinypng.com/
4. Target: < 500KB per image

---

## 🎯 EXAMPLE WORKFLOW

**Let's add a real diamond ring:**

1. **Go to Sketchfab**
   - https://sketchfab.com/
   - Search: "diamond ring downloadable"

2. **Find good model**
   - Example: https://sketchfab.com/3d-models/diamond-ring-f3b4c...
   - Click "Download 3D Model"
   - Select: "glTF Binary (.glb)"
   - Download

3. **Extract and rename**
   - Extract .zip file
   - Find the `.glb` file
   - Rename to: `ring.glb`

4. **Add to project**
   ```bash
   # Create models folder (if not exists)
   mkdir models

   # Move file
   mv ~/Downloads/ring.glb ./models/ring.glb
   ```

5. **Refresh page** → See real ring! 💍

---

## ❓ TROUBLESHOOTING

### Model not showing?
- ✅ Check file name matches exactly (case-sensitive)
- ✅ Check file is in `models/` folder
- ✅ Check browser console (F12) for errors
- ✅ Make sure file is `.glb` not `.gltf` + textures

### Image not showing?
- ✅ Check file is PNG with transparent background
- ✅ Check file name matches exactly
- ✅ Check file is in `images/` folder
- ✅ Make sure image isn't corrupted

### Model too big/small?
- Adjust `scale.set(2, 2, 2)` in code

### Image looks pixelated?
- Use higher resolution image (2048x2048)
- Download original size from Unsplash

---

## 📚 ADDITIONAL RESOURCES

**3D Model Formats:**
- ✅ **GLB** (recommended) - Single file, includes textures
- ✅ **GLTF** - Multiple files, need to include textures
- ❌ OBJ - Not recommended (no PBR materials)
- ❌ FBX - Not supported by web

**Learning Resources:**
- Three.js Docs: https://threejs.org/docs/
- GLTF Tutorial: https://www.khronos.org/gltf/
- Draco Compression: https://google.github.io/draco/

**Free Asset Libraries:**
- Sketchfab: https://sketchfab.com/
- Unsplash: https://unsplash.com/
- Pexels: https://pexels.com/
- Remove.bg: https://remove.bg/

---

## 🎉 YOU'RE READY!

The hybrid showcase will:
- ✅ Load 3D models if available
- ✅ Load images if available
- ✅ Show placeholders if files not found
- ✅ Work perfectly with or without assets

Start with 1-2 items and expand your collection! 💎✨
