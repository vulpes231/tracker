const getPackage = (tracking, data) => {
  try {
    const item = data.find((pkg) => pkg.tracking === parseFloat(tracking));
    return item || null; // Ensure that if no item is found, return null
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getPackage };
