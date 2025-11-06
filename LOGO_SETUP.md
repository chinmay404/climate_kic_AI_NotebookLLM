# Climate KIC Logo Setup Instructions

## Step 1: Save the Climate KIC Logo Image

You need to save the Climate KIC logo image from your attachment to the web/public folder:

```bash
# Navigate to the web/public directory
cd /home/sirius/code/1_office/onyx/web/public

# Save your Climate KIC logo image as:
# climate-kic-logo.png (this is the filename referenced in the code)

# You can use one of these methods:

# Method 1: If you have the image file already
cp /path/to/your/climate-kic-logo.png ./climate-kic-logo.png

# Method 2: Download from a URL if hosted
wget https://your-url.com/climate-kic-logo.png -O climate-kic-logo.png

# Method 3: Use the image from your attachment
# Save the image you showed me as "climate-kic-logo.png" in this directory
```

## Step 2: Optional - Create Different Sizes

For best results, you may want to create different sizes:

```bash
# If you have ImageMagick installed:
convert climate-kic-logo.png -resize 24x24 climate-kic-logo-small.png
convert climate-kic-logo.png -resize 96x96 climate-kic-logo-large.png
```

## Step 3: Update Favicon

Replace the old onyx.ico with a Climate KIC favicon:

```bash
cd /home/sirius/code/1_office/onyx/web/public

# Backup the old icon
mv onyx.ico onyx.ico.backup

# Create/copy your new favicon
# You can use a PNG and rename it, or create a proper .ico file
cp climate-kic-logo.png onyx.ico
# Or use an online converter to create a proper .ico file
```

## Step 4: Verify the Changes

After adding the logo image, restart the development server:

```bash
cd /home/sirius/code/1_office/onyx/web
npm run dev
```

Then check:
- The sidebar logo (top left)
- The login page logo
- The favicon in your browser tab

## What Was Changed

### Files Modified:
1. **web/src/components/logo/Logo.tsx** - Main logo component
   - Now uses `/climate-kic-logo.png` instead of OnyxIcon
   - Removed reference to old onyx icon

2. **web/src/refresh-components/Logo.tsx** - Sidebar logo component
   - Uses `/climate-kic-logo.png` as default
   - **REMOVED** "Powered by Onyx" text
   - Shows "Climate KIC" text next to logo

### Logo Locations in the UI:
- **Sidebar** (top left corner) - ✅ Updated
- **Login page** - ✅ Updated
- **Loading screen** - ✅ Updated
- **Error pages** - ✅ Updated

## Troubleshooting

If the logo doesn't appear:

1. Check file permissions:
```bash
chmod 644 /home/sirius/code/1_office/onyx/web/public/climate-kic-logo.png
```

2. Clear browser cache:
   - Press Ctrl+Shift+R (Linux/Windows) or Cmd+Shift+R (Mac)

3. Check browser console for 404 errors

4. Verify the image file exists:
```bash
ls -lh /home/sirius/code/1_office/onyx/web/public/climate-kic-logo.png
```

## Current Status

✅ Code updated to use Climate KIC logo
✅ "Powered by Onyx" text removed from sidebar
✅ Default text changed to "Climate KIC"
⚠️ **ACTION NEEDED**: You need to save the actual Climate KIC logo image as `climate-kic-logo.png`

The logo image from your attachment should be saved to:
`/home/sirius/code/1_office/onyx/web/public/climate-kic-logo.png`
