// List of font styles and their Unicode mappings (50+ styles, including emoji and fun transformations)
const fontStyles = [
    { label: 'Bold', map: (str) => mapUnicode(str, 0x1D400, 0x1D41A) },
    { label: 'Italic', map: (str) => mapUnicode(str, 0x1D434, 0x1D44E) },
    { label: 'Bold Italic', map: (str) => mapUnicode(str, 0x1D468, 0x1D482) },
    { label: 'Script', map: (str) => mapUnicode(str, 0x1D49C, 0x1D4B6) },
    { label: 'Script Bold', map: (str) => mapUnicode(str, 0x1D4D0, 0x1D4EA) },
    { label: 'Fraktur', map: (str) => mapUnicode(str, 0x1D504, 0x1D51E) },
    { label: 'Fraktur Bold', map: (str) => mapUnicode(str, 0x1D56C, 0x1D586) },
    { label: 'Double-struck', map: (str) => mapUnicode(str, 0x1D538, 0x1D552) },
    { label: 'Monospace', map: (str) => mapUnicode(str, 0x1D670, 0x1D68A) },
    { label: 'Sans Bold', map: (str) => mapUnicode(str, 0x1D5D4, 0x1D5EE) },
    { label: 'Sans Italic', map: (str) => mapUnicode(str, 0x1D608, 0x1D622) },
    { label: 'Sans Bold Italic', map: (str) => mapUnicode(str, 0x1D63C, 0x1D656) },
    { label: 'Small Caps', map: smallCaps },
    { label: 'Fullwidth', map: fullwidth },
    { label: 'Circled', map: circled },
    { label: 'Circled (Filled)', map: circledFilled },
    { label: 'Squared', map: squared },
    { label: 'Squared (Filled)', map: squaredFilled },
    { label: 'Parenthesized', map: parenthesized },
    { label: 'Superscript', map: superscript },
    { label: 'Subscript', map: subscript },
    { label: 'Leet Speak', map: leet },
    { label: 'Reversed', map: (str) => str.split('').reverse().join('') },
    { label: 'Upside Down', map: upsideDown },
    { label: 'Mirrored', map: mirrored },
    { label: 'Zalgo', map: zalgo },
    { label: 'Bubble', map: bubble },
    { label: 'Bubble (Filled)', map: bubbleFilled },
    { label: 'Tiny', map: tiny },
    { label: 'Wide', map: wide },
    { label: 'Strike', map: strike },
    { label: 'Underline', map: underline },
    { label: 'Emoji Regional', map: regionalIndicator },
    { label: 'Emoji Block', map: emojiBlock },
    { label: 'Emoji Hearts', map: (str) => emojiDecorate(str, '❤️') },
    { label: 'Emoji Sparkles', map: (str) => emojiDecorate(str, '✨') },
    { label: 'Emoji Stars', map: (str) => emojiDecorate(str, '⭐') },
    { label: 'Emoji Fire', map: (str) => emojiDecorate(str, '🔥') },
    { label: 'Emoji Flowers', map: (str) => emojiDecorate(str, '🌸') },
    { label: 'Emoji Party', map: (str) => emojiDecorate(str, '🎉') },
    { label: 'Emoji Cool', map: (str) => emojiDecorate(str, '😎') },
    { label: 'Emoji Sunglasses', map: (str) => emojiDecorate(str, '🕶️') },
    { label: 'Emoji Rainbow', map: (str) => emojiDecorate(str, '🌈') },
    { label: 'Emoji Ghost', map: (str) => emojiDecorate(str, '👻') },
    { label: 'Emoji Cat', map: (str) => emojiDecorate(str, '🐱') },
    { label: 'Emoji Unicorn', map: (str) => emojiDecorate(str, '🦄') },
    { label: 'Emoji Alien', map: (str) => emojiDecorate(str, '👽') },
    { label: 'Emoji Music', map: (str) => emojiDecorate(str, '🎵') },
    { label: 'Emoji Rocket', map: (str) => emojiDecorate(str, '🚀') },
    { label: 'Emoji Lightning', map: (str) => emojiDecorate(str, '⚡') },
    { label: 'Emoji Moon', map: (str) => emojiDecorate(str, '🌙') },
    { label: 'Emoji Sun', map: (str) => emojiDecorate(str, '☀️') },
    { label: 'Emoji Coffee', map: (str) => emojiDecorate(str, '☕') },
    { label: 'Emoji Star Eyes', map: (str) => emojiDecorate(str, '🤩') },
    { label: 'Emoji Laugh', map: (str) => emojiDecorate(str, '😂') },
    { label: 'Emoji Wink', map: (str) => emojiDecorate(str, '😉') },
    { label: 'Emoji Thumbs Up', map: (str) => emojiDecorate(str, '👍') },
    { label: 'Emoji Flex', map: (str) => emojiDecorate(str, '💪') },
    { label: 'Emoji Money', map: (str) => emojiDecorate(str, '💸') },
    { label: 'Emoji 100', map: (str) => emojiDecorate(str, '💯') },
    { label: 'Emoji Eyes', map: (str) => emojiDecorate(str, '👀') },
    { label: 'Emoji Alien Monster', map: (str) => emojiDecorate(str, '👾') },
    { label: 'Emoji Skull', map: (str) => emojiDecorate(str, '💀') },
    { label: 'Emoji Mix', map: emojiMix },
];

