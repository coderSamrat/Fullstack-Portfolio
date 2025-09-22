export const processSplit = (values) => {
      if (Array.isArray(values)) {
            return values.filter(Boolean);
      }

      if (typeof values === 'string') {
            return values.split(',').map(t => t.trim()).filter(Boolean);
      }
      return [];
};