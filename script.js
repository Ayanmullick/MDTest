//It isn't rendering as well as it should. Please improve the below function to render markdown tables to HTML tables
//The function should be able to convert markdown tables to HTML tables
//Markdown tables are represented as follows:
//| Name | Tier            | AVSet    | Subnet   | DriveE | DriveF | DriveG |
//|------|-----------------|----------|----------|--------|--------|--------|
//| Web1 | Standard_E2S_V5 | WebTier  | WebTier  | 512    | 20     | 1024   |
//| Web2 | Standard_E2S_V5 | WebTier  | WebTier  | 512    | 20     | 1024   |
//| App1 | Standard_E2S_V5 | AppTier  | AppTier  | 1024   | 1024   |        |

function renderMarkdownTable(markdown) {
    // Split the Markdown table into rows
    const rows = markdown.trim().split('\n');

    // Create the HTML table structure
    let htmlTable = '<table style="border-collapse: collapse; border: 1px solid black;">';

    // Process each row
    for (let i = 0; i < rows.length; i++) {
        if (i === 1) {
            // Skip the second row (dashes)
            continue;
        }
        const cells = rows[i].split('|').slice(1, -1); // Extract cells, excluding the first and last empty elements
        const rowHtml = cells.map(cell => `<td style="border: 1px solid black; padding: 8px; text-align: left;">${cell.trim()}</td>`).join('');
        htmlTable += `<tr style="border: 1px solid black;">${rowHtml}</tr>`;
    }

    // Close the table
    htmlTable += '</table>';

    return htmlTable;
}