// Decorate each letter with a different emoji in sequence
function emojiMix(str) {
    const emojis = [
        '🔥','🌈','✨','💎','🎉','🦄','🥳','😎','💖','🍀','🌟','🎵','🍕','🌸','🤩','👑','🦋','💯','🥇','🍉','🍩','🚀','🍔','🌙','🧡','💚','💙','💜','🧁','🍦','🌺','🍓','🍒','🍊','🍋','🍌','🍍','🥝','🍇','🍫','🍪','🧁','🍰','🎂','🍿','🍭','🍬','🍡','🍢','🍣','🍤'
    ];
    let i = 0;
    return str.split('').map(c => /[a-zA-Z0-9]/.test(c) ? emojis[(i++)%emojis.length] + c + emojis[i%emojis.length] : c).join('');
}


// --- FONT STYLE MAPPERS ---
function mapUnicode(str, upperStart, lowerStart) {
    return Array.from(str).map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCodePoint(upperStart + (code - 65));
        } else if (code >= 97 && code <= 122) {
            return String.fromCodePoint(lowerStart + (code - 97));
        } else {
            return char;
        }
    }).join('');
}

function smallCaps(str) {
    // Unicode Small Caps (mostly for a-z)
    const map = {
        a:'ᴀ',b:'ʙ',c:'ᴄ',d:'ᴅ',e:'ᴇ',f:'ғ',g:'ɢ',h:'ʜ',i:'ɪ',j:'ᴊ',k:'ᴋ',l:'ʟ',m:'ᴍ',n:'ɴ',o:'ᴏ',p:'ᴘ',q:'ǫ',r:'ʀ',s:'s',t:'ᴛ',u:'ᴜ',v:'ᴠ',w:'ᴡ',x:'x',y:'ʏ',z:'ᴢ'
    };
    return str.split('').map(c => map[c] || map[c.toLowerCase()] || c).join('');
}

function fullwidth(str) {
    return str.split('').map(c => {
        const code = c.charCodeAt(0);
        if (code >= 33 && code <= 126) {
            return String.fromCharCode(code + 0xFF00 - 0x20);
        }
        return c;
    }).join('');
}

function circled(str) {
    return str.split('').map(c => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(0x24B6 + (code-65));
        if (code >= 97 && code <= 122) return String.fromCodePoint(0x24D0 + (code-97));
        if (code >= 48 && code <= 57) return String.fromCodePoint(0x2460 + (code-48));
        return c;
    }).join('');
}

function circledFilled(str) {
    return str.split('').map(c => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F150 + (code-65));
        return c;
    }).join('');
}

function squared(str) {
    return str.split('').map(c => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F130 + (code-65));
        return c;
    }).join('');
}

function squaredFilled(str) {
    return str.split('').map(c => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F170 + (code-65));
        return c;
    }).join('');
}

