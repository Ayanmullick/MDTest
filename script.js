//write a function that can parse markdown content fetched from a file

function renderMarkdown(markdown) {  // Function to convert Markdown to HTML
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Replace bold (e.g., **text**) with <strong>text</strong>
    markdown = markdown.replace(/\*(.*?)\*/g, '<em>$1</em>');  // Replace italic (e.g., *text*) with <em>text</em>
    markdown = markdown.replace(/^- (.*?)(\n|$)/gm, '<ul><li>$1</li></ul>'); // Replace lists (e.g., - Item) with <ul><li>Item</li></ul>
    markdown = markdown.replace(/^# (.*?)(\n|$)/gm, '<h1>$1</h1>'); // Replace headings (e.g., # Heading) with <h1>Heading</h1>
    return markdown;
     }

var markdownDiv = document.getElementById('markdown-content');          // Get the element where you want to render Markdown
markdownDiv.innerHTML = renderMarkdown(markdownText);          // Render the Markdown content

//Like the render markdown function, write a function that can convert Markdown tables to HTML tables

function renderMarkdownTable(markdown) {  // Function to convert Markdown tables to HTML tables
    markdown = markdown.replace(/\|(.*?)\|/g, '<td>$1</td>'); // Replace table cells (e.g., |Cell|) with <td>Cell</td>
    markdown = markdown.replace(/\n(.*?)\n/g, '<tr>$1</tr>'); // Replace table rows (e.g., \nRow\n) with <tr>Row</tr>
    markdown = markdown.replace(/<tr>(.*?)<\/tr>/g, '<table>$1</table>'); // Replace table (e.g., <tr>Row</tr>) with <table>Row</table>
    return markdown;
}