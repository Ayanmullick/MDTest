function renderMarkdownTable(markdown) {
    // Step 1: Normalize line endings
    markdown = markdown.replace(/\r\n?/g, '\n');

    // Step 2: Split input into lines
    let lines = markdown.split('\n');

    // Step 3: Prepare to detect alignment from header separator
    let alignMap = {
        ':-': 'left',
        '-:': 'right',
        ':-:': 'center',
        '---': 'left' // default alignment if no other alignment characters are specified
    };

    // Step 4: Initialize the HTML table
    let html = '<table style="border: 1px solid black; border-collapse: collapse;">';

    // Step 5: Process each line
    lines.forEach((line, index) => {
        if (line.match(/^\|.*\|$/)) { // Only process lines that start and end with |
            // Remove leading and trailing pipe characters
            line = line.slice(1, -1);

            // Split the line into individual cells
            let cells = line.split('|').map(cell => cell.trim());

            // Check for header or separator line
            if (index === 1) {
                // This is the separator line, determine alignment
                return; // Skip the header separator
            }

            // Generate HTML for the current row
            let tag = index === 0 ? 'th' : 'td'; // Use <th> for header and <td> for other rows
            let rowHtml = cells.map((cell, i) => {
                let align = 'left'; // Default alignment
                if (index === 0) {
                    // Determine alignment from header separator line
                    let match = lines[1].slice(1, -1).split('|')[i].trim();
                    align = alignMap[Object.keys(alignMap).find(key => match.startsWith(key) && match.endsWith(key))] || 'left';
                }
                return `<${tag} style="border: 1px solid black; text-align: ${align};">${cell}</${tag}>`;
            }).join('');

            // Wrap row HTML in <tr> tags
            html += `<tr>${rowHtml}</tr>`;
        }
    });

    // Close the HTML table
    html += '</table>';

    return html;
}