function parenthesized(str) {
    return str.split('').map(c => {
        const code = c.charCodeAt(0);
        if (code >= 97 && code <= 122) return String.fromCodePoint(0x249C + (code-97));
        return c;
    }).join('');
}

function superscript(str) {
    const map = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','a':'ᵃ','b':'ᵇ','c':'ᶜ','d':'ᵈ','e':'ᵉ','f':'ᶠ','g':'ᵍ','h':'ʰ','i':'ⁱ','j':'ʲ','k':'ᵏ','l':'ˡ','m':'ᵐ','n':'ⁿ','o':'ᵒ','p':'ᵖ','q':'ᑫ','r':'ʳ','s':'ˢ','t':'ᵗ','u':'ᵘ','v':'ᵛ','w':'ʷ','x':'ˣ','y':'ʸ','z':'ᶻ'};
    return str.split('').map(c => map[c] || map[c.toLowerCase()] || c).join('');
}

function subscript(str) {
    const map = {'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉','a':'ₐ','e':'ₑ','h':'ₕ','i':'ᵢ','j':'ⱼ','k':'ₖ','l':'ₗ','m':'ₘ','n':'ₙ','o':'ₒ','p':'ₚ','r':'ᵣ','s':'ₛ','t':'ₜ','u':'ᵤ','v':'ᵥ','x':'ₓ'};
    return str.split('').map(c => map[c] || map[c.toLowerCase()] || c).join('');
}

function leet(str) {
    const map = {'a':'4','b':'8','e':'3','g':'6','i':'1','l':'1','o':'0','s':'5','t':'7','z':'2'};
    return str.split('').map(c => map[c.toLowerCase()] || c).join('');
}

function upsideDown(str) {
    // Simple upside down using Unicode
    const map = {
        a:'ɐ',b:'q',c:'ɔ',d:'p',e:'ǝ',f:'ɟ',g:'ƃ',h:'ɥ',i:'ᴉ',j:'ɾ',k:'ʞ',l:'ʃ',m:'ɯ',n:'u',o:'o',p:'d',q:'b',r:'ɹ',s:'s',t:'ʇ',u:'n',v:'ʌ',w:'ʍ',x:'x',y:'ʎ',z:'z',
        A:'∀',B:'𐐒',C:'Ɔ',D:'p',E:'Ǝ',F:'Ⅎ',G:'פ',H:'H',I:'I',J:'ſ',K:'ʞ',L:'˥',M:'W',N:'N',O:'O',P:'Ԁ',Q:'Q',R:'ɹ',S:'S',T:'┴',U:'∩',V:'Λ',W:'M',X:'X',Y:'⅄',Z:'Z',
        '1':'Ɩ','2':'ᄅ','3':'Ɛ','4':'ㄣ','5':'ϛ','6':'9','7':'ㄥ','8':'8','9':'6','0':'0',
        '.':'˙',',':'‘','!':'¡','?':'¿','"':',,','\\':'/','/':'\\','_':'‾',';':'؛','(':'‿',')':'⁀','[':']',']':'[','{':'}','}':'{','<':'>','>':'<','&':'⅋','_':'‾'
    };
    return str.split('').reverse().map(c => map[c] || c).join('');
}

function mirrored(str) {
    // Simple mirrored using Unicode
    const map = {
        a:'ɒ',b:'d',c:'ɔ',d:'b',e:'ɘ',f:'ɟ',g:'ǫ',h:'ɥ',i:'ı',j:'ɾ',k:'ʞ',l:'l',m:'ɯ',n:'u',o:'o',p:'q',q:'p',r:'ɿ',s:'s',t:'ʇ',u:'n',v:'ʌ',w:'ʍ',x:'x',y:'ʎ',z:'z'
    };
    return str.split('').map(c => map[c.toLowerCase()] || c).join('');
}

