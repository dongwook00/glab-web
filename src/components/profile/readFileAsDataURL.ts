const readFileAsDataURL = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      if (reader.result) {
        resolve(reader.result as string);
      }
    });
    reader.readAsDataURL(file);
  });
};

export default readFileAsDataURL;
