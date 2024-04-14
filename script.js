function renderMarkdownTable(markdown) {
    const rows = markdown.trim().split('\n');   // Split the Markdown table into rows
    let htmlTable = '<table style="border-collapse: collapse; border: 1px solid black;">';   // Create the HTML table structure

    for (let i = 0; i < rows.length; i++) {  // Process each row
        if (i === 1) { continue; }  // Skip the second row (dashes)
        const cells = rows[i].split('|').slice(1, -1); // Extract cells, excluding the first and last empty elements
        const rowHtml = cells.map(cell => `<td style="border: 1px solid black; padding: 8px; text-align: left;">${cell.trim()}</td>`).join('');
        htmlTable += `<tr style="border: 1px solid black;">${rowHtml}</tr>`;
    }

    htmlTable += '</table>';   // Close the table
    return htmlTable;
}