function zalgo(str) {
    // Zalgo text generator
    const zalgo_up = [
        '\u030d','\u030e','\u0304','\u0305','\u033f','\u0311','\u0306','\u0310','\u0352','\u0357','\u0351','\u0307','\u0308','\u030a','\u0342','\u0343','\u0344','\u034a','\u034b','\u034c','\u0303','\u0302','\u030c','\u0350','\u0300','\u0301','\u030b','\u030f','\u0312','\u0313','\u0314','\u033d','\u0309','\u0363','\u0364','\u0365','\u0366','\u0367','\u0368','\u0369','\u036a','\u036b','\u036c','\u036d','\u036e','\u036f','\u033e','\u035b','\u0346','\u031a'
    ];
    function rand(arr) { return arr[Math.floor(Math.random()*arr.length)]; }
    return str.split('').map(c => c + rand(zalgo_up) + rand(zalgo_up)).join('');
}

function bubble(str) {
    // Circled letters (bubble)
    return str.split('').map(c => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(0x24B6 + (code-65));
        if (code >= 97 && code <= 122) return String.fromCodePoint(0x24D0 + (code-97));
        if (code >= 48 && code <= 57) return String.fromCodePoint(0x2460 + (code-48));
        return c;
    }).join('');
}

function bubbleFilled(str) {
    // Filled bubble letters (emoji-like)
    return str.split('').map(c => {
        const code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F150 + (code-65));
        return c;
    }).join('');
}

function tiny(str) {
    // Tiny text using Unicode
    const map = {
        a:'ᵃ',b:'ᵇ',c:'ᶜ',d:'ᵈ',e:'ᵉ',f:'ᶠ',g:'ᵍ',h:'ʰ',i:'ᶦ',j:'ʲ',k:'ᵏ',l:'ˡ',m:'ᵐ',n:'ⁿ',o:'ᵒ',p:'ᵖ',q:'ᑫ',r:'ʳ',s:'ˢ',t:'ᵗ',u:'ᵘ',v:'ᵛ',w:'ʷ',x:'ˣ',y:'ʸ',z:'ᶻ'
    };
    return str.split('').map(c => map[c.toLowerCase()] || c).join('');
}

function wide(str) {
    // Add spaces between letters
    return str.split('').join(' ');
}

function strike(str) {
    // Strikethrough using combining character
    return str.split('').map(c => c + '\u0336').join('');
}

function underline(str) {
    // Underline using combining character
    return str.split('').map(c => c + '\u0332').join('');
}

function regionalIndicator(str) {
    // Regional indicator symbols (emoji letters)
    return str.split('').map(c => {
        const code = c.toUpperCase().charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F1E6 + (code-65));
        return c;
    }).join('');
}

function emojiBlock(str) {
    // Block letters using emoji blocks
    return str.split('').map(c => {
        const code = c.toUpperCase().charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(0x1F170 + (code-65));
        return c;
    }).join('');
}

function emojiDecorate(str, emoji) {
    // Surround each letter with the given emoji
    return str.split('').map(c => /[a-zA-Z0-9]/.test(c) ? emoji + c + emoji : c).join('');
}


function mapUnicode(str, upperStart, lowerStart) {
    // Map A-Z, a-z, leave others unchanged
    return Array.from(str).map(char => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            // Uppercase
            return String.fromCodePoint(upperStart + (code - 65));
        } else if (code >= 97 && code <= 122) {
            // Lowercase
            return String.fromCodePoint(lowerStart + (code - 97));
        } else {
            return char;
        }
    }).join('');
}

function updateFonts() {
    const input = document.getElementById('input-text').value;
    const output = document.getElementById('output-fonts');
    output.innerHTML = '';
    if (!input.trim()) return;
    fontStyles.forEach(style => {
        const fancy = style.map(input);
        const block = document.createElement('div');
        block.className = 'font-style-block';
        block.innerHTML = `
            <span class="font-label">${style.label}</span>
            <span class="font-output">${fancy}</span>
            <button class="copy-btn" title="Copy">Copy</button>
        `;
        const btn = block.querySelector('.copy-btn');
        btn.onclick = () => {
            navigator.clipboard.writeText(fancy);
            btn.textContent = 'Copied!';
            setTimeout(() => btn.textContent = 'Copy', 1200);
        };
        output.appendChild(block);
    });
}

document.getElementById('input-text').addEventListener('input', updateFonts);

// Optionally, update output on page load if textarea has value
window.addEventListener('DOMContentLoaded', updateFonts);
