// Map image alt numbers to text prompts
const prompts = {
  1: "Create a 1/7 scale commercialized figurine of (the character in the picture) , realistic style, in a real environment. Figurine placed on a computer desk. has a round transparent acrylic base. Next to the desk is the real person in the picture, in the real life size with the same attire as in the picture and the figurine, cleaning the figurine carefully with a fine brush. in a modern styled studio room, brightly lit. With some collection of toys and action figures in the background.",
  2: "Create a 1/7 scale commercialized figurine of (the character in the picture) , realistic style, in a real environment. Figurine placed on a computer desk. has a round transparent acrylic base. Next to the desk is the real person in the picture, in the real life size with the same attire as in the picture and the figurine, cleaning the figurine carefully with a fine brush. in a modern styled studio room, brightly lit. With some collection of toys and action figures in the background.",
  3: "A hyper-realistic cinematic DSLR wide shot for a high-fashion magazine cover, captured against a seamless infinity charcoal gray studio background matching the outfit. The subject is a confident style icon, standing bold with swagger — one hand holding a sleek futuristic metallic prop near the hip, the other brushing through the hair, exuding fierce attitude with a direct gaze.",
  4: "Generate a 4k DSLR Photography of A distinguished man(same person in image and exactly same facial feature) reclines confidently on a wicker sofa in an open, garden-side patio, framed by lush greenery and soft-focus flowering plants in the background, giving the scene a calm, upscale resort ambiance. He wears a crisp black shirt paired with a flowing black veshti or dhoti finished with a subtle gold border the fabric draping smoothly across his legs and pooling neatly near his",
  5: "Generate a 4k DSLR Photography of A distinguished man(same person in image and exactly same facial feature) reclines confidently on a wicker sofa in an open, garden-side patio, framed by lush greenery and soft-focus flowering plants in the background, giving the scene a calm, upscale resort ambiance. He wears a crisp black shirt paired with a flowing black veshti or dhoti finished with a subtle gold border the fabric draping smoothly across his legs and pooling neatly near his",
  6: "An emotionally charged cinematic portrait of a me with my given image, head slightly bowed, dressed in a simple white tops and trousers. A warm amber beam isolates her from the dark void, gently illuminating her hair to capture a mood of deep solitude.",
  7: "An emotionally charged cinematic portrait of a me with my given image, head slightly bowed, dressed in a simple white tops and trousers. A warm amber beam isolates her from the dark void, gently illuminating her hair to capture a mood of deep solitude.",
  8: "An emotionally charged cinematic portrait of a me with my given image, head slightly bowed, dressed in a simple white tops and trousers. A warm amber beam isolates her from the dark void, gently illuminating her hair to capture a mood of deep solitude.",
  9: "Hyper-realistic cinematic portrait on a deep burgundy backdrop. Maroon velvet blazer, black silk shirt, slim trousers. Leaning on elegant chair, one arm draped, confident gaze. Rich waves with highlights. Golden spotlight, dramatic shadows, ultra-detailed fabrics, skin tones, luxury editorial vibe. 85mm lens, 9:16 Instagram style.",
  10: "Edit my photo use it as a reference and create An image Amazing hairstyle, beard and sunglasses, dressed in a black and he is seated in the open back of a sleek black SUV. The composition is a medium shot, emphasizing his relaxed posture and fashionable attire. The background features a blurred forest, suggesting an outdoor setting. Soft, diffused daylight illuminates the scene, casting subtle shadows and enhancing the overall aesthetic.",
  11: "To take this boy me(use my image for refrence with accurate face)photo reference and generate image effectively and cinematic look he have skinny personality he is wearing un button lite colour pink shirt and and cream colour cargo pant and he wearing watch small silver chain his neck he slidely sitting on a boat and giving best pose the boat in a river the river Full of Lotus flowers and he using headset and enjoying music to little closed eyes to seeing the sky.",
  12: "My face details, beard, eyes, and lips are exactly the same as they are in real life.A stylish man standing outdoors in a European street setting, wearing a crisp white shirt with the sleeves rolled up, black trousers, sunglasses, and a casual sweater draped over his shoulders. He is leaning casually on a railing, exuding confidence and charm. The scene has warm natural sunlight, cinematic tones, and luxury lifestyle aesthetics, shot in high resolution fashion photography style.",
  13: "Create a surreal vertical portrait of the person (use uploaded face). Keep the main face sharp in the center. Add blurred, semi-transparent copies of the face and upper body fading out on both sides to show motion or shifting identity.Background should be soft light blue or grey. Dress the person in a dark, streetwear outfit and headphones on with comma hair style. Use dramatic lighting on the face.Mood: cinematic, moody, and mysterious. 8k resolution.",
  14: "A man standing in the middle of acrowd (same as given image), surrounded by people with their backs turned. The central figure looking over his shoulder with a serious, intense expression, wearing and a black sh He is holding his right ind finger up to his lips in a 'shhh' gesture. His hairst is slightlyThe crowd around him is dressed similarly in black shirts with white piping on the collar, heads slightly bowed or turned away.",
  15: "Cinematic fashion portrait; standing half-body slightly tilted to the left, head slightly raised, hair gently flying, eyes looking straight ahead confidently locked 1:1; white shirt with the top button open + black tie loosened; bright blue sky background, natural daylight, modern magazine tone; cover text “Beautiful Boy”; vibrant natural colors; 50 mm f/2.8 medium DOF; —ar 2:3 —style raw —v 6",
  16: "Hyper-realistic cinematic portrait on a deep burgundy backdrop. Maroon velvet blazer, black silk shirt, slim trousers. Leaning on elegant chair, one arm draped, confident gaze. Rich waves with highlights. Golden spotlight, dramatic shadows, ultra-detailed fabrics, skin tones, luxury editorial vibe. 85mm lens, 9:16 Instagram style.",
  17: "Create a vintage 1970s Bollywood-inspired photograph of a stylish men sitting casually on the hood of a classic car. he is dressed in a cream pinstriped blazer, cream bell-bottom trousers, & a dark brown shirt with the top buttons open, paired with brown formal shoes, giving a confident mafia-style look. The car has wide whitewall tires, chrome details, & a polished metallic body, reflecting sunlight. In the background, tall green trees and hedges frame the scene. The photograph has the warm",
  18: "Please create a vertical potrait resolution 9:16 format using the exact same face features, characterized by stark cinematic lighting and intense contrast with a diagonal light hits half of the face making the other eye brown. Half body shot sitting with both arms touching the floor in a slanted position with a huge and adult dark maine coon cat curling on my other shoulder. Captured in a slightly low, Upward-facing angle looking at the corner that dramatized the subject’s sharp jawline. and nec",
  19:""
};


const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const img = card.querySelector("img");
  const back = card.querySelector(".card-back p");
  const alt = img.getAttribute("alt");
  const cardBack = card.querySelector(".card-back");

  // Set the back background to the same image
  cardBack.style.setProperty("--bg-img", `url(${img.src})`);
  cardBack.style.backgroundImage = `url(${img.src})`; // fallback

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    back.textContent = prompts[alt] || "No prompt available for this image.";
  });

  // Update blurred background
  cardBack.querySelector("::before");
  cardBack.style.setProperty("--bg-img", `url(${img.src})`);
});




const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent flip when clicking copy
    const cardBack = btn.closest(".card-back");
    const text = cardBack.querySelector("p").textContent;

    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = "✅ Copied!";
      setTimeout(() => btn.textContent = "📋 Copy", 1500);
    });
  });
});
