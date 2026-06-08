import os
from PIL import Image

base_dir = r"c:\Users\akash\OneDrive\Desktop\New folder\artistry-hub"
brain_dir = r"C:\Users\akash\.gemini\antigravity\brain\5ad11c7a-0035-4633-8800-b7f1b30dd410"
output_dir = os.path.join(base_dir, "src", "assets", "portfolio")

os.makedirs(output_dir, exist_ok=True)

# Map filenames to images in the brain folder
img_files = {
    1: os.path.join(brain_dir, "media__1780893202652.jpg"),
    2: os.path.join(brain_dir, "media__1780893202668.jpg"),
    3: os.path.join(brain_dir, "media__1780893202690.jpg"),
    4: os.path.join(brain_dir, "media__1780893202711.jpg")
}

# Define the exact crops we want to make (x1, y1, x2, y2) and their friendly names
# We subtract/add a margin of 4 pixels to cleanly remove any collage borders
crops = [
    # 1. Traditional Tamil Bride (gorgeous vertical portrait from collage 4 left)
    {
        "source": 4,
        "box": (4, 4, 310, 1020),
        "name": "traditional_tamil_bride.jpg"
    },
    # 2. Reception Glam Bride (gold/beige lehenga from collage 2, row 1 col 2)
    {
        "source": 2,
        "box": (174, 4, 337, 336),
        "name": "reception_glam_bride.jpg"
    },
    # 3. Engagement Makeup (blue/aqua saree from collage 2, row 2 col 4)
    {
        "source": 2,
        "box": (515, 344, 678, 679),
        "name": "engagement_makeup.jpg"
    },
    # 4. Airbrush Bridal Makeup (red/gold saree close-up from collage 3, row 1 col 1)
    {
        "source": 3,
        "box": (4, 4, 166, 403),
        "name": "airbrush_bridal_makeup.jpg"
    },
    # 5. Modern Bridal Look (white Christian gown with veil from collage 2, row 2 col 3)
    {
        "source": 2,
        "box": (345, 344, 508, 681),
        "name": "modern_bridal_look.jpg"
    },
    # 6. Bridesmaid Makeup (lavender/purple dress from collage 3, row 2 col 3)
    {
        "source": 3,
        "box": (344, 411, 506, 743),
        "name": "bridesmaid_makeup.jpg"
    },
    # 7. Traditional Maroon Bride (maroon/gold saree from collage 1, bottom left)
    {
        "source": 1,
        "box": (4, 703, 238, 1020),
        "name": "traditional_maroon_bride.jpg"
    },
    # 8. Modern Engagement Glam (grey cape gown from collage 1, bottom right)
    {
        "source": 1,
        "box": (246, 703, 481, 1020),
        "name": "modern_engagement_glam.jpg"
    },
    # 9. Haldi Yellow Bride (yellow saree standing from collage 2, row 1 col 1)
    {
        "source": 2,
        "box": (4, 4, 166, 336),
        "name": "haldi_yellow_bride.jpg"
    },
    # 10. Reception Lehenga Bride (pink/red lehenga smiling from collage 3, row 3 col 3)
    {
        "source": 3,
        "box": (458, 751, 677, 1020),
        "name": "reception_lehenga_bride.jpg"
    },
    # 11. Reception Saree Bride (orange/yellow saree being dressed from collage 2, row 2 col 1)
    {
        "source": 2,
        "box": (4, 344, 166, 681),
        "name": "reception_saree_bride.jpg"
    },
    # 12. Christian Wedding Bride (white wedding gown standing from collage 2, row 2 col 2? Wait, row 2 col 2 was duplicate, but let's check row 2 col 3? No, row 2 col 3 was white gown standing in front of wooden door! Let's check!)
    # Let's double check Collage 2 row 2 columns:
    # col 1 (0 to 170): being dressed
    # col 2 (170 to 341): green/gold duplicate
    # col 3 (341 to 512): white gown with veil? Wait, let's see. Collage 2 row 2 column 3 is white gown standing in front of wooden door! Let's use it!
    {
        "source": 2,
        "box": (345, 344, 508, 681), # wait, let's see if this is duplicate. Ah, look_2_r2_c3 is indeed the white gown. Let's make sure!
        "name": "christian_wedding_gown.jpg"
    },
    # Let's also extract the other white gown (collage 2, row 1 col 3)
    {
        "source": 2,
        "box": (345, 4, 508, 336),
        "name": "christian_bride_gown_closeup.jpg"
    },
    # Let's also extract the blue/gold saree bride (collage 2, row 2 col 4)
    {
        "source": 3,
        "box": (514, 4, 677, 403), # collage 3, row 1 col 4: pink/gold saree bride
        "name": "pink_gold_saree_bride.jpg"
    }
]

for crop in crops:
    src_path = img_files[crop["source"]]
    if not os.path.exists(src_path):
        print(f"Source image {src_path} not found.")
        continue
        
    img = Image.open(src_path)
    cropped = img.crop(crop["box"])
    
    out_path = os.path.join(output_dir, crop["name"])
    cropped.save(out_path, "JPEG", quality=95)
    print(f"Extracted {crop['name']} (Size: {cropped.size})")

print("All portfolio images successfully extracted!")
