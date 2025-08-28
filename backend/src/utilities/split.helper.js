export const processSplit = (values) => {
      if (Array.isArray(values)) {
            return values.filter(Boolean);
      }

      if (typeof values === 'string') {
            return values.split(',').map(t => t.trim()).filter(Boolean);
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