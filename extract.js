const fs = require('fs');
const content = fs.readFileSync('app/page.js', 'utf8');

const extractSection = (tag, id, name) => {
    const startStr = id.startsWith('.') ? `<${tag} className="${id.substring(1)}` : `<${tag} id="${id}"`;
    let startIndex = content.indexOf(startStr);
    if (startIndex === -1 && id === 'header') startIndex = content.indexOf('<header');
    if (startIndex === -1 && id === 'footer') startIndex = content.indexOf('<footer');
    if (startIndex === -1 && id === 'marquee') startIndex = content.indexOf('<section className="py-12 border-b border-white/5');
    if (startIndex === -1 && id === 'stack') startIndex = content.indexOf('<section className="py-24 relative');
    if (startIndex === -1 && id === 'mobilepos') startIndex = content.indexOf('<section className="py-32 relative bg-[#09090b]');
    if (startIndex === -1 && id === 'hero') startIndex = content.indexOf('<section className="relative min-h-[95vh]');
    
    if (startIndex === -1) {
        console.log('Not found:', id);
        return null;
    }
    
    // Find matching end tag
    let openTags = 0;
    let endIndex = startIndex;
    for (let i = startIndex; i < content.length; i++) {
        // match <tag not </tag
        if (content.substr(i, tag.length + 1) === `<${tag}` && !content.substr(i, tag.length + 2).includes('/')) {
            openTags++;
        } else if (content.substr(i, tag.length + 3) === `</${tag}>`) {
            openTags--;
            if (openTags === 0) {
                endIndex = i + tag.length + 3;
                break;
            }
        }
    }
    
    let html = content.substring(startIndex, endIndex);
    if(name === 'Header') {
        const overlayStart = content.indexOf('<div id="mobile-overlay"');
        const overlayEnd = content.indexOf('</div>', overlayStart) + 6;
        html = content.substring(overlayStart, overlayEnd) + '\n\n' + html;
    }

    const jsx = `export default function ${name}() {
    return (
        <>
${html.split('\n').map(l => '            ' + l).join('\n')}
        </>
    );
}
`;
    fs.writeFileSync(`components/${name}.jsx`, jsx);
    console.log('Created', name);
    return { name, html, startIndex, endIndex };
};

const sections = [
    { tag: 'header', id: 'header', name: 'Header' },
    { tag: 'section', id: 'hero', name: 'Hero' },
    { tag: 'section', id: 'marquee', name: 'Marquee' },
    { tag: 'section', id: 'features', name: 'Features' },
    { tag: 'section', id: 'stack', name: 'StackLayers' },
    { tag: 'section', id: 'business-types', name: 'BusinessTypes' },
    { tag: 'section', id: 'sync-addons', name: 'SyncAddons' },
    { tag: 'section', id: 'robust-horizontal', name: 'RobustTrack' },
    { tag: 'section', id: 'mobilepos', name: 'MobilePOS' },
    { tag: 'footer', id: 'footer', name: 'Footer' }
];

let extracted = [];
sections.forEach(s => {
    const res = extractSection(s.tag, s.id, s.name);
    if(res) extracted.push(res);
});

// Create new page.js
const imports = extracted.map(s => `import ${s.name} from "@/components/${s.name}";`).join('\n');
const components = extracted.map(s => `            <${s.name} />`).join('\n');

const newPageJS = `import GSAPAnimations from "@/components/GSAPAnimations";
import FAQSection from "@/components/FAQSection";
${imports}

export default function Home() {
    return (
        <main>
${components}
            <FAQSection />
            <GSAPAnimations />
        </main>
    );
}
`;

fs.writeFileSync('app/page.js', newPageJS);
console.log('Successfully refactored app/page.js');
