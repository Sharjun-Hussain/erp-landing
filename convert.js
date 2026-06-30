const fs = require('fs');

try {
    let html = fs.readFileSync('../landing_page/index.html', 'utf8');

    // Extract body contents
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyHTML = bodyMatch[1];

    // Remove scripts
    bodyHTML = bodyHTML.replace(/<script[\s\S]*?<\/script>/gi, '');
    
    // Remove the SVG cursor specifically using a very strict match
    bodyHTML = bodyHTML.replace(/<svg[^>]*id="cursor"[^>]*>[\s\S]*?<\/svg>/gi, '<CustomCursor />');

    // Convert class to className
    bodyHTML = bodyHTML.replace(/ class=/g, ' className=');
    
    // Inline styles to JSX
    bodyHTML = bodyHTML.replace(/style="([^"]*)"/g, (match, p1) => {
        const styles = p1.split(';').filter(s => s.trim() !== '');
        const styleObj = {};
        styles.forEach(s => {
            let [key, value] = s.split(':');
            if(key && value) {
                key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                styleObj[key] = value.trim();
            }
        });
        return `style={{ ${Object.entries(styleObj).map(([k,v]) => `'${k}': '${v}'`).join(', ')} }}`;
    });

    // Fix specific attributes for JSX
    bodyHTML = bodyHTML.replace(/stroke-width=/g, 'strokeWidth=');
    bodyHTML = bodyHTML.replace(/stroke-linecap=/g, 'strokeLinecap=');
    bodyHTML = bodyHTML.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    bodyHTML = bodyHTML.replace(/stroke-dasharray=/g, 'strokeDasharray=');
    bodyHTML = bodyHTML.replace(/stroke-dashoffset=/g, 'strokeDashoffset=');
    bodyHTML = bodyHTML.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

    // Self-close void elements
    bodyHTML = bodyHTML.replace(/<br([^>]*)>/g, '<br$1 />');
    bodyHTML = bodyHTML.replace(/<img([^>]*)>/g, '<img$1 />');
    bodyHTML = bodyHTML.replace(/<hr([^>]*)>/g, '<hr$1 />');
    bodyHTML = bodyHTML.replace(/<input([^>]*)>/g, '<input$1 />');
    bodyHTML = bodyHTML.replace(/<path([^>]*)>/g, (match, p1) => {
        if (p1.endsWith('/')) return match;
        return `<path${p1} />`;
    });

    const pageTemplate = fs.readFileSync('page-template.txt', 'utf8');
    const newPageTemplate = pageTemplate.replace('{{__HTML__}}', bodyHTML);
    
    fs.writeFileSync('app/page.js', newPageTemplate);
    console.log('Successfully wrote app/page.js');
} catch (e) {
    console.error(e);
}
