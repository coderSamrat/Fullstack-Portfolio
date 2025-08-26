export const processTitles = (title) => {
      if (Array.isArray(title)) {
            return title.filter(Boolean);
      }
      if (typeof title === 'string') {

            return title.split(',').map(t => t.trim()).filter(Boolean);
      }
      return [];
};

export const processParagraphs = (paragraphs) => {
      if (Array.isArray(paragraphs)) {
            return paragraphs.filter(Boolean);
      }
      if (typeof paragraphs === 'string') {
            return paragraphs.split(/(?<=[.?!])\s+/);
      }
      return [];
}